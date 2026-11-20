[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/vhigor/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/vhigor/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

# The Daily Globe — 20 November 2026

One dense image summing up the world news of Friday 20 November 2026,
drawn as a newspaper front page — **50 sourced stories**, a **UTC timeline**
of the day, and a visible **date check**:

- **Global sell-off deepens** — nearly $9 trillion wiped off world stocks
  since August; Taiwan's 17% weekly plunge is its biggest since the early
  1990s, and the VIX hits 30 on Friday, its highest since late March.
- **Trump holds White House press conference** — back from a four-day Asia
  trip and meetings with Xi and Putin in Shenzhen.
- **Senate blocks Iran measure 51–48** — Thursday's vote, the first since
  the midterms, defeats the House-passed war-powers resolution.
- **Anthropic falls 9.5% after its record IPO** — shares drop to ~$88 from
  Thursday's $97.17 close; underwriters take their full option, lifting the
  total raised to ~$93.5bn, the largest IPO on record.
- **GTA VI: ~$2.36bn in first-day sales** — Sensor Tower estimates 24.58
  million copies in roughly 24 hours; Take-Two has released no official
  numbers.
- **Alcaraz beats Cobolli 6–4, 6–1** — in 65 minutes in Turin, a day after
  a hamstring MRI; he faces Ben Shelton in Saturday's semi-final.

Plus 44 more, across war, diplomacy, U.S. politics, markets, climate,
science, sport and culture — every story numbered and sourced on the page.

## Run

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies the finished front page to
`/output/entry.png`, deterministically, and verifies the copy by size, sha256
and PNG signature. `tools/render.mjs` draws `src/frontpage.html` at 1024×1024
with headless Chromium and refuses to save a page that overflows the frame.

## Sources

Reuters, AP, BBC, NPR, NYT, WSJ, Axios, CNBC, Sky News, Euronews, Guardian,
UN, IAEA, IMF, NASA — all stories dated 20 November 2026, researched
21 November 2026.

## Verification

Every headline on the page was checked against the day's reporting before it
went in. The load-bearing figures were re-checked live on 21 November 2026:

- The market rout (Reuters): nearly $9tn since August, Taiwan −17% for the
  week, VIX 30 on Friday — confirmed.
- Anthropic (TechXplore and others): −9.5% in early Friday trading to ~$88,
  from a $97.17 close, above the $83 IPO price; underwriters' full option
  lifts the total to ~$93.5bn — confirmed.
- Senate Iran vote: 51–48 against, Thursday 19 November (Senate floor record
  and Reuters) — the item says so on the page; it is a Thursday event first
  reported in Friday's digests, which the competition's rules allow.
- GTA VI (Polygon / Sensor Tower): 24.58m copies, ~$2.36bn, estimates only,
  Take-Two silent — confirmed, and worded as estimates on the page.
- Alcaraz 6–4, 6–1 in 65 minutes, group 3–0, Shelton next (AP) — confirmed.
- Texans 26–3 over the Colts, Stroud 3 TDs, Thursday night (AP) — confirmed;
  the item says Thursday night on the page.

Two date traps from the research brief were kept out of the page: the
BepiColombo Mercury orbit insertion is on **21 Nov**, so the item says the
engine fires on 21 Nov; and only the **20 Nov** Anthropic follow-up (the fall
and the underwriters' option) is used, not the 19 Nov debut.

## Stories included (50)

Lead: global market rout. War & Security: Kyiv strikes, Poland airspace,
Estonia border, Kerch Bridge, Houthi Riyadh tower, Hormuz tankers, Gaza
Yellow Line, Iraq militia stronghold, UK offensive cyber, US–Venezuela deal.
Politics: Trump press conference, Iran decision, Senate 51–48, Mossad chief,
data-centre tax, Pete Rose pardon, USDA emails ruling, Mamdani/Rikers,
energy permitting 62–33, UK–EU youth deal, Berlin talks. Markets: Asia slide,
Anthropic, dollar, gold, oil, IMF debt, Brazil intervention, IEA, Kenya
minerals. World: COP31 draft, WFP outlook, UNICEF Ukraine, Fiji/Tonga
drought, LA storm, South Africa killings, Nigeria suicide law, Texas
execution, pulp mill blast, youth strike. Science, sport & culture:
BepiColombo, Voyager 1, GTA VI, Fiona the hippo, Depardieu, Texans–Colts,
Nacua surgery, Daniel Jones release, Alcaraz–Cobolli.

## Stories dropped (from the 65 in the research brief)

- National cyber director appointment, Nvidia subpoena, Pacific deep-sea
  mining lease, Kushner NATO-for-territory discussion, House Signal-probe —
  secondary or background items; the page had 50 slots and these lost out.
- RAF Fairford trial date, Haiti raid, Sudan drone strike, Pakistan raids,
  Senegal boat sinking, IAEA North Korea enrichment — real 20 Nov stories
  cut for space in the War & Security column.
- Japan inflation — overlaps the dollar item in Markets.
- Kenya Ebola discharge — the discharge was 11 November, not a 20 Nov event.
- South Korea exam-cheating arrests — headline-only verification, cut.
- Susana Baca singing to the pope — headline-only verification, cut.

Referral code: `p26b6feq`
