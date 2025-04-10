
import PageHeader from '@/components/PageHeader';
import CallToAction from '@/components/CallToAction';
import { Button } from '@/components/ui/button';
import { Database, Server, Cloud, ArrowRight, Clock, Shield, CloudCog } from 'lucide-react';

const DataMigrationPage = () => {
  return (
    <div className="pt-20">
      <PageHeader 
        title="Data Migration Solutions"
        subtitle="Seamlessly migrate your data to modern platforms with minimal disruption and maximum security."
        className="bg-7star-light-gray"
      />

      {/* Main Content */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="mb-4">Zero-Downtime Data Migration</h2>
              <p className="mb-6">
                Our data migration experts help organizations move from legacy systems to modern, 
                cloud-based platforms with minimal business disruption. We ensure data integrity, 
                security, and performance throughout the migration process.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <FeatureItem icon={<Cloud size={20} />} text="Cloud migration expertise" />
                <FeatureItem icon={<Server size={20} />} text="Legacy system modernization" />
                <FeatureItem icon={<Shield size={20} />} text="Data security & compliance" />
                <FeatureItem icon={<Clock size={20} />} text="Minimal downtime approaches" />
              </div>
            </div>
            
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
          
          {/* Migration Types */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="mb-4">Migration Services We Offer</h2>
              <p className="max-w-3xl mx-auto">
                From on-premises to cloud, legacy to modern, we handle all types of data transitions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard 
                icon={<CloudCog size={24} />}
                title="Cloud Migration"
                description="Move your data and applications to AWS, Azure, or Google Cloud Platform securely and efficiently."
              />
              <ServiceCard 
                icon={<Database size={24} />}
                title="Database Migration"
                description="Transition between database systems (SQL to NoSQL, Oracle to PostgreSQL, etc.) with zero data loss."
              />
              <ServiceCard 
                icon={<Server size={24} />}
                title="Data Warehouse Migration"
                description="Upgrade to modern data warehousing solutions like Snowflake, BigQuery, or Redshift."
              />
            </div>
          </div>
          
          {/* Migration Process */}
          <div>
            <div className="text-center mb-12">
              <h2 className="mb-4">Our Data Migration Process</h2>
              <p className="max-w-3xl mx-auto">
                We follow a structured approach to ensure successful migrations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ProcessCard 
                step="01"
                title="Assessment"
                description="We analyze your current data landscape, identify dependencies, and create a detailed migration plan."
              />
              <ProcessCard 
                step="02"
                title="Planning"
                description="We design a migration strategy with minimal disruption, including fallback procedures."
              />
              <ProcessCard 
                step="03"
                title="Execution"
                description="Our team performs the migration with continuous monitoring and validation checks."
              />
              <ProcessCard 
                step="04"
                title="Optimization"
                description="Post-migration, we optimize performance, security, and cost efficiency in your new environment."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section pb-24">
        <div className="container-custom">
          <CallToAction
            title="Ready to modernize your data infrastructure?"
            description="Schedule a consultation with our migration experts to discuss your specific needs."
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

// Service Card Component
const ServiceCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode, 
  title: string, 
  description: string 
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col">
      <div className="text-7star-purple mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
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

export default DataMigrationPage;
