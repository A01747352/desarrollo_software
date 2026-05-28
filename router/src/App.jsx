import './App.css';
import { Route, Routes } from 'react-router-dom';
import { AboutPage, ContactPage, EventsPage, HomePage, NotFoundPage, ProductsPage, ServicesPage, HistoryPage, CountryPage } from './pages/Paginas';
import Menu from './components/Menu';

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/about" element={<AboutPage />} >
          <Route path="services" element={<ServicesPage/>} />
          <Route path="history" element={<HistoryPage/>} />
        </Route>

        <Route path="/products" element={<ProductsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/paises/:paisId/:estado" element={<CountryPage />} />

        <Route path= "*" element={<NotFoundPage />} />
      </Routes>
      </>
  );
}
export default App;