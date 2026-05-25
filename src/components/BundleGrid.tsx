import React, { useState } from 'react';
import { bundles, Bundle } from '../data/bundles';
import { Badge } from '@/components/ui/badge';
import { Smartphone, Wifi, Zap } from 'lucide-react';

interface BundleGridProps {
  onSelect: (bundle: Bundle) => void;
}

const networkColors = {
  'MTN GH': 'bg-yellow-400 text-black',
  'Telecel': 'bg-red-600 text-white',
  'AT': 'bg-blue-600 text-white',
};

const networkIcons = {
  'MTN GH': <Zap className="w-5 h-5" />,
  'Telecel': <Smartphone className="w-5 h-5" />,
  'AT': <Wifi className="w-5 h-5" />,
};

export const BundleGrid = ({ onSelect }: BundleGridProps) => {
  const [activeTab, setActiveTab] = useState<'All' | 'MTN GH' | 'Telecel' | 'AT'>('All');

  const filteredBundles = activeTab === 'All' 
    ? bundles 
    : bundles.filter(b => b.network === activeTab);

  return (
    <section id="bundles" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Available Data Plans</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Choose from our highly discounted data bundles across all major networks in Ghana.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {['All', 'MTN GH', 'Telecel', 'AT'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                activeTab === tab 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBundles.map((bundle) => (
            <div 
              key={bundle.id}
              className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/5 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 rounded-lg ${networkColors[bundle.network]}`}>
                    {networkIcons[bundle.network]}
                  </div>
                  <Badge variant="secondary" className="bg-slate-100 text-slate-600 text-[10px] font-bold">
                    {bundle.type}
                  </Badge>
                </div>
                <h3 className="text-slate-900 font-bold mb-1">{bundle.network} Data</h3>
                <p className="text-3xl font-black text-slate-900 mb-2">{bundle.dataAmount}</p>
                <div className="space-y-2 text-sm text-slate-500 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                    Valid for {bundle.validity}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                    Instant delivery
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-2xl font-bold text-blue-600">{bundle.price} GHS</span>
                </div>
                <button 
                  onClick={() => onSelect(bundle)}
                  className="w-full py-3 px-4 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-blue-600 transition-colors group-hover:scale-[1.02] active:scale-95"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};