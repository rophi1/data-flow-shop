import React from 'react';

export const Terms = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms and Conditions</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">1. Introduction</h2>
            <p>
              Welcome to DataFast. By accessing and using our website, you agree to comply with and be bound by the following terms and conditions.
            </p>
          </section>
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">2. Service Provision</h2>
            <p>
              DataFast provides digital data bundles for various telecommunication networks. While we strive for instant delivery, some delays may occur due to network provider issues.
            </p>
          </section>
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">3. Payment Policy</h2>
            <p>
              All payments are processed securely via Paystack. Once a transaction is successful, the data bundle will be sent to the provided phone number.
            </p>
          </section>
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">4. Refund Policy</h2>
            <p>
              Refunds are only processed if a transaction fails and we are unable to deliver the service. Please contact support with your transaction reference.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};