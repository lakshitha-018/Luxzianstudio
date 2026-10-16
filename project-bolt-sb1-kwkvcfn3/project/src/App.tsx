import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';
import CustomGiftBuilder from '@/pages/CustomGiftBuilder';
import About from '@/pages/About';
import Policies from '@/pages/Policies';
import Contact from '@/pages/Contact';
import FAQ from '@/pages/FAQ';
import NotFound from '@/pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/custom-gift-builder" element={<CustomGiftBuilder />} />
          <Route path="/about" element={<About />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
}

export default App;
