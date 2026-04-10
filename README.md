# Cabinet Testing

This repository is a compact side-by-side comparison of the same workflow in two setups:

- `without-cabinet/`: isolated AI sessions with manual context-pasting and no shared memory
- `with-cabinet/`: persistent markdown knowledge files plus agents that build on prior work

It is designed to make one idea obvious: the quality of the AI matters, but the quality of the system around it matters even more.

## What's Inside

### `without-cabinet/`

Three standalone sessions show the typical failure mode of session-based AI workflows:

- research is created once and manually saved elsewhere
- context has to be re-pasted into every new session
- content starts to overlap because prior outputs are not part of the working memory

Files:

- `session-1-research.md`
- `session-2-content.md`
- `session-3-repeat.md`

### `with-cabinet/`

The same workflow is modeled with persistent files and purpose-built agents:

- `knowledge/competitors.md` acts as the living source of truth for competitive intelligence
- `knowledge/content-log.md` records what has already been published so the system can avoid repetition
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

There is nothing to install. This is a documentation-first repo.

1. Read the three files in `without-cabinet/` from top to bottom.
2. Read the knowledge and agent files in `with-cabinet/`.
3. Compare the two approaches using [`VALUE-COMPARISON.md`](./VALUE-COMPARISON.md).
4. Use [`DEMO.md`](./DEMO.md) if you want a tighter walkthrough order.

## Key Takeaway

The difference is not that one AI model is smarter than another.

The difference is that one setup resets every time, while the other keeps state, compounds knowledge, and creates leverage over time.

## Credits

Created by [Comparti](https://comparti.co).

Cabinet is available at [runcabinet.com](https://runcabinet.com).

## License

MIT
