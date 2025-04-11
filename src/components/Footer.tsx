
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Linkedin, Twitter, Github, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    toast.success("Thank you for subscribing!", {
      description: "We'll keep you updated with our latest insights."
    });
    
    setEmail('');
  };

  return (
    <footer className="bg-7star-dark-purple text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-playfair font-bold">
                <span className="text-7star-purple">7</span> Star Consulting
              </span>
            </Link>
            <p className="text-white/80 text-sm">
              Next-generation data consultancy offering Analytics, Engineering, and AI-driven solutions for enterprise clients.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="mailto:info@7starconsulting.com" className="text-white/70 hover:text-white transition-colors">
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/solutions/business-intelligence" className="text-white/70 hover:text-white transition-colors">
                  Business Intelligence
                </Link>
              </li>
              <li>
                <Link to="/solutions/data-migration" className="text-white/70 hover:text-white transition-colors">
                  Data Migration
                </Link>
              </li>
              <li>
                <Link to="/solutions/genai" className="text-white/70 hover:text-white transition-colors">
                  GenAI for Business
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Industries</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/industries/healthcare" className="text-white/70 hover:text-white transition-colors">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link to="/industries/retail" className="text-white/70 hover:text-white transition-colors">
                  Retail
                </Link>
              </li>
              <li>
                <Link to="/industries/finance" className="text-white/70 hover:text-white transition-colors">
                  Finance
                </Link>
              </li>
              <li>
                <Link to="/industries/travel-hospitality" className="text-white/70 hover:text-white transition-colors">
                  Travel & Hospitality
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe to our newsletter</h3>
            <p className="text-white/70 text-sm mb-4">
              Get the latest insights on data analytics, engineering, and AI delivered to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full">
                Subscribe
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-white/60">
            © {new Date().getFullYear()} 7 Star Consulting. All rights reserved. © Ujjwal Kumar Shukla
          </div>
          <div className="flex items-center gap-6 text-sm text-white/60">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
