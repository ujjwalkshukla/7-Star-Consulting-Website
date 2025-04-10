
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface IndustryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  imageSrc?: string;
  className?: string;
}

const IndustryCard = ({
  title,
  description,
  icon,
  link,
  imageSrc,
  className = "",
}: IndustryCardProps) => {
  return (
    <div className={`relative overflow-hidden rounded-xl group ${className}`}>
      {/* Background Image or Color */}
      {imageSrc ? (
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-7star-dark-purple to-7star-secondary-purple"></div>
      )}
      
      {/* Content */}
      <div className="relative z-10 p-6 md:p-8 flex flex-col h-full min-h-[280px]">
        <div className="text-white mb-4">{icon}</div>
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-white/90 mb-6">{description}</p>
        
        <Button asChild variant="outline" className="mt-auto bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white w-full md:w-auto">
          <Link to={link} className="flex items-center justify-center">
            Learn more <ArrowRight size={16} className="ml-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default IndustryCard;
