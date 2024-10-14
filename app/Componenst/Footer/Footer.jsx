import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedinIn, FaPhoneSquareAlt, FaYoutube } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#30303C] ">
      <div className="lg:max-w-[1440px] mx-auto md:pt-[50px] md:pb-[10px]            ">
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-8 p-5 lg:p-0  text-[#adb7c5]  ">
          <div>
            <h2 className="text-[25px] leading-8 font-semibold hover:text-[#ff5b2e]">
              Contact info
            </h2>
            <ul className="mt-5">
              <li className="flex gap-2 items-center pb-[5px] hover:text-[#ff5b2e]">
                {" "}
                <FaPhoneSquareAlt />{" "}
                <Link href="tel:+8801741027141">+880 1741027141</Link>
              </li>
              <li className="flex gap-2 items-center  mt-[10px] pb-[5px] hover:text-[#ff5b2e]">
                {" "}
                <FaWhatsapp />
                <Link href="tel:+8801741027141">+880 1741027141</Link>
              </li>
              <li className="flex gap-2 items-center  mt-[10px] pb-[5px] hover:text-[#ff5b2e]">
                {" "}
                <AiTwotoneMail />
                <Link href="mailto:career@techItSOft.com">
                  career@techItSOft.com
                </Link>
              </li>
              <li className="flex gap-2 items-center  mt-[10px] pb-[5px] hover:text-[#ff5b2e]">
                {" "}
                <AiTwotoneMail />
                <Link href="mailto:Web@techItSOft.com">Web@techItSOft.com</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-[25px] leading-8 font-semibold hover:text-[#ff5b2e]">
              Follow Us
            </h2>
            <ul className="mt-5">
              <li className="flex gap-2 items-center pb-[5px] hover:text-[#ff5b2e]">
                {" "}
                <FaFacebook />
                <Link href="facebook.com">Facebook</Link>
              </li>
              <li className="flex gap-2 items-center  mt-[10px] pb-[5px] hover:text-[#ff5b2e]">
                {" "}
                <FaLinkedinIn />
                <Link href="linkdin.com">Linkdin</Link>
              </li>
              <li className="flex gap-2 items-center  mt-[10px] pb-[5px] hover:text-[#ff5b2e]">
                {" "}
                <FaYoutube />
                <Link href="youtube.com">Youtube</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-[25px] leading-8 font-semibold hover:text-[#ff5b2e]">
              Service{" "}
            </h2>
            <ul className="mt-5">
              <li className="pb-[5px] hover:text-[#ff5b2e]">Web Development</li>
              <li className="pb-[5px] hover:text-[#ff5b2e]">Web Degine</li>
              <li className="pb-[5px] hover:text-[#ff5b2e]">UI Ux</li>
              <li className="pb-[5px] hover:text-[#ff5b2e]">
                Search Engine Optimization
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-[25px] leading-8 font-semibold hover:text-[#ff5b2e]">
              Industries
            </h2>
            <ul className="mt-5">
              <li className="pb-[5px] hover:text-[#ff5b2e]">Healthcare</li>
              <li className="pb-[5px] hover:text-[#ff5b2e]">Education</li>
              <li className="pb-[5px] hover:text-[#ff5b2e]">E-commerce</li>
              <li className="pb-[5px] hover:text-[#ff5b2e]">Real State</li>
              <li className="pb-[5px] hover:text-[#ff5b2e]">
                School Manegment
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-[25px] leading-8 font-semibold hover:text-[#ff5b2e]">
              Service{" "}
            </h2>
            <ul className="mt-5">
              <li className="pb-[5px] hover:text-[#ff5b2e]">
                {" "}
                <Link href="https://quick-school-client.netlify.app/">
                  {" "}
                  BD Quick School
                </Link>{" "}
              </li>
              <li className="pb-[5px] hover:text-[#ff5b2e]">
                {" "}
                 <Link href="https://evergreen-estates-assignment.web.app/">
                  {" "}
                  Evergreen Estates
                </Link>{" "}
              </li>
              <li className="pb-[5px] hover:text-[#ff5b2e]">
                {" "}
                <Link href="https://mega-market-6295e.web.app/">
                  {" "}
                Mega Merket
                </Link>{" "}
              </li>
             
              <li className="pb-[5px] hover:text-[#ff5b2e]">
                <Link href="https://mern-quiz-app-shiham.netlify.app/">
                  {" "}
                  Quiz Application

                </Link>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
