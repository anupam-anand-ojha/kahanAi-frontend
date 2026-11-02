
function Footer() {
  return (
    <footer className="border-t border-base-content/10 bg-base-200/30 px-5 pt-16 md:px-10">

      <div className="mx-auto max-w-6xl">

        {/* Footer Main */}
        <div className="grid gap-12 pb-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="btn btn-ghost px-0 text-2xl font-black">
              <span className="text-secondary">✦</span>
              Kahan<span className="text-secondary">AI</span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 opacity-60">
              Every mind holds a thousand worlds.
              Explore new universes, create unforgettable stories
              and let your imagination go beyond boundaries.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-circle btn-outline btn-sm border-base-content/20"
                aria-label="GitHub"
              >
                G
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-circle btn-outline btn-sm border-base-content/20"
                aria-label="LinkedIn"
              >
                in
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.2em]">
              Explore
            </h3>

            <ul className="menu menu-sm gap-2 p-0">
              <li><a href="#home">Home</a></li>
              <li><a href="#zones">Story Worlds</a></li>
              <li><a href="#create">Create Story</a></li>
              <li><a href="#library">My Stories</a></li>
            </ul>
          </div>

          {/* Discover */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.2em]">
              Discover
            </h3>

            <ul className="menu menu-sm gap-2 p-0">
              <li><a href="#about">About KahanAI</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#zones">Fantasy</a></li>
              <li><a href="#zones">Adventure</a></li>
            </ul>
          </div>

        </div>

        <div className="divider opacity-30"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 text-center sm:flex-row">

          <p className="text-xs opacity-50">
            © {new Date().getFullYear()} KahanAI. All rights reserved.
          </p>

          <p className="text-xs opacity-50">
            Crafted with <span className="text-secondary">✦</span> and imagination.
          </p>

          <a href="#home" className="btn btn-ghost btn-xs">
            Back to top ↑
          </a>


        </div>

      </div>
    </footer>
  );
}

export default Footer;
