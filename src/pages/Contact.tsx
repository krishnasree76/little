import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { toast } from "sonner";

const WHATSAPP_NUMBER = "919984799847";

export default function Contact() {
  const [searchParams] = useSearchParams();
  const initialFormType = searchParams.get("type") === "franchise" ? "franchise" : "enrollment";
  const [formType, setFormType] = useState<"enrollment" | "franchise">(initialFormType);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEnrollmentSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = new FormData(e.currentTarget);
    const message = `
New Child Enrollment Enquiry

Parent Name: ${form.get("parentName")}
Child Name: ${form.get("childName")}
Child Age: ${form.get("childAge")}
School Name: ${form.get("schoolName") || "N/A"}
Location: ${form.get("location")}
Phone: ${form.get("phone")}
Preferred Center: ${form.get("preferredCenter") || "N/A"}
Interests: ${form.getAll("interests").join(", ")}
Heard From: ${form.get("source")}
    `;

    toast.success("Opening WhatsApp...");
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    
    setIsSubmitting(false);
  };

  const handleFranchiseSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = new FormData(e.currentTarget);
    const message = `
New Franchise Enquiry

Full Name: ${form.get("fullName")}
Mobile: ${form.get("mobile")}
Email: ${form.get("email")}
City/District: ${form.get("cityDistrict")}
Franchise Type: ${form.get("franchiseType")}
Profession: ${form.get("profession")}
Education Experience: ${form.get("educationExperience")}
Investment Readiness: ${form.get("investment")}
Interest: ${form.get("interest")}
    `;

    toast.success("Opening WhatsApp...");
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-soft-gradient pattern-circles py-20"
      >
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block bg-accent/20 text-accent-foreground px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Get in Touch
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Let's Start a <span className="text-primary">Conversation</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Whether you want to enroll your child or explore franchise opportunities, we're here to help.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Contact Info Section */}
      <Section className="bg-card">
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }} 
            viewport={{ once: true }} 
            className="bg-primary rounded-2xl p-6 text-primary-foreground text-center"
          >
            <MapPin className="w-10 h-10 mx-auto mb-4 text-accent" />
            <h3 className="font-heading font-bold text-lg mb-2">Visit Us</h3>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/80 text-sm hover:underline"
            >
              C-05-320, Beside Sri Krishna Temple,<br />
              Dwaraka Nagar, KADAPA – 516004
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.1 }} 
            viewport={{ once: true }} 
            className="bg-secondary rounded-2xl p-6 text-secondary-foreground text-center"
          >
            <Phone className="w-10 h-10 mx-auto mb-4" />
            <h3 className="font-heading font-bold text-lg mb-2">Call Us</h3>
            <a href="tel:9984799847" className="block hover:underline">99847 99847</a>
            <a href="tel:9642999847" className="block hover:underline">96429 99847</a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.2 }} 
            viewport={{ once: true }} 
            className="bg-accent rounded-2xl p-6 text-accent-foreground text-center"
          >
            <Mail className="w-10 h-10 mx-auto mb-4" />
            <h3 className="font-heading font-bold text-lg mb-2">Email Us</h3>
            <a href="mailto:pvr@littlegeniusinnovationhub.com" className="text-accent-foreground/80 text-sm break-all hover:underline">
              pvr@littlegeniusinnovationhub.com
            </a>
          </motion.div>
        </div>
      </Section>

      {/* Forms Section */}
      <Section className="bg-soft-gradient">
        <div className="max-w-3xl mx-auto">
          {/* Form Type Selector */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-card rounded-xl p-1 shadow-soft border border-border/50">
              <button
                onClick={() => setFormType("enrollment")}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  formType === "enrollment"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Child Enrollment
              </button>
              <button
                onClick={() => setFormType("franchise")}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  formType === "franchise"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Franchise Enquiry
              </button>
            </div>
          </div>

          {/* Enrollment Form */}
          {formType === "enrollment" && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.5 }} 
              viewport={{ once: true }} 
              className="bg-card rounded-3xl p-8 shadow-large border border-border/50"
            >
              <SectionHeader 
                title="Child Enrollment Enquiry"
                subtitle="Fill out the form below and we'll get back to you"
                className="mb-8"
              />
              
              <form onSubmit={handleEnrollmentSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="parentName">Parent Name *</Label>
                    <Input id="parentName" name="parentName" required placeholder="Your full name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="childName">Child Name *</Label>
                    <Input id="childName" name="childName" required placeholder="Child's name" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="childAge">Child Age *</Label>
                    <Select name="childAge" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select age" />
                      </SelectTrigger>
                      <SelectContent>
                        {[3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(age => (
                          <SelectItem key={age} value={age.toString()}>{age} years</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="schoolName">School Name (Optional)</Label>
                    <Input id="schoolName" name="schoolName" placeholder="Child's school" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="location">Area / Location *</Label>
                    <Input id="location" name="location" required placeholder="Your area" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Contact Number *</Label>
                    <Input id="phone" name="phone" type="tel" required placeholder="Your phone number" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="preferredCenter">Preferred Center Location</Label>
                  <Input id="preferredCenter" name="preferredCenter" placeholder="Nearest center preference" />
                </div>
                
                <div className="space-y-2">
                  <Label>What are you looking for? *</Label>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {["Skill development", "Confidence building", "Activity learning", "General engagement"].map((option) => (
                      <label key={option} className="flex items-center gap-3 bg-muted rounded-lg p-3 cursor-pointer hover:bg-muted/80">
                        <input type="checkbox" name="interests" value={option} className="w-4 h-4 accent-primary" />
                        <span className="text-sm">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="source">How did you hear about us?</Label>
                  <Select name="source" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select source" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="social">Social Media</SelectItem>
                      <SelectItem value="friend">Friend/Family</SelectItem>
                      <SelectItem value="search">Google Search</SelectItem>
                      <SelectItem value="local">Local Advertisement</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button type="submit" variant="cta" size="xl" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Processing..." : "Submit Enquiry"}
                  <Send className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </motion.div>
          )}

          {/* Franchise Form */}
          {formType === "franchise" && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.5 }} 
              viewport={{ once: true }} 
              className="bg-card rounded-3xl p-8 shadow-large border border-border/50"
            >
              <SectionHeader 
                title="Franchise Enquiry"
                subtitle="Join the evening learning revolution"
                className="mb-8"
              />
              
              <form onSubmit={handleFranchiseSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input id="fullName" name="fullName" required placeholder="Your full name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mobile">Mobile Number *</Label>
                    <Input id="mobile" name="mobile" type="tel" required placeholder="Your mobile number" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email ID *</Label>
                    <Input id="email" name="email" type="email" required placeholder="Your email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cityDistrict">City & District *</Label>
                    <Input id="cityDistrict" name="cityDistrict" required placeholder="City, District" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Interested in *</Label>
                  <RadioGroup name="franchiseType" defaultValue="district" className="flex gap-6">
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="district" id="district" />
                      <Label htmlFor="district" className="cursor-pointer">District Franchise</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="center" id="center" />
                      <Label htmlFor="center" className="cursor-pointer">Center Franchise</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="profession">Current Profession *</Label>
                  <Input id="profession" name="profession" required placeholder="Your current profession" />
                </div>
                
                <div className="space-y-2">
                  <Label>Have you worked in education before? *</Label>
                  <RadioGroup name="educationExperience" defaultValue="no" className="flex gap-6">
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="yes" id="expYes" />
                      <Label htmlFor="expYes" className="cursor-pointer">Yes</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="no" id="expNo" />
                      <Label htmlFor="expNo" className="cursor-pointer">No</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div className="space-y-2">
                  <Label>Investment Readiness *</Label>
                  <RadioGroup name="investment" defaultValue="exploring" className="space-y-2">
                    {[
                      { value: "ready", label: "Ready now" },
                      { value: "3months", label: "Within 3 months" },
                      { value: "exploring", label: "Just exploring" },
                    ].map((option) => (
                      <div key={option.value} className="flex items-center gap-2">
                        <RadioGroupItem value={option.value} id={option.value} />
                        <Label htmlFor={option.value} className="cursor-pointer">{option.label}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="interest">Why are you interested in Innovation HUB?</Label>
                  <Textarea 
                    id="interest" 
                    name="interest" 
                    placeholder="Tell us about your motivation and vision..."
                    rows={4}
                  />
                </div>
                
                <Button type="submit" variant="cta" size="xl" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Processing..." : "Submit Application"}
                  <Send className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </motion.div>
          )}
        </div>
      </Section>

      {/* Working Hours Section */}
      <Section className="bg-card">
        <div className="max-w-md mx-auto text-center">
          <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
            <Clock className="w-8 h-8 text-primary" />
          </div>
          <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Center Timings</h3>
          <div className="space-y-2 text-muted-foreground">
            <p><strong className="text-foreground">Monday - Saturday:</strong> 4:00 PM - 7:00 PM</p>
            <p><strong className="text-foreground">Sunday:</strong> Closed</p>
          </div>
        </div>
      </Section>

      {/* Floating WhatsApp Button */}
      <a 
        href={`https://wa.me/${WHATSAPP_NUMBER}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-lg z-50 animate-bounce flex items-center gap-2 font-semibold"
      >
        <span>Chat on WhatsApp</span>
      </a>
    </Layout>
  );
}