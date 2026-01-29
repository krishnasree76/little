import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { HighlightBox } from "@/components/ui/feature-card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, ArrowRight, Quote } from "lucide-react";
import foundersImage from "@/assets/founders.jpg";

export default function Founders() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-soft-gradient pattern-circles py-20">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block bg-accent/20 text-accent-foreground px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Meet Our Founders
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              The Heart Behind the <span className="text-primary">Innovation HUB</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              A Dream to Change How Children Learn After School
            </p>
          </div>
        </div>
      </section>

      {/* Founders Story Section */}
      <Section className="bg-card">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-large">
              <img 
                src={foundersImage} 
                alt="P. Venkateswara Rao (PVR) and C. Gangadevi - Founders of Little Genius Kids World"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-accent rounded-2xl p-4 shadow-large">
              <p className="font-heading font-bold text-accent-foreground">Est. 2022</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <SectionHeader 
              title="A Vision Born from Purpose"
              centered={false}
              className="mb-6"
            />
            
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                <strong className="text-foreground">Little Genius Kids World – Innovation HUB</strong> was 
                founded by <strong className="text-primary">P. Venkateswara Rao (PVR)</strong> and{" "}
                <strong className="text-primary">C. Gangadevi</strong>, who share a deep belief that 
                education should go beyond textbooks.
              </p>
              
              <p>
                As parents and passionate education thinkers, they noticed a gap — children had schools 
                for academics, but lacked a joyful space for skill development in the evenings.
              </p>
              
              <p>
                They envisioned a place where children could explore, create, build confidence, and 
                develop life skills in a stress-free environment. This vision led to the creation of{" "}
                <strong className="text-secondary">Innovation HUB</strong> – an exclusive evening 
                learning center concept.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Quote Section */}
      <Section className="bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="w-16 h-16 text-accent mx-auto mb-6" />
          <blockquote className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-6 leading-relaxed">
            "Our dream was to build joyful evening learning spaces where children develop skills, 
            confidence, and creativity."
          </blockquote>
          <p className="text-primary-foreground/80 text-lg">
            — P. Venkateswara Rao & C. Gangadevi, Founders
          </p>
        </div>
      </Section>

      {/* Vision & Mission Section */}
      <Section className="bg-soft-gradient">
        <SectionHeader 
          badge="Our Purpose"
          title="Vision & Mission"
        />
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-card rounded-3xl p-8 shadow-large border border-border/50 hover-lift">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground text-lg">
              To build confident, creative children through inspiring evening learning spaces 
              that nurture their potential and prepare them for a successful future.
            </p>
          </div>
          
          <div className="bg-card rounded-3xl p-8 shadow-large border border-border/50 hover-lift">
            <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground text-lg">
              To establish Innovation HUB centers across districts and make skill-based evening 
              learning accessible to every child in India.
            </p>
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section className="bg-card">
        <SectionHeader 
          badge="What We Believe"
          title="Our Core Values"
        />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Child-Centric", description: "Every decision puts children's wellbeing first" },
            { title: "Joyful Learning", description: "Education through play and exploration" },
            { title: "Skill Focus", description: "Building capabilities beyond academics" },
            { title: "Safe Spaces", description: "Nurturing environments for growth" },
          ].map((value, index) => (
            <div key={index} className="text-center p-6 bg-background rounded-2xl border border-border/50 hover-lift">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="font-heading font-bold text-xl text-accent-foreground">{index + 1}</span>
              </div>
              <h4 className="font-heading font-bold text-lg text-foreground mb-2">{value.title}</h4>
              <p className="text-muted-foreground text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <section className="bg-secondary py-20">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
            Join Our Mission
          </h2>
          <p className="text-secondary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Be part of the movement to transform evening learning for children across India.
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
  className="border-[#3BAE5D] text-[#3BAE5D] hover:bg-[#3BAE5D] hover:text-white"
>
  <Link to="/franchise">Partner With Us</Link>
</Button>

          </div>
        </div>
      </section>
    </Layout>
  );
}
