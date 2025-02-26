import Footer from "./components/Footer";
import MainPage from "./components/mainPage/MainPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="w-full">
        <MainPage />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
