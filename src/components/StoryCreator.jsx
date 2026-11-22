
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8000";

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
            Every world begins with an idea. Choose your setting,
            shape its characters, and let a new legend unfold.
          </p>
        </motion.div>

        {/* Main studio */}
        <div className="grid items-stretch gap-6 lg:grid-cols-[0.8fr_1.2fr]">

          {/* LEFT: Book preview */}
          
{/* LEFT: 3D Antique Storybook */}
<motion.aside
  initial={{ opacity: 0, x: -35, rotateY: 8 }}
  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.9 }}
  className="relative flex min-h-[620px] items-center justify-center overflow-hidden border border-amber-500/10 bg-[#0c0b0a] px-5 py-14 sm:px-10"
>
  {/* Ambient glow */}
  <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-600/[0.09] blur-[100px]" />

  <div className="relative w-full max-w-[310px] [perspective:1400px]">

    {/* Book shadow */}
    <div className="absolute -bottom-8 left-8 right-0 h-12 rounded-[50%] bg-black/70 blur-xl" />

    {/* Book pages */}
    <div className="absolute -right-[13px] top-[9px] h-[98%] w-5 rounded-r-sm border-y border-r border-[#b69b6a] bg-[#c8b58e] shadow-[5px_4px_10px_rgba(0,0,0,0.4)]">
      <div className="absolute inset-y-2 left-1 w-px bg-[#8e7956]/40" />
      <div className="absolute inset-y-2 left-2 w-px bg-[#8e7956]/30" />
      <div className="absolute inset-y-2 left-3 w-px bg-[#8e7956]/30" />
    </div>

    {/* Book spine */}
    <div className="absolute -left-4 top-0 z-20 h-full w-7 rounded-l-md border border-[#8d682e] bg-gradient-to-r from-[#38210e] via-[#8b5b25] to-[#3a210f] shadow-[-8px_5px_15px_rgba(0,0,0,0.4)]">
      <div className="absolute inset-y-3 left-2 w-px bg-amber-300/30" />
      <div className="absolute inset-y-3 right-1 w-px bg-black/30" />
      <div className="absolute left-0 top-10 h-px w-full bg-amber-300/30" />
      <div className="absolute bottom-10 left-0 h-px w-full bg-amber-300/30" />
    </div>

    {/* Main cover */}
    <motion.div
      whileHover={{ rotateY: -5, rotateX: 2, scale: 1.015 }}
      transition={{ duration: 0.4 }}
      className="relative z-10 aspect-[0.70] overflow-hidden rounded-r-md border border-[#c69a50]/70 bg-gradient-to-br from-[#563519] via-[#321d11] to-[#160e09] shadow-[12px_18px_35px_rgba(0,0,0,0.55)]"
      style={{
        transformStyle: "preserve-3d",
        boxShadow:
          "inset 5px 0 12px rgba(0,0,0,0.45), inset -2px 0 8px rgba(255,205,120,0.12), 15px 20px 35px rgba(0,0,0,0.55)",
      }}
    >
      {/* Leather texture / decorative glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(213,157,73,0.18),transparent_65%)]" />

      {/* Outer golden frame */}
      <div className="absolute inset-3 border border-[#d6aa62]/50" />
      <div className="absolute inset-[18px] border border-[#d6aa62]/20" />

      {/* Corner ornaments */}
      <span className="absolute left-5 top-5 font-serif text-2xl text-amber-300/70">❧</span>
      <span className="absolute right-5 top-5 rotate-90 font-serif text-2xl text-amber-300/70">❧</span>
      <span className="absolute bottom-5 left-5 -rotate-90 font-serif text-2xl text-amber-300/70">❧</span>
      <span className="absolute bottom-5 right-5 rotate-180 font-serif text-2xl text-amber-300/70">❧</span>

      {/* Cover content */}
      <div className="relative flex h-full flex-col items-center justify-between px-8 py-10 text-center sm:px-10 sm:py-12">

        <div>
          <p className="font-mono text-[8px] tracking-[0.4em] text-amber-200/70">
            THE LIBRARY OF IMAGINATION
          </p>
          <div className="mx-auto mt-4 h-px w-16 bg-amber-300/40" />
        </div>

        {/* Emblem */}
        <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-amber-300/40">
          <div className="absolute inset-2 rounded-full border border-amber-300/20" />
          <div className="absolute inset-4 rounded-full border border-amber-300/20" />
          <span className="font-serif text-6xl text-amber-300 drop-shadow-[0_0_15px_rgba(251,191,36,0.35)]">
            {selectedGenre.symbol}
          </span>
        </div>

        {/* Dynamic title */}
        <div className="w-full">
          <p className="font-mono text-[8px] tracking-[0.4em] text-amber-200/60">
            {form.genre.toUpperCase()} · {form.mood.toUpperCase()}
          </p>

          <AnimatePresence mode="wait">
            <motion.h3
              key={form.theme || "empty"}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="mt-5 break-words font-serif text-3xl leading-tight text-[#f4dfb6] sm:text-4xl"
            >
              {form.theme.trim()
                ? form.theme.trim().slice(0, 65) +
                  (form.theme.trim().length > 65 ? "..." : "")
                : "The Untold Chronicles"}
            </motion.h3>
          </AnimatePresence>

          <div className="my-5 flex items-center justify-center gap-3 text-amber-300/70">
            <span className="h-px w-8 bg-amber-300/40" />
            ✦
            <span className="h-px w-8 bg-amber-300/40" />
          </div>

          <p className="font-serif text-sm italic tracking-wide text-amber-100/60">
            A story waiting to be written
          </p>
        </div>

        <div className="w-full">
          <div className="mx-auto mb-4 h-px w-20 bg-amber-300/30" />
          <p className="font-mono text-[8px] tracking-[0.35em] text-amber-200/60">
            KAHANAI EDITION
          </p>
          <p className="mt-2 font-serif text-xs italic text-amber-200/40">
            Vol. I · {form.language}
          </p>
        </div>
      </div>

      {/* Cover shine */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black/30 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-5 bg-gradient-to-l from-black/20 to-transparent" />
    </motion.div>
  </div>

  {/* Caption */}
  <div className="absolute bottom-5 left-0 right-0 text-center">
    <p className="font-mono text-[8px] tracking-[0.35em] text-amber-500/50">
      EVERY BOOK HOLDS A DIFFERENT UNIVERSE
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
