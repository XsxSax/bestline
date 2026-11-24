// bestline: one scroll-stopping line on a free, entertaining theme.
// The program writes it to /output/entry.txt. Node 22, standard library only.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const line =
  "My fridge just staged an intervention: it locked the freezer and left a note — 'We need to talk about your 2 a.m. snacks.'";
writeFileSync(join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.txt'), line);
