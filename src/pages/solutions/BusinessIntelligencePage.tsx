
import PageHeader from '@/components/PageHeader';
import CallToAction from '@/components/CallToAction';
import { Button } from '@/components/ui/button';
import { BarChart3, LineChart, PieChart, ArrowRight, Database, Search } from 'lucide-react';

const BusinessIntelligencePage = () => {
  return (
    <div className="pt-20">
      <PageHeader 
        title="Business Intelligence Solutions"
        subtitle="Transform raw data into actionable insights that drive strategic business decisions."
        className="bg-7star-light-gray"
      />

      {/* Main Content */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="mb-4">Interactive Data Visualization</h2>
              <p className="mb-6">
                Our business intelligence solutions help you visualize complex data in intuitive, interactive 
                dashboards that make it easy to identify trends, anomalies, and opportunities. We transform 
                data complexity into clear visual insights that empower decision makers across your organization.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <FeatureItem icon={<PieChart size={20} />} text="Custom dashboard development" />
                <FeatureItem icon={<LineChart size={20} />} text="Real-time data tracking" />
                <FeatureItem icon={<Database size={20} />} text="Data warehouse integration" />
                <FeatureItem icon={<Search size={20} />} text="Advanced analytics capabilities" />
              </div>
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
          
          {/* Section: Our BI Process */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="mb-4">Our BI Implementation Process</h2>
              <p className="max-w-3xl mx-auto">
                We follow a proven methodology to design, develop, and deploy business intelligence 
                solutions that deliver measurable business value.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ProcessCard 
                step="01"
                title="Discovery"
                description="We analyze your data needs, sources, and business goals to create a tailored BI strategy."
              />
              <ProcessCard 
                step="02"
                title="Design"
                description="Our experts design intuitive dashboards and reports that make data accessible and actionable."
              />
              <ProcessCard 
                step="03"
                title="Development"
                description="We build scalable solutions using best-in-class BI tools and integration frameworks."
              />
              <ProcessCard 
                step="04"
                title="Deployment"
                description="We ensure seamless implementation, train your team, and provide ongoing optimization."
              />
            </div>
          </div>
          
          {/* BI Tools and Technologies */}
          <div>
            <div className="text-center mb-12">
              <h2 className="mb-4">Our BI Technology Stack</h2>
              <p className="max-w-3xl mx-auto">
                We leverage industry-leading technologies to build powerful analytics solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              <TechItem name="Power BI" />
              <TechItem name="Tableau" />
              <TechItem name="Looker" />
              <TechItem name="Snowflake" />
              <TechItem name="Azure Analysis Services" />
              <TechItem name="AWS QuickSight" />
              <TechItem name="Databricks" />
              <TechItem name="Domo" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section pb-24">
        <div className="container-custom">
          <CallToAction
            title="Ready to transform your data into business insights?"
            description="Schedule a consultation with our BI experts to discuss your specific analytics needs."
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

// Process Card Component
const ProcessCard = ({ 
  step, 
  title, 
  description 
}: { 
  step: string, 
  title: string, 
  description: string 
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="text-4xl font-playfair font-bold text-7star-purple mb-4">
        {step}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

// Tech Item Component
const TechItem = ({ name }: { name: string }) => {
  return (
    <div className="bg-white rounded-lg p-4 flex items-center justify-center h-20 shadow-sm">
      <span className="font-medium">{name}</span>
    </div>
  );
};

export default BusinessIntelligencePage;
