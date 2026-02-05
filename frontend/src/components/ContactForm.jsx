import React, { useState } from 'react';
import axios from 'axios';
import Button from './ui/Button';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    serviceInterested: '',
    message: ''
  });
  const [status, setStatus] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      setStatus({ type: 'success', message: 'Thanks! We will respond shortly.' });
      setFormData({ fullName: '', email: '', phone: '', companyName: '', serviceInterested: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
      {status && (
        <div
          className={`md:col-span-2 rounded-2xl px-4 py-3 text-sm font-semibold ${
            status.type === 'success' ? 'bg-emerald-500/20 text-emerald-200' : 'bg-rose-500/20 text-rose-200'
          }`}
        >
          {status.message}
        </div>
      )}
      <input
        className="w-full rounded-2xl border border-slate-800 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
        placeholder="Full Name"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        required
      />
      <input
        className="w-full rounded-2xl border border-slate-800 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
        placeholder="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        className="w-full rounded-2xl border border-slate-800 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
        placeholder="Phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />
      <input
        className="w-full rounded-2xl border border-slate-800 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
        placeholder="Company"
        name="companyName"
        value={formData.companyName}
        onChange={handleChange}
      />
      <select
        className="md:col-span-2 w-full rounded-2xl border border-slate-800 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
        name="serviceInterested"
        value={formData.serviceInterested}
        onChange={handleChange}
        required
      >
        <option value="" disabled>
          Service Interested
        </option>
        {['SEO / AEO / GEO', 'Web Development', 'App Development', 'AI Services', 'Growth Strategy'].map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <textarea
        className="md:col-span-2 w-full rounded-2xl border border-slate-800 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
        placeholder="Message"
        name="message"
        rows={4}
        value={formData.message}
        onChange={handleChange}
        required
      />
      <div className="md:col-span-2">
        <Button variant="primary" className="w-full md:w-auto" type="submit">
          Send Message
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
