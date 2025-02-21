export const getProducts = async (limit?: number, offset?: number) => {
  const url = new URL("http://localhost:9000/store/products");

  if (limit) url.searchParams.append("limit", limit.toString());
  if (offset) url.searchParams.append("offset", offset.toString());

  const res = await fetch(url.toString(), {
    credentials: "include",
    headers: {
      "x-publishable-api-key":
        process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY || "temp",
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch products. Status: ${res.status}`);
  }
  const data = await res.json();
  return data;
};
