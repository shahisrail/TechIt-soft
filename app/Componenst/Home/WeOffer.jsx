import web from "@/public/web.jpg";
import Image from "next/image";
import Link from "next/link";
import "../Nav/btn.css"
const WeOffer = () => {
  return (
    <div className="lg:max-w-[1440px] pt-[90px] pb-[120px] p-3 mx-auto">
      <h2 className="text-center md:text-[40px] text-[33px] font-bold leading-10"  >See what we can do for you</h2>
      <div className="grid lg:grid-cols-3 gap-5 md:grid-cols-2 grid-cols-1 ">


        {/* web development  */}
        <div className="bg-[#f7f7f7] mt-[60px] relative rounded-[1.0rem] px-[30px] py-[40px]">
          <div className="bg-[#fff] shadow-[0_15px_30px_-10px_rgba(0,0,0,0.14)] p-[15px] rounded-[14px] absolute w-[80px] h-[80px] top-[-30px] left-[30px]">
            <Image
              src={web}
              alt="WEb Image loading meybe our server have a problem please relode this site "
            />
          </div>
          <div className="mt-10">
            <h3 className="text-[28px] leading-10 mb-4 font-bold">Web Development</h3>
            <p className="text-[18px] leading-7">At Reevan, We offer pixel perfect responsive website design services which are built around aesthetics and usability.</p>
          </div>
          <div className=" mt-[40px] text-[18px]  text-[#110a32] hover:text-[#ff5b2e]">
           <Link  href="/service" > Read More</Link>
          </div>
        </div>
        {/* eCommerce Service     */}
        <div className="bg-[#f7f7f7] mt-[60px] relative rounded-[1.0rem] px-[30px] py-[40px]">
          <div className="bg-[#fff] shadow-[0_15px_30px_-10px_rgba(0,0,0,0.14)] p-[15px] rounded-[14px] absolute w-[80px] h-[80px] top-[-30px] left-[30px]">
            <Image
              src={web}
              alt="WEb Image loading meybe our server have a problem please relode this site "
            />
          </div>
          <div className="mt-10">
            <h3 className="text-[28px] leading-10 mb-4 font-bold">Ecommerce</h3>
            <p className="text-[18px] leading-7">At Reevan, We offer pixel perfect responsive website design services which are built around aesthetics and usability.</p>
          </div>
          <div className=" mt-[40px] text-[18px]  text-[#110a32] hover:text-[#ff5b2e]" >
           <Link  href="/service" > Read More</Link>
          </div>
        </div>
        {/* Real-Estate Service  */}
        <div className="bg-[#f7f7f7] mt-[60px] relative rounded-[1.0rem] px-[30px] py-[40px]">
          <div className="bg-[#fff] shadow-[0_15px_30px_-10px_rgba(0,0,0,0.14)] p-[15px] rounded-[14px] absolute w-[80px] h-[80px] top-[-30px] left-[30px]">
            <Image
              src={web}
              alt="WEb Image loading meybe our server have a problem please relode this site "
            />
          </div>
          <div className="mt-10">
            <h3 className="text-[28px] leading-10 mb-4 font-bold">Real-Estate</h3>
            <p className="text-[18px] leading-7">At Reevan, We offer pixel perfect responsive website design services which are built around aesthetics and usability.</p>
          </div>
          <div className=" mt-[40px] text-[18px]  text-[#110a32] hover:text-[#ff5b2e]">
           <Link  href="/service" > Read More</Link>
          </div>
        </div>
        {/* Healthcare Service  */}
        <div className="bg-[#f7f7f7] mt-[60px] relative rounded-[1.0rem] px-[30px] py-[40px]">
          <div className="bg-[#fff] shadow-[0_15px_30px_-10px_rgba(0,0,0,0.14)] p-[15px] rounded-[14px] absolute w-[80px] h-[80px] top-[-30px] left-[30px]">
            <Image
              src={web}
              alt="WEb Image loading meybe our server have a problem please relode this site "
            />
          </div>
          <div className="mt-10">
            <h3 className="text-[28px] leading-10 mb-4 font-bold">Healthcare</h3>
            <p className="text-[18px] leading-7">At Reevan, We offer pixel perfect responsive website design services which are built around aesthetics and usability.</p>
          </div>
          <div className=" mt-[40px] text-[18px]  text-[#110a32] hover:text-[#ff5b2e]">
           <Link  href="/service" > Read More</Link>
          </div>
        </div>
        {/* Education  */}
        <div className="bg-[#f7f7f7] mt-[60px] relative rounded-[1.0rem] px-[30px] py-[40px]">
          <div className="bg-[#fff] shadow-[0_15px_30px_-10px_rgba(0,0,0,0.14)] p-[15px] rounded-[14px] absolute w-[80px] h-[80px] top-[-30px] left-[30px]">
            <Image
              src={web}
              alt="WEb Image loading meybe our server have a problem please relode this site "
            />
          </div>
          <div className="mt-10">
            <h3 className="text-[28px] leading-10 mb-4 font-bold">Education </h3>
            <p className="text-[18px] leading-7">At Reevan, We offer pixel perfect responsive website design services which are built around aesthetics and usability.</p>
          </div>
          <div className=" mt-[40px] text-[18px]  text-[#110a32] hover:text-[#ff5b2e]">
           <Link  href="/service" > Read More</Link>
          </div>
        </div>
        {/* Hospitality  */}
        <div className="bg-[#f7f7f7] mt-[60px] relative rounded-[1.0rem] px-[30px] py-[40px]">
          <div className="bg-[#fff] shadow-[0_15px_30px_-10px_rgba(0,0,0,0.14)] p-[15px] rounded-[14px] absolute w-[80px] h-[80px] top-[-30px] left-[30px]">
            <Image
              src={web}
              alt="WEb Image loading meybe our server have a problem please relode this site "
            />
          </div>
          <div className="mt-10">
            <h3 className="text-[28px] leading-10 mb-4 font-bold">Hospitality</h3>
            <p className="text-[18px] leading-7">At Reevan, We offer pixel perfect responsive website design services which are built around aesthetics and usability.</p>
          </div>
          <div className=" mt-[40px] text-[18px]  text-[#110a32] hover:text-[#ff5b2e]">
           <Link  href="/service" > Read More</Link> 
          </div>
        </div>
      </div>
      <div className="text-center mt-[40px]">
      <button className="custom-button2">More Service +</button>
      </div>
    </div>
  );
};

export default WeOffer;
