import React, { useState } from 'react';
import { Send, Loader2, Phone, AlertTriangle } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="bg-brand-navy p-6 sm:p-10 text-center">
                <h2 className="text-2xl md:text-3xl font-heading font-black text-white mb-2 uppercase">
                    Get A Tech Out Now
                </h2>
                <p className="text-gray-300">
                    Tell us where you are. We'll call you in 5 minutes to confirm dispatch.
                </p>
            </div>

            <div className="p-6 sm:p-10">
                {submitted ? (
                    <div className="text-center py-10">
                        <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-6">
                            <Phone className="h-10 w-10 text-green-600 animate-bounce" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Dispatch Notified!</h3>
                        <p className="text-gray-600 mb-6">Stand by. A technician is reviewing your request and will call you at <span className="font-bold text-brand-navy">{formData.phone}</span> shortly.</p>
                        <button 
                            onClick={() => setSubmitted(false)}
                            className="text-brand-orange font-bold hover:underline"
                        >
                            Send another request
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <AlertTriangle className="h-5 w-5 text-yellow-600" aria-hidden="true" />
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm text-yellow-700 font-bold">
                                        Is it a safety emergency? Call <a href="tel:555-123-4567" className="underline">555-123-4567</a> immediately.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1 uppercase tracking-wide">Name</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    required
                                    placeholder="John Doe"
                                    className="block w-full bg-gray-50 border border-gray-300 rounded-lg py-4 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-1 uppercase tracking-wide">Callback Phone</label>
                                <input 
                                    type="tel" 
                                    name="phone" 
                                    id="phone" 
                                    required
                                    placeholder="(555) 555-5555"
                                    className="block w-full bg-gray-50 border border-gray-300 rounded-lg py-4 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1 uppercase tracking-wide">What's Broken / Where Are You?</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                rows={3} 
                                required
                                className="block w-full bg-gray-50 border border-gray-300 rounded-lg py-4 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all"
                                placeholder="Example: Cat 320 Excavator, blown boom hose. I-95 Construction site near Exit 4."
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="w-full flex justify-center items-center py-5 px-4 border border-transparent rounded-lg shadow-lg text-lg font-black text-white bg-brand-orange hover:bg-brand-darkOrange focus:outline-none focus:ring-4 focus:ring-orange-200 disabled:opacity-70 transition-all transform hover:-translate-y-1"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="animate-spin -ml-1 mr-2 h-6 w-6" />
                                    Dispatching...
                                </>
                            ) : (
                                <>
                                    <Send className="-ml-1 mr-3 h-5 w-5" />
                                    REQUEST TECH NOW
                                </>
                            )}
                        </button>
                    </form>
                )}
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;