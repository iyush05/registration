import { Mail, Instagram, Twitter, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  const socialLinks = [
    { icon: Mail, href: "mailto:gdg.campus@gmail.com", label: "Email" },
    { icon: Instagram, href: "https://www.instagram.com/gdg_akgec/", label: "Instagram" },
    { icon: Twitter, href: "https://x.com/gdg_akgec", label: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/google-developer-groups-on-campus-akgec/posts/?feedView=all", label: "LinkedIn" },
    { icon: Github, href: "", label: "GitHub" }
  ];

  return (
    <section id="contact" className="py-20 relative floating-dots">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions or need more information? Reach out to us through any of these channels:
          </p>
          
          <div className="flex justify-center gap-6 py-8">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className="w-14 h-14 card-gradient rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 group hover:shadow-glow"
                  aria-label={social.label}
                >
                  <IconComponent className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              );
            })}
          </div>
          
          <p className="text-muted-foreground">
            Or email us directly at:{" "}
            <a 
              href="mailto:gdg.campus@gmail.com" 
              className="text-primary hover:text-primary/80 transition-colors font-semibold"
            >
              gdg.campus@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;