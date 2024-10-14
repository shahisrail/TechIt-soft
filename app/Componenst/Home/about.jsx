import '../Nav/btn.css'
const About = () => {
  return (
  <div className="bg-[#FBF1EF]">
  <div className="flex lg:flex-row flex-col justify-between mt-10 gap-5 pt-[120px] pb-[120px] p-10 mx-auto lg:max-w-[1440px]">
    {/* Left Section */}
    <div className="flex-1">
      <p className="mb-[15px] font-semibold text-[20px] leading-[30px] block text-[#ff5b2e] uppercase">We Are Reevan</p>
      <h2 className="md:text-[40px] text-[33px] leading-[52px] font-bold mb-[15px]">Top-rated Web And Mobile App Development Company</h2>
      <p className="text-[18px] leading-[28px]">
        Reevan started its operation in the year 1999. We are Worldwide, based Web, App and Digital Marketing Company. Our main Domain is Web Design, App Development, Digital Marketing, Product Design and Cloud Services. Customer Satisfaction and the Highest rate of Customer Repeatability make us one of the pioneers in the field. So, what are you waiting for? Let us discuss your ideas and our innovation in detail because catering to your requirement and converting it into a final product is our main goal.
      </p>
      <button className="custom-button2 mt-10 leading-[30px]"> 
        About Us
      </button>
    </div>

    {/* Right Section */}
    <div className="flex-1 flex md:flex-row flex-col  gap-10">
    <div className="flex  flex-col   gap-10">
    {/* Card 1 */}
    <div className="rounded-[14px] p-[40px_30px] min-h-[300px] bg-white flex-1">
      <h3 className="font-semibold text-[20px] leading-[30px] block text-[#ff5b2e] uppercase">Projects</h3>
      <h2 className="text-[40px] font-bold">7500+</h2>
      <p className="text-[18px] mt-[20px]">
        Reevan Delivered the Thousands of Successful projects around the world
      </p>
    </div>

    {/* Card 2 */}
    <div className="rounded-[14px] p-[40px_30px] min-h-[300px] bg-white flex-1">
      <h3 className="font-semibold text-[20px] leading-[30px] block text-[#ff5b2e] uppercase">Clients</h3>
      <h2 className="text-[40px] font-bold">1200+</h2>
      <p className="text-[18px] mt-[20px]">
        We have more than 1200+ satisfied clients worldwide.
      </p>
    </div>
   </div>

  <div className="flex  flex-col   gap-10 md:mt-[50px]">
   
    <div className="rounded-[14px] p-[40px_30px] min-h-[300px] bg-white flex-1">
      <h3 className="font-semibold text-[20px] leading-[30px] block text-[#ff5b2e] uppercase">Awards</h3>
      <h2 className="text-[40px] font-bold">50+</h2>
      <p className="text-[18px] mt-[20px]">
        Our hard work and dedication have earned us 50+ prestigious awards.
      </p>
    </div>

 
    <div className="rounded-[14px] p-[40px_30px] min-h-[300px] bg-white flex-1">
      <h3 className="font-semibold text-[20px] leading-[30px] block text-[#ff5b2e] uppercase">Offices</h3>
      <h2 className="text-[40px] font-bold">8</h2>
      <p className="text-[18px] mt-[20px]">
        We have 8 offices worldwide, ready to serve you with quality and excellence.
      </p>
    </div>
  </div>
</div>

  </div>
</div>

  );
};

export default About;




