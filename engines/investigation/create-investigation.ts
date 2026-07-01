import type { Investigation } from "@/types/investigation";
import { geocodeAddress } from "@/providers/google/geocode";
import { mesonetStormProvider } from "@/providers/mesonet/storms";

export async function createInvestigationFromManualEntry(input: {
  propertyAddress: string;
  startDate: string;
  endDate: string;
}): Promise<Investigation> {
  const propertyLocation = await geocodeAddress(input.propertyAddress);

  const candidateStorms = await mesonetStormProvider.findCandidateStorms({
    latitude: propertyLocation.latitude,
    longitude: propertyLocation.longitude,
    startDate: input.startDate,
    endDate: input.endDate,
  });

  console.log("Candidate storms:", candidateStorms);

  const now = new Date().toISOString();

  return {
    id: crypto.randomUUID(),
    source: "manual",
    status: "weather-reviewed",
    propertyAddress: input.propertyAddress,
    formattedAddress: propertyLocation.formattedAddress,
    latitude: propertyLocation.latitude,
    longitude: propertyLocation.longitude,
    candidateStorms,
    createdAt: now,
    updatedAt: now,
  };
}