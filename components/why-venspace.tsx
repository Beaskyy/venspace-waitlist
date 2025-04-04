import React from "react";

export const WhyVenspace = () => {
  return (
    <div className="lg:px-[72px] md:p-8 p-4">
      <div className="flex md:flex-row flex-col justify-between gap-6">
        <div className="flex flex-col max-w-[587px] gap-2">
          <p className="text-[13px] text-[#F44363] tracking-[12%] leading-5 font-semibold uppercase p-2 bg-[#FFEBEE] rounded-md  text-center w-fit">
            Why venspace
          </p>
          <h3 className="md:text-[40px] text-3xl text-[#001224] font-medium md:leading-[52.92px] leading-10">
            Venspace is your premier destination for discovering and booking
            unique spaces in Lagos, designed to inspire creativity and elevate
            your projects.
          </h3>
        </div>
        <div className="flex flex-col gap-10 max-w-[588px]">
          <p className="text-base text-[#434242] font-semibold italic">
            Are you looking to host an unforgettable event, launch your next big
            project, or discover unique creative spaces?
          </p>
          <p className="text-base text-[#434242]">
            At Venspace, we understand that finding the perfect space can make
            all the difference. That’s why we’re dedicated to offering a curated
            selection of unique and versatile venues across Lagos. Whether
            you’re planning an event, setting up a photoshoot, or looking for a
            creative workspace, Venspace connects you with the ideal location to
            suit your needs.
          </p>
          <div className="flex items-center gap-4">
            <div className="border-[1.5px] border-[#1A1A1A26] lg:py-6 lg:px-8 py-3 px-4  rounded-lg w-full">
              <div className="text-center">
                <p className="text-[32px] text-[#333333] font-bold leading-[42.34px]">
                  100%
                </p>
                <p className="lg:text-base text-xs text-[#333333] leading-6 whitespace-nowrap">
                  Satisfaction Guarantee
                </p>
              </div>
            </div>
            <div className="border-[1.5px] border-[#1A1A1A26] lg:py-6 lg:px-8 py-3 px-4 rounded-lg w-full">
              <div className="text-center">
                <p className="text-[32px] text-[#333333] font-bold leading-[42.34px]">
                  100%
                </p>
                <p className="lg:text-base text-xs text-[#333333] leading-6 whitespace-nowrap">
                  Satisfaction Guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
