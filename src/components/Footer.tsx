"use client";

import { Button } from "@/components/ui/Button";
import {
  IconBrandDiscord,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconBrandX,
} from "@tabler/icons-react";

export function Footer() {
  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* LOGO + SOCIALS */}
          <div>
            <img
              src="https://www.lighthouse.storage/logo.svg"
              alt="Lighthouse Logo"
              className="h-12 mb-4"
            />
            <div className="flex items-center space-x-3 mb-4">
              <IconBrandTelegram className="h-5 w-5" />
              <IconBrandDiscord className="h-5 w-5" />
              <IconBrandX className="h-5 w-5" />
              <IconBrandLinkedin className="h-5 w-5" />
              <IconBrandInstagram className="h-5 w-5" />
            </div>
            <p className="text-sm text-muted-foreground">
              MAIL@LIGHTHOUSE.STORAGE
            </p>
            <div className=" text-start text-sm text-muted-foreground">
            © 2025 Lighthouse | All rights reserved
            </div>
          </div>

          {/* SITEMAP */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-muted-foreground">
              SITEMAP
            </h3>
            <nav className="space-y-2 text-sm">
              <a
                href="#"
                className="block transition-colors hover:text-primary"
              >
                FAQ's
              </a>
              <a
                href="#"
                className="block transition-colors hover:text-primary"
              >
                Blogs
              </a>
              <a
                href="#"
                className="block transition-colors hover:text-primary"
              >
                Documentation
              </a>
            </nav>
          </div>

          {/* HELP */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-muted-foreground">
              HELP
            </h3>
            <nav className="space-y-2 text-sm">
              <a
                href="#"
                className="block transition-colors hover:text-primary"
              >
                Contact Us ↗
              </a>
              <a
                href="#"
                className="block transition-colors hover:text-primary"
              >
                Explorer ↗
              </a>
      
              <a
                href="#"
                className="block transition-colors hover:text-primary"
              >
                Talk To Expert ↗
              </a>
              <a
                href="#"
                className="block transition-colors hover:text-primary"
              >
                Whitepaper ↗
              </a>
            </nav>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-muted-foreground">
              NEWSLETTER
            </h3>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="user@mail.com"
                className="w-full rounded-md border border-muted bg-muted/10 px-3 py-2 text-sm text-foreground placeholder-muted-foreground"
              />
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
      </div>
    </footer>
  );
}
