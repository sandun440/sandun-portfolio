export const Education = () => {
  return (
    <section id="education" className="mt-20 max-w-4xl w-full px-4 sm:px-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        Education & Certifications
      </h2>

      {/* Changed `pl-6` to be inside the item groups rather than the container so dots align correctly to the border */}
      <div className="relative border-l-2 border-slate-700/60 space-y-10 sm:space-y-12 ml-3 sm:ml-4">
        {/* Degree */}
        <div className="relative group pl-6 sm:pl-8">
          <span className="absolute -left-[9px] top-6 w-4 h-4 bg-blue-500 rounded-full ring-4 ring-gray-900 group-hover:scale-125 group-hover:bg-blue-400 transition-all duration-300 shadow-[0_0_12px_rgba(59,130,246,0.6)] z-10" />
          <div className="bg-[#0f172a]/60 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl group-hover:border-blue-500/40 group-hover:shadow-blue-500/20 transition-all duration-300 group-hover:-translate-y-1">
            <h3 className="text-xl font-bold text-blue-400 mb-2 flex items-center gap-2">
              🎓 Bachelor’s Degree
            </h3>
            <p className="text-white font-semibold text-lg">
              Bachelor of Software Engineering (Hons)
            </p>
            <p className="text-gray-400 mt-1">
              The Open University of Sri Lanka - Nawala.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <span className="text-sm font-medium text-blue-300">
                2023 – Present
              </span>
              <span className="px-3 py-1 text-xs font-semibold text-blue-100 bg-blue-500/20 border border-blue-500/30 rounded-full">
                Ongoing
              </span>
            </div>
          </div>
        </div>

        {/* Certification */}
        <div className="relative group pl-6 sm:pl-8">
          <span className="absolute -left-[9px] top-6 w-4 h-4 bg-cyan-500 rounded-full ring-4 ring-gray-900 group-hover:scale-125 group-hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_12px_rgba(6,182,212,0.6)] z-10" />
          <div className="bg-[#0f172a]/60 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl group-hover:border-cyan-500/40 group-hover:shadow-cyan-500/20 transition-all duration-300 group-hover:-translate-y-1">
            <h3 className="text-xl font-bold text-cyan-400 mb-2 flex items-center gap-2">
              🧑‍💻 Certification
            </h3>
            <p className="text-white font-semibold text-lg">
              <a
                href="https://certificate.skyrek.com/certifcates/completion/z2do8ktmAlAb"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-300 hover:underline transition-colors"
              >
                Full-Stack Web Development (MERN)
              </a>
            </p>
            <p className="text-gray-400 mt-1">SKYREK Academy</p>
            <div className="flex items-center gap-3 mt-4">
              <span className="text-sm font-medium text-cyan-300">
                2023 – 2024
              </span>
              <span className="px-3 py-1 text-xs font-semibold text-cyan-100 bg-cyan-500/20 border border-cyan-500/30 rounded-full">
                Completed
              </span>
            </div>
          </div>
        </div>

        {/* Certification */}
        <div className="relative group pl-6 sm:pl-8">
          <span className="absolute -left-[9px] top-6 w-4 h-4 bg-cyan-500 rounded-full ring-4 ring-gray-900 group-hover:scale-125 group-hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_12px_rgba(6,182,212,0.6)] z-10" />
          <div className="bg-[#0f172a]/60 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl group-hover:border-cyan-500/40 group-hover:shadow-cyan-500/20 transition-all duration-300 group-hover:-translate-y-1">
            <h3 className="text-xl font-bold text-cyan-400 mb-2 flex items-center gap-2">
              🧑‍💻 Certification
            </h3>
            <p className="text-white font-semibold text-lg">
              <a
                href="https://open.uom.lk/lms/mod/customcert/verify_certificate.php"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-300 hover:underline transition-colors"
              >
                Web Design for Beginners
              </a>
            </p>
            <p className="text-gray-400 mt-1">
              Department of Information Technology, Faculty of IT, University of
              Moratuwa.
            </p>
            <p className="text-sm font-medium text-cyan-300/80 mt-1">
              Verify code : YgWf9wnZpa
            </p>
            <div className="flex items-center gap-3 mt-4">
              <span className="text-sm font-medium text-cyan-300">2026</span>
              <span className="px-3 py-1 text-xs font-semibold text-cyan-100 bg-cyan-500/20 border border-cyan-500/30 rounded-full">
                Completed
              </span>
            </div>
          </div>
        </div>

        {/* Certification */}
        <div className="relative group pl-6 sm:pl-8">
          <span className="absolute -left-[9px] top-6 w-4 h-4 bg-cyan-500 rounded-full ring-4 ring-gray-900 group-hover:scale-125 group-hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_12px_rgba(6,182,212,0.6)] z-10" />
          <div className="bg-[#0f172a]/60 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl group-hover:border-cyan-500/40 group-hover:shadow-cyan-500/20 transition-all duration-300 group-hover:-translate-y-1">
            <h3 className="text-xl font-bold text-cyan-400 mb-2 flex items-center gap-2">
              🧑‍💻 Certification
            </h3>
            <p className="text-white font-semibold text-lg">
              <a
                href="https://open.uom.lk/lms/mod/customcert/verify_certificate.php"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-300 hover:underline transition-colors"
              >
                Frontend Web Development
              </a>
            </p>
            <p className="text-gray-400 mt-1">
              Department of Information Technology, Faculty of IT, University of
              Moratuwa.
            </p>
            <p className="text-sm font-medium text-cyan-300/80 mt-1">
              Verify code : YgWf9wnZpa
            </p>
            <div className="flex items-center gap-3 mt-4">
              <span className="text-sm font-medium text-cyan-300">2024</span>
              <span className="px-3 py-1 text-xs font-semibold text-cyan-100 bg-cyan-500/20 border border-cyan-500/30 rounded-full">
                Completed
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
