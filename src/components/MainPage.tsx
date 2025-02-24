import AdvantagesSection from "./AdvantagesSection";

const MainPage = () => {
  return (
    <div className="container flex flex-col items-center">
      <img src="images/image-intro-desktop.jpg" alt="Family image" />
      <div className="bg-dark-violet relative">
        <img
          src="images/bg-pattern-intro-left-mobile.svg"
          alt="Image pattern"
        />
        <div className="text-white text-center p-6.5 -mt-25">
          <h1 className="font-dmSerif text-[2.7rem] leading-none mb-4.5">
            Humanizing <br /> your insurance.
          </h1>
          <p className="mb-7">
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that's right for
            you. Ensure you and your love ones are protect.
          </p>
          <button type="button" className="border p-1.5 px-6 mb-13">
            VIEW PLANS
          </button>
          <img
            src="images/bg-pattern-intro-right-mobile.svg"
            alt="Image pattern"
            className="absolute right-0 top-77"
          />
        </div>
      </div>

      <AdvantagesSection />

      <div className=" relative flex flex-col items-center justify-center bg-dark-violet text-white p-4.5 aspect-square w-[90%] mb-35">
        <img
          src="images/bg-pattern-how-we-work-mobile.svg"
          alt="Image pattern"
          className="absolute right-0"
        />
        <h4 className="font-dmSerif text-[2.7rem] leading-none text-center mb-9">
          Find out more about how we work.
        </h4>
        <button type="button" className="border-2 py-2 px-5.5">
          HOW WE WORK
        </button>
      </div>
    </div>
  );
};

export default MainPage;
