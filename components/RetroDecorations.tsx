"use client";
import React from "react";

/* ────────────────────────────────────────────────────────── */
/*  Retro SVG Sticker Decorations                             */
/* ────────────────────────────────────────────────────────── */

export function WavyLine({ className = "" }: { className?: string }) {
    return (
        <svg
            width="80"
            height="24"
            viewBox="0 0 80 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`animate-float ${className}`}
            aria-hidden="true"
        >
            <path
                d="M2 12 C10 4, 18 20, 26 12 S42 4, 50 12 S66 20, 78 12"
                stroke="#E07A5F"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
            />
        </svg>
    );
}

export function Starburst({ className = "" }: { className?: string }) {
    return (
        <svg
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`animate-float-reverse ${className}`}
            aria-hidden="true"
        >
            {/* 8-pointed starburst */}
            <path
                d="M26 2 L28.5 20 L44 8 L32 22 L50 26 L32 30 L44 44 L28.5 32 L26 50 L23.5 32 L8 44 L20 30 L2 26 L20 22 L8 8 L23.5 20 Z"
                fill="#E07A5F"
                stroke="#111"
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export function SmileyFace({ className = "" }: { className?: string }) {
    return (
        <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`animate-float ${className}`}
            aria-hidden="true"
        >
            <circle cx="22" cy="22" r="20" fill="#FDFBF7" stroke="#111" strokeWidth="2" />
            {/* Eyes */}
            <circle cx="15" cy="18" r="3" fill="#0B132B" />
            <circle cx="29" cy="18" r="3" fill="#0B132B" />
            {/* Smile */}
            <path
                d="M14 27 Q22 35 30 27"
                stroke="#0B132B"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
            />
        </svg>
    );
}

export function RetroStar({ className = "" }: { className?: string }) {
    return (
        <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`animate-float-reverse ${className}`}
            aria-hidden="true"
        >
            <path
                d="M18 2 L21.09 13.26 L32.73 10.18 L24.18 18 L32.73 25.82 L21.09 22.74 L18 34 L14.91 22.74 L3.27 25.82 L11.82 18 L3.27 10.18 L14.91 13.26 Z"
                fill="#5E7B52"
                stroke="#111"
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
        </svg>
    );
}
