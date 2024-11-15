import { Footer } from "./components/Layout/Footer";
import { Header } from "./components/Layout/Header";

export const App = () => {
  return (
    <div className="font-helvetica min-h-[100vh] flex flex-col justify-between">
      <Header />
      <Footer />
    </div>
  );
};
