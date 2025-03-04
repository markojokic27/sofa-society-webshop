"use client";

// External packages
import { useRouter, useSearchParams } from "next/navigation";
import { twMerge } from "tailwind-merge";

export const ProductsPagination: React.FC<
  React.ComponentPropsWithoutRef<"div"> & {
    pagesNumber: number;
  }
> = ({ pagesNumber, ...rest }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const activePage = searchParams.get("page") || "1";

  const handlePageChange = (page: number) => {
    if (page.toString() === activePage) return;
    params.set("page", page.toString());
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex justify-center gap-3" {...rest}>
      {Array.from({ length: pagesNumber }, (_, i) => (
        <button
          onClick={() => handlePageChange(i + 1)}
          key={i}
          className={twMerge(
            i + 1 === Number(activePage) &&
              "text-grayscale-300 hover:cursor-default",
            "text-md",
          )}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};
