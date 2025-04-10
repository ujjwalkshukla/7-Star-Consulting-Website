
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface SolutionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  features?: string[];
  className?: string;
}

const SolutionCard = ({
  title,
  description,
  icon,
  link,
  features = [],
  className = "",
}: SolutionCardProps) => {
  return (
    <div className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 ${className}`}>
      <div className="flex flex-col h-full">
        <div className="mb-5 text-7star-purple">{icon}</div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        
        {features.length > 0 && (
          <ul className="mb-6 space-y-2 mt-auto">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-muted-foreground">
                <span className="mr-2 text-7star-purple">•</span>
                {feature}
              </li>
            ))}
          </ul>
        )}
        
        <Button asChild variant="link" className="mt-auto p-0 justify-start text-7star-purple hover:text-7star-secondary-purple">
          <Link to={link} className="flex items-center">
            Learn more <ArrowRight size={16} className="ml-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default SolutionCard;
