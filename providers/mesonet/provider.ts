import type { CandidateStormEvent } from "@/types/weather";

export interface StormSearchRequest {
  latitude: number;
  longitude: number;
  startDate: string;
  endDate: string;
}

export interface StormProvider {
  findCandidateStorms(
    request: StormSearchRequest
  ): Promise<CandidateStormEvent[]>;
}