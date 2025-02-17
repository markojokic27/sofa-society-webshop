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
