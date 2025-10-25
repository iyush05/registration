import React from 'react';
import { Instagram, Youtube, Linkedin } from 'lucide-react';

export default function Footer() {
  // const quickLinks = [
  //   { name: 'Home', href: '#' },
  //   { name: 'Events', href: '#' },
  //   { name: 'Projects', href: '#' },
  //   { name: 'Team', href: '#' }
  // ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/gdg_akgec/', label: 'Instagram' },
    { icon: Youtube, href: 'https://www.youtube.com/channel/UCZvNkM_UNgR4_2fQpBqvWUw', label: 'YouTube' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/google-developer-groups-on-campus-akgec/posts/?feedView=all', label: 'LinkedIn' },
    { 
      icon: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ), 
      href: 'https://x.com/gdg_akgec', 
      label: 'X (Twitter)' 
    },
    { 
      icon: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
        </svg>
      ), 
      href: 'https://discord.com/invite/G2pC3EN34x', 
      label: 'Discord' 
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-950 via-blue-950/20 to-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Event Name and GDG Info */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Commit Con®
          </h2>
          
          <div className="flex items-center justify-center gap-3 text-gray-300 mb-2">
            <img src="/GDG_logo_dark.png" height={400} width={400} alt="" />
          </div>
        </div>

        {/* Quick Links */}
        {/* <div className="mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">Quick Links</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-center text-gray-300 hover:text-white transition-colors duration-300 text-lg font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div> */}

        {/* Social Links */}
        <div className="mb-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">Social</h3>
          <div className="flex justify-center items-center gap-4 sm:gap-6">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-slate-800/80 hover:bg-slate-700 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20"
                >
                  <IconComponent className="text-gray-300 hover:text-white transition-colors" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-gradient-to-r from-pink-400 via-pink-300 to-pink-400 py-3">
        <p className="text-center text-slate-950 font-semibold text-sm sm:text-base">
          © GDG On Campus-AKGEC
        </p>
      </div>
    </footer>
  );
}