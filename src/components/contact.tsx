import { Mail, MapPin, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ScrollView } from "./scroll-view";

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-32 bg-gray-50 dark:bg-transparent">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
          <div className="lg:col-span-5">
            <div className="md:pr-6 lg:pr-0">
              <ScrollView>
                <h2 className="text-4xl font-semibold lg:text-5xl">
                  Let's Start Building.
                </h2>
              </ScrollView>
              <ScrollView>
                <p className="mt-6">
                  Ready to move from idea to action? I'm eager to learn about your business and begin working with you to find your first international clients. Send me a message, and let's start a conversation.
                </p>
              </ScrollView>
            </div>
            <ScrollView delay={0.2}>
              <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
                <li>
                  <Link href="#link" className="hover:text-accent-foreground">
                    <Mail className="size-5 mr-2 inline" />
                    <span>joshil@offpatternlabs.com</span>
                  </Link>
                </li>
                <li>
                  <Link href="#link" className="hover:text-accent-foreground">
                    <PhoneCall className="size-5 mr-2 inline" />
                    <span>+91 8076958506</span>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/in/joshiljain/" className="hover:text-accent-foreground">
                    <MapPin className="size-5 mr-2 inline" />
                    <span>https://www.linkedin.com/in/joshiljain/</span>
                  </Link>
                </li>
              </ul>
              <div className="mt-8">
                <Link
                  href="https://wa.link/xv4xgp"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-4 py-2"
                >
                  Let's Start a Conversation on WhatsApp
                </Link>
              </div>
            </ScrollView>
          </div>
        </div>
      </div>
    </section>
  );
}