
function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#09090d] px-5 pt-20 text-[#eee8dc] md:px-10">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -top-40 right-10 h-80 w-80 rounded-full bg-amber-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* Main Footer */}
        <div className="grid gap-12 pb-16 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">

            <a
              href="#home"
              className="btn btn-ghost -ml-4 text-3xl font-black hover:bg-white/5"
            >
              <span className="text-amber-400">✦</span>
              Kahan<span className="text-amber-400">AI</span>
            </a>

            <p className="mt-6 max-w-sm font-serif text-2xl italic leading-relaxed text-[#eee8dc]/80">
              Every mind holds
              <span className="block text-amber-400">
                a thousand worlds.
              </span>
            </p>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[#eee8dc]/40">
              Explore new universes, create unforgettable characters
              and bring your imagination to life with KahanAI.
            </p>

            {/* Social Links */}
            <div className="mt-7 flex gap-3">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="btn btn-circle btn-outline btn-sm border-white/15 text-[#eee8dc] hover:border-amber-400 hover:bg-amber-400 hover:text-black"
              >
                G
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="btn btn-circle btn-outline btn-sm border-white/15 text-[#eee8dc] hover:border-amber-400 hover:bg-amber-400 hover:text-black"
              >
                in
              </a>

            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="mb-6 font-mono text-xs tracking-[0.25em] text-amber-400">
              EXPLORE
            </h3>

            <ul className="menu menu-sm gap-3 p-0 text-[#eee8dc]/60">
              <li><a href="#home" className="hover:text-amber-400">Home</a></li>
              <li><a href="#zones" className="hover:text-amber-400">Story Worlds</a></li>
              <li><a href="#create" className="hover:text-amber-400">Create Story</a></li>
              <li><a href="#library" className="hover:text-amber-400">My Stories</a></li>
            </ul>
          </div>

          {/* Discover Links */}
          <div>
            <h3 className="mb-6 font-mono text-xs tracking-[0.25em] text-amber-400">
              DISCOVER
            </h3>

            <ul className="menu menu-sm gap-3 p-0 text-[#eee8dc]/60">
              <li><a href="#about" className="hover:text-amber-400">About KahanAI</a></li>
              <li><a href="#how-it-works" className="hover:text-amber-400">How It Works</a></li>
              <li><a href="#zones" className="hover:text-amber-400">Fantasy World</a></li>
              <li><a href="#zones" className="hover:text-amber-400">Adventure World</a></li>
            </ul>
          </div>

        </div>

        {/* Decorative Divider */}
        <div className="divider before:bg-white/10 after:bg-white/10">
          <span className="text-amber-400">✦</span>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-5 py-7 text-center sm:flex-row">

          <p className="text-xs text-[#eee8dc]/40">
            © {new Date().getFullYear()} KahanAI. All rights reserved.
          </p>

          <p className="font-serif text-sm italic text-[#eee8dc]/50">
            Crafted with <span className="text-amber-400">✦</span> and imagination.
          </p>

          <a
            href="#home"
            className="btn btn-ghost btn-sm text-xs tracking-wider text-amber-400 hover:bg-amber-400/10"
          >
            BACK TO TOP ↑
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
