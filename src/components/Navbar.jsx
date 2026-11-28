import { motion, useReducedMotion } from "framer-motion";

const edge =
  "repeating-linear-gradient(0deg, rgba(120,90,50,.06) 0, rgba(120,90,50,.06) 1px, transparent 1px, transparent 3px)";

const pages = [
  { color: "#e4d3aa", y: 31, sx: 0.99, rot: -0.18, delay: 0.02 },
  { color: "#f2e8cb", y: 23, sx: 0.9925, rot: 0.18, delay: 0.05 },
  { color: "#e6d7b0", y: 15, sx: 0.995, rot: 0, delay: 0.08 },
  { color: "#efe3c2", y: 7, sx: 0.9975, rot: -0.18, delay: 0.11 },
];

const pageVariants = {
  rest: {
    y: 0,
    scaleX: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 420, damping: 34, mass: 0.6 },
  },
  hover: (p) => ({
    y: p.y,
    scaleX: p.sx,
    rotate: p.rot,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 19, 
      mass: 0.7,
      delay: p.delay,
    },
  }),
};

const links = [
  ["Home", "#home"],
  ["Explore Zones", "#zones"],
  ["About", "#about"],
];

function Navbar() {
  const reduce = useReducedMotion();

  return (
    <div className="sticky top-0 z-50 w-full">
      <motion.div
        className="relative w-full"
        initial="rest"
        animate="rest"
        whileHover={reduce ? "rest" : "hover"}
      >
        {/* Paperback pages */}
        {pages.map((page, i) => (
          <motion.div
            key={i}
            custom={page}
            variants={pageVariants}
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundColor: page.color,
              backgroundImage: edge,
              borderLeft: "1px solid rgba(110,82,48,.4)",
              borderRight: "1px solid rgba(110,82,48,.4)",
              borderBottom: "1px solid rgba(96,68,36,.6)",
              borderRadius: "0 0 55% 55% / 0 0 7px 7px",
              boxShadow:
                "0 1px 2px rgba(60,36,12,.3), inset 0 -2px 3px rgba(255,255,255,.35), inset 0 6px 8px -4px rgba(60,36,12,.3)",
              transformOrigin: "top center",
              willChange: "transform",
            }}
          />
        ))}

        {/* Main parchment  */}
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

          {/* Gold engraved lines */}
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

          {/* Desktop nav */}
          <div className="navbar-center relative z-10 hidden md:flex">
            <ul className="menu menu-horizontal items-center gap-1 px-1 text-sm font-semibold">
              {links.map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="rounded-full px-4 text-[#59452d]/80 transition-colors duration-200 hover:bg-[#93651f]/10 hover:text-[#704713]"
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
              className="btn btn-sm h-10 border-[#704713] bg-[#704713] px-4 font-semibold text-[#f5e8ca] shadow-[0_3px_12px_rgba(75,45,15,0.25)] transition-colors duration-200 hover:border-[#56350e] hover:bg-[#56350e]"
            >
              <span>✦</span>
              Create Story
              <span>↗</span>
            </a>

            {/* Mobile menu */}
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
                {[...links, ["My Stories", "#library"]].map(([label, href]) => (
                  <li key={label}>
                    <a href={href}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Corner details */}
          <div className="pointer-events-none absolute left-1 top-1 h-4 w-4 border-l border-t border-[#9b753e]/70" />
          <div className="pointer-events-none absolute bottom-1 right-1 h-4 w-4 border-b border-r border-[#9b753e]/70" />

          {/* Center ornament */}
          <div className="pointer-events-none absolute bottom-1 left-1/2 hidden -translate-x-1/2 text-[8px] tracking-[0.5em] text-[#93651f]/50 md:block">
            ✦ ───── ✦ ───── ✦
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Navbar;