import Footer from "./components/Footer";
import MainPage from "./components/MainPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <MainPage />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
