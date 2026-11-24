// One Letter for Your Day — the single letter K.
//
// The letter stands for the word "knackered": wiped out after a long,
// hard day. The judge reads two letters at a time and picks the one whose
// hidden word feels more vivid, funnier or truer, so the letter has to
// carry its word on its own:
//
// - Vivid: "knackered" calls up a sharp picture at once — someone
//   shambling through the day half-asleep on their feet.
// - Funny: a punchy word, the kind a reader repeats to a friend.
// - True: an honest report of a real day, not a performance.
// - The letter fits its word: the hard K sound is the word itself.
//
// K is also deliberately not one of the RULES' own examples (A for
// amazing, F for Friday-feeling, Z for zero sleep). Those are the
// most-copied letters in a field of 3,000+, and byte-identical entries
// share one rate with the earlier receipt placing above its copies —
// an uncommon strong letter keeps its own rate.
//
// The gate requires /output/entry.txt to be exactly 1 character, so the
// entry is written with no trailing newline: "K\n" would be 2 characters
// and fail. The /output directory itself is never deleted (it is a mount
// point in the grader); it is only created if missing.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LETTER = "K";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LETTER, "utf8");

// Self-check the gate condition: the entry must be exactly one character.
// Fail loudly here rather than shipping an invalid entry.
const written = readFileSync("/output/entry.txt", "utf8");
if (written.length !== 1 || written !== LETTER) {
  throw new Error(`entry.txt must hold exactly one letter, got ${JSON.stringify(written)}`);
}
