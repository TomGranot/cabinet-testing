# Cabinet Demo Walkthrough
### Brought to you by [Comparti](https://comparti.co)

---

## The Setup

> "Every time you start a new AI session, it forgets everything. You re-explain your business, re-paste your context, re-run your research. It's groundhog day, every single day. Today I'm going to show you what it looks like to break out of that loop — using Cabinet."

---

## What This Shows

**Use case:** You're running a B2B SaaS. You want to track competitors, generate weekly content, and keep your team aligned — all with AI.

**The comparison:**
- **Left screen** — Doing it without Cabinet (vanilla Claude Code, plain files)
- **Right screen** — Doing it with Cabinet (AI agents with persistent memory)

---

## Act 1 — Without Cabinet

> "Let's start on the left. This is how most people use AI today."

**Show:** `without-cabinet/` folder

**Walk through:**
1. Open `without-cabinet/session-1-research.md`
   - You asked Claude to research competitors. It did. Great output.
   - You saved it manually. Manually. To a random folder.
2. Open `without-cabinet/session-2-content.md`
   - New session. New Claude. Paste in the competitor research again.
   - Ask for a blog post. It writes one. You save it manually. Again.
3. Open `without-cabinet/session-3-repeat.md`
   - Third session. Same competitor context. Pasted again.
   - You ask for a newsletter. It doesn't know about last week's blog post.

> "See the pattern? Every session is an island. The AI is smart — but it has amnesia. And YOU become the memory layer. That's not leverage."

**Point out the pain:**
- You're the one remembering what was done
- No compound effect — each session starts at zero
- Manual file management across folders
- No scheduled work, no proactive updates

---

## Act 2 — With Cabinet

> "Now let's look at the right screen. Same goal. Same AI. Completely different outcome."

**Show:** `with-cabinet/` folder

**Walk through:**
1. Open `with-cabinet/knowledge/competitors.md`
   - This wasn't written by you. It was written by the Research Agent and it **updates automatically** on a schedule.
   - It knows about the last 3 updates. It has a changelog.
2. Open `with-cabinet/knowledge/content-log.md`
   - Every blog post, tweet, and newsletter — logged here automatically.
   - The Content Agent reads this before writing anything new so it never repeats itself.
3. Open `with-cabinet/agents/research-agent.md`
   - This is the Research Agent's config. It knows your product, your competitors, your ICP.
   - It runs on a cron schedule. You don't open it. It just works.
4. Open `with-cabinet/agents/content-agent.md`
   - This agent reads the competitor file and the content log before producing anything.
   - It compounds. Every piece of content makes the next one smarter.

> "The AI isn't starting from scratch. It's building on everything that came before. That's the difference between a tool and a team."

---

## Act 3 — The Value Comparison

| | Without Cabinet | With Cabinet |
|---|---|---|
| Context per session | You paste it manually | Always available |
| Memory between sessions | None | Persistent, growing |
| Scheduled work | Manual | Cron-based agents |
| Content awareness | Starts fresh | Reads prior work |
| Effort to maintain | High (you are the system) | Low (agents are the system) |
| Compound value over time | Flat | Exponential |

> "Without Cabinet, you are the glue. With Cabinet, the system holds itself together — and gets smarter every day."

---

## Closing Line

> "Cabinet is free, open-source, and built on plain markdown files. No vendor lock-in. No database. Just your knowledge, your agents, your AI team."

> "This breakdown was brought to you by Comparti — we help you find the best AI tools for your workflow. Check them out at comparti.co."

---

## Presentation Checklist

- [ ] Open two Claude Code windows (or two tmux panes)
- [ ] Left pane: `without-cabinet/` folder open
- [ ] Right pane: `with-cabinet/` folder open
- [ ] Walk Act 1 on the left, Act 2 on the right
- [ ] Use the Act 3 comparison table as the closing summary
- [ ] End with Cabinet website: runcabinet.com
