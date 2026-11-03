
const steps = [
  {
    number: "01",
    icon: "✧",
    title: "Choose Your World",
    description:
      "Choose from Fantasy, Horror, Sci-Fi or Adventure. Every universe opens the door to a completely different experience.",
  },
  {
    number: "02",
    icon: "⌁",
    title: "Share Your Imagination",
    description:
      "Describe your idea, introduce a character or create a unique setting. Your imagination sets the story in motion.",
  },
  {
    number: "03",
    icon: "✦",
    title: "Generate Your Story",
    description:
      "KahanAI transforms your idea into an original story with engaging characters, unexpected twists and immersive storytelling.",
  },
  {
    number: "04",
    icon: "◈",
    title: "Explore Your Story",
    description:
      "Step into the world you've created, experience your story and keep your creations in your personal story collection.",
  },
];

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden border-y border-white/10 bg-[#09090d] px-5 py-24 text-[#eee8dc] md:px-10"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mx-auto mb-20 max-w-2xl text-center">

          <div className="badge badge-outline mb-6 border-amber-400/40 px-4 py-4 tracking-[0.3em] text-amber-300">
            THE CREATION PROCESS
          </div>

          <h2 className="font-serif text-4xl font-bold leading-tight md:text-6xl">
            How the magic
            <span className="block font-normal italic text-amber-400">
              happens.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-[#eee8dc]/50 md:text-base">
            Every great story begins with an idea.
            Discover how KahanAI transforms your imagination
            into an unforgettable storytelling experience.
          </p>

          <div className="divider mx-auto mt-8 max-w-xs before:bg-amber-400/20 after:bg-amber-400/20">
            <span className="text-amber-400">✦</span>
          </div>
        </div>

        {/* Timeline */}
        <ul className="timeline timeline-snap-icon timeline-vertical max-md:timeline-compact">

          {steps.map((step, index) => (
            <li key={step.number}>

              {index !== 0 && (
                <hr className="bg-amber-400/30" />
              )}

              {/* Timeline Icon */}
              <div className="timeline-middle">
                <div className="avatar placeholder">
                  <div className="w-14 rounded-full border border-amber-400/40 bg-amber-400/10 text-amber-400 shadow-[0_0_25px_rgba(251,191,36,0.08)]">
                    <span className="text-2xl">
                      {step.icon}
                    </span>
                  </div>
                </div>
              </div>

              {/* Step Card */}
              <div
                className={`mb-12 ${
                  index % 2 === 0
                    ? "timeline-start md:text-end"
                    : "timeline-end"
                }`}
              >
                <div className="card border border-white/10 bg-[#111016]/90 text-left shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:border-amber-400/40 hover:shadow-[0_15px_50px_rgba(180,120,35,0.08)]">

                  <div className="card-body gap-4 p-6 md:p-8">

                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs tracking-[0.3em] text-amber-400/70">
                        STEP / {step.number}
                      </span>

                      <span className="text-xl text-amber-400/70">
                        {step.icon}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-[#eee8dc] md:text-3xl">
                      {step.title}
                    </h3>

                    <p className="text-sm leading-8 text-[#eee8dc]/50">
                      {step.description}
                    </p>

                    <div className="divider my-0 before:bg-white/10 after:bg-white/10" />

                    <span className="font-mono text-[10px] tracking-[0.25em] text-amber-400/50">
                      KAHANAI / {step.number}
                    </span>

                  </div>
                </div>
              </div>

              {index !== steps.length - 1 && (
                <hr className="bg-amber-400/30" />
              )}

            </li>
          ))}

        </ul>

        {/* CTA */}
        <div className="mt-16 text-center">

          <p className="mb-6 font-serif text-xl italic text-[#eee8dc]/50">
            Your next great story is waiting.
          </p>

          <a
            href="#create"
            className="btn h-14 border-amber-400 bg-amber-400 px-8 text-sm font-bold tracking-wide text-black shadow-lg shadow-amber-900/20 hover:border-amber-300 hover:bg-amber-300"
          >
            <span>✦</span>
            Start Your Story
            <span>↗</span>
          </a>

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;
