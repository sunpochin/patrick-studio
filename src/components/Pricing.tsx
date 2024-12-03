import React, { useState } from 'react';
import { PaymentModal } from './PaymentModal';

const plans = [
  {
    name: '單堂體驗',
    price: '600',
    features: ['任選一堂課程體驗', '專業老師指導', '體驗舞蹈魅力'],
  },
  {
    name: '月票方案',
    price: '3,600',
    features: ['每週固定一堂課程', '可補課2次', '享有舞會優惠'],
  },
  {
    name: '季票方案',
    price: '9,900',
    features: ['每週固定一堂課程', '無限補課', '免費參加舞會', '專屬練習時段'],
  },
];

export function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<null | typeof plans[0]>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlanSelect = (plan: typeof plans[0]) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">課程方案</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-gray-50 rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-center mb-4">{plan.name}</h3>
              <div className="text-center mb-8">
                <span className="text-4xl font-bold">NT${plan.price}</span>
              </div>
              <ul className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg className="h-5 w-5 text-purple-600 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handlePlanSelect(plan)}
                className="w-full mt-8 bg-purple-600 text-white rounded-lg py-2 hover:bg-purple-700 transition"
              >
                立即報名
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedPlan && (
        <PaymentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          plan={selectedPlan}
        />
      )}
    </section>
  );
}