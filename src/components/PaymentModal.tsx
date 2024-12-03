import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { X } from 'lucide-react';

const stripePromise = loadStripe('your_publishable_key');

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: {
    name: string;
    price: string;
  };
}

export function PaymentModal({ isOpen, onClose, plan }: PaymentModalProps) {
  if (!isOpen) return null;

  const handlePayment = async () => {
    const stripe = await stripePromise;
    if (!stripe) return;

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          planName: plan.name,
          price: plan.price,
        }),
      });

      const session = await response.json();

      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.error(result.error);
      }
    } catch (error) {
      console.error('Payment error:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>
        
        <h2 className="text-2xl font-bold mb-6">確認付款資訊</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
          <p className="text-gray-600">價格：NT${plan.price}</p>
        </div>

        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded">
            <h4 className="font-medium mb-2">方案內容：</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              {plan.name === '單堂體驗' && (
                <>
                  <li>• 任選一堂課程體驗</li>
                  <li>• 專業老師指導</li>
                </>
              )}
              {plan.name === '月票方案' && (
                <>
                  <li>• 每週固定一堂課程</li>
                  <li>• 可補課2次</li>
                  <li>• 享有舞會優惠</li>
                </>
              )}
              {plan.name === '季票方案' && (
                <>
                  <li>• 每週固定一堂課程</li>
                  <li>• 無限補課</li>
                  <li>• 免費參加舞會</li>
                  <li>• 專屬練習時段</li>
                </>
              )}
            </ul>
          </div>

          <button
            onClick={handlePayment}
            className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition"
          >
            前往付款
          </button>
          
          <div className="text-center text-sm text-gray-500 mt-4">
            <p>付款安全由 Stripe 保障</p>
          </div>
        </div>
      </div>
    </div>
  );
}