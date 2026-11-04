
function Navbar() {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Worlds", href: "#zones" },
    { label: "About", href: "#about" },
    { label: "Library", href: "#library" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-transparent px-4 pt-4 md:px-8 md:pt-6">
      <div className="fire-navbar relative mx-auto max-w-7xl">
        {/* Fire animation */}
        <div className="fire-layer" aria-hidden="true">
          <span className="fire-flame flame-one" />
          <span className="fire-flame flame-two" />
          <span className="fire-flame flame-three" />
          <span className="fire-flame flame-four" />
          <span className="fire-flame flame-five" />

          <span className="fire-ember ember-one" />
          <span className="fire-ember ember-two" />
          <span className="fire-ember ember-three" />
          <span className="fire-ember ember-four" />
          <span className="fire-ember ember-five" />
        </div>

        {/* Floating pill */}
        <nav className="navbar relative min-h-[76px] rounded-full border border-amber-400/25 bg-[#111016]/95 px-5 shadow-[0_10px_40px_rgba(0,0,0,0.5),0_0_25px_rgba(249,115,22,0.10)] backdrop-blur-2xl md:px-8">

          {/* Animated border */}
          <div className="fire-border" />

          {/* Logo */}
          <div className="navbar-start">
            <a
              href="#home"
              className="group flex items-center gap-2 text-xl font-bold tracking-wide text-[#eee8dc]"
            >
              <span className="text-2xl text-amber-400 transition-transform duration-500 group-hover:rotate-180">
                ✦
              </span>
              Kahan<span className="text-amber-400">AI</span>
            </a>
          </div>

          {/* Desktop navigation */}
          <div className="navbar-center hidden lg:flex">
            <ul className="flex items-center gap-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="nav-link relative rounded-full px-4 py-2 text-sm font-medium text-white/65 transition-colors duration-300 hover:text-amber-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="navbar-end gap-3">
            <a
              href="#create"
              className="btn btn-sm rounded-full border border-amber-400/40 bg-amber-500 text-[#160d05] shadow-[0_0_18px_rgba(245,158,11,0.18)] transition-all duration-300 hover:scale-105 hover:border-amber-300 hover:bg-amber-400"
            >
              <span>✦</span>
              Create Story
            </a>

            {/* Mobile menu */}
            <div className="dropdown dropdown-end lg:hidden">
              <button
                tabIndex={0}
                className="btn btn-circle btn-ghost text-xl text-amber-300"
                aria-label="Open navigation menu"
              >
                ☰
              </button>

              <ul
                tabIndex={0}
                className="menu dropdown-content z-[60] mt-4 w-48 rounded-2xl border border-amber-400/20 bg-[#111016] p-3 text-[#eee8dc] shadow-xl"
              >
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="hover:bg-amber-400/10 hover:text-amber-300">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
