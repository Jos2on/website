import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MessageSquare, Target, Users, BarChart } from 'lucide-react';

function LeadGeneration() {
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
            <MessageSquare className="w-12 h-12" />
          </div>
          <h1 className="text-5xl font-bold gradient-text">Email AI Automation</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <p className="text-xl text-gray-300 leading-relaxed">
              Launch high-impact email campaigns effortlessly with AI-powered personalization that drives better results. Our automation makes it fast and easy to create tailored messages that connect with each recipient — at scale.
            </p>

            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-6">Key Benefits</h2>
              <ul className="space-y-4">
                {[
                  "Higher email engagement and click-through rates",
                  "Personalized messaging at scale with minimal effort",
                  "Faster campaign execution with AI automation",
                  "Improved ROI through smarter targeting and timing"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Target className="w-6 h-6 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-6">Features</h2>
              <div className="grid gap-6">
                {[
                  {
                    icon: <Users className="w-6 h-6" />,
                    title: "AI-Powered Personalization",
                    description: "Create dynamic, hyper-relevant emails based on user behavior, preferences, and history"
                  },
                  {
                    icon: <BarChart className="w-6 h-6" />,
                    title: "Analytics Dashboard",
                    description: "Track open rates, CTR and delivery rates"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-blue-400 mr-4 mt-1">{feature.icon}</div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-6">Seamless Integrations</h2>
              <ul className="space-y-3 text-gray-300">
                <li>• Connexion to your database</li>
                <li>• Analytics tools connection</li>
                <li>• Custom webhook support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeadGeneration;