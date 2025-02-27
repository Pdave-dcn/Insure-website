const HowWeWork = () => {
  return (
    <div className="flex flex-col items-center gap-20 mb-20 mt-10 px-6.5 text-very-dark-violet lg:px-30 lg:mt-90 lg:items-start">
      <div className="relative -z-20 flex justify-center items-center bg-dark-violet w-full h-45 text-white">
        <img
          src="images/bg-pattern-intro-left-mobile.svg"
          alt="Pattern image"
          className="absolute -left-6.5 -top-10 -z-10 lg:hidden"
        />
        <h1 className="font-dmSerif text-4xl text-center leading-none mb-4.5">
          How we work.
        </h1>
        <img
          src="images/bg-pattern-intro-right-mobile.svg"
          alt="Pattern image"
          className="absolute -right-6 -z-10 lg:hidden"
        />
      </div>

      <div className="flex flex-col items-center gap-6">
        <div>
          <h2 className="font-dmSerif text-3xl text-center leading-none mb-4.5">
            Simple. Transparent. Hassle-Free.
          </h2>
          <p className="text-center">
            We make life insurance easy to understand and accessible for
            everyone. Our process is designed to be quick, clear, and tailored
            to your needs, because protecting your loved ones should never be
            complicated.
          </p>
        </div>
        <div className="w-35 h-[1px] bg-very-dark-violet"></div>
      </div>

      <div className="flex flex-col items-center gap-6">
        <div>
          <h2 className="font-dmSerif text-3xl text-center leading-none mb-4.5">
            Tell Us About Yourself
          </h2>
          <p className="text-center">
            Answer a few simple questions about your lifestyle, needs, and
            coverage goals. No confusing jargon, just straightforward guidance.
          </p>
        </div>
        <div className="w-35 h-[1px] bg-very-dark-violet"></div>
      </div>

      <div className="flex flex-col items-center gap-6">
        <div>
          <h2 className="font-dmSerif text-3xl text-center leading-none mb-4.5">
            Get Personalized Recommendations
          </h2>
          <p className="text-center">
            Our smart technology and expert advisors analyze your details to
            match you with the best insurance options. You’ll see clear,
            transparent choices—no hidden fees, no surprises.
          </p>
        </div>
        <div className="w-35 h-[1px] bg-very-dark-violet"></div>
      </div>

      <div className="flex flex-col items-center gap-6">
        <div>
          <h2 className="font-dmSerif text-3xl text-center leading-none mb-4.5">
            Secure Your Coverage
          </h2>
          <p>
            Choose a plan that fits you, apply online, and get covered faster
            than ever. Our team is here to support you every step of the way.
          </p>
        </div>
        <div className="w-35 h-[1px] bg-very-dark-violet"></div>
      </div>
    </div>
  );
};

export default HowWeWork;
