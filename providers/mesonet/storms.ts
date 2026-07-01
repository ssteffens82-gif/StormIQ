import type { CandidateStormEvent } from "@/types/weather";
import type { StormProvider, StormSearchRequest } from "./provider";

export const mesonetStormProvider: StormProvider = {
  async findCandidateStorms(
    request: StormSearchRequest
  ): Promise<CandidateStormEvent[]> {
    // Temporary v0.1 stub.
    // Next step: replace this with real Mesonet API results.

    return [
      {
        id: "mesonet-demo-hail-001",
        type: "hail",
        date: request.endDate,
        title: "Candidate Hail Event",
        distanceMiles: 2.4,
        hailSizeInches: 1.0,
        source: "mesonet",
        summary:
          "Demo event returned from the Mesonet provider interface. Real Mesonet data will replace this next.",
      },
    ];
  },
};