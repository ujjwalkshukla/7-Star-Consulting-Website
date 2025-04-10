
import PageHeader from '@/components/PageHeader';
import CallToAction from '@/components/CallToAction';
import { Plane, Hotel, Map, Users, BarChart3, Clock } from 'lucide-react';

const TravelHospitalityPage = () => {
  return (
    <div className="pt-20">
      <PageHeader 
        title="Travel & Hospitality Data Solutions"
        subtitle="Enhance guest experiences, optimize operations, and drive loyalty with data-driven travel and hospitality solutions."
        className="bg-7star-light-gray"
      />

      {/* Main Content */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-7star-soft-purple text-7star-purple rounded-full text-sm font-medium mb-6">
                <Plane size={18} className="mr-2" />
                <Hotel size={18} className="mr-2" />
                Travel & Hospitality
              </div>
              
              <h2 className="mb-4">Data-Driven Guest Experiences</h2>
              <p className="mb-6">
                Our travel and hospitality data solutions help airlines, hotels, and travel providers 
                leverage data to enhance guest experiences, optimize pricing, and improve operational 
                efficiency. In today's competitive travel landscape, data is the key to creating 
                memorable experiences and building lasting customer loyalty.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <FeatureItem icon={<Users size={20} />} text="Customer segmentation & insights" />
                <FeatureItem icon={<BarChart3 size={20} />} text="Dynamic pricing optimization" />
                <FeatureItem icon={<Clock size={20} />} text="Operational efficiency" />
                <FeatureItem icon={<Map size={20} />} text="Location-based analytics" />
              </div>
            </div>
            
            <div className="bg-7star-light-gray p-8 rounded-xl">
              <div className="relative rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
                  alt="Travel & Hospitality Data Solutions"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </div>
          
          {/* Travel & Hospitality Use Cases */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="mb-4">Travel & Hospitality Use Cases</h2>
              <p className="max-w-3xl mx-auto">
                Our solutions address critical challenges across the travel and hospitality ecosystem.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <UseCase 
                title="Guest Experience Personalization"
                description="Leverage customer data to deliver personalized experiences that drive satisfaction and loyalty."
              />
              <UseCase 
                title="Revenue Management"
                description="Optimize pricing and inventory strategies to maximize revenue across all channels."
              />
              <UseCase 
                title="Operational Analytics"
                description="Streamline operations, reduce costs, and improve service delivery with data-driven insights."
              />
              <UseCase 
                title="Marketing Optimization"
                description="Target the right customers with the right offers at the right time to improve campaign performance."
              />
              <UseCase 
                title="Capacity Planning"
                description="Forecast demand accurately to optimize staffing, inventory, and resource allocation."
              />
              <UseCase 
                title="Loyalty Program Enhancement"
                description="Design and optimize loyalty programs that drive repeat business and increase customer lifetime value."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="section bg-7star-light-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Measurable Travel & Hospitality Outcomes</h2>
            <p className="max-w-3xl mx-auto">
              Our travel and hospitality clients achieve significant, quantifiable improvements in key performance areas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard 
              metric="18%"
              title="Increase in RevPAR"
              description="Through optimized pricing strategies and inventory management."
            />
            <MetricCard 
              metric="32%"
              title="Higher Guest Satisfaction"
              description="By delivering personalized experiences based on guest preferences."
            />
            <MetricCard 
              metric="22%"
              title="Improvement in Staff Efficiency"
              description="Through data-driven operational optimizations and scheduling."
            />
            <MetricCard 
              metric="3.8x"
              title="ROI on Marketing Spend"
              description="By targeting high-value segments with personalized campaigns."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section pb-24">
        <div className="container-custom">
          <CallToAction
            title="Ready to transform your travel business with data?"
            description="Schedule a consultation with our travel and hospitality data experts to discuss your specific needs."
            primaryButtonText="Book a Consultation"
            secondaryButtonText="View Travel & Hospitality Case Studies"
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

export default TravelHospitalityPage;
