import{j as a}from"./jsx-runtime-ed146b25.js";import{M as d,L as r,R as s,w as l,E as u}from"./baka-ui-cb88fe88.js";import{u as b}from"./index-09fac16e.js";import"./index-c6dae603.js";function c(n){const e=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",pre:"pre",h3:"h3",h4:"h4",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},b(),n.components);return a.jsxs(a.Fragment,{children:[a.jsx(e.h1,{id:"tabs",children:"Tabs"}),`
`,a.jsx(e.p,{children:"The TabGroup component is used to organize content into tabs, allowing users to switch between different sections of the interface."}),`
`,a.jsx(e.h2,{id:"installation",children:"Installation"}),`
`,a.jsxs(e.p,{children:["To use the TabGroup component in your project, make sure you have the ",a.jsx(e.code,{children:"baka-ui"})," package installed. You can install it using npm or yarn:"]}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-bash",children:`npm install baka-ui
`})}),`
`,a.jsx(e.p,{children:"or"}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-bash",children:`yarn add baka-ui
`})}),`
`,a.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,a.jsxs(e.p,{children:["Import the ",a.jsx(e.code,{children:"BakaTabGroup"})," and ",a.jsx(e.code,{children:"BakaTab"})," components from ",a.jsx(e.code,{children:"baka-ui"})," in your JavaScript or TypeScript file."]}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-jsx",children:`import { BakaTabGroup, BakaTab } from "baka-ui";
`})}),`
`,a.jsx(e.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-jsx",children:`<BakaTabGroup>
  <BakaTab selected={true}>Tab 1</BakaTab>
  <BakaTab>Tab 2</BakaTab>
  <BakaTab>Tab 3</BakaTab>
</BakaTabGroup>
`})}),`
`,a.jsx(e.h3,{id:"variants",children:"Variants"}),`
`,a.jsx(e.p,{children:"The TabGroup component supports different variants: default, overflow, and secondary."}),`
`,a.jsx(e.h4,{id:"default-variant",children:"Default Variant"}),`
`,a.jsx(e.p,{children:"The default variant is used for regular tab navigation."}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-jsx",children:`<BakaTabGroup>{/* Tabs go here */}</BakaTabGroup>
`})}),`
`,a.jsx(e.h4,{id:"overflow-variant",children:"Overflow Variant"}),`
`,a.jsx(e.p,{children:"The overflow variant is used when there are too many tabs to fit within the container, and it provides a way to scroll or navigate through the tabs."}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-jsx",children:`<BakaTabGroup variant={"overflow"}>{/* Tabs go here */}</BakaTabGroup>
`})}),`
`,a.jsx(e.h4,{id:"secondary-variant",children:"Secondary Variant"}),`
`,a.jsx(e.p,{children:"The secondary variant is used for secondary navigation, such as within a card or panel."}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-jsx",children:`<BakaTabGroup variant={"secondary"}>{/* Tabs go here */}</BakaTabGroup>
`})}),`
`,a.jsx(e.h3,{id:"states",children:"States"}),`
`,a.jsxs(e.p,{children:["The Tab component supports the ",a.jsx(e.code,{children:"selected"}),", ",a.jsx(e.code,{children:"hovered"}),", and ",a.jsx(e.code,{children:"disabled"})," states."]}),`
`,a.jsx(e.h4,{id:"selected",children:"Selected"}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-jsx",children:`<BakaTab selected={true}>Selected Tab</BakaTab>
`})}),`
`,a.jsx(e.h4,{id:"hovered",children:"Hovered"}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-jsx",children:`<BakaTab hovered={true}>Hovered Tab</BakaTab>
`})}),`
`,a.jsx(e.h4,{id:"disabled",children:"Disabled"}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-jsx",children:`<BakaTab disabled={true}>Disabled Tab</BakaTab>
`})}),`
`,a.jsx(e.h1,{id:"tab",children:"Tab"}),`
`,a.jsx(e.p,{children:"The Tab component represents an individual tab within a TabGroup."}),`
`,a.jsx(e.h2,{id:"usage-1",children:"Usage"}),`
`,a.jsx(e.p,{children:"The Tab component should be used within a TabGroup."}),`
`,a.jsx(e.h3,{id:"basic-usage-1",children:"Basic Usage"}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-jsx",children:`<BakaTab>Tab 1</BakaTab>
`})}),`
`,a.jsx(e.h3,{id:"states-1",children:"States"}),`
`,a.jsxs(e.p,{children:["The Tab component supports the ",a.jsx(e.code,{children:"selected"}),", ",a.jsx(e.code,{children:"hovered"}),", and ",a.jsx(e.code,{children:"disabled"})," states."]}),`
`,a.jsx(e.h4,{id:"selected-1",children:"Selected"}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-jsx",children:`<BakaTab selected={true}>Selected Tab</BakaTab>
`})}),`
`,a.jsx(e.h4,{id:"hovered-1",children:"Hovered"}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-jsx",children:`<BakaTab hovered={true}>Hovered Tab</BakaTab>
`})}),`
`,a.jsx(e.h4,{id:"disabled-1",children:"Disabled"}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-jsx",children:`<BakaTab disabled={true}>Disabled Tab</BakaTab>
`})}),`
`,a.jsx(e.h2,{id:"props-tab",children:"Props (Tab)"}),`
`,a.jsxs(e.table,{children:[a.jsx(e.thead,{children:a.jsxs(e.tr,{children:[a.jsx(e.th,{children:"Name"}),a.jsx(e.th,{children:"Type"}),a.jsx(e.th,{children:"Default"}),a.jsx(e.th,{children:"Description"})]})}),a.jsxs(e.tbody,{children:[a.jsxs(e.tr,{children:[a.jsx(e.td,{children:"selected"}),a.jsx(e.td,{children:"boolean"}),a.jsx(e.td,{children:"false"}),a.jsx(e.td,{children:"Indicates whether the tab is currently selected."})]}),a.jsxs(e.tr,{children:[a.jsx(e.td,{children:"hovered"}),a.jsx(e.td,{children:"boolean"}),a.jsx(e.td,{children:"false"}),a.jsx(e.td,{children:"Indicates whether the tab is being hovered over."})]}),a.jsxs(e.tr,{children:[a.jsx(e.td,{children:"disabled"}),a.jsx(e.td,{children:"boolean"}),a.jsx(e.td,{children:"false"}),a.jsx(e.td,{children:"Disables the tab, preventing user interaction."})]})]})]})]})}function j(n={}){const{wrapper:e}=Object.assign({},b(),n.components);return e?a.jsx(e,Object.assign({},n,{children:a.jsx(c,n)})):c(n)}const k={title:"Material You/Primitives/Tabs",component:n=>a.jsx(d,{...n}),render:n=>a.jsx(d,{...n}),parameters:{layout:"centered",docs:{page:j}},tags:["autodocs"]},i={args:{variant:"primary",overflow:!1,icons:!0,labels:!0},argTypes:{variant:{control:"radio",maps:{primary:"primary",secondary:"secondary"},options:["primary","secondary"]},icons:{control:"boolean"},labels:{control:"boolean"}},render:n=>a.jsxs(a.Fragment,{children:[a.jsxs(d,{style:{width:n.overflow?310:360},variant:[n.variant,n.overflow&&"overflow"],children:[a.jsxs(r,{selected:!0,children:[n.icons?a.jsx(s,{variant:"filled",children:"fiber_manual_record"}):null,a.jsx(l,{children:n.labels?"Tab":null})]}),a.jsxs(r,{children:[n.icons?a.jsx(s,{variant:"filled",children:"fiber_manual_record"}):null,a.jsx(l,{children:n.labels?"Tab":null})]}),a.jsxs(r,{children:[n.icons?a.jsx(s,{variant:"filled",children:"fiber_manual_record"}):null,a.jsx(l,{children:n.labels?"Tab":null})]}),n.overflow?a.jsxs(a.Fragment,{children:[a.jsxs(r,{children:[n.icons?a.jsx(s,{variant:"filled",children:"fiber_manual_record"}):null,a.jsx(l,{children:n.labels?"Tab":null})]}),a.jsxs(r,{children:[n.icons?a.jsx(s,{variant:"filled",children:"fiber_manual_record"}):null,a.jsx(l,{children:n.labels?"Tab":null})]}),a.jsxs(r,{children:[n.icons?a.jsx(s,{variant:"filled",children:"fiber_manual_record"}):null,a.jsx(l,{children:n.labels?"Tab":null})]})]}):null]}),a.jsx(u,{})]}),parameters:{docs:{storyDescription:"A basic tabs with title and description."}}};var o,t,h;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    overflow: false,
    icons: true,
    labels: true
  },
  argTypes: {
    variant: {
      control: "radio",
      maps: {
        primary: "primary",
        secondary: "secondary"
      },
      options: ["primary", "secondary"]
    },
    icons: {
      control: "boolean"
    },
    labels: {
      control: "boolean"
    }
  },
  render: args => {
    return <>
        <BakaTabGroup style={{
        width: args.overflow ? 310 : 360
      }} variant={[args.variant, args.overflow && "overflow"]}>
          <BakaTab selected={true}>
            {args.icons ? <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon> : null}
            <BakaLabel>{args.labels ? "Tab" : null}</BakaLabel>
          </BakaTab>
          <BakaTab>
            {args.icons ? <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon> : null}
            <BakaLabel>{args.labels ? "Tab" : null}</BakaLabel>
          </BakaTab>
          <BakaTab>
            {args.icons ? <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon> : null}
            <BakaLabel>{args.labels ? "Tab" : null}</BakaLabel>
          </BakaTab>
          {args.overflow ? <>
              <BakaTab>
                {args.icons ? <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon> : null}
                <BakaLabel>{args.labels ? "Tab" : null}</BakaLabel>
              </BakaTab>
              <BakaTab>
                {args.icons ? <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon> : null}
                <BakaLabel>{args.labels ? "Tab" : null}</BakaLabel>
              </BakaTab>
              <BakaTab>
                {args.icons ? <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon> : null}
                <BakaLabel>{args.labels ? "Tab" : null}</BakaLabel>
              </BakaTab>
            </> : null}
        </BakaTabGroup>
        <BakaDivider />
      </>;
  },
  parameters: {
    docs: {
      storyDescription: "A basic tabs with title and description."
    }
  }
}`,...(h=(t=i.parameters)==null?void 0:t.docs)==null?void 0:h.source}}};const B=["TabGroup"];export{i as TabGroup,B as __namedExportsOrder,k as default};
//# sourceMappingURL=Tabs.stories-8ce3491d.js.map
