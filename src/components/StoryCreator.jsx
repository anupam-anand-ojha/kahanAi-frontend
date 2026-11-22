import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

const genres = [
  { name: "Fantasy", symbol: "✧", detail: "Magic & mythical worlds" },
  { name: "Horror", symbol: "☾", detail: "Shadows & dark secrets" },
  { name: "Sci-Fi", symbol: "⌘", detail: "Future & technology" },
  { name: "Adventure", symbol: "⚔", detail: "Quests & discoveries" },
];

const moods = [
  "Mysterious",
  "Dark",
  "Emotional",
  "Magical",
  "Thrilling",
  "Funny",
  "Inspirational",
];

const initialForm = {
  genre: "Fantasy",
  theme: "",
  characters: "",
  language: "English",
  mood: "Mysterious",
};

function StoryCreator() {
  const navigate = useNavigate();

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

      navigate("/story", {
        state: { story: result.data },
      });
    } catch (err) {
      console.error("Story generation error:", err);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const selectedGenre =
    genres.find((genre) => genre.name === form.genre) || genres[0];

  return (
    <section
      id="create"
      className="relative overflow-hidden bg-[#09090b] px-5 py-24 text-[#eee8dc] sm:px-8 lg:px-12 lg:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute -left-48 top-20 h-[500px] w-[500px] rounded-full bg-amber-700/[0.07] blur-[150px]" />
      <div className="pointer-events-none absolute -right-48 bottom-0 h-[500px] w-[500px] rounded-full bg-orange-800/[0.05] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-amber-500/40" />
            <span className="font-mono text-[9px] tracking-[0.4em] text-amber-400">
              THE ART OF STORYTELLING
            </span>
            <span className="h-px w-10 bg-amber-500/40" />
          </div>

          <h2 className="font-serif text-4xl font-normal leading-tight sm:text-6xl">
            Open a book.
            <span className="block italic text-amber-400">
              Create a universe.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-stone-500">
            Every world begins with an idea. Choose your setting, shape its
            characters, and let a new legend unfold.
          </p>
        </motion.div>

        {/* Main studio */}
        <div className="grid items-stretch gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          {/* LEFT: Book preview */}

          <motion.aside
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex min-h-[680px] flex-col items-center justify-center overflow-hidden rounded-3xl border border-[#9b7545]/20 bg-[#0d0b0a] px-5 py-12"
          >
            {/* Background atmosphere */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(130,75,35,0.2),transparent_65%)]" />
            <div className="pointer-events-none absolute bottom-10 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-amber-700/10 blur-[90px]" />

            <div className="relative z-10 mb-12 text-center">
              <p className="text-[9px] font-semibold tracking-[0.55em] text-[#b58b52]">
                KAHANAI PUBLISHING HOUSE
              </p>
              <h3 className="mt-4 font-serif text-3xl text-[#ead8b8]">
                The Art of Imagination
              </h3>
              <p className="mt-2 text-[11px] tracking-widest text-stone-500">
                YOUR STORY • YOUR UNIVERSE
              </p>
            </div>

            {/* 3D book */}
            <div className="relative z-10 w-full max-w-[330px] [perspective:1600px]">
              <motion.div
                whileHover={{ rotateY: -18, rotateX: 4, y: -10 }}
                transition={{ type: "spring", stiffness: 110, damping: 15 }}
                className="relative mx-auto aspect-[0.69] w-[80%] [transform-style:preserve-3d]"
              >
                {/* Thick page edges */}
                <div className="absolute -right-[15px] top-3 h-[calc(100%-24px)] w-5 rounded-r-md border-y border-r border-[#b7a17a] bg-[repeating-linear-gradient(to_bottom,#f2e7cf_0px,#f2e7cf_2px,#c9b995_3px,#f2e7cf_4px)] shadow-[8px_8px_15px_rgba(0,0,0,0.5)]" />
                <div className="absolute -right-2 top-2 h-[calc(100%-16px)] w-3 rounded-r-sm bg-[#d8c7a5]" />

                {/* Spine */}
                <div className="absolute -left-5 top-0 z-20 h-full w-8 rounded-l-lg border-r border-[#c39a5b]/50 bg-gradient-to-r from-[#170d0c] via-[#603322] to-[#2a1712] shadow-[-10px_10px_20px_rgba(0,0,0,0.6)]">
                  <div className="absolute left-2 top-5 h-[calc(100%-40px)] w-px bg-[#d5ae70]/50" />
                  <div className="absolute left-0 top-[18%] h-px w-full bg-[#d5ae70]/50" />
                  <div className="absolute left-0 bottom-[18%] h-px w-full bg-[#d5ae70]/50" />
                </div>

                {/* Cover */}
                <div className="relative h-full w-full overflow-hidden rounded-r-md rounded-l-sm border border-[#c69c5b]/70 bg-[linear-gradient(125deg,#572c26_0%,#321a18_42%,#211311_100%)] shadow-[20px_28px_40px_rgba(0,0,0,0.7)]">
                  {/* Leather grain */}
                  <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(#e0b87a_0.65px,transparent_0.8px)] [background-size:4px_4px]" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/50" />

                  {/* Foil border */}
                  <div className="absolute inset-3 border border-[#d8b77c]/80" />
                  <div className="absolute inset-[17px] border border-[#d8b77c]/25" />

                  {/* Decorative corners */}
                  <span className="absolute left-5 top-4 font-serif text-2xl text-[#d7b477]">
                    ❧
                  </span>
                  <span className="absolute right-5 top-4 rotate-90 font-serif text-2xl text-[#d7b477]">
                    ❧
                  </span>
                  <span className="absolute bottom-4 left-5 -rotate-90 font-serif text-2xl text-[#d7b477]">
                    ❧
                  </span>
                  <span className="absolute bottom-4 right-5 rotate-180 font-serif text-2xl text-[#d7b477]">
                    ❧
                  </span>

                  <div className="relative flex h-full flex-col items-center justify-between px-7 py-9 text-center">
                    {/* Edition */}
                    <div>
                      <p className="text-[8px] tracking-[0.48em] text-[#e1c28e]">
                        THE FIRST EDITION
                      </p>
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

                      <AnimatePresence mode="wait">
                        <motion.h2
                          key={form.theme || "untitled"}
                          initial={{ opacity: 0, y: 12, filter: "blur(5px)" }}
                          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.35 }}
                          className="line-clamp-3 font-serif text-[32px] leading-[1.15] text-[#f3e5c9] drop-shadow-lg"
                        >
                          {form.theme.trim() || "The Untold Story"}
                        </motion.h2>
                      </AnimatePresence>

                      <div className="my-5 flex items-center gap-3">
                        <div className="h-px w-8 bg-[#cba66d]/60" />
                        <span className="text-xs text-[#e0bf85]">✦</span>
                        <div className="h-px w-8 bg-[#cba66d]/60" />
                      </div>

                      <p className="font-serif text-sm italic text-[#d7bd94]">
                        {form.mood || "A mysterious journey"}
                      </p>
                    </div>

                    {/* Publisher details */}
                    <div className="w-full">
                      <p className="text-[8px] tracking-[0.35em] text-[#cba66d]">
                        THE LANGUAGE OF THIS TALE
                      </p>
                      <p className="mt-2 font-serif text-sm text-[#f0dfbd]">
                        {form.language}
                      </p>
                      <div className="mx-auto mt-4 h-px w-10 bg-[#d8b77c]/60" />
                      <p className="mt-3 text-[8px] tracking-[0.4em] text-[#cba66d]">
                        KAHANAI • MMXXVI
                      </p>
                    </div>
                  </div>
                </div>

                {/* Ribbon bookmark */}
                <div className="absolute -right-1 top-0 z-30 h-20 w-4 bg-gradient-to-b from-[#d8b477] to-[#86552c] shadow-md [clip-path:polygon(0_0,100%_0,100%_100%,50%_82%,0_100%)]" />
              </motion.div>
            </div>

            <div className="relative z-10 mt-14 text-center">
              <p className="font-serif text-lg italic text-[#d8c29e]">
                Not just a story. A world of your own.
              </p>
              <p className="mt-3 text-[8px] tracking-[0.45em] text-stone-600">
                IMAGINED • WRITTEN • REMEMBERED
              </p>
            </div>
          </motion.aside>

          {/* RIGHT: Form */}
          <motion.form
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={handleGenerate}
            className="border border-amber-500/20 bg-[#11100f] shadow-2xl"
          >
            {/* Form header */}
            <div className="flex items-center justify-between border-b border-amber-500/15 px-6 py-6 sm:px-9">
              <div>
                <p className="font-serif text-2xl text-amber-100">
                  The Writer's Desk
                </p>
                <p className="mt-1 text-xs text-stone-500">
                  Your creative journey starts here.
                </p>
              </div>

              <span className="badge badge-outline rounded-none border-amber-500/30 px-3 py-3 font-mono text-[9px] tracking-widest text-amber-400">
                01 / 05
              </span>
            </div>

            <div className="space-y-8 p-6 sm:p-9">
              {/* Genre */}
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <label className="font-mono text-[10px] tracking-[0.2em] text-amber-200/70">
                    01 — SELECT YOUR GENRE
                  </label>
                  <span className="text-[10px] text-stone-600">
                    Choose a universe
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {genres.map((genre) => {
                    const active = form.genre === genre.name;

                    return (
                      <button
                        key={genre.name}
                        type="button"
                        onClick={() =>
                          setForm((prev) => ({
                            ...prev,
                            genre: genre.name,
                          }))
                        }
                        aria-pressed={active}
                        className={`group flex items-center gap-3 border p-4 text-left transition-all duration-300 ${
                          active
                            ? "border-amber-400/70 bg-amber-500/[0.09]"
                            : "border-amber-500/15 bg-black/20 hover:border-amber-500/40"
                        }`}
                      >
                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center text-xl ${
                            active
                              ? "bg-amber-500/15 text-amber-300"
                              : "bg-white/[0.03] text-stone-400"
                          }`}
                        >
                          {genre.symbol}
                        </span>

                        <span className="min-w-0">
                          <span className="block font-serif text-base text-stone-200">
                            {genre.name}
                          </span>
                          <span className="mt-1 block text-[9px] text-stone-500">
                            {genre.detail}
                          </span>
                        </span>

                        {active && (
                          <span className="ml-auto self-start text-xs text-amber-400">
                            ✓
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Theme */}
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <label
                    htmlFor="theme"
                    className="font-mono text-[10px] tracking-[0.2em] text-amber-200/70"
                  >
                    02 — YOUR STORY IDEA
                  </label>
                  <span className="text-[10px] text-stone-600">
                    {form.theme.length}/500
                  </span>
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
                <label
                  htmlFor="characters"
                  className="mb-4 block font-mono text-[10px] tracking-[0.2em] text-amber-200/70"
                >
                  03 — CHARACTERS
                  <span className="ml-2 normal-case tracking-normal text-stone-600">
                    OPTIONAL
                  </span>
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

              {/* Language */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="language"
                    className="mb-4 block font-mono text-[10px] tracking-[0.2em] text-amber-200/70"
                  >
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
                  <label
                    htmlFor="mood"
                    className="mb-4 block font-mono text-[10px] tracking-[0.2em] text-amber-200/70"
                  >
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
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="alert rounded-none border border-red-500/30 bg-red-950/30 text-sm text-red-300"
                  >
                    <span>⚠</span>
                    {error}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit */}
              <div className="border-t border-amber-500/15 pt-7">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn h-16 w-full rounded-none border border-amber-400/50 bg-gradient-to-r from-amber-600/20 via-amber-500/10 to-orange-600/20 font-serif text-base font-normal tracking-wide text-amber-100 transition-all duration-300 hover:border-amber-300 hover:bg-amber-500/20 disabled:cursor-not-allowed disabled:opacity-60"
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
          </motion.form>
        </div>

        {/* Bottom signature */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <span className="h-px w-10 bg-amber-500/20" />
          <p className="font-serif text-sm italic text-stone-600">
            Every legend deserves a first page.
          </p>
          <span className="h-px w-10 bg-amber-500/20" />
        </div>
      </div>
    </section>
  );
}

export default StoryCreator;
