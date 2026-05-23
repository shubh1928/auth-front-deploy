function Footer() {
  return (
    <footer className="relative z-10 border-t border-black/10 dark:border-white/10 bg-white/40 dark:bg-black/30 backdrop-blur-2xl">
      
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-black tracking-wider">
            AUTH<span className="text-cyan-400">APP</span>
          </h2>

          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Secure authentication platform built with React & Spring Boot
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
          <a
            href="#"
            className="hover:text-cyan-400 transition-colors duration-200"
          >
            Privacy
          </a>

          <a
            href="#"
            className="hover:text-cyan-400 transition-colors duration-200"
          >
            Security
          </a>

          <a
            href="#"
            className="hover:text-cyan-400 transition-colors duration-200"
          >
            Terms
          </a>

          <a
            href="#"
            className="hover:text-cyan-400 transition-colors duration-200"
          >
            Support
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-black/5 dark:border-white/5 py-4 text-center text-xs text-gray-500 dark:text-gray-400">
        © 2026 AUTHAPP. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;