import React from "react";
import Sauna from "../img/services/sauna1.jpg";
import Shower from "../img/services/shower.jpg";
import Matted from "../img/services/matted.jpg";
import Gym from "../img/services/gym1.jpg";
import OurProgram from "../components/ourprogram";

const Services = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left py-10 lg:py-6">
          {/* text */}
          <div className="flex flex-col lg:items-start px-6 lg:p-0 ">
            <h1 className="h1">Services</h1>
            <p className="mb-10 max-w-lg text-gray-200 text-justify ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
              <br />
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is simply dummy text of the printing and
              typesetting
            </p>
          </div>
          {/* image grid */}
          <div className="grid grid-cols-2 gap-1 lg:gap-4">
            {/* image */}
            <div class="grid gap-1 lg:gap-4 h-[300px] lg:h-full bg-no-repeat ">
              <div class="group item rounded-lg">
                <img
                  src={Sauna}
                  alt="img"
                  class="h-auto max-w-full duration-200 group-hover:scale-110"
                />
                <div class="item-gradient text-[#2e3136]"></div>
                <h5 className="text-xl text-gray-200 text-left">Sauna</h5>
              </div>
              <div class="group item rounded-lg">
                <img
                  src={Gym}
                  alt="img"
                  class="h-auto max-w-full duration-200 group-hover:scale-110"
                />
                <div class="item-gradient"></div>
                <h5 className="text-xl text-gray-200 text-left">Gym</h5>
              </div>
            </div>
            <div class="grid gap-1 lg:gap-4 h-[300px] lg:h-full bg-no-repeat ">
              <div class="group item rounded-lg">
                <img
                  src={Shower}
                  alt="img"
                  class="h-auto max-w-full duration-200 group-hover:scale-110"
                />
                <img src={Shower} alt="img" class="w-full md:hidden" />
                <div class="item-gradient"></div>
                <h5 className="text-xl text-gray-200 text-left">Shower</h5>
              </div>
              <div class="group item rounded-lg">
                <img
                  src={Matted}
                  alt="img"
                  class="h-auto max-w-full duration-200 group-hover:scale-110"
                />
                <div class="item-gradient text-[#2e3136]"></div>
                <h5 className="text-xl text-gray-200 text-left">Matted Area</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 lg:py-20">
          <OurProgram />
        </div>
      </div>
    </div>
  );
};
export default Services;
