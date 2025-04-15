import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Database, Zap } from 'lucide-react';

function CRMIntegration() {
  return (
    <div className="min-h-screen bg-black text-white font-mono pt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-900/10 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <Link to="/features" className="inline-flex items-center text-gray-400 hover:text-white mb-12">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Features
        </Link>

        <div className="flex items-center mb-12">
          <div className="glow-effect text-blue-400 mr-6">
            <Database className="w-12 h-12" />
          </div>
          <h1 className="text-5xl font-bold gradient-text">AI Voice Agent</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left column */}
          <div className="space-y-8">
            <p className="text-xl text-gray-300 leading-relaxed">
              Never miss a call again—our AI voice agents answer inquiries, capture data, and book appointments by syncing directly with your calendars and CRM.
            </p>

            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-6">Key Benefits</h2>
              <ul className="space-y-4">
                {[
                  "24/7 natural, human‑like call handling",
                  "Zero missed opportunities",
                  "Instant appointment booking via calendar sync",
                  "Consistent, professional voice experience"
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    <Zap className="w-6 h-6 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-8">
            {/* Features */}
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-6">Features</h2>
              <div className="grid gap-6">
                {[
                  {
                    icon: <Zap className="w-6 h-6" />,
                    title: "Real‑Time Voice AI",
                    description: "Understands caller intent and responds naturally."
                  },
                  {
                    icon: <Zap className="w-6 h-6" />,
                    title: "Smart Call Routing",
                    description: "Automatically routes or escalates calls based on your rules."
                  },
                  {
                    icon: <Zap className="w-6 h-6" />,
                    title: "Data Capture & Logging",
                    description: "Logs call details directly into your CRM for full visibility."
                  },
                  {
                    icon: <Zap className="w-6 h-6" />,
                    title: "Multi‑Language Support",
                    description: "Handles conversations in multiple languages out of the box."
                  },
                  {
                    icon: <Zap className="w-6 h-6" />,
                    title: "Voice Options",
                    description: "Choose from a variety of AI‑generated voices to match your brand."
                  },
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="text-blue-400 mr-4 mt-1">{feature.icon}</div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Video Example Placeholder */}
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-6">See It In Action</h2>
              <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-xl overflow-hidden">
                {/* Replace the div below with your actual video embed */}
                <div className="flex items-center justify-center h-full text-gray-500 text-sm">
                  Video demo coming soon...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CRMIntegration;
