
import './App.css';
import Header from './components/block/header/Header';
import Footer from './components/block/footer/Footer';
import StartPage from "./components/block/startPage/StartPage";



const App = () => {
  return (
    <div className="App">
      <Header/>
      <StartPage/>
      <Footer/>
  
    </div>
  );
}

export default App;
