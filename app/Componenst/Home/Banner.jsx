import banner from "@/public/banner.jpg";
import Image from "next/image";
import "../Nav/btn.css"
const Banner = () => {
  return (
    <div className="flex lg:flex-row flex-col    justify-center   mx-auto lg:max-w-[1440px]  items-center lg:h-[80vh] ">
      <div className ="p-5  mt-[50px]" >
        <h2 className="md:text-[40px] text-[33px] md:leading-[70px]">Award winning Digital marketing agency</h2>
        <p className="text-[21px] leading-[30px] py-5">
          Reevan solve the world biggest problems with Expertise. Reevan helps
          global brand with digital products on web, mobile and connected
          platforms.
        </p>
        <button className="custom-button2 leading-[30px]"> 
            Let`s` talk
        </button>
      </div>
      <div>
        <Image
          src={banner}
          alt="Banner Image our server have a problem please wait "
        />
      </div>
    </div>
  );
};

export default Banner;
