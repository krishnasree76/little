import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { FeatureCard, HighlightBox, StatCard } from "@/components/ui/feature-card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Building2,
  Users,
  GraduationCap,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Briefcase
} from "lucide-react";
import franchiseImage from "@/assets/franchise-opportunity.jpg";

const uniquePoints = [
  { icon: Building2, title: "Not a School Franchise", description: "A new category of education business" },
  { icon: Users, title: "Not Tuition Business", description: "Beyond academic supplementation" },
  { icon: GraduationCap, title: "Evening Skill Learning", description: "Unique positioning in education space" },
  { icon: TrendingUp, title: "District-Wide Model", description: "Build a network, not just a center" },
];

const idealPartners = [
  "Educated women looking for purposeful work",
  "Teachers who want to make a bigger impact",
  "Entrepreneurs passionate about education",
  "Parents who understand children's needs",
  "Professionals seeking meaningful ventures",
];

export default function Franchise() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-soft-gradient pattern-circles py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block bg-accent/20 text-accent-foreground px-4 py-1.5 rounded-full text-sm font-semibold">
                <Briefcase className="w-4 h-4 inline mr-2" />
                Franchise Opportunity
              </span>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">

                Own the Evening Learning{" "}
                <span className="text-primary">Revolution</span> in Your District
              </h1>
              <p className="text-xl text-muted-foreground">
                Little Genius Kids World is expanding through a unique District Franchise Partner Model.
              </p>
              <Button asChild variant="cta" size="xl">
                <Link to="/contact?type=franchise">
                  Apply for Franchise
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src={franchiseImage} 
                alt="Franchise opportunity - Business meeting at Innovation HUB"
                className="rounded-3xl shadow-large"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Franchise Introduction Video */}
<Section className="bg-white">
  <SectionHeader
    badge="Watch & Learn"
    title="See the Innovation HUB Franchise Model in Action"
    subtitle="Understand how our district partnership model works"
  />

  <div className="max-w-4xl mx-auto mt-10">
    <div className="relative w-full overflow-hidden rounded-3xl shadow-large"
         style={{ paddingTop: "56.25%" }}>

      <iframe
        src="https://www.youtube.com/embed/hwIDOqTBwKY?autoplay=1&mute=1"

        title="Innovation HUB Franchise Overview"
        className="absolute top-0 left-0 w-full h-full"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

    </div>
  </div>
</Section>


      {/* What Makes This Unique Section */}
      <Section className="bg-card">
        <SectionHeader 
          badge="Unique Opportunity"
          title="What Makes This Different"
          subtitle="A completely new category in the education space"
        />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {uniquePoints.map((point, index) => (
            <FeatureCard 
              key={index}
              icon={point.icon}
              title={point.title}
              description={point.description}
              variant={index % 2 === 0 ? "primary" : "secondary"}
            />
          ))}
        </div>
      </Section>

      {/* District Model Section */}
      <Section className="bg-soft-gradient">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader 
              badge="Business Model"
              title="District Franchise Partner Model"
              centered={false}
            />
            
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                As a District Franchise Partner, you don't just run one center — you build a 
                <strong className="text-foreground"> network of Innovation HUBs</strong> across 
                your entire district.
              </p>
              <p>
                This unique model gives you exclusive rights to expand within your territory, 
                creating a sustainable and scalable education business.
              </p>
            </div>
            
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <StatCard value="100+" label="Districts Targeted" className="bg-card rounded-xl shadow-soft border border-border/50" />
              <StatCard value="500+" label="Centers Planned" className="bg-card rounded-xl shadow-soft border border-border/50" />
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-primary rounded-3xl p-8 text-primary-foreground">
              <MapPin className="w-12 h-12 mb-4 text-accent" />
              <h3 className="font-heading text-xl font-bold mb-2">Exclusive Territory</h3>
              <p className="text-primary-foreground/90">
                Get exclusive rights to develop and operate Innovation HUB centers 
                within your designated district.
              </p>
            </div>
            
            <div className="bg-card rounded-3xl p-8 shadow-large border border-border/50">
              <TrendingUp className="w-12 h-12 mb-4 text-secondary" />
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">Scalable Growth</h3>
              <p className="text-muted-foreground">
                Start with one center and scale to multiple locations as demand grows 
                in your district.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Ideal Partners Section */}
      <Section className="bg-card">
        <SectionHeader 
          badge="Who Should Apply"
          title="Ideal Franchise Partners"
          subtitle="We're looking for passionate individuals who share our vision"
        />
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-soft-gradient rounded-3xl p-8 border border-border/50">
            <div className="space-y-4">
              {idealPartners.map((partner, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-foreground">{partner}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* What You Get Section */}
      <Section className="bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader 
            badge="Franchise Support"
            title="What You Get as a Partner"
            className="text-primary-foreground"
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              "Complete Training Program",
              "Glanto Edu Kit Supply",
              "Marketing Support",
              "Operational Guidelines",
              "Curriculum Framework",
              "Ongoing Mentorship",
            ].map((item, index) => (
              <div key={index} className="bg-primary-foreground/10 rounded-xl p-6 backdrop-blur text-left">
                <CheckCircle2 className="w-6 h-6 text-accent mb-3" />
                <p className="font-heading font-bold text-primary-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Investment Section */}
      <Section className="bg-soft-gradient">
        <SectionHeader 
          badge="Investment Overview"
          title="Build a Purpose-Driven Business"
        />
        
        <div className="max-w-2xl mx-auto text-center">
          <HighlightBox variant="highlight" className="mb-8">
            <p className="text-lg text-foreground font-medium">
              Low investment education franchise with high impact potential. Build a business 
              that makes a difference in children's lives.
            </p>
          </HighlightBox>
          
          <p className="text-muted-foreground text-lg mb-8">
            Investment details and terms are discussed during the application process. 
            We offer flexible models based on your district's potential.
          </p>
          
          <Button asChild variant="cta" size="xl">
            <Link to="/contact?type=franchise">
              Request Franchise Information
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* CTA Section */}
      <section className="bg-secondary py-20">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
            Build a Business with Purpose
          </h2>
          <p className="text-secondary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Build a district-wide learning ecosystem. Transform how children learn after school 
            in your community.
          </p>
          <Button asChild variant="cta" size="xl">
            <Link to="/contact?type=franchise">
              Become a Franchise Partner
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
