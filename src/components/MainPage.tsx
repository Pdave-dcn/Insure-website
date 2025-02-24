import AdvantagesSection from "./AdvantagesSection";

const MainPage = () => {
  return (
    <div className="container">
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
    </div>
  );
};

export default MainPage;
