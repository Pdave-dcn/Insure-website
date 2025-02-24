const MainPage = () => {
  const advantages = [
    {
      image: "images/icon-snappy-process.svg",
      name: "Snappy Process",
      description:
        "Our application process can be completed in minutes, not hours. Don't get stuck filling in tedious forms.",
    },
    {
      image: "images/icon-affordable-prices.svg",
      name: "Affordable Prices",
      description:
        "We don't want you worrying about high monthly costs. Our prices may be low, but we offer the best coverage possible.",
    },
    {
      image: "images/icon-people-first.svg",
      name: "People First",
      description:
        "Our plans aren't full of conditions and clauses to prevent payouts. We make sure your are covered when you need it.",
    },
  ];
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

      <div className="flex flex-col items-center mt-37">
        <div className="w-35 h-[1px] bg-dark-grayish-violet mb-6"></div>
        <h2 className="text-[2.7rem] font-dmSerif mb-13">We're different</h2>
        <div className="flex flex-col gap-11 p-6.5 mb-20">
          {advantages.map((advantage) => (
            <div key={advantage.name} className="flex flex-col items-center">
              <img
                src={advantage.image}
                alt={advantage.name}
                className="mb-9"
              />
              <h3 className="font-dmSerif text-3xl mb-4">{advantage.name}</h3>
              <p className="text-center text-dark-grayish-violet">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
