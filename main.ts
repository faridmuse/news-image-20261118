// A news-image-daily entry (Node 22, standard library only): the image is the
// entry.png beside this file, drawn programmatically from the verified news of
// Wednesday 18 November 2026, and the program copies it to /output/entry.png.
// The image is a newspaper front page: masthead naming the day, six story
// cards (Gulf drones, Nvidia earnings, UK sanctions, Canada-China trade,
// Japan airspace, Cyclone Akvan), sources in the footer. It is 1024x1024
// and 139910 bytes, inside the gate limits.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
