
import PageHeader from '@/components/PageHeader';
import CallToAction from '@/components/CallToAction';
import { Landmark, BarChart3, Shield, LineChart, PieChart, BadgeAlert } from 'lucide-react';

const FinancePage = () => {
  return (
    <div className="pt-20">
      <PageHeader 
        title="Financial Services Data Solutions"
        subtitle="Power digital transformation, enhance customer experiences, and strengthen security with data-driven financial solutions."
        className="bg-7star-light-gray"
      />

      {/* Main Content */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-7star-soft-purple text-7star-purple rounded-full text-sm font-medium mb-6">
                <Landmark size={18} className="mr-2" />
                Financial Services
              </div>
              
              <h2 className="mb-4">Data-Driven Financial Excellence</h2>
              <p className="mb-6">
                Our financial services data solutions enable banks, insurers, and investment firms to 
                harness the power of data for improved risk management, customer insights, and operational 
                efficiency. In today's complex financial landscape, data is the foundation for innovation 
                and competitive advantage.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <FeatureItem icon={<Shield size={20} />} text="Fraud detection & prevention" />
                <FeatureItem icon={<BarChart3 size={20} />} text="Risk analytics & modeling" />
                <FeatureItem icon={<LineChart size={20} />} text="Customer behavior analysis" />
                <FeatureItem icon={<BadgeAlert size={20} />} text="Regulatory compliance" />
              </div>
            </div>
            
            <div className="bg-7star-light-gray p-8 rounded-xl">
              <div className="relative rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1616803140344-7862374c2479?auto=format&fit=crop&q=80&w=2832&ixlib=rb-4.0.3"
                  alt="Financial Services Data Solutions"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </div>
          
          {/* Finance Use Cases */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="mb-4">Financial Industry Use Cases</h2>
              <p className="max-w-3xl mx-auto">
                Our solutions address critical challenges across the financial services ecosystem.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <UseCase 
                title="Customer 360 View"
                description="Create unified customer profiles for personalized services and cross-selling opportunities."
              />
              <UseCase 
                title="Advanced Fraud Detection"
                description="Implement machine learning models to identify fraudulent transactions in real-time."
              />
              <UseCase 
                title="Risk Management"
                description="Enhance credit risk assessment, market risk modeling, and operational risk management."
              />
              <UseCase 
                title="Regulatory Reporting"
                description="Streamline compliance with automated data collection, validation, and reporting."
              />
              <UseCase 
                title="Investment Analytics"
                description="Optimize portfolios with advanced analytics and alternative data integration."
              />
              <UseCase 
                title="Process Automation"
                description="Improve operational efficiency with intelligent document processing and workflow automation."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="section bg-7star-light-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Measurable Financial Outcomes</h2>
            <p className="max-w-3xl mx-auto">
              Our financial services clients achieve significant, quantifiable improvements in key performance areas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard 
              metric="42%"
              title="Reduction in Fraud Losses"
              description="Through advanced predictive models and real-time monitoring."
            />
            <MetricCard 
              metric="68%"
              title="Faster Regulatory Reporting"
              description="With automated data collection and validation processes."
            />
            <MetricCard 
              metric="24%"
              title="Improvement in Risk Assessment"
              description="Using comprehensive data analysis and machine learning."
            />
            <MetricCard 
              metric="3.5x"
              title="ROI on Data Initiatives"
              description="Through increased efficiency and new revenue opportunities."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section pb-24">
        <div className="container-custom">
          <CallToAction
            title="Ready to transform your financial institution with data?"
            description="Schedule a consultation with our financial data experts to discuss your specific needs."
            primaryButtonText="Book a Consultation"
            secondaryButtonText="View Financial Services Case Studies"
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

export default FinancePage;
