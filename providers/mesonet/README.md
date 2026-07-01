# Mesonet Provider

StormIQ's first weather provider is based on the existing M&S Claim Intelligence Python weather engine.

Initial Python source:

- `ms_storm_history_tool.py`

Core functions to wrap:

- `fetch_sbw_warnings(cfg)`
- `fetch_lsr_events(cfg)`
- `build_candidate_dates(warnings, lsrs)`

StormIQ expects the Mesonet provider to return `CandidateStormEvent[]`.

The provider should answer one question:

> What candidate storm events affected this property during the selected date range?