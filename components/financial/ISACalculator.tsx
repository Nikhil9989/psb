'use client';

import React, { useState, useEffect } from 'react';
import { FaCalculator, FaRupeeSign, FaInfoCircle } from 'react-icons/fa';

const ISACalculator: React.FC = () => {
  const [salary, setSalary] = useState<number>(350000); // ₹3.5 LPA default
  const [isaPercentage, setIsaPercentage] = useState<number>(12); // 12% default
  const [months, setMonths] = useState<number>(18); // 18 months default
  const [programFee, setProgramFee] = useState<number>(60000); // ₹60,000 default
  
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
  const [totalPayment, setTotalPayment] = useState<number>(0);
  const [capReached, setCapReached] = useState<boolean>(false);
  const [savings, setSavings] = useState<number>(0);

  // Calculate monthly and total payments
  useEffect(() => {
    const calculatePayments = () => {
      // Monthly payment is salary * percentage / 12 (to convert to monthly)
      const monthly = (salary * isaPercentage) / (100 * 12);
      
      // Initial total payment is monthly payment * number of months
      let total = monthly * months;
      
      // Calculate payment cap (1.4x program fee)
      const paymentCap = programFee * 1.4;
      
      // Check if payment cap is reached
      const isCapReached = total > paymentCap;
      setCapReached(isCapReached);
      
      // If cap is reached, adjust total payment to cap
      if (isCapReached) {
        total = paymentCap;
      }
      
      // Calculate upfront savings compared to payment cap
      const computedSavings = paymentCap - programFee;
      
      setMonthlyPayment(monthly);
      setTotalPayment(total);
      setSavings(computedSavings);
    };
    
    calculatePayments();
  }, [salary, isaPercentage, months, programFee]);

  // Format currency
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 max-w-4xl mx-auto">
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-3">
          <FaCalculator size={20} />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Income Sharing Agreement Calculator</h2>
      </div>
      
      <div className="bg-indigo-50 rounded-lg p-4 mb-6">
        <div className="flex items-start">
          <FaInfoCircle className="text-indigo-600 mt-1 mr-2 flex-shrink-0" />
          <p className="text-indigo-800 text-sm">
            Our Income Sharing Agreement (ISA) allows you to pay for your education after you're employed. 
            You'll pay a percentage of your salary for a fixed period, with a maximum cap of 1.4x the program fee.
            You only start paying when your salary exceeds ₹3 LPA.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expected Annual Salary After Graduation (₹)
            </label>
            <div className="flex items-center">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaRupeeSign className="text-gray-400" />
                </div>
                <input 
                  type="number" 
                  min="300000"
                  max="2000000"
                  value={salary}
                  onChange={(e) => setSalary(Number(e.target.value))}
                  className="block w-full pl-10 pr-12 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">LPA</span>
                </div>
              </div>
            </div>
            <input
              type="range"
              min="300000"
              max="2000000"
              step="25000"
              value={salary}
              onChange={(e) => setSalary(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>₹3 LPA</span>
              <span>₹20 LPA</span>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              ISA Percentage (%)
            </label>
            <input 
              type="number" 
              min="10"
              max="15"
              value={isaPercentage}
              onChange={(e) => setIsaPercentage(Number(e.target.value))}
              className="block w-full py-2 px-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
            <input
              type="range"
              min="10"
              max="15"
              step="0.5"
              value={isaPercentage}
              onChange={(e) => setIsaPercentage(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>10%</span>
              <span>15%</span>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Payment Duration (Months)
            </label>
            <input 
              type="number" 
              min="12"
              max="24"
              value={months}
              onChange={(e) => setMonths(Number(e.target.value))}
              className="block w-full py-2 px-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
            <input
              type="range"
              min="12"
              max="24"
              step="1"
              value={months}
              onChange={(e) => setMonths(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>12 months</span>
              <span>24 months</span>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Program Fee (₹)
            </label>
            <div className="flex items-center">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaRupeeSign className="text-gray-400" />
                </div>
                <input 
                  type="number" 
                  min="40000"
                  max="100000"
                  value={programFee}
                  onChange={(e) => setProgramFee(Number(e.target.value))}
                  className="block w-full pl-10 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Your ISA Breakdown</h3>
          
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-500 mb-1">Monthly Payment</p>
              <p className="text-2xl font-bold text-indigo-600">{formatCurrency(monthlyPayment)}/month</p>
            </div>
            
            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-1">Total Payment {capReached ? '(Cap Reached)' : ''}</p>
              <p className="text-2xl font-bold text-gray-900">{formatCurrency(totalPayment)}</p>
              <p className="text-sm text-gray-500 mt-1">
                Payment Cap: {formatCurrency(programFee * 1.4)} (1.4x program fee)
              </p>
            </div>
            
            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-1">Compared to Upfront Payment</p>
              <p className="text-lg font-semibold text-green-600">
                {savings > 0 ? 'You save: ' + formatCurrency(savings) : 'Same as program fee'}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                ISA allows you to defer payment until you're earning, with no interest.
              </p>
            </div>
          </div>
          
          <div className="mt-8">
            <a 
              href="/isa-application"
              className="block w-full py-3 px-4 text-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition duration-300"
            >
              Apply for ISA Program
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-sm text-gray-500">
        <p>
          <strong>Note:</strong> This calculator provides estimates based on current ISA terms. 
          Actual terms may vary. The ISA only activates when you secure employment with a salary 
          above ₹3 LPA. Payment obligations pause if your income falls below the threshold.
        </p>
      </div>
    </div>
  );
};

export default ISACalculator;
