import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Code,
  Globe,
  Layout,
  Palette,
  Zap,
  Database,
  Play,
  Search,
  LayoutTemplate,
  Rocket
} from 'lucide-react';

function CustomWebsiteCreation() {
  const benefits = [
    "Immersive designs with smooth, modern animations",
    "Seamless workflow automation",
    "Real‑time database connectivity",
    "Fluid, interactive animations",
    "SEO‑optimized and lightning fast"
  ];

  const features = [
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Modern Layouts",
      description: "Clean, intuitive structures that drive engagement"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Custom Styling",
      description: "Bespoke visual identity tailored to your brand"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Workflow Integration",
      description: "Automate forms, actions & backend logic with ease"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database Connectivity",
      description: "Connect to Airtable, Notion, Google Sheets, or your own DB"
    },
    {
      icon: <Play className="w-6 h-6" />,
      title: "Advanced Animations",
      description: "Smooth transitions, scroll effects & interactive UI"
    },
  ]; 

  const steps = [
    {
      label: "1. Discovery",
      desc: "Share your goals & brand vision",
      icon: <Search className="w-8 h-8 mx-auto text-blue-400 mb-2" />
    },
    {
      label: "2. Design & Build",
      desc: "We craft layouts, workflows & animations",
      icon: <LayoutTemplate className="w-8 h-8 mx-auto text-blue-400 mb-2" />
    },
    {
      label: "3. Launch & Optimize",
      desc: "Deploy, connect data, and refine for performance",
      icon: <Rocket className="w-8 h-8 mx-auto text-blue-400 mb-2" />
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-mono pt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-900/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <Link to="/features" className="inline-flex items-center text-gray-400 hover:text-white mb-12">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Features
        </Link>

        <div className="flex items-center mb-12">
          <div className="glow-effect text-blue-400 mr-6">
            <Code className="w-12 h-12" />
          </div>
          <h1 className="text-5xl font-bold gradient-text">Custom Website Creation</h1>
        </div>

        {/* Intro & Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <p className="text-xl text-gray-300 leading-relaxed">
              Build stunning, high‑performance websites — complete with automated workflows, real‑time data connections, and immersive animations that captivate users.
            </p>

            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-6">Key Benefits</h2>
              <ul className="space-y-4">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-start">
                    <Globe className="w-6 h-6 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-8">
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-6">Features</h2>
              <div className="grid gap-6">
                {features.map((f, i) => (
                  <div key={i} className="flex items-start">
                    <div className="text-blue-400 mr-4 mt-1">{f.icon}</div>
                    <div>
                      <h3 className="font-semibold mb-1">{f.title}</h3>
                      <p className="text-gray-400">{f.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Process Overview */}
        <div className="bg-white/5 rounded-2xl p-8 border border-white/10 mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {steps.map((step, i) => (
              <div key={i} className="space-y-3">
                {step.icon}
                <div className="text-blue-400 font-mono font-bold">{step.label}</div>
                <p className="text-gray-300">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomWebsiteCreation;
