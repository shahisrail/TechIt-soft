import whyChoose from "@/public/whyChoose.jpg";
import Image from "next/image";
const WhyChooseUS = () => {
  return (
    <div className="flex lg:flex-row flex-col gap-10 p-4  pb-[120px] lg:max-w-[1440px] mx-auto">
      <div>
        <Image
          src={whyChoose}
          alt="Why Choose us Image laoding meybe our server any problem please reloade this site "
        />
      </div>
      <div>
        <h6 className="text-[#ff5b2e] text-[16px] font-bold tracking-[0.5px] uppercase mb-[5px]">
          Why Choose Us?
        </h6>
        <h2 className="md:text-[40px] text-[33px] leading-[52px] font-bold mb-[15px]">Safeguard Your Brand with Cyber <br /> Security and IT Solutions</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <ul className="grid md:grid-cols-2 grid-cols-1 gap-7">
          <li className="pl-5 pr-5 mt-10 group">
            <span className="relative z-[1] text-[#404040] text-[16px] font-semibold block p-[13px] pl-[15px] rounded-[5px] border-l-[3px] border-[#ff5b2e] overflow-hidden hover:text-white">
              Remote IT Assistance
              {/* Inner span for the background hover effect */}
              <span className="absolute inset-0 bg-[#ff5b2e]  w-0 h-full z-[-1] transition-all duration-[0.4s] ease-in-out group-hover:w-full"></span>
            </span>
          </li>
          <li className="pl-5 pr-5 mt-10 group">
            <span className="relative z-[1] text-[#404040] text-[16px] font-semibold block p-[13px] pl-[15px] rounded-[5px] border-l-[3px] border-[#ff5b2e] overflow-hidden hover:text-white">
              Remote IT Assistance
              {/* Inner span for the background hover effect */}
              <span className="absolute inset-0 bg-[#ff5b2e]  w-0 h-full z-[-1] transition-all duration-[0.4s] ease-in-out group-hover:w-full"></span>
            </span>
          </li>
          <li className="pl-5 pr-5 mt-10 group">
            <span className="relative z-[1] text-[#404040] text-[16px] font-semibold block p-[13px] pl-[15px] rounded-[5px] border-l-[3px] border-[#ff5b2e] overflow-hidden hover:text-white">
              Remote IT Assistance
              {/* Inner span for the background hover effect */}
              <span className="absolute inset-0 bg-[#ff5b2e]  w-0 h-full z-[-1] transition-all duration-[0.4s] ease-in-out group-hover:w-full"></span>
            </span>
          </li>
          <li className="pl-5 pr-5 mt-10 group">
            <span className="relative z-[1] text-[#404040] text-[16px] font-semibold block p-[13px] pl-[15px] rounded-[5px] border-l-[3px] border-[#ff5b2e] overflow-hidden hover:text-white">
              Remote IT Assistance
              {/* Inner span for the background hover effect */}
              <span className="absolute inset-0 bg-[#ff5b2e]  w-0 h-full z-[-1] transition-all duration-[0.4s] ease-in-out group-hover:w-full"></span>
            </span>
          </li>
          <li className="pl-5 pr-5 mt-10 group">
            <span className="relative z-[1] text-[#404040] text-[16px] font-semibold block p-[13px] pl-[15px] rounded-[5px] border-l-[3px] border-[#ff5b2e] overflow-hidden hover:text-white">
              Remote IT Assistance
              {/* Inner span for the background hover effect */}
              <span className="absolute inset-0 bg-[#ff5b2e]  w-0 h-full z-[-1] transition-all duration-[0.4s] ease-in-out group-hover:w-full"></span>
            </span>
          </li>
          <li className="pl-5 pr-5 mt-10 group">
            <span className="relative z-[1] text-[#404040] text-[16px] font-semibold block p-[13px] pl-[15px] rounded-[5px] border-l-[3px] border-[#ff5b2e] overflow-hidden hover:text-white">
              Remote IT Assistance
              {/* Inner span for the background hover effect */}
              <span className="absolute inset-0 bg-[#ff5b2e]  w-0 h-full z-[-1] transition-all duration-[0.4s] ease-in-out group-hover:w-full"></span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WhyChooseUS;
