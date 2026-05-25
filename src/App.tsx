import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CheckoutModal } from './components/CheckoutModal';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Terms } from './pages/Terms';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { Bundle } from './data/bundles';
import { Toaster } from 'sonner';
import { AuthProvider } from './context/AuthContext';

function App() {
  const [selectedBundle, setSelectedBundle] = useState<Bundle | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectBundle = (bundle: Bundle) => {
    setSelectedBundle(bundle);
    setIsModalOpen(true);
  };

  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-white font-sans text-slate-900 flex flex-col">
          <Header />

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home onSelectBundle={handleSelectBundle} />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </main>

          <Footer />
          
          <CheckoutModal 
            bundle={selectedBundle} 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
          />
          <Toaster position="top-center" expand={true} richColors />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;