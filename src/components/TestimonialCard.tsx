
import { QuoteIcon } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarSrc?: string;
  className?: string;
}

const TestimonialCard = ({
  quote,
  author,
  role,
  company,
  avatarSrc,
  className = "",
}: TestimonialCardProps) => {
  return (
    <div className={`bg-white p-6 md:p-8 rounded-xl shadow-md ${className}`}>
      <div className="flex flex-col h-full">
        <div className="text-7star-purple mb-4">
          <QuoteIcon size={32} />
        </div>
        
        <p className="text-foreground text-lg italic mb-6">"{quote}"</p>
        
        <div className="mt-auto flex items-center">
          {avatarSrc ? (
            <img 
              src={avatarSrc} 
              alt={author} 
              className="w-12 h-12 rounded-full object-cover mr-4"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-7star-soft-purple flex items-center justify-center mr-4">
              <span className="text-7star-purple font-medium text-xl">
                {author.charAt(0)}
              </span>
            </div>
          )}
          
          <div>
            <div className="font-semibold">{author}</div>
            <div className="text-sm text-muted-foreground">
              {role}, {company}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
