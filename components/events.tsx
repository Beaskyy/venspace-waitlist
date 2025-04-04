export const Events = () => {
  return (
    <div className="lg:px-[72px] mt-[72px] md:p-8 p-4">
      <div className="bg-[#F4F5F6] rounded-xl p-6 md:h-[527px] h-[1084px]">
        <h4 className="lg:text-[28px] md:text-2xl text-lg text-[#001224] font-bold">
          Get inspired for your next event
        </h4>
        <div className="grid md:grid-cols-5 grid-cols-1 mt-6 gap-4">
          <div
            className="relative bg-top bg-cover bg-no-repeat md:col-span-3 md:h-[418px] h-[260px] rounded-lg"
            style={{ backgroundImage: `url(/event-1.jpeg)` }}
          >
            <div
              className="absolute flex flex-col justify-center bottom-0 rounded-b-lg w-full h-[70px] lg:pl-4 pl-2 lg:pt-[9px] pt-1"
              style={{
                background:
                  "linear-gradient(90.51deg, rgba(74, 74, 74, 0.5) 0%, rgba(74, 74, 74, 0.2) 100%)",
                backdropFilter: "blur(50px)",
              }}
            >
              <h6 className="text-xs text-white leading-[19px]">
                SPACE CAPACITY
              </h6>
              <p className="text-base font-medium leading-6 text-white">
                Large gatherings (50+ people)
              </p>
            </div>
          </div>
          <div className="md:col-span-2 h-[418px] rounded-lg">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <div
                className="relative bg-top bg-cover bg-no-repeat md:h-[178px] h-[224px] rounded-lg"
                style={{ backgroundImage: `url(/event-2.jpeg)` }}
              >
                <div
                  className="absolute flex flex-col justify-center bottom-0 rounded-b-lg w-full h-[70px] lg:pl-4 pl-2 lg:pt-[9px] pt-1"
                  style={{
                    background:
                      "linear-gradient(90.51deg, rgba(74, 74, 74, 0.5) 0%, rgba(74, 74, 74, 0.2) 100%)",
                    backdropFilter: "blur(50px)",
                  }}
                >
                  <h6 className="text-xs text-white leading-[19px]">
                    SPACE FOR EVERYONE
                  </h6>
                  <p className="text-base font-medium leading-6 text-white">
                    Wheelchair accessible
                  </p>
                </div>
              </div>
              <div
                className="relative bg-top bg-cover bg-no-repeat md:h-[178px] h-[224px] rounded-lg"
                style={{ backgroundImage: `url(/event-3.jpeg)` }}
              >
                <div
                  className="absolute flex flex-col justify-center bottom-0 rounded-b-lg w-full h-[70px] lg:pl-4 pl-2 lg:pt-[9px] pt-1"
                  style={{
                    background:
                      "linear-gradient(90.51deg, rgba(74, 74, 74, 0.5) 0%, rgba(74, 74, 74, 0.2) 100%)",
                    backdropFilter: "blur(50px)",
                  }}
                >
                  <h6 className="text-xs text-white leading-[19px]">THEMES</h6>
                  <p className="text-base font-medium leading-6 text-white">
                    Graphic Walls
                  </p>
                </div>
              </div>
              <div
                className="relative bg-cover bg-center bg-no-repeat h-[224px] md:col-span-2 rounded-lg"
                style={{ backgroundImage: `url(/event-4.jpeg)` }}
              >
                <div
                  className="absolute flex flex-col justify-center bottom-0 rounded-b-lg w-full h-[70px] lg:pl-4 pl-2 lg:pt-[9px] pt-1"
                  style={{
                    background:
                      "linear-gradient(90.51deg, rgba(74, 74, 74, 0.5) 0%, rgba(74, 74, 74, 0.2) 100%)",
                    backdropFilter: "blur(50px)",
                  }}
                >
                  <h6 className="text-xs text-white leading-[19px]">
                    SPECIAL AMENITIES
                  </h6>
                  <p className="text-base font-medium leading-6 text-white">
                    Free Lighting Setup
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
