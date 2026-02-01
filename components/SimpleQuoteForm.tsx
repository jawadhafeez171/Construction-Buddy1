
import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { submitToGoogleSheets } from '../utils/googleSheet';
import { useToastContext } from '../contexts/ToastContext';
import { validateName, validatePhone } from '../utils/validation';

interface FormState {
    name: string;
    phone: string;
    message: string;
}

const SimpleQuoteForm: React.FC<{ onSuccess?: () => void }> = ({ onSuccess }) => {
    const { showSuccess, showError } = useToastContext();
    const [formState, setFormState] = useState<FormState>({
        name: '',
        phone: '',
        message: '',
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        const nameVal = validateName(formState.name);
        const phoneVal = validatePhone(formState.phone);

        if (nameVal.error) newErrors.name = nameVal.error;
        if (phoneVal.error) newErrors.phone = phoneVal.error;

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setStatus('loading');
        const success = await submitToGoogleSheets(formState, 'Simple Modal Quote Form');

        if (success) {
            setStatus('success');
            showSuccess('Thank you! We will contact you shortly.');
            if (onSuccess) {
                // Delay closing the modal slightly so they see the success state
                setTimeout(onSuccess, 2000);
            }
        } else {
            setStatus('error');
            showError('Something went wrong. Please try again.');
        }
    };

    if (status === 'success') {
        return (
            <div className="text-center py-8 animate-fadeIn">
                <div className="w-16 h-16 bg-success/20 text-success rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Request Received!</h3>
                <p className="text-muted-foreground">Our expert will call you within 24 hours.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Full Name *</label>
                    <input
                        type="text"
                        value={formState.name}
                        onChange={e => setFormState(prev => ({ ...prev, name: e.target.value }))}
                        className={`w-full p-2.5 rounded-lg border bg-background focus:ring-2 focus:ring-secondary outline-none transition-all ${errors.name ? 'border-destructive' : 'border-border'}`}
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
                        className={`w-full p-2.5 rounded-lg border bg-background focus:ring-2 focus:ring-secondary outline-none transition-all ${errors.phone ? 'border-destructive' : 'border-border'}`}
                        placeholder="9XXXXXXXXX"
                    />
                    {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Additional Note (Optional)</label>
                <textarea
                    value={formState.message}
                    onChange={e => setFormState(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full p-2.5 rounded-lg border border-border bg-background focus:ring-2 focus:ring-secondary outline-none h-24 transition-all"
                    placeholder="e.g. Modern 3BHK duplex"
                ></textarea>
            </div>

            <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-3.5 bg-secondary text-secondary-foreground rounded-lg font-bold text-lg hover:shadow-lg hover:bg-opacity-95 active:scale-[0.98] transition-all disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(var(--secondary),0.3)]"
            >
                {status === 'loading' ? (
                    <>
                        <svg className="animate-spin h-5 w-5 text-current" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Submitting...</span>
                    </>
                ) : 'Submit Request'}
            </button>
        </form>
    );
};

export default SimpleQuoteForm;
