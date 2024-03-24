import { Docs } from "contentlayer/generated";
import { SidenavSubcategoryClient, SidenavSubcategoryClientProps } from "./sidenav-subcategory.client";

export type SidenavSubcategoryProps = {
  data: Array<{
    title: string;
    icon?: string;
    docs: Pick<Docs, "url" | "title">[];
  }>;
} & SidenavSubcategoryClientProps;

export const SidenavSubcategory = (props: SidenavSubcategoryProps) => {
  return <SidenavSubcategoryClient {...props} />;
};
