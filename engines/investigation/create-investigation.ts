import type { Investigation } from "@/types/investigation";
import { geocodeAddress } from "@/providers/google/geocode";

export async function createInvestigationFromManualEntry(input: {
  propertyAddress: string;
  startDate: string;
  endDate: string;
}): Promise<Investigation> {
  const propertyLocation = await geocodeAddress(input.propertyAddress);

  const now = new Date().toISOString();

  return {
    id: crypto.randomUUID(),
    source: "manual",
    status: "property-located",
    propertyAddress: input.propertyAddress,
    formattedAddress: propertyLocation.formattedAddress,
    latitude: propertyLocation.latitude,
    longitude: propertyLocation.longitude,
    createdAt: now,
    updatedAt: now,
  };
}