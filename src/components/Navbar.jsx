function Navbar() {
  const pages = [
    {
      color: "#a98d65",
      hover: "group-hover:translate-y-4",
    },
    {
      color: "#c3a77c",
      hover: "group-hover:translate-y-3",
    },
    {
      color: "#b79a6e",
      hover: "group-hover:translate-y-2",
    },
    {
      color: "#d1b990",
      hover: "group-hover:translate-y-1",
    },
    {
      color: "#c5aa7e",
      hover: "",
    },
  ];

  return (
    <div className="sticky top-0 z-50 w-full">
      <div className="group relative w-full">
        {/* Premium layered manuscript bundle */}

        {pages.map((page, index) => (
          <div
            key={index}
            className={`pointer-events-none absolute inset-0 border border-[#80613b]/30 transition-[translate] duration-300 ease-out ${page.hover}`}
            style={{
              backgroundColor: page.color,
            }}
          />
        ))}

        {/* Main premium parchment */}
        <div
          className="navbar relative z-10 min-h-16 w-full overflow-hidden border border-[#a88a59]/50 px-4 text-[#302417] shadow-md md:px-8"
          style={{
            backgroundImage: `
              radial-gradient(ellipse at 0% 50%, rgba(112,73,34,.18), transparent 28%),
              radial-gradient(ellipse at 100% 50%, rgba(112,73,34,.18), transparent 28%),
              radial-gradient(ellipse at 50% 0%, rgba(255,249,224,.65), transparent 55%),
              repeating-linear-gradient(0deg, transparent 0px, rgba(110,75,35,.045) 1px, transparent 4px),
              linear-gradient(105deg, #d9c39a, #f0e1c0 48%, #dfc99f)
            `,
          }}
        >
          {/* Antique paper texture */}
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage: `
                radial-gradient(circle at 8% 20%, rgba(91,55,23,.25) 0px, transparent 2px),
                radial-gradient(circle at 92% 72%, rgba(91,55,23,.2) 0px, transparent 3px),
                radial-gradient(ellipse at 20% 100%, rgba(112,73,34,.12), transparent 35%),
                radial-gradient(ellipse at 80% 0%, rgba(112,73,34,.12), transparent 35%)
              `,
            }}
          />

          {/* Gold engraved top and bottom lines */}
          <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#a77b36]/80 to-transparent" />
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#a77b36]/60 to-transparent" />

          {/* Logo */}
          <div className="navbar-start relative z-10">
            <a
              href="#home"
              className="btn btn-ghost gap-1 px-2 text-xl font-bold tracking-tight text-[#302417] hover:bg-[#8b642c]/10"
            >
              <span className="text-2xl text-[#93651f]">✦</span>
              <span>
                Kahan<span className="text-[#93651f]">AI</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="navbar-center relative z-10 hidden md:flex">
            <ul className="menu menu-horizontal items-center gap-1 px-1 text-sm font-semibold">
              {[
                ["Home", "#home"],
                ["Explore Zones", "#zones"],
                ["About", "#about"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="rounded-full px-4 text-[#59452d]/80 transition-all duration-300 hover:bg-[#93651f]/10 hover:text-[#704713]"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="navbar-end relative z-10 gap-2">
            <a
              href="#library"
              className="btn btn-ghost btn-sm hidden border-[#8b642c]/30 text-[#59452d] hover:border-[#93651f]/50 hover:bg-[#93651f]/10 hover:text-[#704713] sm:flex"
            >
              My Stories
            </a>

            <a
              href="#create"
              className="btn btn-sm h-10 border-[#704713] bg-[#704713] px-4 font-semibold text-[#f5e8ca] shadow-[0_3px_12px_rgba(75,45,15,0.25)] transition-all duration-300 hover:border-[#56350e] hover:bg-[#56350e] hover:shadow-[0_4px_18px_rgba(75,45,15,0.4)]"
            >
              <span>✦</span>
              Create Story
              <span>↗</span>
            </a>

            {/* Mobile Menu */}
            <div className="dropdown dropdown-end md:hidden">
              <button
                tabIndex={0}
                className="btn btn-square btn-ghost border border-[#8b642c]/30 text-[#704713] hover:border-[#93651f]/50 hover:bg-[#93651f]/10"
                aria-label="Open navigation menu"
              >
                ☰
              </button>

              <ul
                tabIndex={0}
                className="menu dropdown-content z-50 mt-3 w-52 rounded-sm border border-[#a88a59] bg-[#e8d7b3] p-3 text-[#302417] shadow-2xl"
              >
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#zones">Explore Zones</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#library">My Stories</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Engraved corner details */}
          <div className="pointer-events-none absolute left-1 top-1 h-4 w-4 border-l border-t border-[#9b753e]/70" />
          <div className="pointer-events-none absolute bottom-1 right-1 h-4 w-4 border-b border-r border-[#9b753e]/70" />

          {/* Subtle center ornament */}
          <div className="pointer-events-none absolute bottom-1 left-1/2 hidden -translate-x-1/2 text-[8px] tracking-[0.5em] text-[#93651f]/50 md:block">
            ✦ ───── ✦ ───── ✦
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
