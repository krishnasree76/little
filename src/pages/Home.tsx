import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { FeatureCard, HighlightBox } from "@/components/ui/feature-card";
import { Button } from "@/components/ui/button";
import { 
  Sun, 
  Lightbulb, 
  Users, 
  MapPin, 
  Sparkles,
  Brain,
  Heart,
  Target,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import heroImage from "@/assets/hero-children-learning.jpg";
import innovationImage from "@/assets/innovation-hub.jpg";

const highlights = [
  { icon: Sun, title: "Evening-Only Model", description: "Structured learning after school hours" },
  { icon: Lightbulb, title: "Activity-Based Learning", description: "Hands-on skill development approach" },
  { icon: Users, title: "Small Batches", description: "High engagement with personalized attention" },
  { icon: MapPin, title: "District Expansion", description: "Growing network of learning centers" },
];

const benefits = [
  "Learn through activities",
  "Build life skills",
  "Gain confidence",
  "Develop thinking abilities",
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-soft-gradient pattern-circles overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <span className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold">
                <Sparkles className="w-4 h-4" />
                Exclusive Evening Learning Centers
              </span>
              
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Where Evenings Build{" "}
                <span className="text-primary">Confident Children</span>
              </h1>
              
              <p className="text-xl text-muted-foreground">
                • Beyond Preschool • Beyond Academics • Beyond Ordinary
              </p>
              
              <p className="text-muted-foreground text-lg">
                Not a School. Not a Tuition Center.{" "}
                <span className="font-semibold text-foreground">
                  A Place Where Skills Come Alive.
                </span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild variant="cta" size="xl">
                  <Link to="/concept">
                    Explore Innovation HUB
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="xl">
                  <Link to="/franchise">Become a Franchise Partner</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <div className="relative rounded-3xl overflow-hidden shadow-large">
                <img 
                  src={heroImage} 
                  alt="Happy children learning together at Innovation HUB" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-large border border-border/50 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
                    <Brain className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-foreground">Skill-Based</p>
                    <p className="text-sm text-muted-foreground">Learning Approach</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Need Section */}
      <Section className="bg-card">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader 
              badge="The Challenge"
              title="Why Children Need More Than Academics"
              centered={false}
            />
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                Children spend most of their day in school focusing on academics. But real growth 
                also requires <span className="text-secondary font-semibold">creativity, confidence, 
                communication, and thinking skills</span>.
              </p>
              <p>
                Today's parents are looking for meaningful engagement after school hours — not more 
                textbooks, not more tuition pressure, but a joyful place where children can learn 
                through activities.
              </p>
            </div>
            <HighlightBox variant="highlight" className="mt-6">
              <p className="text-foreground font-medium">
                "Children need spaces to explore, create, and build confidence — beyond the classroom."
              </p>
            </HighlightBox>
          </div>
          
          <div className="relative">
            <img 
              src={innovationImage} 
              alt="Children collaborating on activities" 
              className="rounded-3xl shadow-large"
            />
          </div>
        </div>
      </Section>

      {/* Our Solution Section */}
      <Section className="bg-soft-gradient pattern-dots">
        <SectionHeader 
          badge="Our Solution"
          title="Innovation HUB – Where Skills Come Alive"
          subtitle="An exclusive evening learning concept designed to help children grow beyond academics"
        />
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-card rounded-3xl p-8 shadow-large border border-border/50">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
              At Innovation HUB, children:
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-foreground font-medium">{benefit}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-muted-foreground">
              All in a safe, happy, and child-friendly environment.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-primary rounded-3xl p-8 text-primary-foreground">
              <Target className="w-12 h-12 mb-4 text-accent" />
              <h4 className="font-heading text-xl font-bold mb-2">Our Focus</h4>
              <p className="text-primary-foreground/90">
                Building confident, creative children through inspiring evening learning spaces 
                that focus on skill development rather than academic pressure.
              </p>
            </div>
            
            <div className="bg-secondary rounded-3xl p-8 text-secondary-foreground">
              <Heart className="w-12 h-12 mb-4" />
              <h4 className="font-heading text-xl font-bold mb-2">Child-First Approach</h4>
              <p className="text-secondary-foreground/90">
                Every activity is designed keeping the child's joy and growth at the center — 
                no stress, just learning through play.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Quick Highlights Section */}
      <Section className="bg-card">
        <SectionHeader 
          badge="Why Choose Us"
          title="What Makes Innovation HUB Special"
        />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <FeatureCard 
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              variant={index % 2 === 0 ? "primary" : "secondary"}
            />
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Give Your Child the Gift of Skills?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of parents who have chosen Innovation HUB for their children's 
            holistic development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="cta" size="xl">
              <Link to="/contact">
                Enroll Your Child
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
  asChild
  variant="outline"
  size="xl"
  className="border-[#0A66C2] text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white"
>
  <Link to="/franchise">Explore Franchise</Link>
</Button>

          </div>
        </div>
      </section>
    </Layout>
  );
}
