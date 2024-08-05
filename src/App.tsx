import { Filters, Navbar } from "./components";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/Footer";
import PastExperience from "./components/PastExperience";

function App() {
  return (
    <>
      <Navbar />
      <Filters />
      <FeaturedProducts />
      <PastExperience />
      <Footer />
    </>
  );
}

export default App;
