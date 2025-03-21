import Image from "next/image";
import Image1 from "../../assets/Image-1.png";
import Image2 from "../../assets/Image-2.png";

const StoryBehindKIN = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#FFF0DF] pt-[60px] md:pt-[120px] text-center px-6 lg:px-0 overflow-hidden">
      <div className="max-w-[792px] mx-auto md:space-y-10">
        <div className="max-w-[656px] mx-auto">
          <h2 className="text-2xl md:text-[32px] font-semibold text-[#020617] md:leading-10 mb-6 text-start md:text-center">
            The Story Behind KIN
          </h2>
          <p className="text-[#020617] font-medium text-lg leading-6 text-start md:text-center">
            After 16 years as a software engineer at Microsoft, I decided to
            solve a challenge that many families face: keeping everyones
            schedules organized. With a growing family, keeping track of
            everything was a real challenge.
          </p>
          <p className="text-[#020617] font-medium text-lg leading-6 mt-6 text-start md:text-center">
            KIN was born from that real-life frustration. Traditional calendars
            were too tedious and a fridge calendar wasn’t available on the go.
            My goal was to create an app that makes family scheduling simple and
            accessible. Now, my wife and I can sync our schedules easily and
            finally keep our family schedule in one place.
          </p>
          <p className="mt-6 text-[#020617] font-medium text-lg leading-6 text-start md:text-center">
            I hope KIN helps your family too!
          </p>
        </div>

        <div className="relative flex justify-center items-center  md:pb-16 max-w-[666px] mx-auto">
          <div className="relative w-[200px] h-[214px] sm:h-auto sm:w-[400px] lg:w-[450px]">
            {/* Background Image */}
            <div className="absolute top-5 left-5 sm:top-8 sm:left-8 w-full h-full  rotate-3" />

            {/* Main Image */}
            <Image
              src={Image1}
              alt="Family"
              className="relative z-10 rounded-lg "
            />
          </div>

          <div className="relative w-[200px] h-[160px] sm:h-auto sm:w-[400px] lg:w-[450px] -ml-11  sm:-ml-[70px] md:-ml-[130px] xl:-ml-[130px] mt-[120px] sm:mt-24 mb-[136px]">
            {/* Background Image */}
            <div className="absolute top-5 left-6 sm:top-8 sm:left-8 w-full h-full rotate-[3deg] " />
            {/* Main Image */}
            <Image
              src={Image2}
              alt="Family"
              className="relative z-10 rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryBehindKIN;
