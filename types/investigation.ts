import type { CandidateStormEvent } from "@/types/weather";
export type InvestigationSource =
  | "manual"
  | "companycam"
  | "clickup"
  | "eagleview";

export type InvestigationStatus =
  | "draft"
  | "property-located"
  | "weather-reviewed"
  | "inspection-ready"
  | "completed";

export interface Investigation {
  
  candidateStorms?: CandidateStormEvent[];
  
    id: string;

  source: InvestigationSource;

  status: InvestigationStatus;

  propertyAddress: string;

  formattedAddress?: string;

  latitude?: number;

  longitude?: number;

  createdAt: string;

  updatedAt: string;
}