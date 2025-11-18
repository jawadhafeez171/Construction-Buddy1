import React, { useState } from 'react';
import { SERVICES } from '../constants';

const QuickQuoteForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    service: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center bg-black/60 backdrop-blur-lg p-6 rounded-lg shadow-2xl border border-white/20 text-white">
        <svg className="w-16 h-16 text-success mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-2xl font-bold">Thank You!</h3>
        <p className="mt-2 text-base text-white/90">Your request has been received. Our team will contact you shortly.</p>
      </div>
    );
  }

  return (
    <div className="bg-black/60 backdrop-blur-lg p-6 rounded-lg shadow-2xl border border-white/20">
      <h3 className="text-2xl font-bold text-center text-white mb-2">Get a Quick Quote</h3>
      <p className="text-center text-white/90 mb-6">Fill in the details to start.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white/80">Full Name</label>
          <input type="text" name="name" id="name" required value={formState.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white/10 border border-white/30 text-white rounded-md shadow-sm focus:outline-none focus:ring-tertiary focus:border-tertiary placeholder-white/50" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-white/80">Phone Number</label>
          <input type="tel" name="phone" id="phone" required value={formState.phone} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white/10 border border-white/30 text-white rounded-md shadow-sm focus:outline-none focus:ring-tertiary focus:border-tertiary placeholder-white/50" />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-white/80">Service of Interest</label>
          <select name="service" id="service" required value={formState.service} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white/10 border border-white/30 text-white rounded-md shadow-sm focus:outline-none focus:ring-tertiary focus:border-tertiary">
            <option value="" disabled className="text-gray-500">Select a service</option>
            {SERVICES.map(service => (
              <option key={service.id} value={service.title} className="text-black">{service.title}</option>
            ))}
          </select>
        </div>
        <div>
          <button type="submit" disabled={status === 'loading'} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm font-medium text-secondary-foreground bg-secondary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary disabled:bg-muted disabled:text-muted-foreground">
            {status === 'loading' ? 'Submitting...' : 'Get My Quick Quote'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuickQuoteForm;