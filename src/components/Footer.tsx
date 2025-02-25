const Footer = () => {
  const elements = [
    {
      title: "OUR COMPANY",
      links: ["HOW WE WORK", "WHY INSURE?", "CHECK PRICE", "REVIEWS"],
    },
    {
      title: "HELP ME",
      links: ["FAQ", "", "TERMS OD USE", "PRIVACY POLICY", "COOKIES"],
    },
    {
      title: "CONTACT",
      links: ["SALES", "SUPPORT", "LIVE CHAT"],
    },
    {
      title: "OTHERS",
      links: ["CAREERS", "PRESS", "LICENSES"],
    },
  ];
  return (
    <div className="relative flex flex-col items-center bg-light-gray">
      <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-center lg:w-full lg:px-30 lg:mt-10">
        <img
          src="images/logo.svg"
          alt="Logo icon"
          className="mb-4.5 mt-20 lg:mt-0 lg:mb-0"
        />
        <div className="flex items-center gap-4 p-4">
          <img src="images/icon-facebook.svg" alt="Facebook icon" />
          <img src="images/icon-twitter.svg" alt="Twitter icon" />
          <img src="images/icon-pinterest.svg" alt="Pinterest icon" />
          <img src="images/icon-instagram.svg" alt="Instagram icon" />
        </div>
      </div>

      <div className="w-80 lg:w-[90%] h-[1px] bg-dark-grayish-violet mb-6 mt-6 opacity-30 lg:mt-3"></div>

      <div className="mb-20 lg:flex lg:justify-between lg:w-full lg:px-30">
        {elements.map((element) => (
          <div
            key={element.title}
            className="flex flex-col items-center gap-2 p-4 lg:items-start"
          >
            <h2 className="text-sm text-dark-grayish-violet font-medium mb-6">
              {element.title}
            </h2>
            {element.links.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-very-dark-violet font-bold"
              >
                {link}
              </a>
            ))}
          </div>
        ))}
        <img
          src="images/bg-pattern-footer-mobile.svg"
          alt="Pattern image"
          className="absolute top-0 left-0 footer__pattern opacity-30 lg:hidden"
        />
        <img
          src="images/bg-pattern-footer-desktop.svg"
          alt="Pattern image"
          className="hidden absolute top-0 left-0 footer__pattern opacity-30 lg:block"
        />
      </div>
    </div>
  );
};

export default Footer;
