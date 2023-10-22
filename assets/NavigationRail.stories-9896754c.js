import{j as a}from"./jsx-runtime-ed146b25.js";import{I as h,k as l,R as e,$ as t,w as B}from"./baka-ui-74a68acc.js";import{u as m}from"./index-09fac16e.js";import"./index-c6dae603.js";function r(i){const n=Object.assign({h2:"h2",p:"p",code:"code",h3:"h3",pre:"pre",h4:"h4",hr:"hr",ul:"ul",li:"li"},m(),i.components);return a.jsxs(a.Fragment,{children:[a.jsx(n.h2,{id:"navigationrail",children:"NavigationRail"}),`
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
`,a.jsx(n.p,{children:"This will render a basic NavigationRail with custom buttons or icons in the top section and selectable items in the main section."})]})}function g(i={}){const{wrapper:n}=Object.assign({},m(),i.components);return n?a.jsx(n,Object.assign({},i,{children:a.jsx(r,i)})):r(i)}const x={title:"Material You/Primitives/Navigation Rail",parameters:{layout:"fullscreen",docs:{page:g}},tags:["autodocs"],argTypes:{}},o={args:{labels:!0,align:"top"},argTypes:{labels:{control:"boolean"},align:{control:"radio",options:["top","center","bottom"]}},render:i=>a.jsxs(h,{style:{height:"calc(100vh - 100px)"},children:[a.jsxs("div",{style:{display:"flex",gap:4,flexDirection:"column",alignItems:"center",justifyContent:"stretch"},children:[a.jsx(l,{variant:"icon",children:a.jsx(e,{children:"menu"})}),a.jsx(l,{variant:["fab","tertiary"],children:a.jsx(e,{children:"mode_edit"})})]}),a.jsxs("div",{style:i.align==="center"?{margin:"auto"}:i.align==="bottom"?{marginTop:"auto"}:{},children:[a.jsxs(t,{selected:!0,children:[a.jsx(e,{variant:"filled",children:"fiber_manual_record"}),i.labels?a.jsx(B,{children:"BakaLabel"}):null]}),a.jsx(t,{children:a.jsx(e,{variant:"filled",children:"fiber_manual_record"})}),a.jsx(t,{children:a.jsx(e,{variant:"filled",children:"fiber_manual_record"})}),a.jsx(t,{children:a.jsx(e,{variant:"filled",children:"fiber_manual_record"})})]})]})};var s,c,d;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const I=["Basic"];export{o as Basic,I as __namedExportsOrder,x as default};
//# sourceMappingURL=NavigationRail.stories-9896754c.js.map
