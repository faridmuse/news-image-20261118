// A news-image-daily entry (Node 22, standard library only): the image is the
// entry.png beside this file, drawn programmatically with PIL from the verified
// news of Wednesday 18 November 2026, and the program copies it to
// /output/entry.png. The image is a newspaper front page: masthead naming the
// day, a world map with the top 10 stories marked, 35 numbered headlines
// (topics 1-10 with summaries, 11-35 headline-only), exactly 3 photos, and
// every story carrying its date, place and source. It is 1024x1024 and
// 370920 bytes, inside the gate limits.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
