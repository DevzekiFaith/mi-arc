const DesignStatement = () => {
  return (
    <section id="design-statement" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
          {/* Left Column */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-slate-900 tracking-tight">
                Design Philosophy
              </h2>
              <div className="w-16 sm:w-20 lg:w-24 h-px bg-slate-400"></div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-slate-700 font-light leading-relaxed">
              <p>
                My work explores the intersection of context, culture, and constructability.
                I approach architecture as a layered process—where spatial clarity, material honesty, and human experience guide design decisions from concept through execution.
              </p>
              <p>
                Across studio and site environments, I ensure that designs are not only expressive, but also buildable, functional, and responsive to their urban and cultural context.
              </p>
            </div>

            {/* Minimal quote */}
            <div className="pt-6 sm:pt-8 border-l-2 border-slate-300 pl-4 sm:pl-6">
              <blockquote className="text-slate-600 italic text-sm sm:text-base">
                "Architecture is the art of reconciliation between ourselves and the world."
              </blockquote>
              <cite className="text-slate-500 text-sm mt-2 block">— Norman Foster</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignStatement;