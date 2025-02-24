import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="relative flex justify-between items-center p-5 bg-white">
      <img src="images/logo.svg" alt="Logo icon" className="object-contain" />
      <div>
        <button type="button" onClick={() => setIsOpen(true)}>
          <img
            src="images/icon-hamburger.svg"
            alt="Hamburger menu"
            className={`${isOpen ? "hidden" : "block"}`}
          />
        </button>
        <button type="button" onClick={() => setIsOpen(false)}>
          <img
            src="images/icon-close.svg"
            alt="Close menu"
            className={`${!isOpen ? "hidden" : "block"}`}
          />
        </button>
      </div>
      {isOpen && (
        <div
          className={`absolute inset-0 top-20 w-full h-[800px] bg-very-dark-violet text-white`}
        >
          <div className="flex flex-col items-center gap-7.5 mt-10">
            <a href="#">HOW WE WORK</a>
            <a href="#">BLOG</a>
            <a href="#">ACCOUNT</a>
            <a href="#" className="border-2 py-2 px-30">
              VIEW PLANS
            </a>
          </div>
          <img
            src="images/bg-pattern-mobile-nav.svg"
            alt="Pattern image"
            className="absolute top-58 right-0"
          />
        </div>
      )}
    </nav>
  );
};

export default NavBar;
