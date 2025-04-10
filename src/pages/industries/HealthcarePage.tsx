
import PageHeader from '@/components/PageHeader';
import CallToAction from '@/components/CallToAction';
import { Heart, Shield, LineChart, Database, Clock, ArrowRight } from 'lucide-react';

const HealthcarePage = () => {
  return (
    <div className="pt-20">
      <PageHeader 
        title="Healthcare Data Solutions"
        subtitle="Data-driven innovations for improved patient care, operational efficiency, and regulatory compliance."
        className="bg-7star-light-gray"
      />

      {/* Main Content */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-7star-soft-purple text-7star-purple rounded-full text-sm font-medium mb-6">
                <Heart size={18} className="mr-2" />
                Healthcare
              </div>
              
              <h2 className="mb-4">Revolutionizing Healthcare Through Data</h2>
              <p className="mb-6">
                Our healthcare data solutions empower medical providers, payers, and life sciences 
                organizations to improve patient outcomes, optimize operations, and maintain regulatory 
                compliance. We help healthcare organizations leverage their data assets to drive 
                innovation and deliver superior care.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <FeatureItem icon={<Shield size={20} />} text="HIPAA-compliant data architecture" />
                <FeatureItem icon={<LineChart size={20} />} text="Clinical analytics dashboards" />
                <FeatureItem icon={<Database size={20} />} text="Healthcare data integration" />
                <FeatureItem icon={<Clock size={20} />} text="Real-time patient monitoring" />
              </div>
            </div>
            
            <div className="bg-7star-light-gray p-8 rounded-xl">
              <div className="relative rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
                  alt="Healthcare Data Solutions"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </div>
          
          {/* Healthcare Use Cases */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="mb-4">Healthcare Industry Use Cases</h2>
              <p className="max-w-3xl mx-auto">
                Our solutions address critical challenges across the healthcare ecosystem.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <UseCase 
                title="Patient Analytics"
                description="Leverage predictive models to identify at-risk patients, optimize treatment plans, and improve outcomes."
              />
              <UseCase 
                title="Revenue Cycle Optimization"
                description="Streamline billing processes, reduce claim denials, and improve financial performance."
              />
              <UseCase 
                title="Supply Chain Intelligence"
                description="Optimize inventory management, reduce waste, and ensure critical supplies are always available."
              />
              <UseCase 
                title="Care Pathway Optimization"
                description="Analyze clinical data to identify best practices and standardize care delivery across departments."
              />
              <UseCase 
                title="Population Health Management"
                description="Identify trends and risk factors across patient populations to guide preventive care initiatives."
              />
              <UseCase 
                title="Clinical Research Support"
                description="Accelerate research with advanced data integration, analysis, and visualization capabilities."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="section bg-7star-light-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Measurable Healthcare Outcomes</h2>
            <p className="max-w-3xl mx-auto">
              Our healthcare clients achieve significant, quantifiable improvements in key performance areas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard 
              metric="30%"
              title="Reduction in Readmission Rates"
              description="Through predictive analytics and improved care coordination."
            />
            <MetricCard 
              metric="$2.5M"
              title="Annual Cost Savings"
              description="By optimizing operations and reducing administrative overhead."
            />
            <MetricCard 
              metric="95%"
              title="Compliance Rate"
              description="With regulatory requirements through automated reporting."
            />
            <MetricCard 
              metric="22%"
              title="Increase in Patient Satisfaction"
              description="Through data-driven improvements to care delivery."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section pb-24">
        <div className="container-custom">
          <CallToAction
            title="Ready to transform healthcare with data-driven insights?"
            description="Schedule a consultation with our healthcare data experts to discuss your specific needs."
            primaryButtonText="Book a Consultation"
            secondaryButtonText="View Healthcare Case Studies"
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

// Use Case Component
const UseCase = ({ 
  title, 
  description 
}: { 
  title: string, 
  description: string 
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

// Metric Card Component
const MetricCard = ({ 
  metric,
  title, 
  description 
}: { 
  metric: string,
  title: string, 
  description: string 
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
      <div className="text-4xl font-playfair font-bold text-7star-purple mb-4">
        {metric}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default HealthcarePage;
