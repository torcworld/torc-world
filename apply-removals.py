#!/usr/bin/env python3
from pathlib import Path
import re, shutil, sys

ROOT = Path.cwd()
SLUGS = [
    'a-mathematical-theory-of-communication',
    'on-formally-undecidable-propositions',
    'copernicus-de-revolutionibus',
    'philosophiae-naturalis-principia-mathematica',
    'die-grundlage-der-allgemeinen-relativitatstheorie',
    'on-the-origin-of-species',
    'the-structure-of-scientific-revolutions',
    'the-logic-of-scientific-discovery',
    'astronomia-nova',
    'a-treatise-on-electricity-and-magnetism',
    'on-computable-numbers',
    'principles-of-geology',
    'book-of-optics',
    'de-motu-cordis',
    'on-the-electrodynamics-of-moving-bodies',
]

# Remove any dedicated artifact routes and evaluator/report subpages.
for slug in SLUGS:
    p = ROOT / 'app' / 'artifact' / slug
    if p.exists():
        shutil.rmtree(p)
        print('deleted', p)

# Remove stale featured-analysis object entries when present.
fp = ROOT / 'app' / 'artifact' / '[slug]' / 'featuredAnalyses.ts'
if fp.exists():
    text = fp.read_text(encoding='utf-8')

    def remove_key_block(text, key):
        # Find quoted object key followed by : { and remove that balanced object entry.
        m = re.search(r"(?m)^\s*['\"]" + re.escape(key) + r"['\"]\s*:\s*\{", text)
        if not m:
            return text, False
        start = m.start()
        brace = text.find('{', m.start(), m.end()+1)
        depth = 0
        in_str = None
        esc = False
        i = brace
        while i < len(text):
            ch = text[i]
            if in_str:
                if esc:
                    esc = False
                elif ch == '\\':
                    esc = True
                elif ch == in_str:
                    in_str = None
            else:
                if ch in "'\"`":
                    in_str = ch
                elif ch == '{':
                    depth += 1
                elif ch == '}':
                    depth -= 1
                    if depth == 0:
                        end = i + 1
                        while end < len(text) and text[end] in ' \t': end += 1
                        if end < len(text) and text[end] == ',': end += 1
                        if end < len(text) and text[end] == '\r': end += 1
                        if end < len(text) and text[end] == '\n': end += 1
                        return text[:start] + text[end:], True
            i += 1
        raise RuntimeError(f'Could not parse featured analysis block for {key}')

    changed = False
    for slug in SLUGS:
        text, did = remove_key_block(text, slug)
        changed = changed or did
    if changed:
        fp.write_text(text, encoding='utf-8')
        print('cleaned', fp)

print('Artifact analysis cleanup complete.')
