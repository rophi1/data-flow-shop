import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Instant Data Delivery
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight">
              Cheap Data <br />
              <span className="text-blue-600">Bundles</span> for Ghana
            </h1>
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              Buy affordable data bundles for MTN GH, Telecel, and AT instantly. 
              Safe, fast, and secure payments with Paystack.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#bundles"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200"
              >
                Buy Data Now
                <ArrowRight className="w-5 h-5" />
              </a>
              <div className="flex items-center gap-4 text-sm text-slate-500 font-medium px-4">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[10px] text-slate-400">
                      {i}
                    </div>
                  ))}
                </div>
                Join 10,000+ happy users
              </div>
            </div>
            <div className="flex flex-wrap gap-6 pt-4">
              {['Secure Payment', 'Instant Topup', '24/7 Support'].map((text) => (
                <div key={text} className="flex items-center gap-2 text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-blue-400 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
            <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/85c9f9c4-d2ab-4293-a32d-3ae63a646977/hero-bg-8be0b704-1779691290201.webp" 
              alt="Data Connectivity"
              className="relative w-full h-auto rounded-3xl shadow-2xl border border-slate-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
};