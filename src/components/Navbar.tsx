
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Calendar } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-white/90 shadow-md backdrop-blur-sm' : 'py-5 bg-transparent'}`}>
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-playfair font-bold">
            <span className="text-7star-purple">7</span> Star Consulting
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <NavLink to="/">Home</NavLink>
          <NavDropdown 
            title="Solutions"
            links={[
              { label: 'Business Intelligence', to: '/solutions/business-intelligence' },
              { label: 'Data Migration', to: '/solutions/data-migration' },
              { label: 'GenAI for Business', to: '/solutions/genai' }
            ]}
          />
          <NavDropdown 
            title="Industries"
            links={[
              { label: 'Healthcare', to: '/industries/healthcare' },
              { label: 'Retail', to: '/industries/retail' },
              { label: 'Finance', to: '/industries/finance' },
              { label: 'Travel & Hospitality', to: '/industries/travel-hospitality' }
            ]}
          />
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/resources">Resources</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <div className="hidden lg:block">
          <Button className="flex items-center gap-2" size="lg">
            <Calendar size={16} />
            Book a Consultation
          </Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="lg:hidden p-2 rounded-md"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[100vh] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="container-custom py-4 flex flex-col gap-4">
          <MobileNavLink to="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
          <MobileNavDropdown 
            title="Solutions"
            links={[
              { label: 'Business Intelligence', to: '/solutions/business-intelligence' },
              { label: 'Data Migration', to: '/solutions/data-migration' },
              { label: 'GenAI for Business', to: '/solutions/genai' }
            ]}
            onClick={() => setIsOpen(false)}
          />
          <MobileNavDropdown 
            title="Industries"
            links={[
              { label: 'Healthcare', to: '/industries/healthcare' },
              { label: 'Retail', to: '/industries/retail' },
              { label: 'Finance', to: '/industries/finance' },
              { label: 'Travel & Hospitality', to: '/industries/travel-hospitality' }
            ]}
            onClick={() => setIsOpen(false)}
          />
          <MobileNavLink to="/about" onClick={() => setIsOpen(false)}>About Us</MobileNavLink>
          <MobileNavLink to="/resources" onClick={() => setIsOpen(false)}>Resources</MobileNavLink>
          <MobileNavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
          
          <div className="py-2">
            <Button className="w-full flex items-center justify-center gap-2" size="lg">
              <Calendar size={16} />
              Book a Consultation
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

// Desktop Navigation Components
const NavLink = ({ to, children }: { to: string, children: React.ReactNode }) => (
  <Link 
    to={to} 
    className="text-foreground hover:text-7star-purple transition-colors duration-300 font-medium"
  >
    {children}
  </Link>
);

const NavDropdown = ({ 
  title, 
  links 
}: { 
  title: string, 
  links: { label: string, to: string }[] 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button 
        className="flex items-center gap-1 text-foreground hover:text-7star-purple transition-colors duration-300 font-medium"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      <div className={`absolute top-full left-0 mt-1 bg-white rounded-md shadow-lg overflow-hidden transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} min-w-[220px]`}>
        <div className="py-2">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block px-4 py-2 text-foreground hover:bg-7star-light-gray hover:text-7star-purple transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

// Mobile Navigation Components
const MobileNavLink = ({ 
  to, 
  children,
  onClick
}: { 
  to: string, 
  children: React.ReactNode,
  onClick?: () => void
}) => (
  <Link 
    to={to} 
    className="block py-2 text-lg font-medium"
    onClick={onClick}
  >
    {children}
  </Link>
);

const MobileNavDropdown = ({ 
  title, 
  links,
  onClick
}: { 
  title: string, 
  links: { label: string, to: string }[],
  onClick?: () => void
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-1">
      <button 
        className="flex items-center justify-between w-full py-2 text-lg font-medium"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 pl-4 border-l-2 border-7star-light-gray ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="block py-2 hover:text-7star-purple transition-colors duration-300"
            onClick={onClick}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
