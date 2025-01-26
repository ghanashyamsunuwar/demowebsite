import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Shield, Zap, Globe, Users } from 'lucide-react';
import insta from './assets/insta.png'
import whatsapp from './assets/whatsapp.png'
import facebook from './assets/facebook.png'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Hero Section */}
      <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center space-x-2"
        >
          <Globe className="w-8 h-8 text-blue-400" />
          <span className="text-xl font-bold">GlobalTech</span>
        </motion.div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
          <a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</a>
          <a href="#testimonials" className="hover:text-blue-400 transition-colors">Testimonials</a>
          <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full transition-colors">
            Get Started
          </button>
        </div>
      </nav>

      <header className="container mx-auto px-6 py-16 md:py-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Your Business with AI-Powered Analytics
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Unlock insights, drive growth, and make data-driven decisions with our enterprise-grade analytics platform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-full flex items-center space-x-2 transition-colors w-full sm:w-auto">
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-gray-500 hover:border-blue-400 px-8 py-3 rounded-full transition-colors w-full sm:w-auto">
              Watch Demo
            </button>
          </div>
        </motion.div>
      </header>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-24 bg-slate-800/50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          <FeatureCard 
            icon={<Zap className="w-12 h-12 text-blue-400" />}
            title="Real-time Analytics"
            description="Get instant insights with our powerful real-time analytics engine."
          />
          <FeatureCard 
            icon={<Shield className="w-12 h-12 text-blue-400" />}
            title="Enterprise Security"
            description="Bank-grade security with end-to-end encryption and compliance."
          />
          <FeatureCard 
            icon={<Users className="w-12 h-12 text-blue-400" />}
            title="Team Collaboration"
            description="Work together seamlessly with built-in collaboration tools."
          />
        </motion.div>
      </section>

      {/* Social Proof */}
      <section className="container mx-auto px-6 py-24">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
            <img src={facebook} alt="Company 1" className="h-14" />
            <img src={insta} alt="Company 2" className="h-14" />
            <img src={whatsapp} alt="Company 3" className="h-14" />
          </div>
          
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-6 py-24 bg-slate-800/50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-300">Start free, upgrade when you need to</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard 
            title="Starter"
            price="$0"
            features={[
              "Up to 1,000 events/month",
              "Basic analytics",
              "1 team member",
              "Community support"
            ]}
            buttonText="Get Started Free"
          />
          <PricingCard 
            title="Pro"
            price="$49"
            features={[
              "Up to 100,000 events/month",
              "Advanced analytics",
              "5 team members",
              "Priority support"
            ]}
            buttonText="Start Pro Trial"
            highlighted={true}
          />
          <PricingCard 
            title="Enterprise"
            price="Custom"
            features={[
              "Unlimited events",
              "Custom analytics",
              "Unlimited team members",
              "24/7 dedicated support"
            ]}
            buttonText="Contact Sales"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-24">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400">Features</a></li>
                <li><a href="#" className="hover:text-blue-400">Pricing</a></li>
                <li><a href="#" className="hover:text-blue-400">Security</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400">About</a></li>
                <li><a href="#" className="hover:text-blue-400">Careers</a></li>
                <li><a href="#" className="hover:text-blue-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400">Blog</a></li>
                <li><a href="#" className="hover:text-blue-400">Documentation</a></li>
                <li><a href="#" className="hover:text-blue-400">Help Center</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400">Privacy</a></li>
                <li><a href="#" className="hover:text-blue-400">Terms</a></li>
                <li><a href="#" className="hover:text-blue-400">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2024 GlobalTech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-6 rounded-xl bg-slate-800 border border-slate-700 hover:border-blue-500 transition-colors"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
}

function PricingCard({ title, price, features, buttonText, highlighted = false }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`p-8 rounded-xl ${
        highlighted 
          ? 'bg-blue-600 border-2 border-blue-400' 
          : 'bg-slate-800 border border-slate-700'
      }`}
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold">{price}</span>
        {price !== "Custom" && <span className="text-gray-400">/month</span>}
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2">
            <CheckCircle2 className="w-5 h-5 text-blue-400" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button 
        className={`w-full py-3 rounded-full transition-colors ${
          highlighted
            ? 'bg-white text-blue-600 hover:bg-gray-100'
            : 'bg-blue-500 hover:bg-blue-600'
        }`}
      >
        {buttonText}
      </button>
    </motion.div>
  );
}

export default App;