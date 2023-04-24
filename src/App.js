import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import NavRoutes from "./components/routes/NavRoutes";

function App() {
  return (
    <div className="m-w-[1240px] p-8">
      <Header />
      <NavRoutes />
      <Footer />
    </div>
  );
}

export default App;
