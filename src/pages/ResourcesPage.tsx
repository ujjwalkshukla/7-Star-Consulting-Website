import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import CallToAction from '@/components/CallToAction';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { ChevronRight, Search, Clock, Calendar, Tag, ArrowRight } from 'lucide-react';

const ResourcesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="pt-20">
      <PageHeader 
        title="Resources"
        subtitle="Explore our latest insights, case studies, and thought leadership content on data analytics, engineering, and AI."
        className="bg-7star-light-gray"
      >
        <div className="max-w-lg mx-auto mt-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            <Input 
              type="search"
              placeholder="Search resources..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </PageHeader>

      {/* Resources Tabs */}
      <section className="section">
        <div className="container-custom">
          <Tabs defaultValue="blog" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2">
                <TabsTrigger value="blog">Blog Articles</TabsTrigger>
                <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
              </TabsList>
            </div>
            
            {/* Blog Articles */}
            <TabsContent value="blog" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <Button variant="outline">
                  Load More Articles
                </Button>
              </div>
            </TabsContent>
            
            {/* Case Studies */}
            <TabsContent value="case-studies" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {caseStudies.map((study) => (
                  <CaseStudyCard key={study.id} study={study} />
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <Button variant="outline">
                  View All Case Studies
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="section bg-7star-light-gray">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="mb-4">Popular Topics</h2>
            <p className="max-w-2xl mx-auto">
              Explore our most popular resource categories.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <TopicCard tag="Business Intelligence" count={12} />
            <TopicCard tag="Data Migration" count={8} />
            <TopicCard tag="GenAI" count={15} />
            <TopicCard tag="Healthcare" count={7} />
            <TopicCard tag="Finance" count={9} />
            <TopicCard tag="Cloud" count={11} />
          </div>
        </div>
      </section>

      {/* Featured Resource */}
      <section className="section">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-7star-dark-purple to-7star-secondary-purple rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 text-white">
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                  Featured Resource
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  The Ultimate Guide to GenAI in Enterprise
                </h2>
                <p className="mb-6 text-white/80">
                  Learn how to successfully implement generative AI in your organization with our comprehensive guide covering 
                  strategy, implementation, ethics, and ROI measurement.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-white text-7star-dark-purple hover:bg-white/90">
                    <a href="#download">Download the Guide</a>
                  </Button>
                  <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    <a href="#preview">Preview</a>
                  </Button>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm flex items-center justify-center p-8 hidden lg:block">
                <img 
                  src="https://images.unsplash.com/photo-1677442135136-760c813029fb?auto=format&fit=crop&q=80&w=2832&ixlib=rb-4.0.3" 
                  alt="GenAI Guide" 
                  className="max-h-80 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section pb-24">
        <div className="container-custom">
          <CallToAction
            title="Want to learn more about our data solutions?"
            description="Schedule a personalized demo with our experts to see our solutions in action."
            primaryButtonText="Request a Demo"
            secondaryButtonText="Contact Us"
            variant="gradient"
          />
        </div>
      </section>
    </div>
  );
};

// Blog Card Component
const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm group hover:shadow-md transition-all duration-300">
      <div className="aspect-video overflow-hidden bg-7star-light-gray">
        {post.imageSrc ? (
          <img 
            src={post.imageSrc} 
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-7star-light-gray">
            <span className="text-7star-purple">7 Star Consulting</span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
          <span className="flex items-center">
            <Calendar size={14} className="mr-1" />
            {post.date}
          </span>
          <span className="flex items-center">
            <Clock size={14} className="mr-1" />
            {post.readTime} min read
          </span>
        </div>
        
        <h3 className="text-xl font-semibold mb-2">
          <Link to={`/blog/${post.slug}`} className="hover:text-7star-purple transition-colors">
            {post.title}
          </Link>
        </h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {post.excerpt}
        </p>
        
        <div className="flex items-center gap-2">
          {post.tags.map((tag) => (
            <span 
              key={tag} 
              className="inline-flex items-center px-2 py-1 bg-7star-light-gray text-xs font-medium rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="mt-4">
          <Link to={`/blog/${post.slug}`} className="text-7star-purple font-medium inline-flex items-center hover:text-7star-secondary-purple transition-colors">
            Read More <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

// Case Study Card Component
const CaseStudyCard = ({ study }: { study: CaseStudy }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="md:col-span-1 bg-7star-light-gray">
          <div className="aspect-square md:h-full overflow-hidden">
            {study.imageSrc ? (
              <img 
                src={study.imageSrc} 
                alt={study.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-7star-purple">{study.industry}</span>
              </div>
            )}
          </div>
        </div>
        
        <div className="md:col-span-2 p-6">
          <div className="inline-flex items-center px-3 py-1 bg-7star-soft-purple text-7star-purple rounded-full text-xs font-medium mb-3">
            {study.industry}
          </div>
          
          <h3 className="text-xl font-semibold mb-3">
            {study.title}
          </h3>
          
          <p className="text-muted-foreground mb-4">
            {study.description}
          </p>
          
          <div className="flex flex-wrap gap-4 mb-4">
            {study.results.map((result, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-7star-purple font-bold text-2xl">{result.value}</span>
                <span className="text-sm text-muted-foreground">{result.label}</span>
              </div>
            ))}
          </div>
          
          <Button asChild>
            <Link to={`/case-studies/${study.slug}`} className="flex items-center">
              Read Full Case Study <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

// Topic Card Component
const TopicCard = ({ tag, count }: { tag: string, count: number }) => {
  return (
    <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex items-center justify-center mb-2">
        <Tag size={18} className="text-7star-purple" />
      </div>
      <h3 className="font-semibold">{tag}</h3>
      <p className="text-sm text-muted-foreground">{count} articles</p>
    </div>
  );
};

// Mock Data Types
interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  readTime: number;
  tags: string[];
  imageSrc?: string;
}

interface CaseStudy {
  id: number;
  title: string;
  slug: string;
  description: string;
  industry: string;
  results: { value: string, label: string }[];
  imageSrc?: string;
}

// Mock Data
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How GenAI is Transforming Business Intelligence",
    slug: "genai-transforming-bi",
    excerpt: "Discover how generative AI is revolutionizing the way businesses analyze and interpret data for strategic decision-making.",
    date: "Apr 2, 2023",
    readTime: 8,
    tags: ["GenAI", "Business Intelligence"],
    imageSrc: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?auto=format&fit=crop&q=80&w=2624&ixlib=rb-4.0.3"
  },
  {
    id: 2,
    title: "The Complete Guide to ETL vs. ELT",
    slug: "etl-vs-elt-guide",
    excerpt: "Understanding the key differences between ETL and ELT approaches to data pipeline architecture and when to use each.",
    date: "Mar 18, 2023",
    readTime: 12,
    tags: ["Data Engineering", "ETL"],
    imageSrc: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2534&ixlib=rb-4.0.3"
  },
  {
    id: 3,
    title: "Implementing HIPAA-Compliant Data Solutions",
    slug: "hipaa-compliant-data-solutions",
    excerpt: "Best practices for creating secure, compliant data infrastructure for healthcare organizations while enabling innovation.",
    date: "Feb 25, 2023",
    readTime: 10,
    tags: ["Healthcare", "Compliance"],
    imageSrc: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
  },
  {
    id: 4,
    title: "Zero-Downtime Database Migrations",
    slug: "zero-downtime-migrations",
    excerpt: "Strategies for moving your data to modern cloud platforms without disrupting business operations.",
    date: "Jan 12, 2023",
    readTime: 7,
    tags: ["Data Migration", "Cloud"],
    imageSrc: "https://images.unsplash.com/photo-1488229297570-58520851e868?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
  },
  {
    id: 5,
    title: "Predictive Analytics in Retail",
    slug: "predictive-analytics-retail",
    excerpt: "How leading retailers are using advanced analytics to forecast demand and optimize inventory management.",
    date: "Dec 5, 2022",
    readTime: 9,
    tags: ["Retail", "Analytics"],
    imageSrc: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
  },
  {
    id: 6,
    title: "Data Mesh Architecture Explained",
    slug: "data-mesh-architecture",
    excerpt: "A deep dive into the distributed data architecture paradigm that's changing enterprise data strategy.",
    date: "Nov 18, 2022",
    readTime: 11,
    tags: ["Architecture", "Data Strategy"],
    imageSrc: "https://images.unsplash.com/photo-1599658880436-c61792e70672?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
  }
];

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "MedTech Health Systems: Predictive Analytics for Patient Care",
    slug: "medtech-predictive-analytics",
    description: "How we helped a leading hospital network reduce readmissions and improve patient satisfaction through advanced analytics.",
    industry: "Healthcare",
    results: [
      { value: "42%", label: "Increase in satisfaction" },
      { value: "28%", label: "Reduced readmissions" },
      { value: "$3.2M", label: "Annual savings" }
    ],
    imageSrc: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
  },
  {
    id: 2,
    title: "Global Retail Corp: AI-Powered Inventory Management",
    slug: "global-retail-inventory",
    description: "Implementing a predictive inventory system that optimized stock levels and boosted sales for a multinational retailer.",
    industry: "Retail",
    results: [
      { value: "35%", label: "Fewer stockouts" },
      { value: "22%", label: "Sales increase" },
      { value: "18%", label: "Improved loyalty" }
    ],
    imageSrc: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
  },
  {
    id: 3,
    title: "FinBank International: Fraud Detection System",
    slug: "finbank-fraud-detection",
    description: "Developing a machine learning system that dramatically reduced fraudulent transactions while minimizing false positives.",
    industry: "Finance",
    results: [
      { value: "73%", label: "Fraud reduction" },
      { value: "42%", label: "Fewer false positives" },
      { value: "$12M", label: "Annual savings" }
    ],
    imageSrc: "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
  },
  {
    id: 4,
    title: "GlobalTravel Inc: Dynamic Pricing Engine",
    slug: "globaltravel-dynamic-pricing",
    description: "Creating an AI-powered revenue management system for a luxury hotel chain that maximized occupancy and revenue.",
    industry: "Travel & Hospitality",
    results: [
      { value: "28%", label: "Increased RevPAR" },
      { value: "15%", label: "Higher satisfaction" },
      { value: "32%", label: "More repeat bookings" }
    ],
    imageSrc: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
  }
];

export default ResourcesPage;
