import type { PropertyLocation } from "@/types/property";

export async function geocodeAddress(
  address: string
): Promise<PropertyLocation> {
  const response = await fetch("/api/geocode", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ address }),
  });

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.error ?? "Unable to geocode address.");
  }

  return response.json();
}