import Image from "next/image";
import AboutOne from '../../../../public/aboutUs_img_one.jpeg'

const Hero = () => {
    let arr = []
    for (let i = 0; i < 150; i++){
      arr.push(i)
    }
  
  return (
    <div className="relative top-[108px] w-full h-[834px] flex flex-col pt-[64px]">
      <p className="text-[28px] text-about-dark-1 font-[500] text-center">About Us</p>
      <p className="text-[64px] font-[700] text-about-dark-1 text-center">More Than Just A BoilerPlate</p>
      <p className="w-[584px] h-[66px] text-[18px] font-[400] text-about-dark-1 leading-[22px] text-center mx-auto">Welcome to Hng Boilerplate, where passion meets innovation. Discover how we started, the challenges we overcame, and the milestones that define our journey.</p>

      <div className="flex w-[1200px] h-[477px] mx-auto justify-center items-center">
        <Image src={AboutOne} alt="Hero_image" className="w-[1036px] h-[353px] object-cover rounded-tl-md rounded-br-md rounded-tr-3xl rounded-bl-3xl z-10" />
      </div>
      <div className="grid grid-cols-[repeat(15,_1fr)] h-[195px] w-[268px] absolute top-[270px] left-[255px]">
        {arr.map((ar) => {
          return (
            <div className="w-[6px] h-[6px] bg-about-btn rounded-full"></div>
          )
        })}
      </div>
      <div className="grid grid-cols-[repeat(15,_1fr)] h-[195px] w-[268px] absolute top-[565px] right-[240px]">
        {arr.map((ar) => {
          return (
            <div className="w-[6px] h-[6px] bg-about-btn rounded-full"></div>
          )
        })}
      </div>
    </div>
  );
};

export default Hero