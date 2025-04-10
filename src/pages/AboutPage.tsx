
import PageHeader from '@/components/PageHeader';
import CallToAction from '@/components/CallToAction';
import { 
  Users, 
  Target, 
  Code, 
  HeartHandshake, 
  Sparkles, 
  Lightbulb,
  Award
} from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="pt-20">
      <PageHeader 
        title="About 7 Star Consulting"
        subtitle="We're a team of ex-FAANG data experts bringing enterprise-grade solutions to businesses of all sizes."
        className="bg-7star-light-gray"
      />

      {/* Our Story Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Our Story</h2>
              <p className="mb-4">
                Founded in 2018 by a team of data scientists and engineers from leading tech companies, 7 Star Consulting was born out of a simple observation: 
                enterprises were struggling to transform their massive data assets into actionable business insights.
              </p>
              <p className="mb-4">
                We've built our reputation by solving complex data challenges for Fortune 500 companies and fast-growing startups alike. 
                Our approach combines deep technical expertise with business acumen, ensuring that our solutions deliver measurable ROI.
              </p>
              <p>
                Today, with offices in San Francisco, New York, and London, our team of 50+ data specialists continues to push the boundaries of 
                what's possible with data. We're particularly excited about how generative AI is transforming the enterprise data landscape.
              </p>
            </div>
            
            <div className="bg-7star-light-gray rounded-xl p-8">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
                  alt="7 Star Consulting team"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-7star-light-gray">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-6">
                <div className="mr-4 text-7star-purple">
                  <Target size={32} />
                </div>
                <h3>Our Mission</h3>
              </div>
              <p>
                To empower organizations with data solutions that drive innovation, 
                efficiency, and growth. We believe that every business decision should be 
                informed by high-quality, accessible data and insights.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-6">
                <div className="mr-4 text-7star-purple">
                  <Lightbulb size={32} />
                </div>
                <h3>Our Vision</h3>
              </div>
              <p>
                To create a world where every organization, regardless of size or industry, 
                can harness the full potential of their data to make better decisions, 
                serve their customers, and achieve their strategic goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Values</h2>
            <p className="max-w-2xl mx-auto">
              These core principles guide everything we do at 7 Star Consulting.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ValueCard
              icon={<Code size={28} />}
              title="Technical Excellence"
              description="We stay at the cutting edge of data technology, constantly learning and implementing best practices."
            />
            
            <ValueCard
              icon={<HeartHandshake size={28} />}
              title="Client Partnership"
              description="We view ourselves as an extension of our clients' teams, fully invested in their success."
            />
            
            <ValueCard
              icon={<Sparkles size={28} />}
              title="Innovative Thinking"
              description="We approach every challenge with fresh perspectives, creating solutions that others might miss."
            />
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section bg-7star-light-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Leadership</h2>
            <p className="max-w-2xl mx-auto">
              Meet the experienced team guiding our company's vision and strategy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMemberCard
              name="Alex Thompson"
              role="Founder & CEO"
              bio="Ex-Google data scientist with 15+ years of experience in building scalable data solutions."
              imageSrc="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=2874&ixlib=rb-4.0.3"
            />
            
            <TeamMemberCard
              name="Maya Patel"
              role="CTO"
              bio="Former Amazon AI research lead specializing in applied machine learning and cognitive computing."
              imageSrc="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=2876&ixlib=rb-4.0.3"
            />
            
            <TeamMemberCard
              name="David Chen"
              role="Head of Data Science"
              bio="Ph.D. in Computer Science with expertise in predictive modeling and time series forecasting."
              imageSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
            />
          </div>
        </div>
      </section>

      {/* Accomplishments */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Awards & Recognition</h2>
            <p className="max-w-2xl mx-auto">
              Our team's expertise has been recognized across the industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex bg-white p-6 rounded-lg shadow-sm">
              <div className="text-7star-purple mr-4">
                <Award size={36} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Data Innovator of the Year</h3>
                <p className="text-muted-foreground">
                  Awarded for our groundbreaking work in healthcare predictive analytics, 2023
                </p>
              </div>
            </div>
            
            <div className="flex bg-white p-6 rounded-lg shadow-sm">
              <div className="text-7star-purple mr-4">
                <Award size={36} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Fastest Growing Tech Consultancy</h3>
                <p className="text-muted-foreground">
                  Featured in Tech Business Review's top 10 consultancies, 2022
                </p>
              </div>
            </div>
            
            <div className="flex bg-white p-6 rounded-lg shadow-sm">
              <div className="text-7star-purple mr-4">
                <Award size={36} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Best AI Implementation</h3>
                <p className="text-muted-foreground">
                  Enterprise Solution Awards for our work with Global Finance Corp, 2021
                </p>
              </div>
            </div>
            
            <div className="flex bg-white p-6 rounded-lg shadow-sm">
              <div className="text-7star-purple mr-4">
                <Award size={36} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Top Data Migration Partner</h3>
                <p className="text-muted-foreground">
                  Recognized by Cloud Platform Partners Alliance, 2020
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section pb-24">
        <div className="container-custom">
          <CallToAction
            title="Ready to work with our team?"
            description="Schedule a consultation to discuss how our expertise can help solve your data challenges."
            primaryButtonText="Book a Call"
            secondaryButtonText="Meet Our Team"
          />
        </div>
      </section>
    </div>
  );
};

// Value Card Component
const ValueCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode, 
  title: string, 
  description: string 
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="text-7star-purple mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

// Team Member Card Component
const TeamMemberCard = ({ 
  name, 
  role, 
  bio, 
  imageSrc 
}: { 
  name: string, 
  role: string, 
  bio: string, 
  imageSrc?: string 
}) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm">
      <div className="aspect-[3/2] overflow-hidden">
        {imageSrc ? (
          <img 
            src={imageSrc} 
            alt={name} 
            className="w-full h-full object-cover object-center"
          />
        ) : (
          <div className="w-full h-full bg-7star-light-gray flex items-center justify-center">
            <Users size={48} className="text-7star-purple" />
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-7star-purple font-medium mb-3">{role}</p>
        <p className="text-muted-foreground">{bio}</p>
      </div>
    </div>
  );
};

export default AboutPage;
