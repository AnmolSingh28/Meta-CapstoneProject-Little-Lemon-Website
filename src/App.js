import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Info from "./components/info";
import Main from "./components/main";
import Nav from "./components/nav";
import Testimonials from "./components/testimonials";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Main/>
      <Testimonials/>
      <Info/>
      <Footer/>
    </div>
  );
}

export default App;
