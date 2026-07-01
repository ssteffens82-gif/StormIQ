export type StormEventType = "hail" | "wind" | "tornado" | "unknown";

export interface CandidateStormEvent {
  id: string;
  type: StormEventType;
  date: string;
  title: string;
  distanceMiles?: number;
  hailSizeInches?: number;
  windSpeedMph?: number;
  source: "mesonet";
  summary: string;
}