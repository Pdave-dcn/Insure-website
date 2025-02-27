import { title } from "motion/react-client";

const HowWeWork = () => {
  const elements = [
    {
      title: "Simple. Transparent. Hassle-Free.",
      content:
        "We make life insurance easy to understand and accessible for everyone. Our process is designed to be quick, clear, and tailored to your needs, because protecting your loved ones should never be complicated.",
    },
    {
      title: "Tell Us About Yourself",
      content:
        "Answer a few simple questions about your lifestyle, needs, and coverage goals. No confusing jargon, just straightforward guidance.",
    },
    {
      title: "Get Personalized Recommendations",
      content:
        "Our smart technology and expert advisors analyze your details to match you with the best insurance options. You’ll see clear, transparent choices—no hidden fees, no surprises.",
    },
    {
      title: "Secure Your Coverage",
      content:
        "Choose a plan that fits you, apply online, and get covered faster than ever. Our team is here to support you every step of the way.",
    },
  ];
  return (
    <div className="flex flex-col items-center gap-20 mb-20 mt-10 px-6.5 text-very-dark-violet lg:px-30 lg:mt-16">
      <div className="relative -z-20 flex justify-center items-center bg-dark-violet w-full h-45 text-white lg:h-60 lg:mb-7.5 lg:justify-start">
        <img
          src="images/bg-pattern-intro-left-mobile.svg"
          alt="Pattern image"
          className="absolute -left-6.5 -top-10 -z-10 lg:hidden"
        />

        <h1 className="font-dmSerif text-4xl text-center leading-none mb-4.5 lg:text-5xl lg:ml-28">
          How we work.
        </h1>
        <img
          src="images/bg-pattern-intro-right-mobile.svg"
          alt="Pattern image"
          className="absolute -right-6 -z-10 lg:hidden"
        />
        <img
          src="images/bg-pattern-intro-right-desktop.svg"
          alt="Pattern image"
          className="hidden absolute w-45 right-0 -z-10 top-0 //-rotate-90 lg:block"
        />
        <img
          src="images/bg-pattern-intro-left-desktop.svg"
          alt="Image pattern"
          className="hidden lg:block absolute right-70 -rotate-90 -top-28"
        />
      </div>

      {elements.map((element) => (
        <div
          key={element.title}
          className="flex flex-col items-center w-full gap-6 lg:items-start"
        >
          <div className="text-center w-full lg:text-left lg:max-w-2xl">
            <h2 className="font-dmSerif text-3xl leading-none mb-4.5">
              {element.title}
            </h2>
            <p>{element.content}</p>
          </div>
          <div className="w-35 lg:w-full h-[1px] bg-very-dark-violet"></div>
        </div>
      ))}
    </div>
  );
};

export default HowWeWork;
