import { sdk } from "@/lib/Config";
import { cache } from "react";
import { HttpTypes } from "@medusajs/types";

//TODO pribaci sa getregions na sdk-listRegions vjv
export const getRegions = async () => {
  const res = await fetch(`http://localhost:9000/store/regions`, {
    credentials: "include",
    headers: {
      "x-publishable-api-key":
        process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY || "temp",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch regions");
  }

  const { regions } = await res.json();
  return regions;
};

export const getSupportedCountries = async () => {
  try {
    const dataRegions = await getRegions();
    return dataRegions[0]?.countries || [];
  } catch (err) {
    console.error("Error fetching regions:", err);
    return [];
  }
};

export const listRegions = cache(async function () {
  return sdk.store.region
    .list({}, { next: { tags: ["regions"] } })
    .then(({ regions }) => regions)
    .catch((error) => console.error("Error listing regions:", error));
});

// export const retrieveRegion = cache(async function (id: string) {
//   return sdk.store.region
//     .retrieve(id, {}, { next: { tags: ["regions"] } })
//     .then(({ region }) => region)
//     .catch((error) => console.error("Error retrieving regions:", error));
// });

const regionMap = new Map<string, HttpTypes.StoreRegion>();

export const getRegion = cache(async function (countryCode: string) {
  try {
    if (regionMap.has(countryCode)) {
      return regionMap.get(countryCode);
    }

    const regions = await listRegions();

    if (!regions) {
      return null;
    }

    regions.forEach((region) => {
      region.countries?.forEach((c) => {
        regionMap.set(c?.iso_2 ?? "", region);
      });
    });

    const region = countryCode
      ? regionMap.get(countryCode)
      : regionMap.get("us");

    return region;
  } catch (e: any) {
    return null;
  }
});
