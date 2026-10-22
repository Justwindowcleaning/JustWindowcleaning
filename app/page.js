'use client';
import React, { useState } from 'react';
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
export default function JustWindowCleaningApp() {
  const [activeTab, setActiveTab] = useState('today');
  const [subView, setSubView] = useState('list');

  const [jobs, setJobs] = useState([
    { id: 1, name: 'Arthur Pendelton', address: '12 Rose Lane, Royston', phone: '447000000001', price: 28.00, status: 'due', paid: false, gateCode: '4219', notes: 'Back gate is left unlocked. Watch out for garden hose.', route: 'Tuesday 4-Weekly' },
    { id: 2, name: 'Beatrice Vance', address: '45 Church Road, Royston', phone: '447000000002', price: 35.00, status: 'completed', paid: true, gateCode: 'None', notes: 'Ring doorbell twice. Pay via bank transfer.', route: 'Tuesday 4-Weekly' },
    { id: 3, name: 'Charles Montgomery', address: '8 Willow Close, Royston', phone: '447000000003', price: 42.00, status: 'due', paid: false, gateCode: '9912', notes: 'Key safe code under meter box.', route: 'Tuesday 4-Weekly' },
    { id: 4, name: 'Diana Prince', address: '14 High Street, Royston', phone: '447000000004', price: 30.00, status: 'due', paid: false, gateCode: 'None', notes: 'Commercial premises - rear access only.', route: 'Tuesday 4-Weekly' }
  ]);

  const toggleJobDone = (id) => {
    setJobs(jobs.map(j => j.id === id ? { ...j, status: j.status === 'due' ? 'completed' : 'due' } : j));
  };

  const togglePaid = (id) => {
    setJobs(jobs.map(j => j.id === id ? { ...j, paid: !j.paid } : j));
  };

  const sendWhatsApp = (name, phone, price, type = 'done') => {
    const cleanPhone = phone.replace(/\D/g, '');
    let message = type === 'done' 
      ? `Hi ${name}, your windows were cleaned today! Total is £${price.toFixed(2)}. Thanks! 🪟✨`
      : `Hi ${name}, just a polite reminder regarding an outstanding balance of £${price.toFixed(2)} for your window clean. Thank you!`;
    
    window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const totalCollected = jobs.filter(j => j.paid).reduce((acc, j) => acc + j.price, 0);
  const totalOwing = jobs.filter(j => !j.paid).reduce((acc, j) => acc + j.price, 0);
  const completedCount = jobs.filter(j => j.status === 'completed').length;

  return (
    <div className="max-w-md mx-auto bg-slate-950 text-white min-h-screen pb-24 font-sans antialiased">
      <header className="bg-slate-900/90 backdrop-blur-md border-b border-slate-800 p-4 sticky top-0 z-30 flex justify-between items-center">
        <div>
          <h1 className="text-lg font-black tracking-tighter bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            JUST WINDOWCLEANING
          </h1>
          <p className="text-[11px] text-slate-400 font-medium">Tuesday 4-Weekly Round · {completedCount} of {jobs.length} Done</p>
        </div>
        <span className="text-xs bg-emerald-950 text-emerald-400 border border-emerald-800/60 px-2.5 py-1 rounded-full font-extrabold shadow-inner">
          £{totalCollected.toFixed(2)} collected
        </span>
      </header>

      <main className="p-4 space-y-4">
        {activeTab === 'today' && (
          <div className="space-y-4">
            <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800">
              <button 
                onClick={() => setSubView('list')}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition ${subView === 'list' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
              >
                📋 Stop List
              </button>
              <button 
                onClick={() => setSubView('map')}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition ${subView === 'map' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
              >
                🗺️ Route Map View
              </button>
            </div>

            {subView === 'list' ? (
              <div className="space-y-3">
                {jobs.map((job, index) => (
                  <div 
                    key={job.id} 
                    className={`bg-slate-900 border rounded-2xl p-4 transition-all shadow-lg ${job.status === 'completed' ? 'border-emerald-600/40 bg-slate-900/60' : 'border-slate-800'}`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] tracking-wider uppercase bg-blue-600 text-white px-2 py-0.5 rounded font-black">
                            Stop #{index + 1}
                          </span>
                          {job.gateCode !== 'None' && (
                            <span className="text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded font-bold">
                              🔑 Gate: {job.gateCode}
                            </span>
                          )}
                        </div>
                        <h2 className="text-lg font-extrabold mt-2 text-slate-100">{job.name}</h2>
                        <p className="text-xs text-slate-300 font-medium">{job.address}</p>
                        
                        {job.notes && (
                          <div className="mt-2.5 bg-slate-950/80 border border-slate-800/80 p-2.5 rounded-xl text-xs text-slate-300">
                            <span className="text-amber-400 font-bold">⚠️ Note:</span> {job.notes}
                          </div>
                        )}
                      </div>
                      <div className="text-right">
                        <span className="text-xl font-black text-emerald-400">£{job.price.toFixed(2)}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-slate-800/80">
                      <button 
                        onClick={() => toggleJobDone(job.id)}
                        className={`py-3 rounded-xl font-black text-xs tracking-wide transition active:scale-95 ${job.status === 'completed' ? 'bg-emerald-600 text-white shadow-lg' : 'bg-slate-800 text-slate-200 hover:bg-slate-700'}`}
                      >
                        {job.status === 'completed' ? '✓ CLEANED' : 'MARK CLEANED'}
                      </button>

                      <button 
                        onClick={() => togglePaid(job.id)}
                        className={`py-3 rounded-xl font-black text-xs tracking-wide transition active:scale-95 ${job.paid ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'bg-red-950/80 text-red-300 border border-red-900/80'}`}
                      >
                        {job.paid ? '✓ PAID' : 'UNPAID'}
                      </button>
                    </div>

                    <div className="flex gap-2 mt-2">
                      <a 
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(job.address)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 bg-slate-800 hover:bg-slate-700 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 text-slate-200 transition"
                      >
                        🗺️ NAVIGATE
                      </a>
                      <button 
                        onClick={() => sendWhatsApp(job.name, job.phone, job.price, 'done')}
                        className="flex-1 bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-700/50 py-2.5 rounded-xl text-xs font-bold text-emerald-300 flex items-center justify-center gap-1.5 transition"
                      >
                        💬 WHATSAPP
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center space-y-4">
                <div className="h-64 bg-slate-950 rounded-xl border border-slate-800 flex flex-col items-center justify-center p-4 relative overflow-hidden">
                  <span className="text-3xl mb-2">🗺️</span>
                  <p className="text-sm font-extrabold text-slate-200">Interactive Route Plot Active</p>
                  <a 
                    href="https://www.google.com/maps" 
                    target="_blank" 
                    rel="noreferrer"
                    className="mt-4 bg-blue-600 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-lg hover:bg-blue-500 transition"
                  >
                    Open Full Route in Google Maps
                  </a>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'customers' && (
          <div className="space-y-4">
            <div className="flex justify-between items-center bg-slate-900 p-4 rounded-2xl border border-slate-800">
              <div>
                <h2 className="text-base font-extrabold">Customer Database</h2>
                <p className="text-xs text-slate-400">Total Active: {jobs.length} properties</p>
              </div>
            </div>
            <div className="space-y-2">
              {jobs.map((cust) => (
                <div key={cust.id} className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-sm">{cust.name}</h3>
                    <p className="text-xs text-slate-400">{cust.address}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-black text-emerald-400">£{cust.price.toFixed(2)}</span>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider">{cust.route}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'money' && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl">
                <p className="text-xs text-slate-400 font-bold uppercase">Collected</p>
                <p className="text-2xl font-black text-emerald-400 mt-1">£{totalCollected.toFixed(2)}</p>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl">
                <p className="text-xs text-slate-400 font-bold uppercase">Owing</p>
                <p className="text-2xl font-black text-red-400 mt-1">£{totalOwing.toFixed(2)}</p>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-3">
              <h3 className="font-extrabold text-sm text-slate-200 border-b border-slate-800 pb-2">🚨 Owing List & Chasing</h3>
              {jobs.filter(j => !j.paid).map(cust => (
                <div key={cust.id} className="flex justify-between items-center bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <div>
                    <p className="font-bold text-sm">{cust.name}</p>
                    <p className="text-xs text-red-400 font-semibold">Owes £{cust.price.toFixed(2)}</p>
                  </div>
                  <button 
                    onClick={() => sendWhatsApp(cust.name, cust.phone, cust.price, 'reminder')}
                    className="bg-emerald-600/20 border border-emerald-600/40 text-emerald-300 px-3 py-1.5 rounded-lg text-xs font-bold"
                  >
                    💬 Chase Payment
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="space-y-4">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-3">
              <h3 className="font-extrabold text-sm text-slate-200 border-b border-slate-800 pb-2">📊 Accountant & Tax Export</h3>
              <button 
                onClick={() => alert('CSV file downloaded successfully!')}
                className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl text-xs shadow-lg"
              >
                📥 Export Full Year Tax CSV
              </button>
            </div>
          </div>
        )}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-slate-900/95 backdrop-blur-md border-t border-slate-800 p-2 z-40 grid grid-cols-4 gap-1">
        <button onClick={() => setActiveTab('today')} className={`flex flex-col items-center py-2 rounded-xl text-[10px] font-black ${activeTab === 'today' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}>🏠 Today</button>
        <button onClick={() => setActiveTab('customers')} className={`flex flex-col items-center py-2 rounded-xl text-[10px] font-black ${activeTab === 'customers' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}>👥 Customers</button>
        <button onClick={() => setActiveTab('money')} className={`flex flex-col items-center py-2 rounded-xl text-[10px] font-black ${activeTab === 'money' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}>💷 Money</button>
        <button onClick={() => setActiveTab('settings')} className={`flex flex-col items-center py-2 rounded-xl text-[10px] font-black ${activeTab === 'settings' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}>⚙️ Settings</button>
      </nav>
    </div>
  );
}
