import React, { useState } from 'react';
import { X, Send, Loader2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    zip: '',
    serviceType: 'Emergency Repair',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        
        {/* Background overlay */}
        <div 
            className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" 
            aria-hidden="true"
            onClick={onClose}
        ></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
          <div className="bg-brand-navy px-4 py-4 sm:px-6 flex justify-between items-center">
            <h3 className="text-lg leading-6 font-bold text-white" id="modal-title">
              Request Technician
            </h3>
            <button 
                onClick={onClose}
                className="text-gray-300 hover:text-white focus:outline-none transition-colors"
            >
                <X size={24} />
            </button>
          </div>
          
          <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            {submitted ? (
                <div className="text-center py-10">
                    <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
                        <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Received!</h3>
                    <p className="text-gray-500 mb-6">A dispatcher will contact you shortly at the phone number provided.</p>
                    <button 
                        onClick={onClose}
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-brand-navy text-base font-medium text-white hover:bg-blue-800 focus:outline-none sm:text-sm"
                    >
                        Close
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-2">
                            <label htmlFor="name" className="block text-sm font-bold text-gray-700">Full Name <span className="text-red-500">*</span></label>
                            <input 
                                type="text" 
                                name="name" 
                                id="name" 
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-brand-orange focus:border-brand-orange sm:text-sm"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="col-span-1">
                            <label htmlFor="phone" className="block text-sm font-bold text-gray-700">Phone <span className="text-red-500">*</span></label>
                            <input 
                                type="tel" 
                                name="phone" 
                                id="phone" 
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-brand-orange focus:border-brand-orange sm:text-sm"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="zip" className="block text-sm font-bold text-gray-700">Zip Code <span className="text-red-500">*</span></label>
                            <input 
                                type="text" 
                                name="zip" 
                                id="zip" 
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-brand-orange focus:border-brand-orange sm:text-sm"
                                value={formData.zip}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="serviceType" className="block text-sm font-bold text-gray-700">Service Needed</label>
                        <select 
                            id="serviceType" 
                            name="serviceType" 
                            className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-brand-orange focus:border-brand-orange sm:text-sm"
                            value={formData.serviceType}
                            onChange={handleChange}
                        >
                            <option>Emergency Repair</option>
                            <option>Scheduled Maintenance</option>
                            <option>System Diagnostics</option>
                            <option>Quote / Estimate</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-bold text-gray-700">Details / Location</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            rows={2} 
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-brand-orange focus:border-brand-orange sm:text-sm"
                            placeholder="Machine type, nature of leak..."
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <div className="pt-2">
                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-brand-orange hover:bg-brand-darkOrange focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange disabled:opacity-50 transition-colors"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />
                                    Dispatching...
                                </>
                            ) : (
                                <>
                                    <Send className="-ml-1 mr-2 h-4 w-4" />
                                    Dispatch Technician Now
                                </>
                            )}
                        </button>
                        <p className="mt-3 text-xs text-center text-gray-500 font-bold">
                            For immediate emergencies, call 859 462-4673.
                        </p>
                    </div>
                </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;