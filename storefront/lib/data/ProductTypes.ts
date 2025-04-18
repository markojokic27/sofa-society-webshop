export const getProductTypes = async () => {
  const res = await fetch(`http://localhost:9000/store/custom/product-types`, {
    credentials: "include",
    headers: {
      "x-publishable-api-key":
        process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY || "temp",
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch product types. Status: ${res.status}`);
  }

  const data = await res.json();
  return data.product_types;
};


