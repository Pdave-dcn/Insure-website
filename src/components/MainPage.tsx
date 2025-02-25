import AdvantagesSection from "./AdvantagesSection";

const MainPage = () => {
  return (
    <div className="flex flex-col items-center">
      <img
        src="images/image-intro-mobile.jpg"
        alt="Family image"
        className="lg:hidden"
      />

      <div className="bg-dark-violet relative lg:w-full">
        <img
          src="images/bg-pattern-intro-left-mobile.svg"
          alt="Image pattern"
          className="lg:hidden"
        />
        <img
          src="images/bg-pattern-intro-left-desktop.svg"
          alt="Image pattern"
          className="hidden lg:block absolute left-0 -bottom-85"
        />
        <div className="text-white text-center p-6.5 -mt-25 lg:text-start lg:w-[600px] lg:mt-12 lg:ml-25 lg:mb-12">
          <div className="hidden lg:block w-35 h-[1px] bg-dark-grayish-violet mb-9"></div>
          <h1 className="font-dmSerif text-[2.7rem] leading-none mb-4.5">
            Humanizing <br /> your insurance.
          </h1>
          <p className="mb-7">
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that's right for
            you. Ensure you and your love ones are protect.
          </p>
          <button
            type="button"
            className="border p-1.5 px-6 mb-13 hover:bg-white hover:text-dark-violet font-medium hover:font-bold transition-all duration-300 relative z-10 cursor-pointer"
          >
            VIEW PLANS
          </button>
          <img
            src="images/bg-pattern-intro-right-mobile.svg"
            alt="Image pattern"
            className="absolute right-0 top-77 lg:hidden"
          />
          <img
            src="images/bg-pattern-intro-right-desktop.svg"
            alt="Image pattern"
            className="hidden absolute right-0 top-0 lg:block z-10"
          />
        </div>
        <img
          src="images/image-intro-desktop.jpg"
          alt="Family image"
          className="hidden lg:block absolute right-30 top-20"
        />
      </div>

      <AdvantagesSection />

      <div className="flex justify-center lg:w-full lg:px-30">
        <div className="relative flex flex-col items-center justify-center bg-dark-violet text-white p-4.5 w-[90%] h-85 lg:h-65 mb-35 lg:w-full lg:px-30 lg:flex-row lg:justify-between">
          <img
            src="images/bg-pattern-how-we-work-mobile.svg"
            alt="Image pattern"
            className="absolute right-0 lg:hidden"
          />
          <img
            src="images/bg-pattern-how-we-work-desktop.svg"
            alt="Image pattern"
            className="hidden absolute right-0 lg:block"
          />
          <h4 className="font-dmSerif text-[2.7rem] lg:text-5xl leading-none text-center mb-9 lg:mb-0 lg:text-start lg:w-110">
            Find out more about how we work.
          </h4>
          <button
            type="button"
            className="border-2 py-2 px-5.5 lg:px-7.5 hover:bg-white hover:text-dark-violet font-medium hover:font-bold transition-all duration-300 relative z-10 cursor-pointer"
          >
            HOW WE WORK
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
