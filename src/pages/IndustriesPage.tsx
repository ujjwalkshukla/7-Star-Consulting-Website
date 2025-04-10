
import PageHeader from '@/components/PageHeader';
import CallToAction from '@/components/CallToAction';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import IndustryCard from '@/components/IndustryCard';
import { 
  Heart, 
  ShoppingBag, 
  BadgeDollarSign, 
  Plane,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';

const IndustriesPage = () => {
  return (
    <div className="pt-20">
      <PageHeader 
        title="Industries We Serve"
        subtitle="Specialized data solutions tailored to the unique challenges of your industry."
        className="bg-7star-light-gray"
      />

      {/* Industries Overview Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <IndustryCard
              title="Healthcare"
              description="Improving patient outcomes through predictive analytics and HIPAA-compliant data solutions."
              icon={<Heart size={28} />}
              link="/industries/healthcare"
            />
            
            <IndustryCard
              title="Retail"
              description="Optimizing inventory, personalizing experiences, and forecasting demand with precision."
              icon={<ShoppingBag size={28} />}
              link="/industries/retail"
            />
            
            <IndustryCard
              title="Finance"
              description="Building secure, compliant data ecosystems for risk assessment and fraud detection."
              icon={<BadgeDollarSign size={28} />}
              link="/industries/finance"
            />
            
            <IndustryCard
              title="Travel & Hospitality"
              description="Enabling dynamic pricing, personalization, and operational efficiency through data."
              icon={<Plane size={28} />}
              link="/industries/travel-hospitality"
            />
          </div>
        </div>
      </section>

      {/* Industry Deep Dive Tabs */}
      <section className="section bg-7star-light-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Industry Solutions</h2>
            <p className="max-w-2xl mx-auto">
              See how we address the unique challenges in each industry with tailored data solutions.
            </p>
          </div>
          
          <Tabs defaultValue="healthcare" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid sm:grid-cols-2 lg:grid-cols-4">
                <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
                <TabsTrigger value="retail">Retail</TabsTrigger>
                <TabsTrigger value="finance">Finance</TabsTrigger>
                <TabsTrigger value="travel">Travel & Hospitality</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="healthcare" className="animate-fade-in">
              <Card>
                <CardContent className="p-6 md:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">Healthcare Analytics</h3>
                      <p className="mb-6">
                        In the rapidly evolving healthcare landscape, data is the key to improving patient outcomes, 
                        reducing costs, and ensuring regulatory compliance. Our healthcare-specific solutions address 
                        the unique challenges faced by providers, payors, and life sciences organizations.
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Key Challenges We Solve:</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <CheckCircle2 size={20} className="text-7star-purple mr-2 mt-1 flex-shrink-0" />
                            <span>Siloed data across disparate systems</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 size={20} className="text-7star-purple mr-2 mt-1 flex-shrink-0" />
                            <span>HIPAA compliance and data security</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 size={20} className="text-7star-purple mr-2 mt-1 flex-shrink-0" />
                            <span>Predictive analytics for patient care</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Our Solutions Include:</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <ChevronRight size={20} className="text-7star-purple mr-2 mt-1 flex-shrink-0" />
                            <span>Patient outcome prediction models</span>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight size={20} className="text-7star-purple mr-2 mt-1 flex-shrink-0" />
                            <span>Revenue cycle optimization</span>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight size={20} className="text-7star-purple mr-2 mt-1 flex-shrink-0" />
                            <span>EHR data integration & optimization</span>
                          </li>
                        </ul>
                      </div>
                      
                      <Button asChild>
                        <Link to="/industries/healthcare">
                          Explore Healthcare Solutions
                        </Link>
                      </Button>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="bg-7star-light-gray p-6 rounded-lg">
                        <h4 className="font-semibold text-lg mb-4">Case Study: MedTech Health Systems</h4>
                        <p className="mb-4">
                          We helped a leading hospital network increase patient satisfaction by 42% while 
                          reducing readmission rates through predictive analytics.
                        </p>
                        <div className="mb-4 rounded-md overflow-hidden">
                          <img 
                            src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&q=80&w=2000"
                            alt="Healthcare data analytics"
                            className="w-full h-48 object-cover"
                          />
                        </div>
                        <Link to="/resources" className="text-7star-purple font-medium inline-flex items-center">
                          Read Case Study <ChevronRight size={16} className="ml-1" />
                        </Link>
                      </div>
                      
                      <div className="p-6 border border-border rounded-lg">
                        <div className="mb-4">
                          <span className="font-semibold">Key Results:</span>
                        </div>
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <span className="text-7star-purple font-bold text-xl mr-2">42%</span>
                            <span>Increase in patient satisfaction</span>
                          </li>
                          <li className="flex items-center">
                            <span className="text-7star-purple font-bold text-xl mr-2">28%</span>
                            <span>Reduction in readmission rates</span>
                          </li>
                          <li className="flex items-center">
                            <span className="text-7star-purple font-bold text-xl mr-2">$3.2M</span>
                            <span>Annual savings in operational costs</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="retail" className="animate-fade-in">
              <Card>
                <CardContent className="p-6 md:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">Retail Analytics</h3>
                      <p className="mb-6">
                        In today's competitive retail landscape, data-driven decisions are essential for success. Our retail 
                        analytics solutions help businesses understand customer behavior, optimize inventory, and create 
                        personalized shopping experiences that drive loyalty and revenue.
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Key Challenges We Solve:</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <CheckCircle2 size={20} className="text-7star-purple mr-2 mt-1 flex-shrink-0" />
                            <span>Inventory optimization across channels</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 size={20} className="text-7star-purple mr-2 mt-1 flex-shrink-0" />
                            <span>Customer segmentation and personalization</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 size={20} className="text-7star-purple mr-2 mt-1 flex-shrink-0" />
                            <span>Demand forecasting and trend analysis</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Our Solutions Include:</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <ChevronRight size={20} className="text-7star-purple mr-2 mt-1 flex-shrink-0" />
                            <span>Customer analytics and segmentation</span>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight size={20} className="text-7star-purple mr-2 mt-1 flex-shrink-0" />
                            <span>AI-powered inventory management</span>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight size={20} className="text-7star-purple mr-2 mt-1 flex-shrink-0" />
                            <span>Predictive sales forecasting</span>
                          </li>
                        </ul>
                      </div>
                      
                      <Button asChild>
                        <Link to="/industries/retail">
                          Explore Retail Solutions
                        </Link>
                      </Button>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="bg-7star-light-gray p-6 rounded-lg">
                        <h4 className="font-semibold text-lg mb-4">Case Study: Global Retail Corp</h4>
                        <p className="mb-4">
                          We implemented a predictive inventory management system that reduced stockouts by 35% 
                          and increased overall sales by 22%.
                        </p>
                        <div className="mb-4 rounded-md overflow-hidden">
                          <img 
                            src="https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&q=80&w=2000"
                            alt="Retail analytics dashboard"
                            className="w-full h-48 object-cover"
                          />
                        </div>
                        <Link to="/resources" className="text-7star-purple font-medium inline-flex items-center">
                          Read Case Study <ChevronRight size={16} className="ml-1" />
                        </Link>
                      </div>
                      
                      <div className="p-6 border border-border rounded-lg">
                        <div className="mb-4">
                          <span className="font-semibold">Key Results:</span>
                        </div>
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <span className="text-7star-purple font-bold text-xl mr-2">35%</span>
                            <span>Reduction in stockouts</span>
                          </li>
                          <li className="flex items-center">
                            <span className="text-7star-purple font-bold text-xl mr-2">22%</span>
                            <span>Increase in overall sales</span>
                          </li>
                          <li className="flex items-center">
                            <span className="text-7star-purple font-bold text-xl mr-2">18%</span>
                            <span>Improvement in customer loyalty</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="finance" className="animate-fade-in">
              <Card>
                <CardContent className="p-6 md:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">Financial Data Intelligence</h3>
                      <p className="mb-6">
                        Financial institutions face unique challenges in managing and securing sensitive data while 
                        delivering personalized customer experiences. Our financial data solutions help banks, insurance 
                        companies, and fintech startups make better decisions while maintaining compliance.
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Key Challenges We Solve:</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <CheckCircle2 size={20} className="text-7star-purple mr-2 mt-1 flex-shrink-0" />
                            <span>Regulatory compliance and reporting</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 size={20} className="text-7star-purple mr-2 mt-1 flex-shrink-0" />
                            <span>Fraud detection and risk assessment</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 size={20} className="text-7star-purple mr-2 mt-1 flex-shrink-0" />
                            <span>Legacy system integration</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Our Solutions Include:</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <ChevronRight size={20} className="text-7star-purple mr-2 mt-1 flex-shrink-0" />
                            <span>Automated regulatory reporting</span>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight size={20} className="text-7star-purple mr-2 mt-1 flex-shrink-0" />
                            <span>ML-powered fraud detection</span>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight size={20} className="text-7star-purple mr-2 mt-1 flex-shrink-0" />
                            <span>Customer 360 data platforms</span>
                          </li>
                        </ul>
                      </div>
                      
                      <Button asChild>
                        <Link to="/industries/finance">
                          Explore Financial Solutions
                        </Link>
                      </Button>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="bg-7star-light-gray p-6 rounded-lg">
                        <h4 className="font-semibold text-lg mb-4">Case Study: FinBank International</h4>
                        <p className="mb-4">
                          Our fraud detection system helped a global bank reduce fraudulent transactions by 73% while 
                          decreasing false positives by 42%.
                        </p>
                        <div className="mb-4 rounded-md overflow-hidden">
                          <img 
                            src="https://images.unsplash.com/photo-1565373679390-fbc56df38284?auto=format&fit=crop&q=80&w=2000"
                            alt="Financial fraud detection system"
                            className="w-full h-48 object-cover"
                          />
                        </div>
                        <Link to="/resources" className="text-7star-purple font-medium inline-flex items-center">
                          Read Case Study <ChevronRight size={16} className="ml-1" />
                        </Link>
                      </div>
                      
                      <div className="p-6 border border-border rounded-lg">
                        <div className="mb-4">
                          <span className="font-semibold">Key Results:</span>
                        </div>
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <span className="text-7star-purple font-bold text-xl mr-2">73%</span>
                            <span>Reduction in fraudulent transactions</span>
                          </li>
                          <li className="flex items-center">
                            <span className="text-7star-purple font-bold text-xl mr-2">42%</span>
                            <span>Decrease in false positives</span>
                          </li>
                          <li className="flex items-center">
                            <span className="text-7star-purple font-bold text-xl mr-2">$12M</span>
                            <span>Annual savings from fraud prevention</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="travel" className="animate-fade-in">
              <Card>
                <CardContent className="p-6 md:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">Travel & Hospitality Analytics</h3>
                      <p className="mb-6">
                        The travel and hospitality industry thrives on personalized experiences and operational efficiency. 
                        Our solutions help hotels, airlines, and travel companies optimize pricing, improve guest 
                        experiences, and streamline operations.
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Key Challenges We Solve:</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <CheckCircle2 size={20} className="text-7star-purple mr-2 mt-1 flex-shrink-0" />
                            <span>Dynamic pricing and revenue management</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 size={20} className="text-7star-purple mr-2 mt-1 flex-shrink-0" />
                            <span>Customer journey optimization</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 size={20} className="text-7star-purple mr-2 mt-1 flex-shrink-0" />
                            <span>Operational efficiency and capacity planning</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Our Solutions Include:</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <ChevronRight size={20} className="text-7star-purple mr-2 mt-1 flex-shrink-0" />
                            <span>AI-powered revenue management</span>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight size={20} className="text-7star-purple mr-2 mt-1 flex-shrink-0" />
                            <span>Personalization engines</span>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight size={20} className="text-7star-purple mr-2 mt-1 flex-shrink-0" />
                            <span>Operational analytics dashboards</span>
                          </li>
                        </ul>
                      </div>
                      
                      <Button asChild>
                        <Link to="/industries/travel-hospitality">
                          Explore Travel & Hospitality Solutions
                        </Link>
                      </Button>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="bg-7star-light-gray p-6 rounded-lg">
                        <h4 className="font-semibold text-lg mb-4">Case Study: GlobalTravel Inc.</h4>
                        <p className="mb-4">
                          Our dynamic pricing engine helped a luxury hotel chain increase RevPAR by 28% while improving 
                          guest satisfaction scores.
                        </p>
                        <div className="mb-4 rounded-md overflow-hidden">
                          <img 
                            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2000"
                            alt="Hotel revenue management dashboard"
                            className="w-full h-48 object-cover"
                          />
                        </div>
                        <Link to="/resources" className="text-7star-purple font-medium inline-flex items-center">
                          Read Case Study <ChevronRight size={16} className="ml-1" />
                        </Link>
                      </div>
                      
                      <div className="p-6 border border-border rounded-lg">
                        <div className="mb-4">
                          <span className="font-semibold">Key Results:</span>
                        </div>
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <span className="text-7star-purple font-bold text-xl mr-2">28%</span>
                            <span>Increase in RevPAR</span>
                          </li>
                          <li className="flex items-center">
                            <span className="text-7star-purple font-bold text-xl mr-2">15%</span>
                            <span>Improvement in guest satisfaction</span>
                          </li>
                          <li className="flex items-center">
                            <span className="text-7star-purple font-bold text-xl mr-2">32%</span>
                            <span>Increase in repeat bookings</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section pb-24">
        <div className="container-custom">
          <CallToAction
            title="Ready to transform your industry?"
            description="Schedule a consultation to discuss your specific industry challenges and how our data solutions can help."
            variant="dark"
          />
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;
