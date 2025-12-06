import { useState, useEffect } from "react";
import { Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Mission", href: "#mission", isPage: false },
  { label: "Awareness", href: "#awareness", isPage: false },
  { label: "Resources", href: "/resources", isPage: true },
  { label: "Contact", href: "#contact", isPage: false },
];

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (!isHomePage) {
      window.location.href = "/" + href;
      return;
    }
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const shouldShowSolid = isScrolled || !isHomePage;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        shouldShowSolid
          ? "bg-card/95 backdrop-blur-md shadow-card py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Heart
              className={`w-6 h-6 transition-colors duration-300 group-hover:scale-110 ${
                shouldShowSolid ? "text-primary" : "text-primary-foreground"
              }`}
            />
            <span
              className={`font-heading text-lg font-semibold transition-colors duration-300 ${
                shouldShowSolid ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              Cancer Awareness
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.isPage ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-sm font-medium transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${
                    shouldShowSolid
                      ? "text-foreground hover:text-primary"
                      : "text-primary-foreground/90 hover:text-primary-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-sm font-medium transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${
                    shouldShowSolid
                      ? "text-foreground hover:text-primary"
                      : "text-primary-foreground/90 hover:text-primary-foreground"
                  }`}
                >
                  {link.label}
                </button>
              )
            )}
            <Button
              variant={shouldShowSolid ? "default" : "outline"}
              size="sm"
              onClick={() => handleNavClick("#contact")}
              className={
                !shouldShowSolid
                  ? "border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground"
                  : ""
              }
            >
              Get Support
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors ${
              shouldShowSolid ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border/20 pt-4 animate-fade-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) =>
                link.isPage ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-left text-base font-medium transition-colors ${
                      shouldShowSolid
                        ? "text-foreground hover:text-primary"
                        : "text-primary-foreground hover:text-primary-foreground/80"
                    }`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className={`text-left text-base font-medium transition-colors ${
                      shouldShowSolid
                        ? "text-foreground hover:text-primary"
                        : "text-primary-foreground hover:text-primary-foreground/80"
                    }`}
                  >
                    {link.label}
                  </button>
                )
              )}
              <Button
                variant="default"
                size="sm"
                onClick={() => handleNavClick("#contact")}
                className="w-fit mt-2"
              >
                Get Support
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
