import React from 'react';

const variants = {
  primary: 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg shadow-indigo-600/25',
  outline: 'border border-slate-700 text-slate-200 hover:border-slate-500',
  glow: 'bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-600 text-white shadow-lg shadow-indigo-500/40'
};

const Button = ({ children, variant = 'primary', className = '', type = 'button', ...props }) => {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center rounded-2xl px-5 py-2.5 text-sm font-extrabold transition-transform duration-200 hover:-translate-y-0.5 hover:scale-[1.02] ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
