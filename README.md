# Cabinet Testing

This repository is a compact side-by-side comparison of the same workflow in two setups:

- `without-cabinet/`: isolated AI sessions, manually saved artifacts, and stale tracking files
- `with-cabinet/`: a richer Cabinet-style workspace with persistent knowledge, agents, sheets, briefs, visuals, and an embedded app

It is designed to make one idea obvious: the quality of the AI matters, but the quality of the system around it matters even more.

## What's Inside

### `without-cabinet/`

This side now shows both the sessions and the scattered artifacts they leave behind:

- research is created once and manually saved elsewhere
- context has to be re-pasted into every new session
- content starts to overlap because prior outputs are not part of the working memory
- tracking exists, but it is partial and easy to forget to update

Files:

- `index.md`
- `session-1-research.md`
- `session-2-content.md`
- `session-3-repeat.md`
- `research/competitors-jan-v2.md`
- `content/blog-post-linear-final.md`
- `content/content-tracker.csv`
- `newsletter/april-draft-final-FINAL.md`

### `with-cabinet/`

The same workflow is modeled as a richer, multi-format workspace:

- `index.md` provides a clear tour of the system
- `knowledge/competitors.md` acts as the living source of truth for competitive intelligence
- `knowledge/content-log.md` records what has already been published so the system can avoid repetition
- `sheets/competitor-watchlist.csv` turns changes into an operating watchlist
- `sheets/content-pipeline.csv` keeps planned outputs visible and structured
- `briefs/weekly-market-brief.md` shows a reusable deliverable generated from persistent context
- `visuals/system-map.svg` makes the system legible at a glance
- `apps/market-command-center/` demonstrates Cabinet's embedded-app model using plain HTML/CSS/JS files
- `agents/research-agent.md` defines the recurring competitor-research job
- `agents/content-agent.md` defines the content workflow that reads existing knowledge before writing anything new

### Root Docs

- [`DEMO.md`](./DEMO.md): guided walkthrough of the comparison
- [`VALUE-COMPARISON.md`](./VALUE-COMPARISON.md): concise side-by-side summary of the operational difference
- [`CABINET-MANIFESTO.md`](./CABINET-MANIFESTO.md): distilled product philosophy based on founder feedback

## Why This Repo Exists

Most AI workflows fail quietly in the handoff between sessions.

The model may produce strong output, but the surrounding system still depends on a human to:

- remember what happened last week
- find the right files
- re-explain the same business context
- keep content from repeating itself

This repository turns that abstract problem into something concrete and easy to inspect.

## How To Use It

There is nothing to install. This is a file-based demo repo designed to be especially clear when opened in Cabinet.

1. Start with `without-cabinet/index.md` and click through the fragmented artifacts.
2. Move to `with-cabinet/index.md` and open the knowledge files, sheets, brief, visual, and app.
3. Compare the two approaches using [`VALUE-COMPARISON.md`](./VALUE-COMPARISON.md).
4. Use [`DEMO.md`](./DEMO.md) for a presenter-friendly walkthrough order.

## Key Takeaway

The difference is not that one AI model is smarter than another.

The difference is that one setup resets every time, while the other keeps state, compounds knowledge, and creates leverage over time.

## Credits

Created by [Comparti](https://comparti.co).

Cabinet is available at [runcabinet.com](https://runcabinet.com).

## License

MIT
