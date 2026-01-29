import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { FeatureCard, HighlightBox } from "@/components/ui/feature-card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Sparkles, 
  Brain, 
  Lightbulb, 
  MessageSquare, 
  Puzzle,
  HandHeart,
  Layers,
  ArrowRight,
  XCircle,
  CheckCircle2
} from "lucide-react";
import innovationImage from "@/assets/innovation-hub.jpg";

const focusAreas = [
  { icon: Sparkles, title: "Skill Development", description: "Building practical abilities that last a lifetime" },
  { icon: Lightbulb, title: "Creativity & Exploration", description: "Encouraging imagination and discovery" },
  { icon: Brain, title: "Thinking & Problem Solving", description: "Developing critical thinking abilities" },
  { icon: MessageSquare, title: "Confidence & Communication", description: "Building self-expression skills" },
];

const learningMethods = [
  "Hands-on activities",
  "Structured skill sessions",
  "Interactive learning methods",
  "Glanto Edu Kits",
];

export default function Concept() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-soft-gradient pattern-circles py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block bg-accent/20 text-accent-foreground px-4 py-1.5 rounded-full text-sm font-semibold">
                The Innovation HUB Concept
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                What Happens Inside an{" "}
                <span className="text-primary">Innovation HUB?</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                A Beyond Preschool evening learning center where children come after school to 
                engage in structured, activity-based programs.
              </p>
              <Button asChild variant="cta" size="xl">
                <Link to="/contact">
                  Visit a Center Near You
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src={innovationImage} 
                alt="Children learning at Innovation HUB"
                className="rounded-3xl shadow-large"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <Section className="bg-card">
        <SectionHeader 
          badge="What We Focus On"
          title="Four Pillars of Development"
          subtitle="Our curriculum is designed around comprehensive child development"
        />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {focusAreas.map((area, index) => (
            <FeatureCard 
              key={index}
              icon={area.icon}
              title={area.title}
              description={area.description}
              variant={index % 2 === 0 ? "primary" : "secondary"}
            />
          ))}
        </div>
      </Section>

      {/* How Learning Happens Section */}
      <Section className="bg-soft-gradient">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader 
              badge="Our Approach"
              title="How Learning Happens"
              centered={false}
            />
            
            <p className="text-lg text-muted-foreground mb-8">
              At Innovation HUB, learning is never about passive listening. Children actively 
              participate, create, and discover through:
            </p>
            
            <div className="space-y-4">
              {learningMethods.map((method, index) => (
                <div key={index} className="flex items-center gap-4 bg-card rounded-xl p-4 shadow-soft border border-border/50">
                  <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg font-medium text-foreground">{method}</p>
                </div>
              ))}
            </div>
            
            <HighlightBox variant="info" className="mt-8">
              <p className="text-foreground font-medium">
                There is no syllabus pressure, no exams, and no academic stress.
              </p>
            </HighlightBox>
          </div>
          
          <div className="space-y-6">
            <div className="bg-card rounded-3xl p-8 shadow-large border border-border/50">
              <HandHeart className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                Safe & Nurturing Environment
              </h3>
              <p className="text-muted-foreground">
                Every Innovation HUB center maintains the highest standards of safety and care, 
                with trained facilitators who understand child development.
              </p>
            </div>
            
            <div className="bg-card rounded-3xl p-8 shadow-large border border-border/50">
              <Layers className="w-12 h-12 text-secondary mb-4" />
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                Structured Yet Flexible
              </h3>
              <p className="text-muted-foreground">
                Our programs follow a structured approach while allowing room for each child's 
                unique pace and interests.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* What We Are NOT Section */}
      <Section className="bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader 
            badge="Clear Positioning"
            title="What Makes Us Different"
            className="text-primary-foreground"
          />
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { text: "Not a School", icon: XCircle },
              { text: "Not a Preschool", icon: XCircle },
              { text: "Not a Tuition Center", icon: XCircle },
            ].map((item, index) => (
              <div key={index} className="bg-primary-foreground/10 rounded-2xl p-6 backdrop-blur">
                <item.icon className="w-10 h-10 text-accent mx-auto mb-4" />
                <p className="font-heading text-xl font-bold text-primary-foreground">{item.text}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-accent rounded-2xl p-8 inline-block">
            <p className="font-heading text-xl font-bold text-accent-foreground">
              An Exclusive Evening Learning Center Focused on Life Skills
            </p>
          </div>
        </div>
      </Section>

      {/* Daily Schedule Preview */}
      <Section className="bg-card">
        <SectionHeader 
          badge="A Day at Innovation HUB"
          title="Structured Evening Sessions"
          subtitle="Our evening program is designed to maximize learning in a joyful environment"
        />
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {[
              { time: "4:00 PM", activity: "Welcome & Warm-up Activities", color: "bg-primary" },
              { time: "4:30 PM", activity: "Skill Session with Glanto Kits", color: "bg-secondary" },
              { time: "5:15 PM", activity: "Creative Exploration Time", color: "bg-accent" },
              { time: "5:45 PM", activity: "Group Activity & Confidence Building", color: "bg-primary" },
              { time: "6:15 PM", activity: "Cool Down & Sharing Circle", color: "bg-secondary" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className={`${item.color} text-white rounded-xl px-4 py-2 font-bold min-w-[100px] text-center`}>
                  {item.time}
                </div>
                <div className="flex-1 bg-muted rounded-xl p-4">
                  <p className="font-medium text-foreground">{item.activity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <section className="bg-secondary py-20">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
            Experience Innovation HUB
          </h2>
          <p className="text-secondary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a visit to see how we're transforming evening learning for children.
          </p>
          <Button asChild variant="cta" size="xl">
            <Link to="/contact">
              Book a Visit
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
