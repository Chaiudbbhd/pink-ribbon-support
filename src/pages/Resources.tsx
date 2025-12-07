import { Phone, ExternalLink, BookOpen, Users, Heart, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const supportOrganizations = [
  {
    name: "American Cancer Society",
    description: "Comprehensive cancer information, support programs, and research funding.",
    url: "https://www.cancer.org",
  },
  {
    name: "National Cancer Institute",
    description: "Leading cancer research and treatment information from the NIH.",
    url: "https://www.cancer.gov",
  },
  {
    name: "Cancer Research UK",
    description: "World's largest independent cancer research charity.",
    url: "https://www.cancerresearchuk.org",
  },
  {
    name: "Breast Cancer Foundation",
    description: "Dedicated to ending breast cancer through research and education.",
    url: "https://www.bcrf.org",
  },
];

const hotlines = [
  {
    name: "Cancer Care Helpline",
    phone: "+91 98765 43210",
    label: "(Demo Number)",
    description: "Free, confidential cancer information and support 24/7.",
  },
  {
    name: "National Cancer Support Line",
    phone: "+91 87654 32109",
    label: "(Demo Number)",
    description: "Connect with trained specialists for support and guidance.",
  },
  {
    name: "Emotional Support Helpline",
    phone: "+91 76543 21098",
    label: "(Demo Number)",
    description: "Free emotional support and counseling services.",
  },
  {
    name: "Breast Cancer Helpline",
    phone: "+91 65432 10987",
    label: "(Demo Number)",
    description: "Specialized support for breast cancer patients and families.",
  },
];

const educationalResources = [
  {
    title: "Understanding Cancer",
    description: "Comprehensive guide to cancer types, stages, and treatment options from WHO.",
    icon: BookOpen,
    url: "https://www.who.int/health-topics/cancer",
  },
  {
    title: "Prevention & Screening",
    description: "Evidence-based guidelines for early detection and risk reduction from CDC.",
    icon: Heart,
    url: "https://www.cdc.gov/cancer/prevention/index.htm",
  },
  {
    title: "Caregiver Support",
    description: "Resources for those caring for cancer patients from Cancer.Net.",
    icon: Users,
    url: "https://www.cancer.net/coping-with-cancer/caring-loved-one",
  },
];

const ResourcesPage = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-6 py-6">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Resources & Support
          </h1>
          <p className="text-muted-foreground text-lg mt-2 max-w-2xl">
            Find trusted organizations, hotlines, and educational materials to support your journey.
          </p>
        </div>
      </header>

      {/* Support Organizations */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
              <Users className="w-5 h-5 text-secondary-foreground" />
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              Support Organizations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {supportOrganizations.map((org) => (
              <a
                key={org.name}
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card rounded-2xl p-6 card-hover flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                  <ExternalLink className="w-5 h-5 text-secondary-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {org.name}
                  </h3>
                  <p className="text-muted-foreground mt-1 text-sm">
                    {org.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary text-sm mt-3 font-medium">
                    Visit Website
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Hotlines */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
              <Phone className="w-5 h-5 text-secondary-foreground" />
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              Support Hotlines
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hotlines.map((hotline) => (
              <div
                key={hotline.name}
                className="bg-background rounded-2xl p-6 shadow-card"
              >
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {hotline.name}
                </h3>
                <p className="text-muted-foreground mt-1 text-sm">
                  {hotline.description}
                </p>
                <a
                  href={`tel:${hotline.phone.replace(/[^0-9\+]/g, "")}`}
                  className="inline-flex items-center gap-2 mt-4 bg-primary/10 text-primary px-4 py-2 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {hotline.phone} <span className="text-muted-foreground font-normal text-sm">{hotline.label}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Materials */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-secondary-foreground" />
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              Educational Materials
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {educationalResources.map((resource) => (
              <a
                key={resource.title}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card rounded-2xl p-8 card-hover text-center"
              >
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-300">
                  <resource.icon className="w-8 h-8 text-secondary-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {resource.description}
                </p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-medium">
                  Learn More
                  <ExternalLink className="w-3 h-3" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Need Someone to Talk To?
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-xl mx-auto">
            Our team is here to listen and provide support. Reach out anytime.
          </p>
          <Button
            variant="outline"
            size="xl"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground"
            asChild
          >
            <Link to="/#contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-foreground text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <p className="text-primary-foreground/70">
            © {new Date().getFullYear()} Cancer Awareness & Support. Spreading hope, one heart at a time.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default ResourcesPage;
