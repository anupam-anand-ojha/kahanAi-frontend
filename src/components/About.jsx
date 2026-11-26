
import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Left content reveal
      gsap.from("[data-about-label]", {
        y: 25,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      gsap.from("[data-about-content]", {
        y: 45,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });

      // Storybook entrance
      gsap.from("[data-about-book-entrance]", {
        opacity: 0,
        x: 90,
        rotateY: -18,
        rotateX: 8,
        scale: 0.88,
        duration: 1.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-about-book-entrance]",
          start: "top 80%",
          once: true,
        },
      });

      // Decorative glow
      gsap.from("[data-about-glow]", {
        opacity: 0,
        scale: 0.6,
        duration: 1.5,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-[#09090d] px-5 py-28 text-[#eee8dc] md:px-10"
    >
      {/* Background glow */}
      <div
        data-about-glow
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-amber-600/[0.07] blur-[100px]"
      />

      <div
        data-about-glow
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-orange-700/[0.06] blur-[100px]"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* About content */}
          <div>
            <div
              data-about-label
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-px w-9 bg-amber-500" />
              <span className="text-xs font-semibold tracking-[0.3em] text-amber-400">
                THE MIND BEHIND THE MAGIC
              </span>
            </div>

            <h2
              data-about-content
              className="text-5xl font-bold leading-[1.12] tracking-tight md:text-7xl"
            >
              Stories are
              <span className="mt-2 block font-serif font-normal italic text-amber-400">
                more than words.
              </span>
            </h2>

            <div
              data-about-content
              className="my-8 flex items-center gap-3"
            >
              <span className="h-px w-12 bg-amber-500/40" />
              <span className="text-sm text-amber-400">✦</span>
              <span className="h-px w-12 bg-amber-500/40" />
            </div>

            <p
              data-about-content
              className="max-w-xl text-base leading-8 text-[#c5b9a5]/70"
            >
              KahanAI is an AI-powered storytelling experience built for curious
              minds and limitless imagination. It gives you the freedom to
              explore different worlds, shape unforgettable characters, and
              bring your own ideas to life.
            </p>

            <p
              data-about-content
              className="mt-5 max-w-xl text-base leading-8 text-[#c5b9a5]/70"
            >
              From ancient kingdoms filled with magic to distant futures beyond
              the stars, every story begins with you. Choose your universe,
              imagine the impossible, and let your next adventure unfold.
            </p>

            <div data-about-content className="mt-10">
              <a
                href="#create"
                className="group inline-flex items-center gap-4 border border-amber-500/40 bg-amber-500/10 px-7 py-4 font-serif text-lg text-amber-300 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:bg-amber-500/15 hover:shadow-[0_0_30px_rgba(245,158,11,0.12)]"
              >
                Create Your Story
                <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>
            </div>
          </div>

          {/* Ancient Storybook Page */}
          <div className="relative mx-auto w-full max-w-md px-0 py-0">
            {/* Framer Motion floating wrapper */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ willChange: "transform" }}
            >
              {/* GSAP entrance wrapper */}
              <div
                data-about-book-entrance
                className="relative"
                style={{
                  perspective: "1200px",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Pages behind */}
                <div className="absolute inset-3 translate-x-2 translate-y-2 rotate-2 border border-[#a58b63]/20 bg-[#c9b895]" />
                <div className="absolute inset-3 -translate-x-1 translate-y-1 -rotate-1 border border-[#a58b63]/20 bg-[#d8c9a8]" />

                {/* Actual page */}
                <div className="relative rotate-[-0.5deg] border border-[#b9a27b] bg-[#e8dcc0] shadow-[15px_20px_45px_rgba(0,0,0,0.45)]">
                  {/* Paper texture */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-[0.13]"
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                    }}
                  />

                  {/* Page content */}
                  <div className="relative px-6 py-5 md:px-7 md:py-6">
                    {/* Top metadata */}
                    <div className="flex items-center justify-between border-b border-[#8c7049]/40 pb-2">
                      <span className="font-serif text-[9px] font-bold tracking-[0.2em] text-[#80633d]">
                        THE CHRONICLES OF KAHANAI
                      </span>
                      <span className="font-serif text-[11px] italic text-[#80633d]">
                        Vol. I
                      </span>
                    </div>

                    {/* Chapter heading */}
                    <div className="mb-4 mt-5 text-center">
                      <span className="font-serif text-[9px] italic tracking-[0.2em] text-[#967343]">
                        ✦ &nbsp; A TALE OF IMAGINATION &nbsp; ✦
                      </span>

                      <h3 className="mt-2 font-serif text-2xl leading-tight text-[#382b1e] md:text-3xl">
                        The Art of
                        <span className="block italic text-[#956e39]">
                          Storytelling
                        </span>
                      </h3>

                      <div className="mx-auto mt-3 flex w-28 items-center gap-2">
                        <span className="h-px flex-1 bg-[#9b794d]/50" />
                        <span className="font-serif text-base text-[#9b794d]">
                          ❧
                        </span>
                        <span className="h-px flex-1 bg-[#9b794d]/50" />
                      </div>
                    </div>

                    {/* Written paragraphs */}
                    <div className="font-serif text-[12px] leading-[1.8] text-[#493a29]/90 md:text-[13px]">
                      <p className="first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:text-5xl first-letter:leading-[0.8] first-letter:text-[#956e39]">
                        Every great story begins with a thought... a small spark
                        hidden somewhere in the depths of imagination. A world
                        waiting to be discovered, characters waiting to be born,
                        and adventures waiting to unfold.
                      </p>

                      <p className="mt-3">
                        Within these pages, there are no boundaries. You may
                        wander through forgotten kingdoms, uncover ancient
                        mysteries, explore distant galaxies, or create a world
                        that has never existed before.
                      </p>

                      <p className="mt-3">
                        And the most beautiful part? You are not merely reading
                        the story. You are the one who writes it. Every choice,
                        every idea, every little detail becomes a part of your
                        own universe.
                      </p>
                    </div>

                    {/* Quote */}
                    <div className="my-4 border-y border-[#9b794d]/40 py-3 text-center">
                      <p className="font-serif text-lg italic leading-relaxed text-[#956e39] md:text-xl">
                        "Every mind holds a thousand worlds."
                      </p>
                    </div>

                    {/* Bottom writing */}
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="font-serif text-[11px] italic text-[#80633d]">
                          And so, the story begins...
                        </p>
                        <p className="mt-1 font-serif text-[8px] uppercase tracking-[0.2em] text-[#9b794d]/70">
                          The End Is Yours To Write
                        </p>
                      </div>

                      <span className="font-serif text-[11px] italic text-[#80633d]">
                        — 001 —
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
