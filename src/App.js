import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import AllRoutes from "./route/AllRoutes"

function App() {
  return (
    <div className="todoapp-stack-large">
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}
export default App;
