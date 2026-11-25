import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My horoscope said I'd meet someone special today, so I stayed home — I wasn't ready to disappoint a stranger that fast.";

if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error("entry must be 1-200 non-whitespace characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), Buffer.from(LINE, "utf8"));
