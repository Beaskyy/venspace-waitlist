"use client";

import { listings } from "@/lib/data";
import { ListingCard } from "./listing-card";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Listing = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [visibleItems, setVisibleItems] = useState(4);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollContainer = (direction: "left" | "right"): void => {
    const container = containerRef.current;
    if (!container) return;

    const scrollAmount = container.offsetWidth / 2; // Scroll by half the container's width
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleScroll = (): void => {
    const container = containerRef.current;
    if (!container) return;

    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    setShowLeftButton(container.scrollLeft > 0);
    setShowRightButton(container.scrollLeft < maxScrollLeft);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      handleScroll(); // Initialize button visibility on load
    }
  }, []);

  const listingsToShow = isMobile ? listings.slice(0, visibleItems) : listings;

  return (
    <div className="lg:px-[72px] md:p-8 p-4">
      <h4 className="lg:text-[28px] md:text-2xl text-lg text-[#001224] font-bold">
        Top rated listings
      </h4>
      <p className="text-sm leading-6 text-[#434242]">
        Curated to ensure the highest level of satisfaction
      </p>

      <div className="relative py-4 group">
        {/* Left Button */}
        {!isMobile && showLeftButton && (
          <button
            onClick={() => scrollContainer("left")}
            className="absolute flex justify-center items-center left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full z-20 size-12 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Scroll left"
            style={{
              backdropFilter: "blur(5px)",
            }}
          >
            <ChevronLeft className="size-8 text-[#001224]" />
          </button>
        )}

        {/* Scrollable Container */}
        <div
          className="flex md:flex-row md:overflow-x-auto flex-col gap-4 no-scrollbar pb-6"
          ref={containerRef}
          onScroll={!isMobile ? handleScroll : undefined}
          style={{ scrollBehavior: "smooth" }}
        >
          {listingsToShow.map((listing, index) => (
            <div
              key={index}
              className="flex flex-col min-w-[312px] rounded-xl"
              style={{ boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.059)" }}
            >
              <ListingCard listing={listing} />
            </div>
          ))}
        </div>

        {/* Right Button */}
        {!isMobile && showRightButton && (
          <button
            onClick={() => scrollContainer("right")}
            className="absolute flex justify-center items-center right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full z-20 size-12 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Scroll right"
            style={{
              backdropFilter: "blur(5px)",
            }}
          >
            <ChevronRight className="size-8 text-[#001224]" />
          </button>
        )}

        {/* Load More Button for Mobile */}
        {isMobile && visibleItems < listings.length && (
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setVisibleItems((prev) => prev + 4)}
              className="h-12 w-[130px] border border-[#1A1A1A26] px-6 py-3 text-base text-[#001224] font-medium whitespace-nowrap rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
