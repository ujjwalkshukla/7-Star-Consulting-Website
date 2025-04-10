
import PageHeader from '@/components/PageHeader';
import CallToAction from '@/components/CallToAction';
import { ShoppingCart, BarChart3, Users, Truck, Search, Store } from 'lucide-react';

const RetailPage = () => {
  return (
    <div className="pt-20">
      <PageHeader 
        title="Retail & E-commerce Data Solutions"
        subtitle="Transform customer experiences, optimize supply chains, and drive revenue growth with data-driven retail solutions."
        className="bg-7star-light-gray"
      />

      {/* Main Content */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-7star-soft-purple text-7star-purple rounded-full text-sm font-medium mb-6">
                <ShoppingCart size={18} className="mr-2" />
                Retail & E-commerce
              </div>
              
              <h2 className="mb-4">Data-Driven Retail Excellence</h2>
              <p className="mb-6">
                Our retail data solutions help brands and retailers harness the power of data to create 
                personalized customer experiences, optimize inventory, and maximize revenue. In today's 
                competitive landscape, data is the key differentiator for retail success.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <FeatureItem icon={<Users size={20} />} text="Customer segmentation & insights" />
                <FeatureItem icon={<BarChart3 size={20} />} text="Sales & inventory analytics" />
                <FeatureItem icon={<Search size={20} />} text="Demand forecasting" />
                <FeatureItem icon={<Truck size={20} />} text="Supply chain optimization" />
              </div>
            </div>
            
            <div className="bg-7star-light-gray p-8 rounded-xl">
              <div className="relative rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&q=80&w=2944&ixlib=rb-4.0.3"
                  alt="Retail Data Solutions"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </div>
          
          {/* Retail Use Cases */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="mb-4">Retail Industry Use Cases</h2>
              <p className="max-w-3xl mx-auto">
                Our solutions address key challenges across the retail and e-commerce ecosystem.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <UseCase 
                title="Customer Analytics"
                description="Gain deep insights into customer behavior to personalize experiences and boost loyalty."
              />
              <UseCase 
                title="Inventory Optimization"
                description="Reduce stockouts and overstocks with AI-powered demand forecasting and inventory management."
              />
              <UseCase 
                title="Price Optimization"
                description="Maximize margins with dynamic pricing strategies based on market conditions and customer behavior."
              />
              <UseCase 
                title="Omnichannel Analytics"
                description="Create seamless customer experiences across physical and digital touchpoints."
              />
              <UseCase 
                title="Marketing ROI Analysis"
                description="Measure and optimize the effectiveness of marketing campaigns across all channels."
              />
              <UseCase 
                title="Store Performance Analytics"
                description="Optimize store layouts, staffing, and operations based on foot traffic and sales data."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="section bg-7star-light-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Measurable Retail Outcomes</h2>
            <p className="max-w-3xl mx-auto">
              Our retail clients achieve significant, quantifiable improvements in key performance areas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard 
              metric="15%"
              title="Increase in Sales Conversion"
              description="Through personalized customer experiences and targeted offers."
            />
            <MetricCard 
              metric="28%"
              title="Reduction in Overstock"
              description="By implementing predictive inventory management solutions."
            />
            <MetricCard 
              metric="3.2x"
              title="Marketing ROI Improvement"
              description="Through data-driven campaign optimization and targeting."
            />
            <MetricCard 
              metric="18%"
              title="Increase in Customer Lifetime Value"
              description="Through improved retention and cross-selling strategies."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section pb-24">
        <div className="container-custom">
          <CallToAction
            title="Ready to transform your retail business with data?"
            description="Schedule a consultation with our retail data experts to discuss your specific needs."
            primaryButtonText="Book a Consultation"
            secondaryButtonText="View Retail Case Studies"
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

export default RetailPage;
