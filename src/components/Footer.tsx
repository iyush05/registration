const Footer = () => {
  return (
    <div className="relative z-10 bg-slate-900">
      <footer className="border-t border-border/50 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2">
            {/* <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-background font-bold text-lg">G</span>
            </div> */}
            {/* <span className="text-lg font-semibold">Google Developer Groups</span> */}
            <img src="/GDG_logo_dark.png" height={350} width={350} alt="" />
          </div>
          
          <div className="text-sm text-muted-foreground text-center md:text-right">
            <p>© 2025 Google Developer Groups. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;