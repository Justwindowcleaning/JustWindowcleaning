'use client';
import React, { useState } from 'react';

export default function Page() {
  const [activeTab, setActiveTab] = useState('today');
  const [subView, setSubView] = useState('list');

  const [jobs, setJobs] = useState([
    { id: 1, name: 'Arthur Pendelton', address: '12 Rose Lane, Royston', phone: '447000000001', price: 28.00, status: 'due', paid: false, gateCode: '4219', notes: 'Back gate is left unlocked.', route: 'Tuesday 4-Weekly' },
    { id: 2, name: 'Beatrice Vance', address: '45 Church Road, Royston', phone: '447000000002', price: 35.00, status: 'completed', paid: true, gateCode: 'None', notes: 'Ring doorbell twice.', route: 'Tuesday 4-Weekly' }
  ]);

  const toggleJobDone = (id) => {
    setJobs(jobs.map(j => j.id === id ? { ...j, status: j.status === 'due' ? 'completed' : 'due' } : j));
  };

  const togglePaid = (id) => {
    setJobs(jobs.map(j => j.id === id ? { ...j, paid: !j.paid } : j));
  };

  const totalCollected = jobs.filter(j => j.paid).reduce((acc, j) => acc + j.price, 0);
  const completedCount = jobs.filter(j => j.status === 'completed').length;

  return (
    <div className="max-w-md mx-auto bg-slate-950 text-white min-h-screen p-4 font-sans">
      <header className="bg-slate-900 border border-slate-800 p-4 rounded-2xl mb-4 flex justify-between items-center">
        <div>
          <h1 className="text-base font-black text-blue-400">JUST WINDOWCLEANING</h1>
          <p className="text-xs text-slate-400">Tuesday Round · {completedCount} of {jobs.length} Done</p>
        </div>
        <span className="text-xs bg-emerald-950 text-emerald-400 border border-emerald-800 px-2.5 py-1 rounded-full font-bold">
          £{totalCollected.toFixed(2)} collected
        </span>
      </header>

      <div className="space-y-3">
        {jobs.map((job, index) => (
          <div key={job.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded font-black">Stop #{index + 1}</span>
                <h2 className="text-base font-extrabold mt-1 text-slate-100">{job.name}</h2>
                <p className="text-xs text-slate-400">{job.address}</p>
              </div>
              <span className="text-lg font-black text-emerald-400">£{job.price.toFixed(2)}</span>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800">
              <button 
                onClick={() => toggleJobDone(job.id)}
                className={`py-2.5 rounded-xl font-bold text-xs ${job.status === 'completed' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-200'}`}
              >
                {job.status === 'completed' ? '✓ CLEANED' : 'MARK CLEANED'}
              </button>

              <button 
                onClick={() => togglePaid(job.id)}
                className={`py-2.5 rounded-xl font-bold text-xs ${job.paid ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'bg-red-950 text-red-300 border border-red-900'}`}
              >
                {job.paid ? '✓ PAID' : 'UNPAID'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
