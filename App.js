import { CartProvider } from "react-use-cart";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="App">   
      <CartProvider>
        <Header />
      </CartProvider>
      <Footer />
    </div>
  );
}

export default App;
 