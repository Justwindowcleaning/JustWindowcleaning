'use client';
import React, { useState } from 'react';

export default function JustWindowCleaningApp() {
  const [jobs, setJobs] = useState([
    { id: 1, name: 'Arthur Pendelton', address: '12 Rose Lane, Royston', phone: '447000000001', price: 28.00, status: 'due', paid: false, gateCode: '4219', notes: 'Back gate is left unlocked.' },
    { id: 2, name: 'Beatrice Vance', address: '45 Church Road, Royston', phone: '447000000002', price: 35.00, status: 'completed', paid: true, gateCode: 'None', notes: 'Ring doorbell twice.' },
    { id: 3, name: 'Charles Montgomery', address: '8 Willow Close, Royston', phone: '447000000003', price: 42.00, status: 'due', paid: false, gateCode: '9912', notes: 'Key safe code under meter box.' }
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
    <div style={{ maxWidth: '480px', margin: '0 auto', background: '#090d16', color: '#ffffff', minHeight: '100vh', padding: '16px', fontFamily: 'sans-serif' }}>
      <header style={{ background: '#111827', border: '1px solid #1f2937', padding: '16px', borderRadius: '16px', marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '15px', fontWeight: '900', color: '#60a5fa', margin: '0 0 4px 0' }}>JUST WINDOWCLEANING</h1>
          <p style={{ fontSize: '12px', color: '#9ca3af', margin: '0' }}>Tuesday Round · {completedCount} of {jobs.length} Done</p>
        </div>
        <span style={{ fontSize: '12px', background: '#064e3b', color: '#34d399', border: '1px solid #065f46', padding: '6px 10px', borderRadius: '9999px', fontWeight: 'bold' }}>
          £{totalCollected.toFixed(2)} collected
        </span>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {jobs.map((job, index) => (
          <div key={job.id} style={{ background: '#111827', border: '1px solid #1f2937', padding: '16px', borderRadius: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
              <div>
                <span style={{ fontSize: '10px', background: '#2563eb', color: '#ffffff', padding: '2px 6px', borderRadius: '4px', fontWeight: 'bold' }}>Stop #{index + 1}</span>
                <h2 style={{ fontSize: '16px', fontWeight: 'bold', margin: '6px 0 2px 0' }}>{job.name}</h2>
                <p style={{ fontSize: '12px', color: '#9ca3af', margin: '0' }}>{job.address}</p>
                {job.notes && <p style={{ fontSize: '11px', color: '#fbbf24', margin: '6px 0 0 0' }}>⚠️ {job.notes}</p>}
              </div>
              <span style={{ fontSize: '18px', fontWeight: '900', color: '#34d399' }}>£{job.price.toFixed(2)}</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '12px', paddingTop: '12px', borderTop: '1px solid #1f2937' }}>
              <button 
                onClick={() => toggleJobDone(job.id)}
                style={{ padding: '10px', borderRadius: '10px', fontWeight: 'bold', fontSize: '12px', cursor: 'pointer', background: job.status === 'completed' ? '#059669' : '#1f2937', color: '#ffffff', border: 'none' }}
              >
                {job.status === 'completed' ? '✓ CLEANED' : 'MARK CLEANED'}
              </button>

              <button 
                onClick={() => togglePaid(job.id)}
                style={{ padding: '10px', borderRadius: '10px', fontWeight: 'bold', fontSize: '12px', cursor: 'pointer', background: job.paid ? '#064e3b' : '#7f1d1d', color: job.paid ? '#34d399' : '#fca5a5', border: job.paid ? '1px solid #059669' : '1px solid #991b1b' }}
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
