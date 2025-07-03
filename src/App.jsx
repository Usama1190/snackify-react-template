// import { Route, Routes } from "react-router";
import "./App.css";
import Footer from "./components/Footer/Footer";
import { ColorProvider } from "./context/colorContext";
import { LanguageProvider } from "./context/languageContext";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <LanguageProvider>
      <ColorProvider>
        <HomePage />
        <Footer />
      </ColorProvider>
    </LanguageProvider>
  );
}

export default App;
