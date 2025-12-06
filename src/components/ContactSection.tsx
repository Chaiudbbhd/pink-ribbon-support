import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/50 to-transparent" />
      <div className="absolute inset-0 ribbon-pattern opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full mb-6 animate-fade-up">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-medium">Get In Touch</span>
            </div>

            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-up-delay-1">
              Reach Out to Us
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up-delay-2">
              Whether you have questions, need guidance, or simply want to share your story, we are here to listen. Send us a message and someone from our team will get back to you with support and resources.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-background rounded-2xl p-8 md:p-10 shadow-card animate-fade-up-delay-3"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="h-12 rounded-xl border-border focus:border-primary focus:ring-primary"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="h-12 rounded-xl border-border focus:border-primary focus:ring-primary"
                />
              </div>
            </div>

            <div className="space-y-2 mb-8">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Share your thoughts, questions, or story..."
                required
                rows={5}
                className="rounded-xl border-border focus:border-primary focus:ring-primary resize-none"
              />
            </div>

            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="w-full md:w-auto"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <Send className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </form>

          <p className="text-center text-muted-foreground mt-8 animate-fade-up-delay-4">
            We're here to support you. 💗
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
