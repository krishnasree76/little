import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { FeatureCard, HighlightBox } from "@/components/ui/feature-card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Brain,
  Lightbulb,
  Focus,
  MonitorOff,
  Home,
  School,
  ArrowRight,
  Sparkles,
  Package
} from "lucide-react";
import glantoImage from "@/assets/glanto-kits.jpg";

const kitBenefits = [
  { icon: Brain, title: "Improve Thinking Ability", description: "Develop problem-solving and logical reasoning skills" },
  { icon: Lightbulb, title: "Strengthen Creativity", description: "Encourage imagination and innovative thinking" },
  { icon: Focus, title: "Develop Concentration", description: "Build focus and attention span through engaging activities" },
  { icon: MonitorOff, title: "Screen-Free Learning", description: "Meaningful engagement without digital devices" },
];

const usageLocations = [
  { icon: School, title: "Inside Innovation HUB Centers", description: "Guided learning with trained facilitators" },
  { icon: Home, title: "At Home with Parent Guidance", description: "Continue the learning journey at home" },
];

export default function GlantoKits() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-soft-gradient pattern-circles py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block bg-accent/20 text-accent-foreground px-4 py-1.5 rounded-full text-sm font-semibold">
                <Package className="w-4 h-4 inline mr-2" />
                Glanto Edu Kits
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Hands-On Learning with{" "}
                <span className="text-primary">Glanto Edu Kits</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Specially designed activity-based learning kits that make learning fun, 
                practical, and skill-focused.
              </p>
              <Button asChild variant="cta" size="xl">
                <Link to="/contact">
                  Get Your Kits Today
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src={glantoImage} 
                alt="Glanto Edu Kits - Activity-based learning materials"
                className="rounded-3xl shadow-large"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent rounded-2xl p-4 shadow-large">
                <Sparkles className="w-6 h-6 text-accent-foreground" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kit Benefits Section */}
      <Section className="bg-card">
        <SectionHeader 
          badge="Why Glanto Kits"
          title="Transform Learning Through Doing"
          subtitle="Our kits are designed to engage children's minds while developing essential skills"
        />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {kitBenefits.map((benefit, index) => (
            <FeatureCard 
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              variant={index % 2 === 0 ? "primary" : "secondary"}
            />
          ))}
        </div>
      </Section>

      {/* How Kits Are Used Section */}
      <Section className="bg-soft-gradient">
        <SectionHeader 
          badge="Versatile Usage"
          title="Where Glanto Kits Shine"
          subtitle="Designed for multiple learning environments"
        />
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {usageLocations.map((location, index) => (
            <div key={index} className="bg-card rounded-3xl p-8 shadow-large border border-border/50 hover-lift">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <location.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">{location.title}</h3>
              <p className="text-muted-foreground text-lg">{location.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <HighlightBox variant="highlight" className="inline-block max-w-2xl">
            <p className="text-lg text-foreground font-medium">
              Glanto Kits transform learning from passive listening into <strong>active doing</strong>.
            </p>
          </HighlightBox>
        </div>
      </Section>

      {/* What Makes Glanto Special Section */}
      <Section className="bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader 
            badge="Not Just Products"
            title="Learning Experiences, Not Just Kits"
            className="text-primary-foreground"
          />
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { heading: "Not Toys", subtext: "Purposefully designed learning tools" },
              { heading: "Not Textbooks", subtext: "No boring theory, just hands-on fun" },
              { heading: "Learning Experiences", subtext: "Complete development journeys" },
            ].map((item, index) => (
              <div key={index} className="bg-primary-foreground/10 rounded-2xl p-6 backdrop-blur">
                <p className="font-heading text-xl font-bold text-primary-foreground mb-2">{item.heading}</p>
                <p className="text-primary-foreground/80">{item.subtext}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-accent rounded-2xl p-8 inline-block">
            <p className="font-heading text-xl font-bold text-accent-foreground">
              Glanto Kits are Learning Experiences
            </p>
          </div>
        </div>
      </Section>

      {/* Kit Categories Section */}
      <Section className="bg-card">
        <SectionHeader 
          badge="Our Collection"
          title="Explore Glanto Kit Categories"
          subtitle="Comprehensive kits designed for different skill areas"
        />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Creative Arts Kit", description: "Drawing, painting, and craft activities", color: "bg-accent/20" },
            { title: "Logic & Reasoning Kit", description: "Puzzles, patterns, and problem-solving", color: "bg-primary/10" },
            { title: "Building Blocks Kit", description: "Construction and spatial thinking", color: "bg-secondary/20" },
            { title: "Nature Explorer Kit", description: "Science experiments and discovery", color: "bg-secondary/20" },
            { title: "Communication Kit", description: "Language games and expression activities", color: "bg-primary/10" },
            { title: "Number Fun Kit", description: "Math concepts through play", color: "bg-accent/20" },
          ].map((kit, index) => (
            <div key={index} className={`${kit.color} rounded-2xl p-6 border border-border/50 hover-lift`}>
              <h3 className="font-heading font-bold text-xl text-foreground mb-2">{kit.title}</h3>
              <p className="text-muted-foreground">{kit.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <section className="bg-secondary py-20">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
            Ready to Transform Learning?
          </h2>
          <p className="text-secondary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Get Glanto Edu Kits for your child or explore becoming a center partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="cta" size="xl">
              <Link to="/contact">
                Order Kits
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
              <Link to="/franchise">Become a Partner</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
