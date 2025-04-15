import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-900/10 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-5xl font-bold gradient-text mb-12">About ABT.AI</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-400 leading-relaxed">
              At ABT.AI, our mission is to simplify how businesses communicate, automate, and scale. We create powerful AI-driven experiences — from chat and voice agents to personalized campaigns and smart websites — making enterprise-grade automation effortless, elegant, and accessible for teams of all sizes.
            </p>
            
            <div className="aspect-w-16 aspect-h-9">
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800"
                alt="AI Technology"
                className="rounded-lg object-cover w-full h-64"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
            <p className="text-gray-400 leading-relaxed">
              We blend cutting-edge AI with intuitive design to build solutions that are as powerful as they are practical. Whether it's chat agents, voice automation, or smart websites, we collaborate closely with clients to deliver seamless, scalable systems that solve real-world problems — fast.
            </p>
            
            <div className="aspect-w-16 aspect-h-9">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800"
                alt="AI Design Process"
                className="rounded-lg object-cover w-full h-64"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;