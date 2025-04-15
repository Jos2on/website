import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Brain, MessageSquare, Database, ArrowRight, Mail, Code, Phone, Bot } from 'lucide-react';

function Features() {
  const leadGenRef = useRef<HTMLDivElement>(null);
  const workflowRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-mail');
          }
        });
      },
      { threshold: 0.5 }
    );

    if (leadGenRef.current) {
      observer.observe(leadGenRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-black text-white font-mono">
      {/* Email AI Automation Section */}
      <section className="min-h-screen flex items-center relative pt-24">
        <div className="absolute inset-0 bg-radial-gradient z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-8 leading-none">Email AI Automation</h2>
              <p className="text-xl text-gray-300 mb-8">
                Personalized outreach. On autopilot.
              </p>
              <Link
                to="/features/lead-generation"
                className="inline-flex items-center text-lg font-semibold bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full transition-all duration-300 border border-white/10"
              >
                Learn More <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div ref={leadGenRef} className="w-full md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="motion-lines"></div>
                <Mail className="w-24 h-24 text-white mail-icon relative z-20" />
                <Mail className="w-16 h-16 text-gray-500 absolute -left-12 -top-6 mail-icon-back z-10" />
                <Mail className="w-12 h-12 text-gray-600 absolute -left-16 top-8 mail-icon-back z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Voice Agent Section */}
      <section className="min-h-screen flex items-center relative">
        <div className="absolute inset-0 bg-radial-gradient z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-8 leading-none">AI Voice Agent</h2>
              <p className="text-xl text-gray-300 mb-8">
                Every call, every insight—effortlessly in sync.
              </p>
              <Link
                to="/features/crm-integration"
                className="inline-flex items-center text-lg font-semibold bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full transition-all duration-300 border border-white/10"
              >
                Learn More <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="w-full md:w-1/2 flex justify-center relative">
              <div className="relative">
                <Phone className="w-32 h-32 text-white" />
                <div className="absolute -top-4 -right-4 bg-white/10 rounded-full p-2">
                  <Bot className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chat Agents Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-8 leading-none">AI Chat Agents</h2>
              <p className="text-xl text-gray-300 mb-8">
                Seamless conversations, smarter connections.
              </p>
              <Link
                to="/features/ai-chat-agents"
                className="inline-flex items-center text-lg font-semibold bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full transition-all duration-300 border border-white/10"
              >
                Learn More <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="w-full md:w-1/2 flex justify-center overflow-x-auto">
              <svg ref={workflowRef} width="400" height="300" className="workflow-diagram scale-50 md:scale-100" viewBox="0 0 500 300">
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#4B5563', stopOpacity: 0.7 }} />
                    <stop offset="100%" style={{ stopColor: '#9CA3AF', stopOpacity: 0.7 }} />
                  </linearGradient>
                </defs>
                <path d="M 50,150 H 150" stroke="url(#gradient)" strokeWidth="2" fill="none" />
                <path d="M 150,150 L 250,75" stroke="url(#gradient)" strokeWidth="2" fill="none" />
                <path d="M 150,150 L 250,225" stroke="url(#gradient)" strokeWidth="2" fill="none" />
                <path d="M 250,75 H 350" stroke="url(#gradient)" strokeWidth="2" fill="none" />
                <path d="M 250,225 H 350" stroke="url(#gradient)" strokeWidth="2" fill="none" />
                <circle cx="50" cy="150" r="12" fill="#4B5563" />
                <circle cx="150" cy="150" r="12" fill="#6B7280" />
                <circle cx="250" cy="75" r="12" fill="#9CA3AF" />
                <circle cx="350" cy="75" r="12" fill="#9CA3AF" />
                <circle cx="250" cy="225" r="12" fill="#10a37f" />
                <circle cx="350" cy="225" r="12" fill="#10a37f" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Website Creation Section */}
      <section className="min-h-screen flex items-center relative">
        <div className="absolute inset-0 bg-radial-gradient z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-8 leading-none">Custom Website Creation</h2>
              <p className="text-xl text-gray-300 mb-8">
                Stunning designs, seamless functionality. Your vision, our expertise.
              </p>
              <Link
                to="/features/custom-website-creation"
                className="inline-flex items-center text-lg font-semibold bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full transition-all duration-300 border border-white/10"
              >
                Learn More <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <Code className="w-32 h-32 text-white" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;