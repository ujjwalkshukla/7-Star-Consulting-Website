
import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Send,
  CheckCircle2
} from 'lucide-react';
import { toast } from 'sonner';

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Message sent successfully!", {
        description: "We'll get back to you as soon as possible."
      });
      
      // Reset form
      setFormState({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
      });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="pt-20">
      <PageHeader 
        title="Contact Us"
        subtitle="Have questions about our services? We're here to help you navigate the complex world of data."
        className="bg-7star-light-gray"
      />

      {/* Contact Information & Form */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
              
              <div className="space-y-6">
                <ContactInfoItem 
                  icon={<Mail />}
                  title="Email"
                  content="info@7starconsulting.com"
                  href="mailto:info@7starconsulting.com"
                />
                
                <ContactInfoItem 
                  icon={<Phone />}
                  title="Phone"
                  content="+1 (555) 123-4567"
                  href="tel:+15551234567"
                />
                
                <ContactInfoItem 
                  icon={<MapPin />}
                  title="Office"
                  content="123 Tech Avenue, San Francisco, CA 94107"
                  href="https://maps.google.com"
                />
                
                <div className="pt-4">
                  <h3 className="text-lg font-semibold mb-4">Prefer to schedule a call?</h3>
                  <Button className="w-full flex items-center justify-center gap-2">
                    <Calendar size={18} />
                    Book a Consultation
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white rounded-xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project or inquiry..."
                    rows={5}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full flex items-center justify-center gap-2" 
                  disabled={isSubmitting || isSubmitted}
                >
                  {isSubmitting ? (
                    <>Sending Message...</>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle2 size={18} />
                      Message Sent
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pt-12 pb-24">
        <div className="container-custom">
          <div className="bg-7star-light-gray rounded-xl overflow-hidden h-[400px]">
            {/* Placeholder for Google Maps */}
            <div className="w-full h-full flex items-center justify-center bg-7star-light-gray">
              <div className="text-center">
                <MapPin size={48} className="text-7star-purple mx-auto mb-2" />
                <h3 className="text-xl font-semibold">Our Location</h3>
                <p className="text-muted-foreground">123 Tech Avenue, San Francisco, CA 94107</p>
                <div className="mt-4">
                  <Button variant="outline" size="sm">
                    Open in Google Maps
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Contact Info Item Component
const ContactInfoItem = ({ 
  icon, 
  title, 
  content,
  href
}: { 
  icon: React.ReactNode, 
  title: string, 
  content: string,
  href?: string
}) => {
  const contentElement = href ? (
    <a 
      href={href} 
      className="text-7star-purple hover:underline"
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {content}
    </a>
  ) : (
    <span>{content}</span>
  );

  return (
    <div className="flex">
      <div className="mr-4 bg-7star-light-gray p-3 rounded-full text-7star-purple">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p>{contentElement}</p>
      </div>
    </div>
  );
};

export default ContactPage;
