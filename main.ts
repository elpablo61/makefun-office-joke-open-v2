import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Entry contract: copy the single winning line verbatim to the output dir.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const entry = readFileSync(new URL("./entry.txt", import.meta.url), "utf8");
writeFileSync(join(outDir, "entry.txt"), entry);
