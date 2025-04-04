import Image from "next/image";
import { HeartButton } from "./heart-button";
import Link from "next/link";

// import Swiper core and required modules
import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useState } from "react";

interface ListingCardProps {
  listing: any
}
export const ListingCard = ({ listing }: ListingCardProps) => {
  const [hoveredListingId, setHoveredListingId] = useState(null);

  const handleMouseEnter = (id: any) => {
    setHoveredListingId(id);
  };

  const handleMouseLeave = () => {
    setHoveredListingId(null);
  };

  return (
    <div>
      <div className="group shadow-xl rounded-xl">
        <div className="relative w-full h-[200px] rounded-t-xl overflow-hidden">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            navigation={true}
            pagination={{ clickable: true, type: "bullets" }}
            modules={[Navigation, Pagination]}
            className="h-full custom-swiper"
          >
            {listing.images.map((image: any, index: any) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full">
                  <Image
                    fill
                    alt={`listing-${index}`}
                    src={image}
                    className="object-cover h-full w-full transition rounded-t-xl"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {listing.instant && (
            <div className="absolute left-3 top-3 text-[#F44363] bg-[#FFEBEE] py-1.5 px-3 rounded-[40px] w-fit text-xs font-medium leading-4 z-50">
              Instant Booking Available
            </div>
          )}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100">
            <HeartButton />
          </div>
        </div>
        <div className="p-4 rounded-b-lg">
          <Link href="/bookings" className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <h3 className="md:text-base text-sm truncate text-[#001224] font-bold leading-[21.17px]">
                {listing.name}
              </h3>
              {listing.membershipPlan && (
                <div
                  className="relative z-10 group inline-block"
                  onMouseEnter={() => handleMouseEnter(listing.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Image src="badges.svg" alt="badge" width={24} height={24} />
                  {hoveredListingId === listing.id && (
                    <div
                      className="flex justify-center items-center gap-1 absolute bottom-full md:-top-12 md:h-[37px] mb-2 md:lg:left-[90px] -left-32 border border-[#1A1A1A14] transform -translate-x-1/2 bg-white md:w-[354px] w-[300px] h-full text-xs font-medium p-4 rounded-lg"
                      style={{
                        boxShadow: "0 8px 22px 0 rgba(0, 0, 0, 0.08)",
                      }}
                    >
                      <div className="flex md:gap-4 gap-1 items-center">
                        <Image
                          src="/info-solid.svg"
                          alt="alt"
                          width={18}
                          height={18}
                        />
                        <p className="md:text-[13px] text-[11px] text-[#434242] leading-[18px] whitespace-nowrap">
                          This studio offers exclusive benefits for members.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="flex items-center gap-1">
              <Image
                src="/location.svg"
                alt="location"
                width={18}
                height={18}
              />
              <p className="text-sm text-[#434242]">{listing.location}</p>
            </div>
            <div className="flex items-center gap-1">
              <Image
                src="/profile-2user.svg"
                alt="users"
                width={18}
                height={18}
              />
              <p className="text-sm text-[#434242]">{listing.people} People</p>
            </div>
            <div className="flex items-center gap-1">
              <Image src="/star.svg" alt="star" width={18} height={18} />
              <p className="text-sm text-[#434242]">
                {listing.ratings} ({listing.reviews} reviews)
              </p>
            </div>
          </Link>
          <hr className="h-[1px] my-4" />
          <div className="flex lg:flex-row flex-col justify-between lg:items-center">
            <p className="text-base text-[#001224]">
              From <span className="font-bold">₦{listing.price}</span>/hr
            </p>
            <p className="text-[13px] text-[#43424299] leading-5">
              Responds within 1 hr
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
