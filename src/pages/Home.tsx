import React from 'react';
import { Hero } from '../components/Hero';
import { BundleGrid } from '../components/BundleGrid';
import { Bundle } from '../data/bundles';

interface HomeProps {
  onSelectBundle: (bundle: Bundle) => void;
}

export const Home = ({ onSelectBundle }: HomeProps) => {
  return (
    <>
      <Hero />
      <BundleGrid onSelect={onSelectBundle} />
      
      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">Why Choose DataFast?</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">We provide the best service with speed and security at the core of our operations.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-slate-50 p-8 rounded-3xl space-y-4 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Instant Delivery</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Our system is fully automated. You get your data immediately after a successful payment, 24/7.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl space-y-4 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-green-200">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.040L3 14.535a11.996 11.996 0 0021.232 6A11.996 11.996 0 003 14.535" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Secure Payment</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Your transactions are secured by Paystack. We don't store your card details on our servers.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl space-y-4 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-purple-200">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Best Prices</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                We offer the most competitive prices for SME and Corporate gifting data bundles.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};