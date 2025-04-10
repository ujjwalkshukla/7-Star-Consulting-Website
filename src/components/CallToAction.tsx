
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CallToActionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonLink?: string;
  className?: string;
  variant?: 'default' | 'gradient' | 'dark';
}

const CallToAction = ({
  title = "Ready to transform your data strategy?",
  description = "Book a free consultation with our data experts and discover how we can help you leverage your data for business growth.",
  primaryButtonText = "Book a Consultation",
  secondaryButtonText = "Learn More",
  primaryButtonLink = "/contact",
  secondaryButtonLink = "/solutions",
  className = "",
  variant = 'default',
}: CallToActionProps) => {
  
  const variantStyles = {
    default: "bg-white",
    gradient: "bg-gradient-to-r from-7star-light-gray to-7star-soft-purple",
    dark: "bg-7star-dark-purple text-white",
  };
  
  const descriptionStyles = {
    default: "text-muted-foreground",
    gradient: "text-muted-foreground",
    dark: "text-white/80",
  };

  return (
    <div className={`${variantStyles[variant]} ${className} rounded-2xl px-6 py-12 md:py-16 md:px-10 text-center`}>
      <div className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
        <p className={`text-lg ${descriptionStyles[variant]} max-w-2xl mx-auto`}>{description}</p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button asChild size="lg" className="w-full sm:w-auto flex items-center gap-2">
            <Link to={primaryButtonLink}>
              <Calendar size={18} />
              {primaryButtonText}
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className={`w-full sm:w-auto ${variant === 'dark' ? 'border-white/20 hover:bg-white/10' : ''}`}>
            <Link to={secondaryButtonLink}>{secondaryButtonText}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
