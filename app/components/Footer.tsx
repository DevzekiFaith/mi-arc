const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-slate-900 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-base sm:text-lg font-light text-slate-300 tracking-wider uppercase">
                Contact
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-col space-y-1">
                  <span className="text-slate-400 text-xs sm:text-sm font-light">Email</span>
                  <a
                    href="mailto:ezekieloghojaforubor@gmail.com"
                    className="text-white hover:text-slate-300 transition-colors duration-300 font-light text-sm sm:text-base break-words"
                  >
                    ezekieloghojaforubor@gmail.com
                  </a>
                </div>

                <div className="flex flex-col space-y-1">
                  <span className="text-slate-400 text-xs sm:text-sm font-light">Phone</span>
                  <a
                    href="tel:+2347014441418"
                    className="text-white hover:text-slate-300 transition-colors duration-300 font-light text-sm sm:text-base"
                  >
                    +234 701 444 1418
                  </a>
                </div>

                <div className="flex flex-col space-y-1">
                  <span className="text-slate-400 text-xs sm:text-sm font-light">Location</span>
                  <span className="text-white font-light text-sm sm:text-base">Lagos, Nigeria</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-base sm:text-lg font-light text-slate-300 tracking-wider uppercase">
                Connect
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <a
                  href="https://linkedin.com/in/ezekieloghojafor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 sm:space-x-3 text-slate-400 hover:text-white transition-colors duration-300"
                >
                  <span className="text-sm font-light">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Philosophy */}
          <div className="space-y-6 sm:space-y-8 sm:col-span-2 lg:col-span-1">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-base sm:text-lg font-light text-slate-300 tracking-wider uppercase">
                Approach
              </h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Every project begins with deep cultural understanding and environmental responsibility.
                I create spaces that balance poetic vision with pragmatic solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 mt-12 sm:mt-16 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <p className="text-slate-500 text-xs sm:text-sm font-light text-center sm:text-left">
              © {currentYear} Ezekiel Oghojafor Ubor
            </p>
            <p className="text-slate-500 text-xs sm:text-sm font-light text-center sm:text-right">
              Architecture that matters
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;