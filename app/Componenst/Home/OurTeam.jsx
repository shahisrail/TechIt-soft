import Image from "next/image";
import dummy from "@/public/team-2.jpg";
import { FacebookIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";
const OurTeam = () => {
  return (
    <div className=" pb-[120px]  lg:max-w-[1440px] mx-auto">
      <p className="text-center text-[#ff5b2e] text-[16px] font-bold tracking-[0.5px] uppercase mb-[5px]">
        Team Members
      </p>
      <h2 className="md:text-[40px] text-[33px] leading-[52px] font-bold mb-[15px] text-center">
        Meet the Expert Team
      </h2>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 p-5 lg:p-0">
        <div>
          <div className="mt-[30px] overflow-hidden transition duration-500 relative">
            <div className="relative z-[1] rounded-[5px] overflow-hidden group">
              <Image
                src={dummy}
                alt="Image is loading"
                className="block w-full "
              />

              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="flex space-x-4">
                  <Link href="facebook.com">
                    <div className="border-2 border-white rounded-lg p-2 transition-all duration-300 hover:bg-[#ff5b2e] hover:text-white">
                      <FacebookIcon className="text-white hover:text-white" />
                    </div>
                  </Link>
                  <Link href="facebook.com">
                    <div className="border-2 border-white rounded-lg p-2 transition-all duration-300 hover:bg-[#ff5b2e] hover:text-white">
                      <LinkedinIcon className="text-white hover:text-white" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-[20px] px-[15px] transition duration-500">
            <h3 className="text-[20px] font-bold mb-[5px]">Kevin Haley </h3>
            <h6 className="text-[16px] font-medium text-[#ff5b2e]">
              Founder, CEO
            </h6>
          </div>
        </div>
        <div>
          <div className="mt-[30px] overflow-hidden transition duration-500 relative">
            <div className="relative z-[1] rounded-[5px] overflow-hidden group">
              <Image
                src={dummy}
                alt="Image is loading"
                className="block w-full "
              />

              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="flex space-x-4">
                  <Link href="facebook.com">
                    <div className="border-2 border-white rounded-lg p-2 transition-all duration-300 hover:bg-[#ff5b2e] hover:text-white">
                      <FacebookIcon className="text-white hover:text-white" />
                    </div>
                  </Link>
                  <Link href="facebook.com">
                    <div className="border-2 border-white rounded-lg p-2 transition-all duration-300 hover:bg-[#ff5b2e] hover:text-white">
                      <LinkedinIcon className="text-white hover:text-white" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-[20px] px-[15px] transition duration-500">
            <h3 className="text-[20px] font-bold mb-[5px]">Kevin Haley </h3>
            <h6 className="text-[16px] font-medium text-[#ff5b2e]">
              Founder, CEO
            </h6>
          </div>
        </div>
        <div>
          <div className="mt-[30px] overflow-hidden transition duration-500 relative">
            <div className="relative z-[1] rounded-[5px] overflow-hidden group">
              <Image
                src={dummy}
                alt="Image is loading"
                className="block w-full "
              />

              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="flex space-x-4">
                  <Link href="facebook.com">
                    <div className="border-2 border-white rounded-lg p-2 transition-all duration-300 hover:bg-[#ff5b2e] hover:text-white">
                      <FacebookIcon className="text-white hover:text-white" />
                    </div>
                  </Link>
                  <Link href="facebook.com">
                    <div className="border-2 border-white rounded-lg p-2 transition-all duration-300 hover:bg-[#ff5b2e] hover:text-white">
                      <LinkedinIcon className="text-white hover:text-white" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-[20px] px-[15px] transition duration-500">
            <h3 className="text-[20px] font-bold mb-[5px]">Kevin Haley </h3>
            <h6 className="text-[16px] font-medium text-[#ff5b2e]">
              Founder, CEO
            </h6>
          </div>
        </div>
        <div>
          <div className="mt-[30px] overflow-hidden transition duration-500 relative">
            <div className="relative z-[1] rounded-[5px] overflow-hidden group">
              <Image
                src={dummy}
                alt="Image is loading"
                className="block w-full "
              />

              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="flex space-x-4">
                  <Link href="facebook.com">
                    <div className="border-2 border-white rounded-lg p-2 transition-all duration-300 hover:bg-[#ff5b2e] hover:text-white">
                      <FacebookIcon className="text-white hover:text-white" />
                    </div>
                  </Link>
                  <Link href="facebook.com">
                    <div className="border-2 border-white rounded-lg p-2 transition-all duration-300 hover:bg-[#ff5b2e] hover:text-white">
                      <LinkedinIcon className="text-white hover:text-white" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-[20px] px-[15px] transition duration-500">
            <h3 className="text-[20px] font-bold mb-[5px]">Kevin Haley </h3>
            <h6 className="text-[16px] font-medium text-[#ff5b2e]">
              Founder, CEO
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
