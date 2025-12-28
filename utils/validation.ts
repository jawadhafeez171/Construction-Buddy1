export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export const validatePhone = (phone: string): ValidationResult => {
  if (!phone) {
    return { isValid: false, error: 'Phone number is required' };
  }
  
  // Indian phone number validation
  const phoneRegex = /^[6-9]\d{9}$/;
  const cleaned = phone.replace(/\D/g, '');
  
  if (cleaned.length !== 10) {
    return { isValid: false, error: 'Phone number must be 10 digits' };
  }
  
  if (!phoneRegex.test(cleaned)) {
    return { isValid: false, error: 'Please enter a valid Indian phone number' };
  }
  
  return { isValid: true };
};

export const validateEmail = (email: string): ValidationResult => {
  if (!email) {
    return { isValid: false, error: 'Email is required' };
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailRegex.test(email)) {
    return { isValid: false, error: 'Please enter a valid email address' };
  }
  
  return { isValid: true };
};

export const validateName = (name: string): ValidationResult => {
  if (!name) {
    return { isValid: false, error: 'Name is required' };
  }
  
  if (name.trim().length < 2) {
    return { isValid: false, error: 'Name must be at least 2 characters' };
  }
  
  if (name.trim().length > 50) {
    return { isValid: false, error: 'Name must be less than 50 characters' };
  }
  
  return { isValid: true };
};

export const validateMessage = (message: string, minLength: number = 10): ValidationResult => {
  if (!message) {
    return { isValid: false, error: 'Message is required' };
  }
  
  if (message.trim().length < minLength) {
    return { isValid: false, error: `Message must be at least ${minLength} characters` };
  }
  
  return { isValid: true };
};

export const validateRequired = (value: string): ValidationResult => {
  if (!value || value.trim().length === 0) {
    return { isValid: false, error: 'This field is required' };
  }
  
  return { isValid: true };
};

