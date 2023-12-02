import { Label } from "@/components/typography";
import { BakaIcon, BakaSideNavigation, BakaSideNavigationItem } from "baka-ui";
import { allDocs, Docs } from "contentlayer/generated";

export const Sidenav = () => {
  const docs = allDocs;
  const groups = docs
    .sort((a: Docs, b: Docs) => (a.position ?? 0) - (b.position ?? 0))
    .reduce((acc, doc) => {
      if (doc.group) {
        if (!acc[doc.group]) {
          acc[doc.group] = [];
        }
        acc[doc.group].push(doc);
      } else {
        acc[""] = acc[""] || [];
        acc[""].push(doc);
      }
      return acc;
    }, {} as Record<string, Docs[]>);

  return (
    <BakaSideNavigation className="w-[100%]">
      {Object.keys(groups).map((group) => {
        return (
          <>
            {group && (
              <BakaSideNavigationItem readOnly>
                <Label>{group}</Label>
                {/* {groups[group]?.length > 0 && <BakaIcon>arrow_drop_down</BakaIcon>} */}
              </BakaSideNavigationItem>
            )}
            {groups[group].map((doc) => {
              return (
                <BakaSideNavigationItem key={doc.title}>
                  {group && <BakaIcon />}
                  <Label>{doc.title}</Label>
                </BakaSideNavigationItem>
              );
            })}
          </>
        );
      })}
    </BakaSideNavigation>
  );
};
