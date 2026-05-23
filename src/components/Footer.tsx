function Footer() {
  return (
    <div>
              {/* Footer */}
      <footer className="relative z-10 border-t border-black/10 dark:border-white/10 bg-white/40 dark:bg-black/30 backdrop-blur-2xl">
        <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <h2 className="text-2xl font-black tracking-wider">
            AUTH<span className="text-cyan-400">APP</span>
          </h2>

          <div className="flex gap-6 text-sm text-gray-600 dark:text-gray-400">
            <a href="#">Privacy</a>
            <a href="#">Security</a>
            <a href="#">Terms</a>
            <a href="#">Support</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;