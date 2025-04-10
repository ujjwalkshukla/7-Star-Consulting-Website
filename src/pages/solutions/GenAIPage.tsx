
import PageHeader from '@/components/PageHeader';
import CallToAction from '@/components/CallToAction';
import { Button } from '@/components/ui/button';
import { BrainCircuit, Bot, Cpu, ArrowRight, Lightbulb, Layers, Code } from 'lucide-react';

const GenAIPage = () => {
  return (
    <div className="pt-20">
      <PageHeader 
        title="Generative AI Solutions"
        subtitle="Harness the power of AI to drive innovation, efficiency, and competitive advantage."
        className="bg-7star-light-gray"
      />

      {/* Main Content */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="mb-4">AI-Powered Business Transformation</h2>
              <p className="mb-6">
                Our Generative AI solutions help businesses leverage the latest advancements in 
                artificial intelligence to create new opportunities, optimize operations, and 
                enhance customer experiences. From content generation to predictive analytics, 
                we implement AI that delivers measurable value.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <FeatureItem icon={<Bot size={20} />} text="Custom AI model development" />
                <FeatureItem icon={<Cpu size={20} />} text="Intelligent process automation" />
                <FeatureItem icon={<BrainCircuit size={20} />} text="Natural language processing" />
                <FeatureItem icon={<Lightbulb size={20} />} text="AI strategy consulting" />
              </div>
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
          
          {/* GenAI Use Cases */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="mb-4">Transformative GenAI Use Cases</h2>
              <p className="max-w-3xl mx-auto">
                Explore how our GenAI solutions drive innovation across various business functions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <UseCase 
                title="Intelligent Document Processing"
                description="Automate extraction and analysis of information from documents with human-level accuracy."
              />
              <UseCase 
                title="Customer Experience Enhancement"
                description="Deploy intelligent chatbots and virtual assistants that deliver personalized interactions."
              />
              <UseCase 
                title="Content Generation"
                description="Create high-quality marketing copy, product descriptions, and creative content at scale."
              />
              <UseCase 
                title="Advanced Analytics"
                description="Leverage predictive models that uncover hidden patterns and forecast business outcomes."
              />
              <UseCase 
                title="Code Generation"
                description="Accelerate development with AI-assisted programming and code optimization."
              />
              <UseCase 
                title="Decision Support"
                description="Enhance decision-making with AI models that process vast amounts of data and provide recommendations."
              />
            </div>
          </div>
          
          {/* GenAI Technologies */}
          <div>
            <div className="text-center mb-12">
              <h2 className="mb-4">Our GenAI Technology Stack</h2>
              <p className="max-w-3xl mx-auto">
                We leverage cutting-edge frameworks and platforms to build powerful AI solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              <TechItem name="OpenAI GPT" />
              <TechItem name="LangChain" />
              <TechItem name="HuggingFace" />
              <TechItem name="TensorFlow" />
              <TechItem name="PyTorch" />
              <TechItem name="Azure OpenAI" />
              <TechItem name="Vertex AI" />
              <TechItem name="LlamaIndex" />
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="section bg-7star-light-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our GenAI Implementation Approach</h2>
            <p className="max-w-3xl mx-auto">
              We follow a structured methodology to deploy AI solutions that deliver real business value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProcessCard 
              step="01"
              title="Opportunity Assessment"
              description="We identify high-value use cases where GenAI can have the greatest impact on your business."
            />
            <ProcessCard 
              step="02"
              title="Solution Design"
              description="Our experts design AI solutions that integrate seamlessly with your existing systems and processes."
            />
            <ProcessCard 
              step="03"
              title="Development & Training"
              description="We build and train custom AI models tailored to your specific business needs and data."
            />
            <ProcessCard 
              step="04"
              title="Deployment & Optimization"
              description="We implement, monitor, and continuously improve your AI solutions to maximize ROI."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section pb-24">
        <div className="container-custom">
          <CallToAction
            title="Ready to embrace the power of Generative AI?"
            description="Schedule a consultation with our AI experts to discuss your specific needs and opportunities."
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

export default GenAIPage;
