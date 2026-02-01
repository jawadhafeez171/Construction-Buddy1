
import React, { useState, useEffect } from 'react';
import { SERVICES } from '../constants';
import { submitToGoogleSheets } from '../utils/googleSheet';
import { useToastContext } from '../contexts/ToastContext';
import { validateName, validatePhone, validateRequired } from '../utils/validation';
import { MagneticButton } from './MagneticButton';
import ServiceStaticIcon from './ServiceStaticIcon';

interface FormState {
    name: string;
    phone: string;
    service: string;
    area?: string;
    budget?: string;
    message?: string;
}

const STORAGE_KEY = 'cb_quote_form_draft';

const MultiStepQuoteForm: React.FC = () => {
    const { showSuccess, showError } = useToastContext();
    const [step, setStep] = useState(1);
    const [formState, setFormState] = useState<FormState>(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : {
            name: '',
            phone: '',
            service: '',
            area: '',
            budget: '',
            message: '',
        };
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formState));
    }, [formState]);

    const validateStep = (currentStep: number) => {
        const newErrors: { [key: string]: string } = {};
        if (currentStep === 1) {
            if (!formState.service) newErrors.service = 'Please select a service';
        } else if (currentStep === 2) {
            const nameVal = validateName(formState.name);
            const phoneVal = validatePhone(formState.phone);
            if (nameVal.error) newErrors.name = nameVal.error;
            if (phoneVal.error) newErrors.phone = phoneVal.error;
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateStep(step)) {
            setStep(prev => prev + 1);
        }
    };

    const handleBack = () => {
        setStep(prev => prev - 1);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateStep(step)) return;

        setStatus('loading');
        const success = await submitToGoogleSheets(formState, 'Multi-step Quote Form');

        if (success) {
            setStatus('success');
            localStorage.removeItem(STORAGE_KEY);
            showSuccess('Thank you! Our team will contact you shortly.');
        } else {
            setStatus('error');
            showError('Something went wrong. Please try again.');
        }
    };

    if (status === 'success') {
        return (
            <div className="text-center py-12 px-4 bg-card border border-border rounded-xl shadow-xl animate-fadeIn">
                <div className="w-20 h-20 bg-success/20 text-success rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Requirement Received!</h3>
                <p className="text-muted-foreground">We've saved your draft. Our expert will call you within 24 hours.</p>
                <button
                    onClick={() => { setStep(1); setStatus('idle'); setFormState({ name: '', phone: '', service: '', area: '', budget: '', message: '' }) }}
                    className="mt-8 text-secondary font-semibold hover:underline"
                >
                    Submit another request
                </button>
            </div>
        );
    }

    return (
        <div className="bg-card border border-border rounded-xl shadow-2xl overflow-hidden max-w-2xl mx-auto">
            {/* Progress Bar */}
            <div className="h-2 bg-muted w-full">
                <div
                    className="h-full bg-secondary transition-all duration-500 ease-out"
                    style={{ width: `${(step / 3) * 100}%` }}
                ></div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 md:p-8">
                {step === 1 && (
                    <div className="animate-fadeIn">
                        <h3 className="text-2xl font-bold mb-2">What are you looking to build?</h3>
                        <p className="text-muted-foreground mb-6">Select a service to get started.</p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                            {SERVICES.map(s => (
                                <button
                                    key={s.id}
                                    type="button"
                                    onClick={() => setFormState(prev => ({ ...prev, service: s.title }))}
                                    className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${formState.service === s.title
                                            ? 'border-secondary bg-secondary/5 text-secondary shadow-md'
                                            : 'border-border hover:border-secondary/30'
                                        }`}
                                >
                                    <ServiceStaticIcon serviceId={s.id} className="w-8 h-8" />
                                    <span className="text-xs font-bold text-center leading-tight">{s.title}</span>
                                </button>
                            ))}
                        </div>
                        {errors.service && <p className="text-destructive text-sm mt-[-1rem] mb-4">{errors.service}</p>}
                        <button
                            type="button"
                            onClick={handleNext}
                            className="w-full py-4 bg-secondary text-secondary-foreground rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all"
                        >
                            Next: Your Details
                        </button>
                    </div>
                )}

                {step === 2 && (
                    <div className="animate-fadeIn">
                        <h3 className="text-2xl font-bold mb-2">Tell us about yourself</h3>
                        <p className="text-muted-foreground mb-6">We'll use this to contact you.</p>
                        <div className="space-y-4 mb-8">
                            <div>
                                <label className="block text-sm font-medium mb-1">Full Name *</label>
                                <input
                                    type="text"
                                    value={formState.name}
                                    onChange={e => setFormState(prev => ({ ...prev, name: e.target.value }))}
                                    className={`w-full p-3 rounded-lg border bg-background focus:ring-2 focus:ring-secondary outline-none ${errors.name ? 'border-destructive' : 'border-border'}`}
                                    placeholder="John Doe"
                                />
                                {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Phone Number *</label>
                                <input
                                    type="tel"
                                    value={formState.phone}
                                    onChange={e => setFormState(prev => ({ ...prev, phone: e.target.value.replace(/\D/g, '').slice(0, 10) }))}
                                    className={`w-full p-3 rounded-lg border bg-background focus:ring-2 focus:ring-secondary outline-none ${errors.phone ? 'border-destructive' : 'border-border'}`}
                                    placeholder="9XXXXXXXXX"
                                />
                                {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <button type="button" onClick={handleBack} className="flex-1 py-4 border border-border rounded-lg font-bold hover:bg-muted transition-all">Back</button>
                            <button type="button" onClick={handleNext} className="flex-[2] py-4 bg-secondary text-secondary-foreground rounded-lg font-bold hover:bg-opacity-90 transition-all">Next: Project Details</button>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="animate-fadeIn">
                        <h3 className="text-2xl font-bold mb-2">Project Specifics (Optional)</h3>
                        <p className="text-muted-foreground mb-6">Helping us prepare better for the call.</p>
                        <div className="space-y-4 mb-8">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Approx Area (sqft)</label>
                                    <input
                                        type="text"
                                        value={formState.area}
                                        onChange={e => setFormState(prev => ({ ...prev, area: e.target.value }))}
                                        className="w-full p-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-secondary outline-none"
                                        placeholder="e.g. 1200"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Budget Range</label>
                                    <select
                                        value={formState.budget}
                                        onChange={e => setFormState(prev => ({ ...prev, budget: e.target.value }))}
                                        className="w-full p-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-secondary outline-none"
                                    >
                                        <option value="">Select Range</option>
                                        <option value="< 20L">Below 20 Lakhs</option>
                                        <option value="20L - 50L">20 - 50 Lakhs</option>
                                        <option value="50L - 1Cr">50 Lakhs - 1 Crore</option>
                                        <option value="> 1Cr">Above 1 Crore</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Any specific requirements?</label>
                                <textarea
                                    value={formState.message}
                                    onChange={e => setFormState(prev => ({ ...prev, message: e.target.value }))}
                                    className="w-full p-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-secondary outline-none h-24"
                                    placeholder="e.g. Looking for a modern 3BHK duplex with a home theater..."
                                ></textarea>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <button type="button" onClick={handleBack} className="flex-1 py-4 border border-border rounded-lg font-bold hover:bg-muted transition-all">Back</button>
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="flex-[2] py-4 bg-secondary text-secondary-foreground rounded-lg font-bold hover:bg-opacity-90 transition-all disabled:opacity-50"
                            >
                                {status === 'loading' ? 'Submitting...' : 'Get My Free Quote'}
                            </button>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
};

export default MultiStepQuoteForm;
