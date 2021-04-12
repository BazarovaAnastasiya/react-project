import s from "./App.module.css";
import Header from "./components/block/header/Header";
import Footer from "./components/block/footer/Footer";
import StartPage from "./components/pages/startPage/StartPage";

const App = () => {
  return (
    <div className={s.App}>
      <Header />
      <StartPage />
      <Footer />
    </div>
  );
};

export default App;
