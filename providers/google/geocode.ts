import type { PropertyLocation } from "@/types/property";

export async function geocodeAddress(
  address: string
): Promise<PropertyLocation> {
  // Temporary v0.1 stub.
  // Next step: replace this with the real Google Maps Geocoding API call.
  return {
    formattedAddress: address,
    latitude: 27.7705,
    longitude: -82.6793,
  };
}