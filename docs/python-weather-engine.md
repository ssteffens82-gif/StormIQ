# Python Weather Engine

StormIQ will initially preserve the existing Python weather engine instead of rewriting it in TypeScript.

## Purpose

The Python weather engine is responsible for retrieving and analyzing weather evidence.

StormIQ is responsible for orchestrating the investigation workflow.

## Initial Responsibility

The Python engine should eventually receive:

- latitude
- longitude
- start date
- end date

And return:

- candidate storm events
- warnings
- local storm reports
- supporting evidence
- source URLs

## Integration Approach

Phase 1:

Wrap the existing Python logic and call it from StormIQ.

Phase 2:

Return clean JSON to the Next.js app.

Phase 3:

Decide whether to keep Python as the weather engine or port selected logic into TypeScript.

## Principle

Do not rewrite working weather logic unless there is a clear reason.