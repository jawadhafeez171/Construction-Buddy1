
import React, { useState } from 'react';
import { PHONE_NUMBER, ADDRESS } from '../constants';
import PhoneIcon from '../components/icons/PhoneIcon';
import LocationIcon from '../components/icons/LocationIcon';
import MailIcon from '../components/icons/MailIcon';
import { submitToGoogleSheets } from '../utils/googleSheet';
import { useToastContext } from '../contexts/ToastContext';
import { validateName, validateEmail, validatePhone, validateMessage } from '../utils/validation';
import { ScrollAnimated } from '../components/ScrollAnimated';

interface FieldError {
  [key: string]: string | undefined;
}

const ContactPage: React.FC = () => {
  const { showSuccess, showError } = useToastContext();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
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
      case 'email':
        error = validateEmail(value).error;
        break;
      case 'phone':
        if (value) {
          error = validatePhone(value).error;
        }
        break;
      case 'message':
        error = validateMessage(value).error;
        break;
    }
    
    setErrors(prev => ({ ...prev, [name]: error }));
    return !error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
    
    if (touched[name]) {
      validateField(name, value);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    validateField(name, value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Mark all fields as touched
    const allTouched = { name: true, email: true, phone: true, message: true };
    setTouched(allTouched);
    
    // Validate all fields
    const isNameValid = validateField('name', formState.name);
    const isEmailValid = validateField('email', formState.email);
    const isPhoneValid = formState.phone ? validateField('phone', formState.phone) : true;
    const isMessageValid = validateField('message', formState.message);
    
    if (!isNameValid || !isEmailValid || !isPhoneValid || !isMessageValid) {
      showError('Please fix the errors in the form');
      return;
    }
    
    setStatus('loading');
    
    const success = await submitToGoogleSheets(formState, 'Contact Page');
    
    if (success) {
      setStatus('success');
      setFormState({ name: '', email: '', phone: '', message: '' });
      setErrors({});
      setTouched({});
      showSuccess('Thank you! We will get back to you shortly.');
    } else {
      setStatus('error');
      showError('Something went wrong. Please try again.');
    }
  };

  return (
    <div>
      <div className="bg-accent text-accent-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">Contact Us</h1>
          <p className="mt-2 text-lg text-accent-foreground/80 max-w-3xl mx-auto">
            We're here to help. Reach out to us for any inquiries or to start your project.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <ScrollAnimated animation="fadeInUp">
            <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Get In Touch</h2>
              <p className="text-muted-foreground">
                Have a question or a project in mind? We'd love to hear from you. Use the form or contact us directly through the details below.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <LocationIcon className="h-6 w-6 text-primary flex-shrink-0 mr-4 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground">Address</h3>
                  <p className="text-muted-foreground">{ADDRESS}</p>
                </div>
              </div>
              <div className="flex items-start">
                <PhoneIcon className="h-6 w-6 text-primary flex-shrink-0 mr-4 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground">Phone</h3>
                  <a href={`tel:${PHONE_NUMBER}`} className="text-muted-foreground hover:text-primary">{PHONE_NUMBER}</a>
                </div>
              </div>
              <div className="flex items-start">
                <MailIcon className="h-6 w-6 text-primary flex-shrink-0 mr-4 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground">Email</h3>
                  <a href="mailto:info@constructionbuddy.com" className="text-muted-foreground hover:text-primary">info@constructionbuddy.com</a>
                </div>
              </div>
            </div>
            </div>
          </ScrollAnimated>

          {/* Contact Form */}
          <ScrollAnimated animation="fadeInUp" delay={200}>
            <div className="bg-card p-8 rounded-lg shadow-lg border border-border">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <svg className="w-16 h-16 text-success mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-2xl font-bold text-card-foreground">Thank You!</h3>
                <p className="text-muted-foreground mt-2">Your message has been sent successfully. We will get back to you shortly.</p>
                <button onClick={() => setStatus('idle')} className="mt-6 text-secondary hover:underline">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                    Full Name <span className="text-destructive">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    value={formState.name} 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`mt-1 block w-full px-3 py-2 bg-input border rounded-md shadow-sm focus:outline-none focus:ring-2 transition-colors ${
                      errors.name 
                        ? 'border-destructive focus:border-destructive focus:ring-destructive' 
                        : touched.name && !errors.name
                        ? 'border-success focus:border-success focus:ring-success'
                        : 'border-border focus:border-tertiary focus:ring-tertiary'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-destructive flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
                    Email Address <span className="text-destructive">*</span>
                  </label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    value={formState.email} 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`mt-1 block w-full px-3 py-2 bg-input border rounded-md shadow-sm focus:outline-none focus:ring-2 transition-colors ${
                      errors.email 
                        ? 'border-destructive focus:border-destructive focus:ring-destructive' 
                        : touched.email && !errors.email
                        ? 'border-success focus:border-success focus:ring-success'
                        : 'border-border focus:border-tertiary focus:ring-tertiary'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-destructive flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground mb-1">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    name="phone" 
                    id="phone" 
                    value={formState.phone} 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`mt-1 block w-full px-3 py-2 bg-input border rounded-md shadow-sm focus:outline-none focus:ring-2 transition-colors ${
                      errors.phone 
                        ? 'border-destructive focus:border-destructive focus:ring-destructive' 
                        : touched.phone && !errors.phone && formState.phone
                        ? 'border-success focus:border-success focus:ring-success'
                        : 'border-border focus:border-tertiary focus:ring-tertiary'
                    }`}
                    placeholder="10-digit mobile number (optional)"
                    maxLength={10}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-destructive flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.phone}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">
                    Message <span className="text-destructive">*</span>
                  </label>
                  <textarea 
                    name="message" 
                    id="message" 
                    rows={4} 
                    value={formState.message} 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`mt-1 block w-full px-3 py-2 bg-input border rounded-md shadow-sm focus:outline-none focus:ring-2 transition-colors resize-none ${
                      errors.message 
                        ? 'border-destructive focus:border-destructive focus:ring-destructive' 
                        : touched.message && !errors.message
                        ? 'border-success focus:border-success focus:ring-success'
                        : 'border-border focus:border-tertiary focus:ring-tertiary'
                    }`}
                    placeholder="Tell us about your project or inquiry..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-destructive flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.message}
                    </p>
                  )}
                </div>
                <div>
                  <button type="submit" disabled={status === 'loading'} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-secondary-foreground bg-secondary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary disabled:bg-muted disabled:text-muted-foreground">
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            )}
            </div>
          </ScrollAnimated>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
