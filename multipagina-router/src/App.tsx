import "./App.css";
import {
  AboutPage,
  ContactPage,
  EventsPage,
  HomePage,
  NotFoundPage,
  ProductsPage,
  Services,
  History,
} from "./pages/Paginas";
import { Route, Routes } from "react-router";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />}>
          <Route path="/services" element={<Services />} />
          <Route path="/history" element={<History />} />
        </Route>
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
