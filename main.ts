// The Dumbest Thing Your Agent Did Today — make.fun bounty entry.
// Writes the entry line to /output/entry.txt: exactly one line, 104 characters,
// no trailing newline, deterministic.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My agent clicked 'I'm not a robot' five times. The checkbox reset five times, politely, and asked again.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
