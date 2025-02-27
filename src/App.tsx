import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import HowWeWork from "./components/HowWeWork";
import MainPage from "./components/mainPage/MainPage";
import NavBar from "./components/NavBar";

function App() {
  const basePath = import.meta.env.BASE_URL;
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="w-full">
        <Routes>
          <Route path={`${basePath}`} element={<MainPage />} />
          <Route path={`${basePath}how-we-work`} element={<HowWeWork />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
