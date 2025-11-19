
export const submitToGoogleSheets = async (data: Record<string, any>, formType: string) => {
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxDPI7gpqAMaSYWbWYX-pKHTrPA9g69MISXqBQav2bOnEc8yghz3ogHxIEAF4_k3o42/exec';

  const formData = new FormData();
  // Add the form type (e.g., "Contact Us", "Quick Quote")
  formData.append('formType', formType);
  // Add the sheet name for the script to use
  formData.append('sheetName', 'Construction Buddy');
  // Add a timestamp
  formData.append('timestamp', new Date().toLocaleString());

  // Append all other data fields
  for (const key in data) {
    formData.append(key, data[key]);
  }

  try {
    // We use 'no-cors' mode because Google Apps Script doesn't support CORS headers for simple POSTs 
    // in this specific way. The request will succeed, but we won't get a readable JSON response.
    await fetch(SCRIPT_URL, {
      method: 'POST',
      body: formData,
      mode: 'no-cors' 
    });
    return true;
  } catch (error) {
    console.error('Error submitting to Google Sheets', error);
    return false;
  }
};
