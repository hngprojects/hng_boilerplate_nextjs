import { cn } from "~/lib/utils";

type ProductHighlightTermProperties = {
  searchTerm: string;
  title: string;
};

export function ProductHighlightTerm({
  title,
  searchTerm = "",
}: ProductHighlightTermProperties) {
  return (
    <>
      {searchTerm.length > 1 ? (
        <span
          className={cn(
            "",
            searchTerm.length > 2 ? "w-[50px] overflow-x-auto" : "",
          )}
          dangerouslySetInnerHTML={{
            __html: title.replaceAll(
              new RegExp(`(${searchTerm})`, "gi"),
              (match, group) =>
                `<span  style="color: black; background-color: ${
                  group.toLowerCase() === searchTerm.toLowerCase()
                    ? "yellow"
                    : "inherit"
                }">${match}</span>`,
            ),
          }}
        />
      ) : (
        <span className="">{title}</span>
      )}
    </>
  );
}
