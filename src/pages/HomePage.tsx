import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CallToAction from '@/components/CallToAction';
import SolutionCard from '@/components/SolutionCard';
import TestimonialCard from '@/components/TestimonialCard';
import StatCard from '@/components/StatCard';
import { 
  BarChart3, 
  Database, 
  BrainCircuit, 
  ArrowRight, 
  CheckCircle2,
  Building2,
  Users,
  Award
} from 'lucide-react';

const HomePage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Updated with light blue background */}
      <section className="relative bg-[#D3E4FD] min-h-[90vh] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531297484001-80022131f5a1')] bg-cover bg-center opacity-10"></div>
        </div>
        <div className="container-custom relative z-10 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-7star-dark-purple mb-6 animate-fade-in">
              Future-Proof Your 
              <span className="text-7star-purple"> Data Strategy</span>
            </h1>
            <p className="text-xl md:text-2xl text-7star-dark-purple/80 mb-8 animate-slide-in-bottom" style={{ animationDelay: '0.2s' }}>
              7 Star Consulting delivers enterprise-grade data solutions that transform raw data into boardroom insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-bottom" style={{ animationDelay: '0.4s' }}>
              <Button asChild size="lg">
                <Link to="/contact">Book a Free Consultation</Link>
              </Button>
              <Button asChild variant="outline" className="border-7star-dark-purple/30 text-7star-dark-purple hover:bg-7star-dark-purple/10">
                <Link to="/solutions">Explore Our Solutions</Link>
              </Button>
            </div>
            
            <div className="mt-12 md:mt-16 animate-slide-in-bottom" style={{ animationDelay: '0.6s' }}>
              <p className="text-7star-dark-purple/70 mb-4 text-sm">Trusted by industry leaders</p>
              <div className="flex flex-wrap gap-8 items-center">
                {/* Placeholder for client logos */}
                <div className="bg-7star-dark-purple/10 px-4 py-3 rounded-md">
                  <span className="text-7star-dark-purple/80 font-medium">ACME Health</span>
                </div>
                <div className="bg-7star-dark-purple/10 px-4 py-3 rounded-md">
                  <span className="text-7star-dark-purple/80 font-medium">RetailPro</span>
                </div>
                <div className="bg-7star-dark-purple/10 px-4 py-3 rounded-md">
                  <span className="text-7star-dark-purple/80 font-medium">FinTech Global</span>
                </div>
                <div className="bg-7star-dark-purple/10 px-4 py-3 rounded-md">
                  <span className="text-7star-dark-purple/80 font-medium">TravelSphere</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Solutions Section */}
      <section className="section bg-7star-light-gray">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="mb-4">Our Solutions</h2>
            <p className="max-w-2xl mx-auto">
              Comprehensive data services tailored to your business needs, from analytics to AI implementation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <SolutionCard
              title="Business Intelligence"
              description="Transform raw data into actionable insights with our BI solutions that drive strategic decision-making."
              icon={<BarChart3 size={36} />}
              link="/solutions/business-intelligence"
              features={[
                "Interactive dashboards",
                "Real-time data analytics",
                "Custom KPI reporting",
                "Power BI & Tableau expertise"
              ]}
              className="animate-slide-in-bottom"
            />
            
            <SolutionCard
              title="Data Migration"
              description="Seamlessly transition your data infrastructure with zero downtime and complete data integrity."
              icon={<Database size={36} />}
              link="/solutions/data-migration"
              features={[
                "Legacy to cloud migration",
                "Database optimization",
                "ETL/ELT pipeline creation",
                "Data warehouse architecture"
              ]}
              className="animate-slide-in-bottom delay-200"
            />
            
            <SolutionCard
              title="GenAI for Business"
              description="Harness the power of generative AI to create new business opportunities and optimize operations."
              icon={<BrainCircuit size={36} />}
              link="/solutions/genai"
              features={[
                "Custom AI model development",
                "Intelligent automation",
                "Natural language processing",
                "AI strategy consulting"
              ]}
              className="animate-slide-in-bottom delay-400"
            />
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link to="/solutions" className="flex items-center">
                View All Solutions <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Industry Tabs */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Tailored for Your Industry</h2>
            <p className="max-w-2xl mx-auto">
              We understand the unique data challenges and opportunities in your specific industry.
            </p>
          </div>
          
          <Tabs defaultValue="healthcare" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
                <TabsTrigger value="retail">Retail</TabsTrigger>
                <TabsTrigger value="finance">Finance</TabsTrigger>
                <TabsTrigger value="travel">Travel & Hospitality</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="healthcare" className="animate-fade-in">
              <Card>
                <CardContent className="p-6 md:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">Healthcare Data Solutions</h3>
                      <p className="mb-6">
                        Our healthcare data solutions enable providers to improve patient outcomes while maintaining 
                        compliance with regulations like HIPAA. From predictive analytics for hospital readmissions 
                        to AI-powered diagnostic tools, we're helping healthcare organizations leverage data for better care.
                      </p>
                      
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start">
                          <CheckCircle2 size={20} className="text-7star-purple mr-2 mt-1 flex-shrink-0" />
                          <span>HIPAA-compliant data architecture</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 size={20} className="text-7star-purple mr-2 mt-1 flex-shrink-0" />
                          <span>Predictive analytics for patient outcomes</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 size={20} className="text-7star-purple mr-2 mt-1 flex-shrink-0" />
                          <span>Electronic Health Record optimization</span>
                        </li>
                      </ul>
                      
                      <Button asChild>
                        <Link to="/industries/healthcare">Learn More</Link>
                      </Button>
                    </div>
                    
                    <div className="bg-7star-light-gray rounded-xl p-8 hidden md:block">
                      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
                          alt="Healthcare data visualization"
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="retail" className="animate-fade-in">
              <Card>
                <CardContent className="p-6 md:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">Retail Analytics</h3>
                      <p className="mb-6">
                        Our retail solutions help businesses optimize inventory management, personalize customer experiences, 
                        and forecast demand with precision. We combine transactional data, customer behavior, and external 
                        factors to drive sales and reduce costs.
                      </p>
                      
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start">
                          <CheckCircle2 size={20} className="text-7star-purple mr-2 mt-1 flex-shrink-0" />
                          <span>Customer segmentation & personalization</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 size={20} className="text-7star-purple mr-2 mt-1 flex-shrink-0" />
                          <span>Inventory optimization using AI</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 size={20} className="text-7star-purple mr-2 mt-1 flex-shrink-0" />
                          <span>Demand forecasting & trend analysis</span>
                        </li>
                      </ul>
                      
                      <Button asChild>
                        <Link to="/industries/retail">Learn More</Link>
                      </Button>
                    </div>
                    
                    <div className="bg-7star-light-gray rounded-xl p-8 hidden md:block">
                      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
                          alt="Retail analytics dashboard"
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="finance" className="animate-fade-in">
              <Card>
                <CardContent className="p-6 md:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">Financial Data Intelligence</h3>
                      <p className="mb-6">
                        For financial institutions, we build secure, compliant data ecosystems that enable risk assessment, 
                        fraud detection, and customer insights. Our solutions help banks and fintech companies make data-driven 
                        decisions while maintaining regulatory compliance.
                      </p>
                      
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start">
                          <CheckCircle2 size={20} className="text-7star-purple mr-2 mt-1 flex-shrink-0" />
                          <span>Fraud detection using machine learning</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 size={20} className="text-7star-purple mr-2 mt-1 flex-shrink-0" />
                          <span>Regulatory compliance automation</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 size={20} className="text-7star-purple mr-2 mt-1 flex-shrink-0" />
                          <span>Risk analytics & portfolio optimization</span>
                        </li>
                      </ul>
                      
                      <Button asChild>
                        <Link to="/industries/finance">Learn More</Link>
                      </Button>
                    </div>
                    
                    <div className="bg-7star-light-gray rounded-xl p-8 hidden md:block">
                      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1550565118-3a14e8d0386f?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
                          alt="Financial data analysis"
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="travel" className="animate-fade-in">
              <Card>
                <CardContent className="p-6 md:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">Travel & Hospitality Analytics</h3>
                      <p className="mb-6">
                        Our solutions for the travel industry enable dynamic pricing, personalized recommendations, and 
                        operational efficiency. From airline route optimization to hotel occupancy forecasting, we help 
                        travel companies enhance guest experiences and maximize revenue.
                      </p>
                      
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start">
                          <CheckCircle2 size={20} className="text-7star-purple mr-2 mt-1 flex-shrink-0" />
                          <span>Dynamic pricing & revenue management</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 size={20} className="text-7star-purple mr-2 mt-1 flex-shrink-0" />
                          <span>Customer journey optimization</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 size={20} className="text-7star-purple mr-2 mt-1 flex-shrink-0" />
                          <span>Operational efficiency analytics</span>
                        </li>
                      </ul>
                      
                      <Button asChild>
                        <Link to="/industries/travel-hospitality">Learn More</Link>
                      </Button>
                    </div>
                    
                    <div className="bg-7star-light-gray rounded-xl p-8 hidden md:block">
                      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3" 
                          alt="Travel data dashboard"
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="section bg-gradient-to-br from-7star-dark-purple to-7star-secondary-purple text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">Our Impact by the Numbers</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              We've helped enterprises across industries achieve measurable results through data-driven solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              value="98"
              suffix="%"
              label="Client retention rate"
              icon={<Users size={28} />}
              className="bg-white/10 text-white border border-white/20"
            />
            <StatCard
              value="300"
              suffix="+"
              label="Projects delivered"
              icon={<CheckCircle2 size={28} />}
              className="bg-white/10 text-white border border-white/20"
            />
            <StatCard
              value="25"
              prefix="$"
              suffix="M"
              label="Client ROI generated"
              icon={<Award size={28} />}
              className="bg-white/10 text-white border border-white/20"
            />
            <StatCard
              value="15"
              suffix="+"
              label="Industries served"
              icon={<Building2 size={28} />}
              className="bg-white/10 text-white border border-white/20"
            />
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">What Our Clients Say</h2>
            <p className="max-w-2xl mx-auto">
              Don't just take our word for it - hear from the enterprises we've helped transform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="7 Star Consulting helped us modernize our healthcare analytics infrastructure, leading to a 40% improvement in patient outcome predictions."
              author="Dr. Sarah Johnson"
              role="CIO"
              company="MedTech Health Systems"
              className="animate-slide-in-bottom"
            />
            
            <TestimonialCard
              quote="Their GenAI implementation transformed our customer service operations, reducing response times by 65% while improving accuracy."
              author="Michael Chen"
              role="VP of Technology"
              company="Global Retail Corp"
              className="animate-slide-in-bottom delay-200"
            />
            
            <TestimonialCard
              quote="The data migration was flawless - zero downtime and complete data integrity. Their team's expertise was evident throughout the project."
              author="James Wilson"
              role="Head of Data"
              company="FinBank International"
              className="animate-slide-in-bottom delay-400"
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section pb-24">
        <div className="container-custom">
          <CallToAction variant="gradient" />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
