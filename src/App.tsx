import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import HowWeWorkPage from "./components/howWeWorkPage/HowWeWorkPage";
import MainPage from "./components/mainPage/MainPage";
import NavBar from "./components/NavBar";
import BlogPage from "./components/blogPage/BlogPage";
import AccountPage from "./components/accountPage/AccountPage";
import PlansPage from "./components/plansPage/PlansPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const basePath = import.meta.env.BASE_URL;
  return (
    <>
      <ScrollToTop />
      <header>
        <NavBar />
      </header>
      <main className="w-full">
        <Routes>
          <Route path={`${basePath}`} element={<MainPage />} />
          <Route path={`${basePath}how-we-work`} element={<HowWeWorkPage />} />
          <Route path={`${basePath}blog`} element={<BlogPage />} />
          <Route path={`${basePath}account`} element={<AccountPage />} />
          <Route path={`${basePath}plans`} element={<PlansPage />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
