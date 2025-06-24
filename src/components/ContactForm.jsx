import React, { useState } from 'react';
import emailjs from 'emailjs-com';


emailjs.init('bnd-k81Y_QvpjvLPs'); 

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      
      const response = await emailjs.send(
        'service_a6f7sxr',     // Service ID
        'template_trk3rox',    // Template ID
        formData
      );

      console.log('Email sent successfully!', response.status, response.text);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
      
      // More detailed error handling
      if (error.text) {
        console.error('Error details:', error.text);
      }
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section className="py-16 bg-gray-50 flex justify-center">
  <div className="w-full max-w-2xl px-4 sm:px-6 lg:px-8">
    <div className="bg-white p-8 rounded-xl shadow-md">
      <h2 className="text-3xl font-bold text-black mb-2 text-center">Get in Touch</h2>
      <p className="text-black mb-8 text-center">Have questions? We're here to help.</p>

      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-100 text-black rounded-lg">
          Message sent successfully! We'll get back to you soon.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-100 text-black rounded-lg">
          Failed to send message. Please try again or contact us directly.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 text-black">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-black mb-1">
            Enter your name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B5E4F] focus:border-[#8B5E4F] transition"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-black mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B5E4F] focus:border-[#8B5E4F] transition"
            required
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-black mb-1">
            Enter Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B5E4F] focus:border-[#8B5E4F] transition"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-black mb-1">
            Enter Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B5E4F] focus:border-[#8B5E4F] transition"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-[#8B5E4F] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#A08474] transition duration-300 shadow-md hover:shadow-lg ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            'SEND'
          )}
        </button>
      </form>
    </div>
  </div>
</section>

  );
};

export default ContactForm;