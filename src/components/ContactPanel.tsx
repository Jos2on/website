import React from 'react';
import { X, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ContactPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

function ContactPanel({ isOpen, onClose }: ContactPanelProps) {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 overflow-y-auto">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
        <div className="flex justify-between items-center mb-12 sticky top-0 bg-black py-4 z-10">
          <h2 className="text-3xl font-bold gradient-text">{t('Contact form')}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={(e) => {
          e.preventDefault();
          alert('Thank you! We will contact you shortly.');
          onClose();
        }}>
          <div className="space-y-12">
            {/* Personal Information Section */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@company.com"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Company Inc."
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Project Information Section */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">Project Information</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    What specific problems are you looking to solve? <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Please describe your current challenges and desired outcomes"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Optional: Share any other relevant details about your project or requirements"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <button
              type="submit"
              className="w-full bg-white/10 backdrop-blur-lg text-white px-6 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center text-lg font-semibold border border-white/10"
            >
              Book Your Consultation <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactPanel;