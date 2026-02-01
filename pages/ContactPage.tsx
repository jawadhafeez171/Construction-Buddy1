
import React, { useState } from 'react';
import { PHONE_NUMBER, ADDRESS } from '../constants';
import PhoneIcon from '../components/icons/PhoneIcon';
import LocationIcon from '../components/icons/LocationIcon';
import MailIcon from '../components/icons/MailIcon';
import { submitToGoogleSheets } from '../utils/googleSheet';
import { useToastContext } from '../contexts/ToastContext';
import { validateName, validateEmail, validatePhone, validateMessage } from '../utils/validation';
import { ScrollAnimated } from '../components/ScrollAnimated';
import MultiStepQuoteForm from '../components/MultiStepQuoteForm';

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

          {/* Multi-step Contact Form */}
          <ScrollAnimated animation="fadeInUp" delay={200} className="lg:col-span-1">
            <div className="bg-card p-2 sm:p-4 rounded-xl shadow-xl border border-border">
              <MultiStepQuoteForm />
            </div>
          </ScrollAnimated>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
