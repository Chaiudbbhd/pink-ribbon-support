import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-primary" />
            <span className="font-heading text-xl font-semibold">
              Cancer Awareness & Support
            </span>
          </div>

          <p className="text-primary-foreground/70 text-center md:text-right">
            © {new Date().getFullYear()} Cancer Awareness. Spreading hope, one heart at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
