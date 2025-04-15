import React, { useEffect, useState, useRef } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Bot, Brain, MessageSquare, Database, ArrowRight, ChevronRight, X, ExternalLink } from 'lucide-react';
import About from './pages/About';
import Features from './pages/Features';
import AIChatAgents from './pages/features/AIChatAgents';
import LeadGeneration from './pages/features/LeadGeneration';
import CRMIntegration from './pages/features/CRMIntegration';
import CustomWebsiteCreation from './pages/features/CustomWebsiteCreation';
import ContactPanel from './components/ContactPanel';

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const fullText = 'Automation, Elevated.';

  useEffect(() => {
    setIsVisible(true);
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const solutions = [
    {
      title: "B2B Solutions",
      description: "Empowering enterprises with cutting-edge AI technology",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Custom Solutions",
      description: "Tailored AI implementations for your specific needs",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Seamless Integration",
      description: "Connect with your existing systems effortlessly",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden font-mono">
      <ContactPanel isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      <div className="animated-bg">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="pulse-dot"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i * 0.5}s`
            }}
          />
        ))}
      </div>

      <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="hero-gradient absolute inset-0 bg-radial-gradient"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-6xl md:text-8xl font-bold gradient-text mb-8 tracking-tight typewriter-cursor">
              {text}
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              Transform your operations with AI that connects it all. Fast, seamless, and built for results.
            </p>
            <button 
              onClick={() => navigate('/features')}
              className="bg-white/10 backdrop-blur-lg text-white px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300 flex items-center mx-auto text-lg font-semibold border border-white/10"
            >
              Get Started <ChevronRight className="ml-2 w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-900/10 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="space-y-32">
            {solutions.map((solution, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 items-center relative">
                <div className="absolute inset-0 bg-radial-gradient opacity-50"></div>
                <div className="w-full md:w-1/2 cursor-pointer relative z-10" onClick={() => navigate('/features')}>
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="rounded-2xl object-cover w-full h-64 transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="w-full md:w-1/2 relative z-10">
                  <h3 className="text-2xl font-semibold mb-4 gradient-text">{solution.title}</h3>
                  <p className="text-gray-400 mb-6">{solution.description}</p>
                  <button
                    onClick={() => navigate('/features')}
                    className="bg-white/10 backdrop-blur-lg text-white px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300 flex items-center text-lg font-semibold border border-white/10"
                  >
                    Learn More <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full z-50 bg-black/30 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <Bot className="w-8 h-8 text-white" />
                <span className="ml-2 text-xl font-bold tracking-wider text-white">ABT.AI</span>
              </Link>
            </div>
            <div className="flex items-center space-x-8">
              <Link to="/features" className="text-gray-300 hover:text-white transition-colors">Features</Link>
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white/10 backdrop-blur-lg text-white px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300 flex items-center text-sm font-semibold border border-white/10"
              >
                Book a Call
              </button>
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/features/ai-chat-agents" element={<AIChatAgents />} />
        <Route path="/features/lead-generation" element={<LeadGeneration />} />
        <Route path="/features/crm-integration" element={<CRMIntegration />} />
        <Route path="/features/custom-website-creation" element={<CustomWebsiteCreation />} />
      </Routes>

      <ContactPanel isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default App;