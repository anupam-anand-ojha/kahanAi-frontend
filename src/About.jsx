import React from 'react'

function About() {
  return (
    <section id="about" className="px-5 py-24 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: About introduction */}
          <div>
            <div className="badge badge-secondary badge-outline mb-5">
              THE MIND BEHIND THE MAGIC
            </div>

            <h2 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Stories are
              <span className="block font-serif font-normal italic text-secondary">
                more than words.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 opacity-65">
              KahanAI is an AI-powered storytelling experience built
              for curious minds and limitless imagination. It gives
              you the freedom to explore different worlds, shape
              unforgettable characters, and bring your own ideas to life.
            </p>

            <p className="mt-4 max-w-xl text-base leading-8 opacity-65">
              From ancient kingdoms filled with magic to distant
              futures beyond the stars, every story begins with you.
              Choose your universe, imagine the impossible, and let
              your next adventure unfold.
            </p>

            <div className="mt-8">
              <a href="#create" className="btn btn-secondary">
                Create Your Story <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          {/* Right: Story manifesto card */}
          <div className="card border border-base-content/10 bg-base-200/40 shadow-2xl">
            <div className="card-body p-6 md:p-10">
              <div className="flex items-center justify-between">
                <span className="badge badge-ghost">THE KAHANAI MANIFESTO</span>
                <span className="font-mono text-xs opacity-40">001 / ∞</span>
              </div>

              <div className="divider opacity-40" />

              <div className="py-6 text-center">
                <div className="avatar placeholder mb-6">
                  <div className="w-24 rounded-full border border-secondary/40 bg-secondary/10 text-secondary">
                    <span className="text-5xl">✦</span>
                  </div>
                </div>

                <h3 className="font-serif text-3xl italic md:text-4xl">
                  “Every mind holds
                  <span className="block text-secondary">
                    a thousand worlds.”
                  </span>
                </h3>

                <p className="mx-auto mt-5 max-w-sm text-sm leading-7 opacity-55">
                  We believe imagination should have no boundaries.
                  Your ideas are the beginning. The story is yours to create.
                </p>
              </div>

              <div className="divider opacity-40" />

              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="stat place-items-center px-1 py-3">
                  <div className="stat-value text-2xl text-secondary">01</div>
                  <div className="stat-title text-xs">Imagine</div>
                </div>

                <div className="stat place-items-center px-1 py-3">
                  <div className="stat-value text-2xl text-secondary">02</div>
                  <div className="stat-title text-xs">Create</div>
                </div>

                <div className="stat place-items-center px-1 py-3">
                  <div className="stat-value text-2xl text-secondary">03</div>
                  <div className="stat-title text-xs">Discover</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About