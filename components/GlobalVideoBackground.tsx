"use client";
import { useRef, useEffect } from "react";

const VIDEO_URL =
    "https://res.cloudinary.com/defgbedao/video/upload/v1772342499/Stickers_stamps_keys_float_rotate_delpmaspu__de3iu5.mp4";

export default function GlobalVideoBackground() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const scrub = () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            rafRef.current = requestAnimationFrame(() => {
                if (!videoRef.current) return;
                if (videoRef.current.readyState < 1 || !videoRef.current.duration) return;
                const scrollFraction =
                    window.scrollY /
                    Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
                videoRef.current.currentTime = Math.min(
                    scrollFraction * videoRef.current.duration,
                    videoRef.current.duration
                );
            });
        };

        video.addEventListener("loadedmetadata", scrub);
        window.addEventListener("scroll", scrub, { passive: true });

        return () => {
            video.removeEventListener("loadedmetadata", scrub);
            window.removeEventListener("scroll", scrub);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return (
        /* bg-[#FDFBF7] fallback so the page is never blank while video loads */
        <div className="fixed inset-0 w-full h-full z-0 pointer-events-none bg-[#FDFBF7]">
            <video
                ref={videoRef}
                src={VIDEO_URL}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
            />
        </div>
    );
}
