
import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { submitToGoogleSheets } from '../utils/googleSheet';
import { useToastContext } from '../contexts/ToastContext';
import { validateName, validatePhone, validateRequired } from '../utils/validation';

interface FieldError {
  [key: string]: string | undefined;
}

const QuickQuoteForm: React.FC = () => {
  const { showSuccess, showError } = useToastContext();
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    service: '',
  });
  const [errors, setErrors] = useState<FieldError>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const validateField = (name: string, value: string) => {
    let error: string | undefined;
    
    switch (name) {
      case 'name':
        error = validateName(value).error;
        break;
      case 'phone':
        error = validatePhone(value).error;
        break;
      case 'service':
        error = validateRequired(value).error;
        break;
    }
    
    setErrors(prev => ({ ...prev, [name]: error }));
    return !error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
    
    if (touched[name]) {
      validateField(name, value);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    validateField(name, value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Mark all fields as touched
    const allTouched = { name: true, phone: true, service: true };
    setTouched(allTouched);
    
    // Validate all fields
    const isNameValid = validateField('name', formState.name);
    const isPhoneValid = validateField('phone', formState.phone);
    const isServiceValid = validateField('service', formState.service);
    
    if (!isNameValid || !isPhoneValid || !isServiceValid) {
      showError('Please fix the errors in the form');
      return;
    }
    
    setStatus('loading');
    
    const success = await submitToGoogleSheets(formState, 'Quick Quote (Home Page)');

    if (success) {
        setStatus('success');
        setFormState({ name: '', phone: '', service: '' });
        setErrors({});
        setTouched({});
        showSuccess('Thank you! We will contact you shortly.');
    } else {
        setStatus('error');
        showError('Something went wrong. Please try again.');
    }
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
          <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">
            Full Name <span className="text-red-400">*</span>
          </label>
          <input 
            type="text" 
            name="name" 
            id="name" 
            value={formState.name} 
            onChange={handleChange}
            onBlur={handleBlur}
            className={`mt-1 block w-full px-3 py-2 bg-white/10 border text-white rounded-md shadow-sm focus:outline-none focus:ring-2 transition-colors placeholder-white/50 ${
              errors.name 
                ? 'border-red-400 focus:border-red-400 focus:ring-red-400' 
                : touched.name && !errors.name
                ? 'border-green-400 focus:border-green-400 focus:ring-green-400'
                : 'border-white/30 focus:border-tertiary focus:ring-tertiary'
            }`}
            placeholder="Enter your full name"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-1">
            Phone Number <span className="text-red-400">*</span>
          </label>
          <input 
            type="tel" 
            name="phone" 
            id="phone" 
            value={formState.phone} 
            onChange={handleChange}
            onBlur={handleBlur}
            className={`mt-1 block w-full px-3 py-2 bg-white/10 border text-white rounded-md shadow-sm focus:outline-none focus:ring-2 transition-colors placeholder-white/50 ${
              errors.phone 
                ? 'border-red-400 focus:border-red-400 focus:ring-red-400' 
                : touched.phone && !errors.phone
                ? 'border-green-400 focus:border-green-400 focus:ring-green-400'
                : 'border-white/30 focus:border-tertiary focus:ring-tertiary'
            }`}
            placeholder="10-digit mobile number"
            maxLength={10}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.phone}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-white/80 mb-1">
            Service of Interest <span className="text-red-400">*</span>
          </label>
          <select 
            name="service" 
            id="service" 
            value={formState.service} 
            onChange={handleChange}
            onBlur={handleBlur}
            className={`mt-1 block w-full px-3 py-2 bg-white/10 border text-white rounded-md shadow-sm focus:outline-none focus:ring-2 transition-colors ${
              errors.service 
                ? 'border-red-400 focus:border-red-400 focus:ring-red-400' 
                : touched.service && !errors.service
                ? 'border-green-400 focus:border-green-400 focus:ring-green-400'
                : 'border-white/30 focus:border-tertiary focus:ring-tertiary'
            }`}
          >
            <option value="" disabled className="text-gray-500">Select a service</option>
            {SERVICES.map(service => (
              <option key={service.id} value={service.title} className="text-black">{service.title}</option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.service}
            </p>
          )}
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
