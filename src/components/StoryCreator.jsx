import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

const genres = [
  { name: "Fantasy", symbol: "✧", detail: "Magic & mythical worlds" },
  { name: "Horror", symbol: "☾", detail: "Shadows & dark secrets" },
  { name: "Sci-Fi", symbol: "⌘", detail: "Future & technology" },
  { name: "Adventure", symbol: "⚔", detail: "Quests & discoveries" },
];

const moods = ["Mysterious", "Dark", "Emotional", "Magical", "Thrilling", "Funny", "Inspirational"];

const initialForm = {
  genre: "Fantasy",
  theme: "",
  characters: "",
  language: "English",
  mood: "Mysterious",
};

// Book size (px)
const W = 250;
const H = 362;
const T = 44;

// Seconds per full turn
const SPIN_DURATION = 16;

// Page edge textures
const pagesSide =
  "repeating-linear-gradient(90deg,#f2e7cf 0,#f2e7cf 2px,#c9b995 2px,#c9b995 3px)";
const pagesTopBottom =
  "repeating-linear-gradient(0deg,#f2e7cf 0,#f2e7cf 2px,#c9b995 2px,#c9b995 3px)";

// Hide the inner side of each face (Safari needs the prefixed property)
const oneSided = { backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" };

function StoryCreator() {
  const navigate = useNavigate();
  const reduce = useReducedMotion();

  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleGenerate = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.theme.trim()) {
      setError("Your story needs an idea to begin.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/stories/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to generate your story.");
      }

      if (!result.data?.story) {
        throw new Error("The story was not received from the server.");
      }

      navigate("/story", { state: { story: result.data } });
    } catch (err) {
      console.error("Story generation error:", err);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const selectedGenre = genres.find((g) => g.name === form.genre) || genres[0];

  // Turntable: full 360° spin + slight bob (transform only)
  const bookSpin = reduce
    ? {}
    : {
        animate: { rotateY: [-24, 336], y: [0, -8, 0] },
        transition: {
          rotateY: { duration: SPIN_DURATION, repeat: Infinity, ease: "linear" },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        },
      };

  // Shadow pulses with the bob
  const shadowPulse = reduce
    ? {}
    : {
        animate: { scaleX: [1, 0.88, 1], opacity: [0.65, 0.45, 0.65] },
        transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
      };

  return (
    <section
      id="create"
      className="relative overflow-hidden bg-[#09090b] px-5 py-24 text-[#eee8dc] sm:px-8 lg:px-12 lg:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute -left-48 top-20 h-[500px] w-[500px] bg-[radial-gradient(circle,rgba(180,83,9,0.12),transparent_70%)]" />
      <div className="pointer-events-none absolute -right-48 bottom-0 h-[500px] w-[500px] bg-[radial-gradient(circle,rgba(154,52,18,0.09),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-16 text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-amber-500/40" />
            <span className="font-mono text-[9px] tracking-[0.4em] text-amber-400">THE ART OF STORYTELLING</span>
            <span className="h-px w-10 bg-amber-500/40" />
          </div>

          <h2 className="font-serif text-4xl font-normal leading-tight sm:text-6xl">
            Open a book.
            <span className="block italic text-amber-400">Create a universe.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-stone-500">
            Every world begins with an idea. Choose your setting, shape its characters, and let a new legend unfold.
          </p>
        </div>

        {/* Main studio */}
        <div className="grid items-stretch gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          {/* LEFT: Book preview */}
          <aside className="relative flex min-h-[680px] flex-col items-center justify-center overflow-hidden rounded-3xl border border-[#9b7545]/20 bg-[#0d0b0a] px-5 py-12">
            {/* Background atmosphere */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(130,75,35,0.2),transparent_65%)]" />

            <div className="relative z-10 mb-10 text-center">
              <p className="text-[9px] font-semibold tracking-[0.55em] text-[#b58b52]">KAHANAI PUBLISHING HOUSE</p>
              <h3 className="mt-4 font-serif text-3xl text-[#ead8b8]">The Art of Imagination</h3>
              <p className="mt-2 text-[11px] tracking-widest text-stone-500">YOUR STORY • YOUR UNIVERSE</p>
            </div>

            {/* 3D scene */}
            <div className="relative z-10 flex h-[430px] w-full items-center justify-center [perspective:1400px]">
              <div className="origin-center scale-[0.85] sm:scale-100">
                {/* 3D book */}
                <motion.div
                  className="relative"
                  style={{ width: W, height: H, transformStyle: "preserve-3d", rotateX: 8, rotateY: -24 }}
                  {...bookSpin}
                >
                  {/* Back cover */}
                  <div
                    className="absolute inset-0 overflow-hidden rounded-l-md rounded-r-sm border border-[#c69c5b]/50 bg-[linear-gradient(235deg,#572c26_0%,#321a18_45%,#211311_100%)]"
                    style={{ transform: `translateZ(${-T / 2}px) rotateY(180deg)`, ...oneSided }}
                  >
                    <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(#e0b87a_0.65px,transparent_0.8px)] [background-size:4px_4px]" />
                    <div className="absolute inset-3 border border-[#d8b77c]/60" />
                    <div className="absolute inset-[17px] border border-[#d8b77c]/20" />
                    <span className="absolute left-5 top-4 font-serif text-2xl text-[#d7b477]">❧</span>
                    <span className="absolute right-5 top-4 rotate-90 font-serif text-2xl text-[#d7b477]">❧</span>
                    <span className="absolute bottom-4 left-5 -rotate-90 font-serif text-2xl text-[#d7b477]">❧</span>
                    <span className="absolute bottom-4 right-5 rotate-180 font-serif text-2xl text-[#d7b477]">❧</span>

                    <div className="relative flex h-full flex-col items-center justify-center px-8 text-center">
                      <span className="text-3xl text-[#e0bf85]">✦</span>
                      <div className="my-5 h-px w-12 bg-[#d8b77c]/60" />
                      <p className="font-serif text-sm italic leading-6 text-[#d7bd94]">
                        Every legend deserves a first page.
                      </p>
                      <p className="mt-6 text-[8px] tracking-[0.4em] text-[#cba66d]">KAHANAI • MMXXVI</p>
                    </div>
                  </div>

                  {/* Spine */}
                  <div
                    className="absolute overflow-hidden rounded-l-md border-y border-[#c39a5b]/40 bg-gradient-to-r from-[#170d0c] via-[#603322] to-[#2a1712]"
                    style={{ left: -T / 2, top: 0, width: T, height: H, transform: "rotateY(-90deg)", ...oneSided }}
                  >
                    <div className="absolute left-0 top-[10%] h-px w-full bg-[#d5ae70]/60" />
                    <div className="absolute left-0 top-[12%] h-px w-full bg-[#d5ae70]/30" />
                    <div className="absolute bottom-[10%] left-0 h-px w-full bg-[#d5ae70]/60" />
                    <div className="absolute bottom-[12%] left-0 h-px w-full bg-[#d5ae70]/30" />
                    <span className="absolute inset-0 flex items-center justify-center font-serif text-[15px] tracking-[0.5em] text-[#e0bf85] [writing-mode:vertical-rl]">
                      KAHANAI
                    </span>
                  </div>

                  {/* Page edges (right) */}
                  <div
                    className="absolute border-y border-r border-[#b7a17a]"
                    style={{
                      left: W - 4 - T / 2,
                      top: 5,
                      width: T,
                      height: H - 10,
                      transform: "rotateY(90deg)",
                      backgroundImage: `linear-gradient(90deg,rgba(60,36,12,.28),transparent 25%,transparent 75%,rgba(60,36,12,.28)), ${pagesSide}`,
                      ...oneSided,
                    }}
                  />

                  {/* Page edges (top) */}
                  <div
                    className="absolute border-x border-[#b7a17a]"
                    style={{
                      left: 3,
                      top: 5 - T / 2,
                      width: W - 7,
                      height: T,
                      transform: "rotateX(90deg)",
                      backgroundImage: pagesTopBottom,
                      ...oneSided,
                    }}
                  />

                  {/* Page edges (bottom) */}
                  <div
                    className="absolute border-x border-[#b7a17a]"
                    style={{
                      left: 3,
                      top: H - 5 - T / 2,
                      width: W - 7,
                      height: T,
                      transform: "rotateX(-90deg)",
                      backgroundImage: `linear-gradient(0deg,rgba(60,36,12,.35),transparent 60%), ${pagesTopBottom}`,
                      ...oneSided,
                    }}
                  />

                  {/* Ribbon bookmark */}
                  <div
                    className="absolute h-[72px] w-4 bg-gradient-to-b from-[#a8322f] to-[#6e1b1b] shadow-md [clip-path:polygon(0_0,100%_0,100%_100%,50%_84%,0_100%)]"
                    style={{ left: W - 52, top: H - 36 }}
                  />

                  {/* Front cover */}
                  <div
                    className="absolute inset-0 overflow-hidden rounded-r-md rounded-l-sm border border-[#c69c5b]/70 bg-[linear-gradient(125deg,#572c26_0%,#321a18_42%,#211311_100%)]"
                    style={{ transform: `translateZ(${T / 2}px)`, ...oneSided }}
                  >
                    {/* Leather grain */}
                    <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(#e0b87a_0.65px,transparent_0.8px)] [background-size:4px_4px]" />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-black/50" />

                    {/* Hinge shadow */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-5 bg-gradient-to-r from-black/45 to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 left-5 w-px bg-black/40" />

                    {/* Foil border */}
                    <div className="absolute inset-3 border border-[#d8b77c]/80" />
                    <div className="absolute inset-[17px] border border-[#d8b77c]/25" />

                    {/* Decorative corners */}
                    <span className="absolute left-5 top-4 font-serif text-2xl text-[#d7b477]">❧</span>
                    <span className="absolute right-5 top-4 rotate-90 font-serif text-2xl text-[#d7b477]">❧</span>
                    <span className="absolute bottom-4 left-5 -rotate-90 font-serif text-2xl text-[#d7b477]">❧</span>
                    <span className="absolute bottom-4 right-5 rotate-180 font-serif text-2xl text-[#d7b477]">❧</span>

                    <div className="relative flex h-full flex-col items-center justify-between px-7 py-9 text-center">
                      {/* Edition */}
                      <div>
                        <p className="text-[8px] tracking-[0.48em] text-[#e1c28e]">THE FIRST EDITION</p>
                        <div className="mx-auto mt-4 h-px w-12 bg-[#d8b77c]/70" />
                      </div>

                      {/* Emblem and title */}
                      <div className="flex flex-1 flex-col items-center justify-center">
                        <div className="relative mb-6 flex h-[86px] w-[86px] items-center justify-center rounded-full border border-[#d8b77c]/70 shadow-[0_0_25px_rgba(216,183,124,0.12)]">
                          <div className="absolute inset-2 rounded-full border border-[#d8b77c]/30" />
                          <span className="font-serif text-5xl text-[#edcf98] drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                            {selectedGenre.symbol}
                          </span>
                        </div>

                        <p className="mb-4 text-[8px] tracking-[0.4em] text-[#cba66d]">
                          A {form.genre.toUpperCase()} COLLECTION
                        </p>

                        <h2 className="line-clamp-3 font-serif text-[30px] leading-[1.15] text-[#f3e5c9] drop-shadow-lg">
                          {form.theme.trim() || "The Untold Story"}
                        </h2>

                        <div className="my-5 flex items-center gap-3">
                          <div className="h-px w-8 bg-[#cba66d]/60" />
                          <span className="text-xs text-[#e0bf85]">✦</span>
                          <div className="h-px w-8 bg-[#cba66d]/60" />
                        </div>

                        <p className="font-serif text-sm italic text-[#d7bd94]">{form.mood || "A mysterious journey"}</p>
                      </div>

                      {/* Publisher details */}
                      <div className="w-full">
                        <p className="text-[8px] tracking-[0.35em] text-[#cba66d]">THE LANGUAGE OF THIS TALE</p>
                        <p className="mt-2 font-serif text-sm text-[#f0dfbd]">{form.language}</p>
                        <div className="mx-auto mt-4 h-px w-10 bg-[#d8b77c]/60" />
                        <p className="mt-3 text-[8px] tracking-[0.4em] text-[#cba66d]">KAHANAI • MMXXVI</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Ground shadow */}
                <motion.div
                  className="mx-auto mt-10 h-7 w-[230px] bg-[radial-gradient(ellipse,rgba(0,0,0,0.75),transparent_70%)]"
                  style={{ opacity: 0.65 }}
                  {...shadowPulse}
                />
              </div>
            </div>

            <div className="relative z-10 mt-6 text-center">
              <p className="font-serif text-lg italic text-[#d8c29e]">Not just a story. A world of your own.</p>
              <p className="mt-3 text-[8px] tracking-[0.45em] text-stone-600">IMAGINED • WRITTEN • REMEMBERED</p>
            </div>
          </aside>

          {/* RIGHT: Form */}
          <form onSubmit={handleGenerate} className="border border-amber-500/20 bg-[#11100f] shadow-2xl">
            {/* Form header */}
            <div className="flex items-center justify-between border-b border-amber-500/15 px-6 py-6 sm:px-9">
              <div>
                <p className="font-serif text-2xl text-amber-100">The Writer's Desk</p>
                <p className="mt-1 text-xs text-stone-500">Your creative journey starts here.</p>
              </div>

              <span className="badge badge-outline rounded-none border-amber-500/30 px-3 py-3 font-mono text-[9px] tracking-widest text-amber-400">
                01 / 05
              </span>
            </div>

            <div className="space-y-8 p-6 sm:p-9">
              {/* Genre */}
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <label className="font-mono text-[10px] tracking-[0.2em] text-amber-200/70">01 — SELECT YOUR GENRE</label>
                  <span className="text-[10px] text-stone-600">Choose a universe</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {genres.map((genre) => {
                    const active = form.genre === genre.name;

                    return (
                      <button
                        key={genre.name}
                        type="button"
                        onClick={() => setForm((prev) => ({ ...prev, genre: genre.name }))}
                        aria-pressed={active}
                        className={`group flex items-center gap-3 border p-4 text-left transition-colors duration-300 ${
                          active
                            ? "border-amber-400/70 bg-amber-500/[0.09]"
                            : "border-amber-500/15 bg-black/20 hover:border-amber-500/40"
                        }`}
                      >
                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center text-xl ${
                            active ? "bg-amber-500/15 text-amber-300" : "bg-white/[0.03] text-stone-400"
                          }`}
                        >
                          {genre.symbol}
                        </span>

                        <span className="min-w-0">
                          <span className="block font-serif text-base text-stone-200">{genre.name}</span>
                          <span className="mt-1 block text-[9px] text-stone-500">{genre.detail}</span>
                        </span>

                        {active && <span className="ml-auto self-start text-xs text-amber-400">✓</span>}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Theme */}
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <label htmlFor="theme" className="font-mono text-[10px] tracking-[0.2em] text-amber-200/70">
                    02 — YOUR STORY IDEA
                  </label>
                  <span className="text-[10px] text-stone-600">{form.theme.length}/500</span>
                </div>

                <textarea
                  id="theme"
                  name="theme"
                  rows={4}
                  maxLength={500}
                  value={form.theme}
                  onChange={handleChange}
                  placeholder="In a kingdom where memories are traded like gold..."
                  required
                  className="textarea textarea-bordered min-h-32 w-full resize-y rounded-none border-amber-500/20 bg-black/30 p-4 text-sm leading-7 text-[#eee8dc] placeholder:text-stone-600 focus:border-amber-400 focus:outline-none"
                />
              </div>

              {/* Characters */}
              <div>
                <label htmlFor="characters" className="mb-4 block font-mono text-[10px] tracking-[0.2em] text-amber-200/70">
                  03 — CHARACTERS
                  <span className="ml-2 normal-case tracking-normal text-stone-600">OPTIONAL</span>
                </label>

                <input
                  id="characters"
                  name="characters"
                  type="text"
                  maxLength={500}
                  value={form.characters}
                  onChange={handleChange}
                  placeholder="A lonely prince, an immortal traveller..."
                  className="input input-bordered h-13 w-full rounded-none border-amber-500/20 bg-black/30 px-4 text-sm text-[#eee8dc] placeholder:text-stone-600 focus:border-amber-400 focus:outline-none"
                />
              </div>

              {/* Language + Mood */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="language" className="mb-4 block font-mono text-[10px] tracking-[0.2em] text-amber-200/70">
                    04 — LANGUAGE
                  </label>

                  <select
                    id="language"
                    name="language"
                    value={form.language}
                    onChange={handleChange}
                    className="select select-bordered h-13 w-full rounded-none border-amber-500/20 bg-[#17120f] text-sm text-[#eee8dc] focus:border-amber-400"
                  >
                    <option>English</option>
                    <option>Hindi</option>
                    <option>Hinglish</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mood" className="mb-4 block font-mono text-[10px] tracking-[0.2em] text-amber-200/70">
                    05 — ATMOSPHERE
                  </label>

                  <select
                    id="mood"
                    name="mood"
                    value={form.mood}
                    onChange={handleChange}
                    className="select select-bordered h-13 w-full rounded-none border-amber-500/20 bg-[#17120f] text-sm text-[#eee8dc] focus:border-amber-400"
                  >
                    {moods.map((mood) => (
                      <option key={mood}>{mood}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Error */}
              {error && (
                <div className="alert rounded-none border border-red-500/30 bg-red-950/30 text-sm text-red-300">
                  <span>⚠</span>
                  {error}
                </div>
              )}

              {/* Submit */}
              <div className="border-t border-amber-500/15 pt-7">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn h-16 w-full rounded-none border border-amber-400/50 bg-gradient-to-r from-amber-600/20 via-amber-500/10 to-orange-600/20 font-serif text-base font-normal tracking-wide text-amber-100 transition-colors duration-300 hover:border-amber-300 hover:bg-amber-500/20 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <span className="loading loading-spinner loading-sm" />
                      Writing your tale...
                    </>
                  ) : (
                    <>
                      <span className="text-xl">✧</span>
                      Bring My Story to Life
                      <span className="text-xl">↗</span>
                    </>
                  )}
                </button>

                <p className="mt-4 text-center font-mono text-[9px] tracking-[0.2em] text-stone-600">
                  YOUR IMAGINATION · OUR STORY ENGINE
                </p>
              </div>
            </div>
          </form>
        </div>

        {/* Bottom signature */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <span className="h-px w-10 bg-amber-500/20" />
          <p className="font-serif text-sm italic text-stone-600">Every legend deserves a first page.</p>
          <span className="h-px w-10 bg-amber-500/20" />
        </div>
      </div>
    </section>
  );
}

export default StoryCreator;