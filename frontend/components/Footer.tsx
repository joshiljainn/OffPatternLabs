"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 bg-foreground text-background border-t border-background/10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-background/80 mb-2">OffPattern Labs © 2025</p>
            <p className="text-sm text-background/60">
              Building growth systems for modern Indian brands.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <Link
              href="https://www.linkedin.com/company/offpatternlabs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/70 hover:text-background transition-colors"
            >
              LinkedIn
            </Link>
            <Link
              href="https://wa.me/918076958506?text=Hi,%20I%20would%20like%20to%20know%20more."
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/70 hover:text-background transition-colors"
            >
              WhatsApp
            </Link>
            <Link
              href="mailto:joshil@offpatternlabs.com"
              className="text-background/70 hover:text-background transition-colors"
            >
              Email
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
