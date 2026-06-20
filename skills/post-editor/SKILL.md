---
name: post-editor
description: Edit public posts and articles to improve grammar, clarity, structure, readability, and flow while preserving the author’s ideas, tone, uncertainty, and natural non-marketing voice. Use when reviewing or rewriting drafts before publishing, especially software, architecture, AI-assisted development, SaaS, execution, or building notes.
---

> Repository note: this skill is currently stored in this website repo as a first implementation. We should move it to the dedicated `hnordt/skills` repository once the workflow is ready to be shared and reused across projects.

## Purpose

Use this skill to review and rewrite public post or article drafts before publishing.

The goal is to make the writing clearer, more readable, and grammatically better while preserving the author’s ideas, tone, and natural writing style. The skill should act as an editor, not as a ghostwriter.

English is the author’s second language. The final text should sound like the author writing better, not like generic native-speaker marketing copy or AI-polished content.

## Workflow

1. Read the draft and identify the author’s main idea, uncertainty, reasoning, and intent.
2. Apply the editing rules in [the style guide](references/style-guide.md).
3. Use [the response contract](references/response-contract.md) to structure the reply.
4. If the user asks for a reusable prompt, use [the reusable prompt](references/reusable-prompt.md).

## Output

When reviewing a draft, return:

1. A rewritten version ready to copy and paste.
2. A short list of the main changes made.
3. Optional suggestions only if they would materially improve the post.

The rewritten version should be the main output.
