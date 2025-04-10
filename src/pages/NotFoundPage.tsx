
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-7star-light-gray p-4">
      <div className="text-center">
        <div className="text-7star-purple text-9xl font-bold mb-4">404</div>
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Page Not Found</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="flex items-center">
            <Link to="/">
              <Home size={18} className="mr-2" />
              Back to Home
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg">
            <Link to="/contact" className="flex items-center">
              <ArrowLeft size={18} className="mr-2" />
              Contact Support
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
