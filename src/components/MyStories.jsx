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

                {/* Story Pages Bundle */}
                <div className="group/pages relative flex h-56 items-center justify-center overflow-hidden rounded-box border border-amber-400/10 bg-gradient-to-br from-[#211a18] via-[#171319] to-[#09090d]">
                  {/* Background Glow */}
                  <div className="absolute h-40 w-40 rounded-full bg-amber-500/10 blur-3xl transition-all duration-700 group-hover/pages:scale-150" />

                  {/* Back Pages */}
                  <div className="absolute h-40 w-32 rotate-[-13deg] rounded-sm border border-[#c6a77b]/30 bg-[#a88c65] shadow-xl transition-transform duration-500 group-hover/pages:-translate-x-3 group-hover/pages:-rotate-[20deg]">
                    <div className="space-y-3 p-4 opacity-30">
                      <div className="h-1 w-16 bg-[#493522]" />
                      <div className="h-1 w-full bg-[#493522]" />
                      <div className="h-1 w-4/5 bg-[#493522]" />
                      <div className="h-1 w-full bg-[#493522]" />
                      <div className="h-1 w-3/4 bg-[#493522]" />
                    </div>
                  </div>

                  {/* Middle Page */}
                  <div className="absolute h-44 w-36 rotate-[9deg] rounded-sm border border-[#c6a77b]/40 bg-[#d0b991] shadow-2xl transition-transform duration-500 group-hover/pages:translate-x-3 group-hover/pages:rotate-[14deg]">
                    <div className="space-y-3 p-4 opacity-40">
                      <div className="mx-auto h-1 w-12 bg-[#493522]" />
                      <div className="h-px w-full bg-[#493522]" />
                      <div className="h-1 w-full bg-[#493522]" />
                      <div className="h-1 w-5/6 bg-[#493522]" />
                      <div className="h-1 w-full bg-[#493522]" />
                      <div className="h-1 w-4/5 bg-[#493522]" />
                    </div>
                  </div>

                  {/* Front Page */}
                  <div className="relative flex h-48 w-40 rotate-[-2deg] flex-col items-center justify-center border border-[#d8bd91]/50 bg-[#e0c9a2] px-5 shadow-[0_15px_35px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover/pages:-translate-y-2 group-hover/pages:rotate-0">
                    {/* Paper Texture Border */}
                    <div className="absolute inset-2 border border-[#755a3c]/30" />

                    <span className="font-mono text-[8px] tracking-[0.3em] text-[#755a3c]/70">
                      CHAPTER {story.id}
                    </span>

                    <div className="my-3 h-px w-12 bg-[#755a3c]/40" />

                    <span className="font-serif text-5xl text-[#493522]">
                      {story.symbol}
                    </span>

                    <h3 className="mt-3 text-center font-serif text-sm font-bold text-[#493522]">
                      {story.title}
                    </h3>

                    <span className="mt-2 font-mono text-[7px] tracking-[0.25em] text-[#755a3c]/70">
                      AN UNWRITTEN TALE
                    </span>

                    {/* Folded Corner */}
                    <div className="absolute right-0 top-0 h-5 w-5 border-b border-l border-[#755a3c]/30 bg-[#c4a77e]" />
                  </div>

                  {/* Bottom Label */}
                  <span className="absolute bottom-3 font-mono text-[9px] tracking-[0.3em] text-amber-200/40">
                    PRESERVED IN THE ARCHIVE 
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
