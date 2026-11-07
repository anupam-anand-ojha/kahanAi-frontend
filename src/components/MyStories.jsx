const stories = [
  {
    id: "01",
    title: "The Kingdom of Ash",
    zone: "Fantasy",
    symbol: "✧",
    description:
      "A fallen kingdom, a forgotten prophecy, and a power buried beneath the ashes.",
  },
  {
    id: "02",
    title: "The Last Knock",
    zone: "Horror",
    symbol: "☾",
    description:
      "Every night at 3 AM, someone knocks. The problem is, nobody lives upstairs.",
  },
  {
    id: "03",
    title: "Echoes of Tomorrow",
    zone: "Sci-Fi",
    symbol: "⌘",
    description:
      "A message arrives from the future, carrying a warning no one can explain.",
  },
];

function MyStories() {
  return (
    <section
      id="library"
      className="relative overflow-hidden border-y border-white/10 bg-[#09090d] px-5 py-24 text-[#eee8dc] md:px-10"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-amber-600/10 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-14 flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <div className="badge badge-outline mb-6 border-amber-400/40 px-4 py-4 tracking-[0.3em] text-amber-300">
              YOUR PERSONAL ARCHIVE
            </div>

            <h2 className="font-serif text-4xl font-bold tracking-tight md:text-6xl">
              The story
              <span className="block font-normal italic text-amber-400">
                vault.
              </span>
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-8 text-[#eee8dc]/50 md:text-base">
              Every world you imagine leaves a trace. Discover your creations
              and revisit the stories that deserve to be remembered.
            </p>
          </div>

          <a
            href="#create"
            className="btn h-12 border-amber-400 bg-amber-400 px-6 text-black hover:border-amber-300 hover:bg-amber-300"
          >
            <span>✦</span>
            New Story
            <span>↗</span>
          </a>
        </div>

        {/* Story Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <article
              key={story.id}
              className="card group overflow-hidden border border-white/10 bg-[#111016] transition-all duration-500 hover:-translate-y-2 hover:border-amber-400/40 hover:shadow-[0_20px_60px_rgba(180,120,35,0.08)]"
            >
              <div className="card-body gap-5 p-6 md:p-7">
                {/* Card Header */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs tracking-[0.2em] text-amber-400/60">
                    ARCHIVE / {story.id}
                  </span>

                  <span className="badge badge-outline border-amber-400/30 text-amber-300">
                    {story.zone}
                  </span>
                </div>

                {/* Premium Ancient Pages Bundle */}
                <div className="group/pages relative flex h-60 items-center justify-center overflow-hidden rounded-box border border-amber-200/10 bg-[radial-gradient(ellipse_at_center,_#38271f_0%,_#171218_55%,_#09090d_100%)]">
                  {/* Ambient Glow */}
                  <div className="absolute h-44 w-44 rounded-full bg-amber-500/10 blur-[70px] transition-all duration-700 group-hover/pages:bg-amber-400/20" />

                  {/* Back Page */}
                  <div className="absolute h-44 w-36 translate-x-7 translate-y-1 rotate-[13deg] border border-[#a98a60]/50 bg-[#b69b74] shadow-xl transition-all duration-700 group-hover/pages:translate-x-12 group-hover/pages:rotate-[18deg]">
                    <div className="absolute inset-2 border border-[#60472e]/20" />
                    <div className="space-y-3 p-5 opacity-40">
                      <div className="mx-auto h-px w-10 bg-[#493522]" />
                      <div className="h-px w-full bg-[#493522]" />
                      <div className="h-px w-5/6 bg-[#493522]" />
                      <div className="h-px w-full bg-[#493522]" />
                      <div className="h-px w-4/5 bg-[#493522]" />
                      <div className="h-px w-full bg-[#493522]" />
                    </div>
                  </div>

                  {/* Second Page */}
                  <div className="absolute h-48 w-36 -translate-x-7 rotate-[-12deg] border border-[#d2b58a]/50 bg-[#d0b58d] shadow-2xl transition-all duration-700 group-hover/pages:-translate-x-12 group-hover/pages:rotate-[-17deg]">
                    <div className="absolute inset-2 border border-[#755a3c]/25" />
                    <div className="space-y-3 p-5 opacity-35">
                      <div className="h-px w-full bg-[#493522]" />
                      <div className="h-px w-4/5 bg-[#493522]" />
                      <div className="h-px w-full bg-[#493522]" />
                      <div className="h-px w-5/6 bg-[#493522]" />
                      <div className="h-px w-full bg-[#493522]" />
                      <div className="h-px w-3/4 bg-[#493522]" />
                    </div>
                  </div>

                  {/* Main Ancient Parchment */}
                  <div className="relative flex h-52 w-40 -rotate-2 flex-col items-center overflow-hidden border border-[#e0c69a]/70 bg-gradient-to-br from-[#ead8b5] via-[#d7bd91] to-[#b99b6d] px-5 py-5 shadow-[0_20px_45px_rgba(0,0,0,0.55)] transition-all duration-700 group-hover/pages:-translate-y-3 group-hover/pages:rotate-0">
                    {/* Paper Border */}
                    <div className="absolute inset-2 border border-[#795d3b]/35" />
                    <div className="absolute inset-3 border border-[#795d3b]/15" />

                    {/* Paper Details */}
                    <span className="font-mono text-[7px] tracking-[0.35em] text-[#755a3c]/70">
                      THE LOST CHRONICLES
                    </span>

                    <div className="my-3 h-px w-12 bg-[#795d3b]/50" />

                    <span className="font-serif text-4xl text-[#493522]">
                      {story.symbol}
                    </span>

                    <h3 className="mt-2 text-center font-serif text-sm font-bold text-[#493522]">
                      {story.title}
                    </h3>

                    <span className="mt-2 font-mono text-[7px] tracking-[0.25em] text-[#755a3c]/70">
                      CHAPTER {story.id}
                    </span>

                    {/* Written Lines */}
                    <div className="mt-3 w-full space-y-1.5 opacity-35">
                      <div className="h-px w-full bg-[#493522]" />
                      <div className="h-px w-5/6 bg-[#493522]" />
                      <div className="h-px w-full bg-[#493522]" />
                    </div>

                    {/* Folded Corner */}
                    <div className="absolute right-0 top-0 h-6 w-6 border-b border-l border-[#795d3b]/30 bg-[#b99b6d] shadow-[-2px_2px_5px_rgba(0,0,0,0.15)]" />
                  </div>

                  {/* Bottom Caption */}
                  <span className="absolute bottom-2 font-mono text-[8px] tracking-[0.35em] text-amber-100/35">
                    FRAGMENTS OF ANOTHER WORLD
                  </span>
                </div>

                {/* Story Information */}
                <div>
                  <h3 className="font-serif text-2xl font-bold leading-snug text-[#eee8dc] transition-colors group-hover:text-amber-300">
                    {story.title}
                  </h3>

                  <p className="mt-3 min-h-20 text-sm leading-7 text-[#eee8dc]/50">
                    {story.description}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="card-actions mt-auto items-center justify-between border-t border-white/10 pt-5">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-amber-400/50">
                    STORY CONCEPT
                  </span>

                  <button
                    type="button"
                    className="btn btn-ghost btn-sm text-amber-400 hover:bg-amber-400/10"
                    onClick={() =>
                      document.getElementById("create")?.scrollIntoView({
                        behavior: "smooth",
                      })
                    }
                  >
                    Create Similar <span>↗</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Archive Notice */}
        <div className="alert mt-10 border border-amber-400/15 bg-[#111016] text-[#eee8dc]">
          <span className="text-2xl text-amber-400">✦</span>

          <div>
            <h3 className="font-serif text-lg font-bold">
              Your archive begins here.
            </h3>

            <p className="mt-1 text-sm leading-6 text-[#eee8dc]/50">
              These are sample story concepts. Connect your backend to display
              and manage your actual AI-generated stories.
            </p>
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="mt-14 text-center">
          <p className="font-serif text-xl italic text-[#eee8dc]/40">
            Some stories are too special to be forgotten.
          </p>
          <div className="mt-5 text-amber-400">✦</div>
        </div>
      </div>
    </section>
  );
}

export default MyStories;
