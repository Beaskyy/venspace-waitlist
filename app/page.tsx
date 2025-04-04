"use client";

import { Events } from "@/components/events";
import { Explore } from "@/components/explore";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Host } from "@/components/host";
import { Listing } from "@/components/listing";
import { Spaces } from "@/components/spaces";
import { Button } from "@/components/ui/button";
import { WhyVenspace } from "@/components/why-venspace";
import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <main>
      <Dialog open={true}>
        <DialogContent
          className="pointer-events-none" // Makes content non-interactive
          onInteractOutside={(e) => e.preventDefault()} // Prevents outside clicks
          onEscapeKeyDown={(e) => e.preventDefault()} // Prevents ESC key
        >
          <div className="pointer-events-auto">
            {" "}
            {/* Re-enables interactions inside */}
            {/* Your content here */}
          </div>
        </DialogContent>
      </Dialog>

      <Hero />
      <Explore />
      <Spaces />
      <Listing />
      <Events />
      <WhyVenspace />
      <Host />
      <Footer />
    </main>
  );
}
