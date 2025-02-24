const MainPage = () => {
  return (
    <div>
      <img src="images/image-intro-desktop.jpg" alt="Family image" />
      <div className="bg-dark-violet">
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
          <button type="button" className="border p-1.5 px-6">
            VIEW PLANS
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
