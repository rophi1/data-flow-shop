import React, { useState } from 'react';
import { usePaystackPayment } from 'react-paystack';
import { Bundle } from '../data/bundles';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Smartphone, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

interface CheckoutModalProps {
  bundle: Bundle | null;
  isOpen: boolean;
  onClose: () => void;
}

const PAYSTACK_PUBLIC_KEY = 'pk_live_c032dae1bcba2dc50aba4d8e5bbd79ed13cd1a1d';

export const CheckoutModal = ({ bundle, isOpen, onClose }: CheckoutModalProps) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const config = {
    reference: (new Date()).getTime().toString(),
    email: email || 'customer@example.com',
    amount: (bundle?.price || 0) * 100, // Paystack expects amount in pesewas for GHS
    publicKey: PAYSTACK_PUBLIC_KEY,
    currency: 'GHS',
  };

  const initializePayment = usePaystackPayment(config);

  const onSuccess = (reference: any) => {
    console.log(reference);
    setIsSuccess(true);
    toast.success('Payment Successful! Your data will be delivered shortly.');
  };

  const onPaystackClose = () => {
    toast.error('Payment cancelled');
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber || phoneNumber.length < 10) {
      toast.error('Please enter a valid phone number');
      return;
    }
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email');
      return;
    }

    // @ts-ignore
    initializePayment(onSuccess, onPaystackClose);
  };

  if (!bundle) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[425px] rounded-3xl overflow-hidden p-0 border-none">
        {isSuccess ? (
          <div className="p-12 text-center space-y-6">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-slate-900">Payment Successful!</h2>
              <p className="text-slate-500">
                Data bundle of <span className="font-bold">{bundle.dataAmount}</span> for <span className="font-bold">{phoneNumber}</span> is being processed.
              </p>
            </div>
            <Button 
              className="w-full h-12 rounded-xl bg-slate-900"
              onClick={() => {
                setIsSuccess(false);
                onClose();
              }}
            >
              Done
            </Button>
          </div>
        ) : (
          <>
            <div className="bg-blue-600 p-8 text-white relative">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Smartphone className="w-24 h-24" />
              </div>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-white">Checkout</DialogTitle>
                <DialogDescription className="text-blue-100">
                  Complete your purchase for {bundle.network} {bundle.dataAmount}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-black">{bundle.price} GHS</span>
                <span className="text-blue-200 text-sm">{bundle.validity}</span>
              </div>
            </div>

            <form onSubmit={handleCheckout} className="p-8 space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    placeholder="e.g., 0541234567"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="h-12 rounded-xl"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 rounded-xl"
                    required
                  />
                </div>
              </div>

              <div className="pt-2">
                <Button 
                  type="submit"
                  className="w-full h-14 rounded-xl bg-blue-600 hover:bg-blue-700 text-lg font-bold shadow-lg shadow-blue-200"
                >
                  Pay with Paystack
                </Button>
                <p className="text-center text-[10px] text-slate-400 mt-4 flex items-center justify-center gap-1">
                  Secure payment powered by Paystack
                </p>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};