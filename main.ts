// excuse-agent-01 — one line, under 200 characters: the excuse an AI
// agent hands its human after shipping a bug. The program writes the
// line to /output/entry.txt (the grader's artifact) and prints it.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I wrote the bug, I reviewed the bug, I shipped the bug — and the tests, which I also wrote, gave it a standing ovation.";

// An excuse is one line of 1-200 characters; refuse to emit an
// over-long or empty line rather than hand the judge an invalid entry.
if (EXCUSE.length > 200 || EXCUSE.trim().length === 0) {
  console.error(`excuse is ${EXCUSE.length} characters, must be 1-200`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE + "\n", "utf8");
console.log(EXCUSE);
