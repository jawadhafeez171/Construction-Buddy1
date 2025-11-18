import React, { useState } from 'react';
import { PHONE_NUMBER, ADDRESS } from '../constants';
import PhoneIcon from '../components/icons/PhoneIcon';
import LocationIcon from '../components/icons/LocationIcon';
import MailIcon from '../components/icons/MailIcon';

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 2000);
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

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-lg border border-border">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <svg className="w-16 h-16 text-success mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-2xl font-bold text-card-foreground">Thank You!</h3>
                <p className="text-muted-foreground mt-2">Your message has been sent successfully. We will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground">Full Name</label>
                  <input type="text" name="name" id="name" required value={formState.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-input border border-border rounded-md shadow-sm focus:outline-none focus:ring-tertiary focus:border-tertiary" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">Email Address</label>
                  <input type="email" name="email" id="email" required value={formState.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-input border border-border rounded-md shadow-sm focus:outline-none focus:ring-tertiary focus:border-tertiary" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground">Phone Number</label>
                  <input type="tel" name="phone" id="phone" value={formState.phone} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-input border border-border rounded-md shadow-sm focus:outline-none focus:ring-tertiary focus:border-tertiary" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground">Message</label>
                  <textarea name="message" id="message" rows={4} required value={formState.message} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-input border border-border rounded-md shadow-sm focus:outline-none focus:ring-tertiary focus:border-tertiary"></textarea>
                </div>
                <div>
                  <button type="submit" disabled={status === 'loading'} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-secondary-foreground bg-secondary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary disabled:bg-muted disabled:text-muted-foreground">
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;