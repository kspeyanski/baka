import{j as a}from"./jsx-runtime-9c4ae004.js";import{B as r}from"./button-2adf44ad.js";import{B as e}from"./icon-e14e50b0.js";import{B as u}from"./label-b91e98f5.js";import{c as B}from"./variant-class-names-08f4b07b.js";import{s as v}from"./state-attributes-f1b2bd32.js";import{u as g}from"./index-2ef8b458.js";import"./index-1b03fe98.js";const k=i=>{const{as:n="div",...l}=i;return a.jsx(n,{...l,className:B("baka-navigation-rail",i.className)})},t=i=>{const{as:n="div",selected:l,...h}=i;return a.jsx(n,{...h,className:B("baka-navigation-rail-item",i.className,v(i))})};function s(i){const n=Object.assign({h2:"h2",p:"p",code:"code",h3:"h3",pre:"pre",h4:"h4",hr:"hr",ul:"ul",li:"li"},g(),i.components);return a.jsxs(a.Fragment,{children:[a.jsx(n.h2,{id:"navigationrail",children:"NavigationRail"}),`
`,a.jsxs(n.p,{children:["The ",a.jsx(n.code,{children:"NavigationRail"})," component is used to create a vertical navigation rail typically placed on the side of a web page or app. It provides navigation links and can include icons and labels to guide users through different sections or views."]}),`
`,a.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,a.jsx(n.pre,{children:a.jsx(n.code,{className:"language-jsx",children:`import { BakaNavigationRail, BakaNavigationRailItem, BakaIcon, BakaLabel } from "baka-ui";

// Inside your component
<BakaNavigationRail>
  {/* Top section */}
  <div
    style={{
      display: "flex",
      gap: 4,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "stretch",
    }}
  >
    {/* Custom buttons or icons */}
    <BakaButton variant="icon">
      <BakaIcon>menu</BakaIcon>
    </BakaButton>
    <BakaButton variant={["fab", "tertiary"]}>
      <BakaIcon>mode_edit</BakaIcon>
    </BakaButton>
  </div>

  {/* NavigationRailItems */}
  <div>
    <BakaNavigationRailItem selected={true}>
      <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
      <BakaLabel>BakaLabel</BakaLabel>
    </BakaNavigationRailItem>
    {/* Add more NavigationRailItems as needed */}
  </div>
</BakaNavigationRail>;
`})}),`
`,a.jsx(n.h3,{id:"props",children:"Props"}),`
`,a.jsx(n.h4,{id:"none-for-navigationrail",children:"None for NavigationRail"}),`
`,a.jsx(n.hr,{}),`
`,a.jsx(n.h3,{id:"navigationrailitem",children:"NavigationRailItem"}),`
`,a.jsxs(n.p,{children:["The ",a.jsx(n.code,{children:"NavigationRailItem"})," component represents an individual item within the ",a.jsx(n.code,{children:"NavigationRail"}),"."]}),`
`,a.jsx(n.h4,{id:"props-1",children:"Props"}),`
`,a.jsx(n.h4,{id:"selected-optional",children:"selected (optional)"}),`
`,a.jsxs(n.ul,{children:[`
`,a.jsxs(n.li,{children:["Type: ",a.jsx(n.code,{children:"boolean"})]}),`
`,a.jsxs(n.li,{children:["Default: ",a.jsx(n.code,{children:"false"})]}),`
`]}),`
`,a.jsxs(n.p,{children:["Indicates whether this item is selected. When set to ",a.jsx(n.code,{children:"true"}),", it highlights the item as the currently active or selected option."]}),`
`,a.jsx(n.h3,{id:"examples",children:"Examples"}),`
`,a.jsx(n.h4,{id:"basic-navigationrail",children:"Basic NavigationRail"}),`
`,a.jsx(n.pre,{children:a.jsx(n.code,{className:"language-jsx",children:`import { BakaNavigationRail, BakaNavigationRailItem, BakaIcon, BakaLabel } from "baka-ui";

<BakaNavigationRail>
  <div
    style={{
      display: "flex",
      gap: 4,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "stretch",
    }}
  >
    <BakaButton variant="icon">
      <BakaIcon>menu</BakaIcon>
    </BakaButton>
    <BakaButton variant={["fab", "tertiary"]}>
      <BakaIcon>mode_edit</BakaIcon>
    </BakaButton>
  </div>
  <div>
    <BakaNavigationRailItem selected={true}>
      <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
      <BakaLabel>Home</BakaLabel>
    </BakaNavigationRailItem>
    <BakaNavigationRailItem>
      <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
      <BakaLabel>Profile</BakaLabel>
    </BakaNavigationRailItem>
    {/* Add more NavigationRailItems as needed */}
  </div>
</BakaNavigationRail>;
`})}),`
`,a.jsx(n.p,{children:"This will render a basic NavigationRail with custom buttons or icons in the top section and selectable items in the main section."})]})}function p(i={}){const{wrapper:n}=Object.assign({},g(),i.components);return n?a.jsx(n,Object.assign({},i,{children:a.jsx(s,i)})):s(i)}const _={title:"Material You/Primitives/Navigation Rail",parameters:{layout:"fullscreen",docs:{page:p}},tags:["autodocs"],argTypes:{}},o={args:{labels:!0,align:"top"},argTypes:{labels:{control:"boolean"},align:{control:"radio",options:["top","center","bottom"]}},render:i=>a.jsxs(k,{style:{height:"calc(100vh - 100px)"},children:[a.jsxs("div",{style:{display:"flex",gap:4,flexDirection:"column",alignItems:"center",justifyContent:"stretch"},children:[a.jsx(r,{variant:"icon",children:a.jsx(e,{children:"menu"})}),a.jsx(r,{variant:["fab","tertiary"],children:a.jsx(e,{children:"mode_edit"})})]}),a.jsxs("div",{style:i.align==="center"?{margin:"auto"}:i.align==="bottom"?{marginTop:"auto"}:{},children:[a.jsxs(t,{selected:!0,children:[a.jsx(e,{variant:"filled",children:"fiber_manual_record"}),i.labels?a.jsx(u,{children:"BakaLabel"}):null]}),a.jsx(t,{children:a.jsx(e,{variant:"filled",children:"fiber_manual_record"})}),a.jsx(t,{children:a.jsx(e,{variant:"filled",children:"fiber_manual_record"})}),a.jsx(t,{children:a.jsx(e,{variant:"filled",children:"fiber_manual_record"})})]})]})};var c,d,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    labels: true,
    align: "top"
  },
  argTypes: {
    labels: {
      control: "boolean"
    },
    align: {
      control: "radio",
      options: ["top", "center", "bottom"]
    }
  },
  render: args => {
    return <BakaNavigationRail style={{
      height: 'calc(100vh - 100px)'
    }}>
        <div style={{
        display: "flex",
        gap: 4,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "stretch"
      }}>
          <BakaButton variant="icon">
            <BakaIcon>menu</BakaIcon>
          </BakaButton>
          {<BakaButton variant={["fab", "tertiary"]}>
              <BakaIcon>mode_edit</BakaIcon>
            </BakaButton>}
        </div>
        {/* <div style={{ margin: "auto" }}> */}
        <div style={args.align === "center" ? {
        margin: "auto"
      } : args.align === "bottom" ? {
        marginTop: "auto"
      } : {}}>
          <BakaNavigationRailItem selected={true}>
            <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
            {args.labels ? <BakaLabel>BakaLabel</BakaLabel> : null}
          </BakaNavigationRailItem>
          <BakaNavigationRailItem>
            <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
          </BakaNavigationRailItem>
          <BakaNavigationRailItem>
            <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
          </BakaNavigationRailItem>
          <BakaNavigationRailItem>
            <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
          </BakaNavigationRailItem>
        </div>
      </BakaNavigationRail>;
  }
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const L=["Basic"];export{o as Basic,L as __namedExportsOrder,_ as default};
//# sourceMappingURL=NavigationRail.stories-560fbe7e.js.map
