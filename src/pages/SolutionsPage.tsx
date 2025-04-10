
import PageHeader from '@/components/PageHeader';
import CallToAction from '@/components/CallToAction';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  Database, 
  BrainCircuit, 
  ArrowRight, 
  PieChart, 
  LineChart, 
  CloudCog, 
  Server,
  Bot,
  Search,
  Layers,
  Cpu
} from 'lucide-react';

const SolutionsPage = () => {
  return (
    <div className="pt-20">
      <PageHeader 
        title="Our Solutions"
        subtitle="Comprehensive data consulting services to transform how your organization leverages data."
        className="bg-7star-light-gray"
      />

      {/* Main Solutions Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-16">
            {/* Business Intelligence */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-7star-soft-purple text-7star-purple rounded-full text-sm font-medium mb-6">
                  <BarChart3 size={18} className="mr-2" />
                  Business Intelligence
                </div>
                <h2 className="mb-4">Transform Raw Data Into Strategic Insights</h2>
                <p className="mb-6">
                  Our Business Intelligence solutions help organizations make data-driven decisions by transforming complex data into 
                  clear, actionable insights. We design and implement comprehensive BI ecosystems that deliver real-time analytics, 
                  interactive dashboards, and automated reporting.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <FeatureItem icon={<PieChart size={20} />} text="Interactive dashboard development" />
                  <FeatureItem icon={<LineChart size={20} />} text="Real-time analytics solutions" />
                  <FeatureItem icon={<Layers size={20} />} text="Data warehouse optimization" />
                  <FeatureItem icon={<Search size={20} />} text="Custom KPI reporting" />
                </div>
                
                <Button asChild>
                  <Link to="/solutions/business-intelligence" className="flex items-center">
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
              </div>
              
              <div className="bg-7star-light-gray p-8 rounded-xl">
                <div className="relative rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
                    alt="Business Intelligence Dashboard"
                    className="w-full h-full object-cover aspect-[4/3]"
                  />
                </div>
              </div>
            </div>
            
            {/* Data Migration */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-7star-light-gray p-8 rounded-xl">
                  <div className="relative rounded-lg overflow-hidden shadow-md">
                    <img 
                      src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=2938&ixlib=rb-4.0.3"
                      alt="Data Migration"
                      className="w-full h-full object-cover aspect-[4/3]"
                    />
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center px-4 py-2 bg-7star-soft-purple text-7star-purple rounded-full text-sm font-medium mb-6">
                  <Database size={18} className="mr-2" />
                  Data Migration
                </div>
                <h2 className="mb-4">Seamless Transitions, Zero Downtime</h2>
                <p className="mb-6">
                  Our data migration expertise ensures smooth transitions from legacy systems to modern, scalable architectures. 
                  We handle complex migrations with minimal disruption, ensuring data integrity and optimizing performance 
                  along the way.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <FeatureItem icon={<CloudCog size={20} />} text="Cloud migration specialists" />
                  <FeatureItem icon={<Server size={20} />} text="Legacy system modernization" />
                  <FeatureItem icon={<Database size={20} />} text="Database optimization" />
                  <FeatureItem icon={<Layers size={20} />} text="ETL/ELT pipeline creation" />
                </div>
                
                <Button asChild>
                  <Link to="/solutions/data-migration" className="flex items-center">
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* GenAI for Business */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-7star-soft-purple text-7star-purple rounded-full text-sm font-medium mb-6">
                  <BrainCircuit size={18} className="mr-2" />
                  GenAI for Business
                </div>
                <h2 className="mb-4">Harness the Power of Generative AI</h2>
                <p className="mb-6">
                  Our GenAI solutions help businesses leverage the latest advancements in artificial intelligence to create 
                  new opportunities and optimize operations. From content generation to advanced decision support systems, 
                  we implement AI that delivers measurable business value.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <FeatureItem icon={<Bot size={20} />} text="Custom AI model development" />
                  <FeatureItem icon={<Cpu size={20} />} text="Intelligent automation" />
                  <FeatureItem icon={<BrainCircuit size={20} />} text="Natural language processing" />
                  <FeatureItem icon={<Search size={20} />} text="AI strategy consulting" />
                </div>
                
                <Button asChild>
                  <Link to="/solutions/genai" className="flex items-center">
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
              </div>
              
              <div className="bg-7star-light-gray p-8 rounded-xl">
                <div className="relative rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1488229297570-58520851e868?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
                    alt="GenAI Solutions"
                    className="w-full h-full object-cover aspect-[4/3]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="section bg-7star-light-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Technology Stack</h2>
            <p className="max-w-2xl mx-auto">
              We leverage best-in-class technologies to deliver powerful, scalable data solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <TechStackItem name="Power BI" />
            <TechStackItem name="Tableau" />
            <TechStackItem name="Snowflake" />
            <TechStackItem name="AWS" />
            <TechStackItem name="Azure" />
            <TechStackItem name="GCP" />
            <TechStackItem name="Python" />
            <TechStackItem name="Apache Spark" />
            <TechStackItem name="dbt" />
            <TechStackItem name="Databricks" />
            <TechStackItem name="LangChain" />
            <TechStackItem name="TensorFlow" />
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Approach</h2>
            <p className="max-w-2xl mx-auto">
              We follow a proven methodology tailored to each client's unique needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MethodologyStep
              number="01"
              title="Discovery"
              description="We begin by understanding your business goals, data landscape, and technical requirements."
            />
            
            <MethodologyStep
              number="02"
              title="Strategy"
              description="We design a comprehensive solution tailored to your specific needs and objectives."
            />
            
            <MethodologyStep
              number="03"
              title="Implementation"
              description="Our experts build and deploy your solution using best practices and cutting-edge technology."
            />
            
            <MethodologyStep
              number="04"
              title="Optimization"
              description="We continuously refine and improve your solution to maximize ROI and performance."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section pb-24">
        <div className="container-custom">
          <CallToAction
            title="Ready to unlock the full potential of your data?"
            description="Schedule a consultation with our experts to discuss your specific needs and how we can help."
            primaryButtonText="Book a Consultation"
            secondaryButtonText="View Case Studies"
            secondaryButtonLink="/resources"
            variant="gradient"
          />
        </div>
      </section>
    </div>
  );
};

// Feature Item Component
const FeatureItem = ({ icon, text }: { icon: React.ReactNode, text: string }) => {
  return (
    <div className="flex items-center">
      <div className="text-7star-purple mr-3">
        {icon}
      </div>
      <span>{text}</span>
    </div>
  );
};

// Tech Stack Item Component
const TechStackItem = ({ name }: { name: string }) => {
  return (
    <div className="bg-white rounded-lg p-4 flex items-center justify-center h-20 shadow-sm">
      <span className="font-medium">{name}</span>
    </div>
  );
};

// Methodology Step Component
const MethodologyStep = ({ 
  number, 
  title, 
  description 
}: { 
  number: string, 
  title: string, 
  description: string 
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="text-4xl font-playfair font-bold text-7star-purple mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default SolutionsPage;
