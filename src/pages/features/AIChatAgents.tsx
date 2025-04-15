import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, MessageSquare, Bot, Calendar, BookOpen, Users, Sparkles } from 'lucide-react';

function AIChatAgents() {
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
            <Brain className="w-12 h-12" />
          </div>
          <h1 className="text-5xl font-bold gradient-text">AI Chat Agents</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left column */}
          <div className="space-y-8">
            <p className="text-xl text-gray-300 leading-relaxed">
              Embed intelligent, context‑aware chat agents on your site to answer questions, pull info from your knowledge base, and book appointments—seamlessly integrated with your CRM.
            </p>

            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-6">Key Benefits</h2>
              <ul className="space-y-4">
                {[
                  "24/7 instant customer support",
                  "Reduced response time and support costs",
                  "Automated appointment booking via calendar sync",
                  "Accurate info from your knowledge base",
                  "Smooth handoff to human agents when needed"
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    <Sparkles className="w-6 h-6 text-blue-400 mr-3 mt-1 flex-shrink-0" />
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
                    icon: <MessageSquare className="w-6 h-6" />,
                    title: "Context Retention",
                    description: "Maintains conversation flow across visits."
                  },
                  {
                    icon: <Calendar className="w-6 h-6" />,
                    title: "Smart Appointment Booking",
                    description: "Connects to your calendars for real-time scheduling."
                  },
                  {
                    icon: <BookOpen className="w-6 h-6" />,
                    title: "Knowledge Base Access",
                    description: "Fetches answers directly from your docs."
                  },
                  {
                    icon: <Users className="w-6 h-6" />,
                    title: "Human Escalation",
                    description: "Automatically routes complex queries to agents."
                  },
                  {
                    icon: <Bot className="w-6 h-6" />,
                    title: "Custom Branding",
                    description: "Tailor tone, style, and UI to match your brand."
                  },
                  {
                    icon: <Bot className="w-6 h-6" />,
                    title: "Multi‑Language Support",
                    description: "Converse in multiple languages out of the box."
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

            {/* Video Demo Placeholder */}
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-6">See It In Action</h2>
              <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-xl overflow-hidden">
                {/* Replace this with your video embed (iframe, video tag, etc.) */}
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

export default AIChatAgents;
