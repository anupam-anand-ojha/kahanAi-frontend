
function StoryResult() {
  const story = {
    title: "The Kingdom of Forgotten Souls",
    zone: "FANTASY REALM",
    chapter: "CHAPTER I — THE AWAKENING",
    content: [
      "Beyond the mountains where sunlight had long forgotten to shine, there existed a kingdom hidden from the eyes of the living.",
      "Its towers touched the clouds, its rivers whispered ancient secrets, and its forests remembered every soul that had ever walked beneath their shadows.",
      "One evening, a mysterious light appeared above the abandoned throne. Somewhere in the darkness, an ancient prophecy was beginning to awaken.",
    ],
  };

  return (
    <main className="min-h-screen bg-[#09090d] text-[#eee8dc]">

      {/* Navigation */}
      <div className="navbar border-b border-white/10 px-5 md:px-12">
        <div className="navbar-start">
          <a href="/" className="btn btn-ghost text-xl font-black">
            <span className="text-amber-400">✦</span>
            Kahan<span className="text-amber-400">AI</span>
          </a>
        </div>

        <div className="navbar-end">
          <a href="/#create" className="btn btn-outline btn-sm border-white/20">
            Create New Story ↗
          </a>
        </div>
      </div>

      {/* Cinematic Cover */}
      <section className="relative flex min-h-[520px] items-center justify-center overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#302019] via-[#171117] to-[#09090d] px-5 py-20">

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(180,110,45,0.18),transparent_65%)]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">

          <div className="badge badge-outline mb-8 border-amber-400/40 px-4 py-4 tracking-[0.3em] text-amber-300">
            {story.zone}
          </div>

          <div className="mb-8 text-7xl text-amber-400/80">
            ✧
          </div>

          <h1 className="font-serif text-5xl font-bold leading-tight tracking-wide md:text-7xl">
            {story.title}
          </h1>

          <div className="divider mx-auto my-8 max-w-xs before:bg-amber-400/30 after:bg-amber-400/30">
            <span className="text-amber-400">✦</span>
          </div>

          <p className="font-mono text-xs tracking-[0.35em] text-amber-200/60">
            {story.chapter}
          </p>

        </div>

        <span className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.3em] text-white/30">
          SCROLL TO READ ↓
        </span>
      </section>

      {/* Reading Area */}
      <section className="px-5 py-20 md:px-10">
        <div className="mx-auto max-w-3xl">

          <div className="mb-12 flex items-center justify-between border-b border-white/10 pb-5">
            <span className="font-mono text-xs tracking-widest text-amber-300/70">
              THE STORY BEGINS
            </span>

            <span className="badge badge-ghost text-white/50">
              ✧ Original Story
            </span>
          </div>

          <article className="space-y-8">
            {story.content.map((paragraph, index) => (
              <p
                key={index}
                className={`font-serif text-lg leading-10 text-[#d5ccbd] md:text-xl md:leading-[2.4] ${
                  index === 0
                    ? "first-letter:float-left first-letter:mr-4 first-letter:text-7xl first-letter:font-bold first-letter:text-amber-400"
                    : ""
                }`}
              >
                {paragraph}
              </p>
            ))}
          </article>

          <div className="divider my-16 before:bg-white/10 after:bg-white/10">
            <span className="text-amber-400">✦ ✦ ✦</span>
          </div>

          <div className="text-center">
            <p className="font-serif text-2xl italic text-amber-200/70">
              "Every ending is a beginning in disguise."
            </p>
          </div>

        </div>
      </section>

      {/* Bottom Actions */}
      <section className="border-t border-white/10 bg-[#111016] px-5 py-16">
        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-5 text-4xl text-amber-400">✧</div>

          <h2 className="font-serif text-3xl font-bold md:text-4xl">
            Another world awaits.
          </h2>

          <p className="mt-4 text-sm text-white/50">
            Your imagination has no final chapter.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="/#create" className="btn border-amber-400 bg-amber-400 text-black hover:bg-amber-300">
              ✦ Create Another Story
            </a>

            <a href="/#library" className="btn btn-outline border-white/20 text-white hover:bg-white/10">
              My Stories
            </a>
          </div>

          <p className="mt-12 font-mono text-[10px] tracking-[0.3em] text-white/25">
            KAHANAI — WHERE STORIES COME ALIVE
          </p>

        </div>
      </section>

    </main>
  );
}

export default StoryResult;
