import{j as a}from"./jsx-runtime-ed146b25.js";import{B as x,O as i,A as t,R as l,w as d,E as h}from"./baka-ui-cb88fe88.js";import{u as k}from"./index-09fac16e.js";import"./index-c6dae603.js";function s(n){const e=Object.assign({h2:"h2",p:"p",code:"code",h3:"h3",pre:"pre",h4:"h4",ul:"ul",li:"li"},k(),n.components);return a.jsxs(a.Fragment,{children:[a.jsx(e.h2,{id:"sidenavigation",children:"SideNavigation"}),`
`,a.jsxs(e.p,{children:["The ",a.jsx(e.code,{children:"SideNavigation"})," component is used to create a vertical navigation menu typically placed on the side of a web page or app. It helps users navigate through different sections or views."]}),`
`,a.jsx(e.h3,{id:"usage",children:"Usage"}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-jsx",children:`import {
  BakaSideNavigation,
  BakaSideNavigationItem,
  BakaIcon,
  BakaLabel,
  BakaText,
  BakaDivider,
} from "baka-ui";

// Inside your component
<BakaSideNavigation style={{ width: 300 }}>
  {/* Section header */}
  <div style={{ padding: "18px 16px" }}>
    <BakaText variant={"title-small"}>Title</BakaText>
  </div>

  {/* SideNavigation items */}
  <BakaSideNavigationItem selected={true}>
    <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
    <BakaLabel>BakaLabel</BakaLabel>
    <BakaText>100+</BakaText>
  </BakaSideNavigationItem>
  {/* Add more SideNavigationItems as needed */}

  {/* Divider */}
  <BakaDivider />

  {/* Section header */}
  <div style={{ padding: "18px 16px" }}>
    <BakaText variant={"title-small"}>Section header</BakaText>
  </div>

  {/* SideNavigation items */}
  <BakaSideNavigationItem>
    <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
    <BakaLabel>BakaLabel</BakaLabel>
    <BakaText>100+</BakaText>
  </BakaSideNavigationItem>
  {/* Add more SideNavigationItems as needed */}
</BakaSideNavigation>;
`})}),`
`,a.jsx(e.h3,{id:"props",children:"Props"}),`
`,a.jsx(e.h4,{id:"style-optional",children:"style (optional)"}),`
`,a.jsxs(e.ul,{children:[`
`,a.jsxs(e.li,{children:["Type: ",a.jsx(e.code,{children:"object"})]}),`
`,a.jsxs(e.li,{children:["Default: ",a.jsx(e.code,{children:"null"})]}),`
`]}),`
`,a.jsxs(e.p,{children:["The ",a.jsx(e.code,{children:"style"})," prop allows you to apply custom CSS styles to the SideNavigation component, controlling its width, height, or any other styling properties."]}),`
`,a.jsx(e.h3,{id:"bakasidenavigationitem",children:"BakaSideNavigationItem"}),`
`,a.jsxs(e.p,{children:["The ",a.jsx(e.code,{children:"BakaSideNavigationItem"})," component represents an individual item within the SideNavigation."]}),`
`,a.jsx(e.h4,{id:"props-1",children:"Props"}),`
`,a.jsx(e.h4,{id:"selected-optional",children:"selected (optional)"}),`
`,a.jsxs(e.ul,{children:[`
`,a.jsxs(e.li,{children:["Type: ",a.jsx(e.code,{children:"boolean"})]}),`
`,a.jsxs(e.li,{children:["Default: ",a.jsx(e.code,{children:"false"})]}),`
`]}),`
`,a.jsxs(e.p,{children:["Indicates whether this item is selected. When set to ",a.jsx(e.code,{children:"true"}),", it highlights the item as the currently active or selected option."]}),`
`,a.jsx(e.h3,{id:"examples",children:"Examples"}),`
`,a.jsx(e.h4,{id:"basic-sidenavigation",children:"Basic SideNavigation"}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-jsx",children:`import {
  BakaSideNavigation,
  BakaSideNavigationItem,
  BakaIcon,
  BakaLabel,
  BakaText,
  BakaDivider,
} from "baka-ui";

<BakaSideNavigation style={{ width: 300 }}>
  <div style={{ padding: "18px 16px" }}>
    <BakaText variant={"title-small"}>Explore</BakaText>
  </div>
  <BakaSideNavigationItem selected={true}>
    <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
    <BakaLabel>Home</BakaLabel>
    <BakaText>100+</BakaText>
  </BakaSideNavigationItem>
  <BakaSideNavigationItem>
    <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
    <BakaLabel>Profile</BakaLabel>
    <BakaText>100+</BakaText>
  </BakaSideNavigationItem>
  <BakaDivider />
  <div style={{ padding: "18px 16px" }}>
    <BakaText variant={"title-small"}>Settings</BakaText>
  </div>
  <BakaSideNavigationItem>
    <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
    <BakaLabel>General</BakaLabel>
    <BakaText>100+</BakaText>
  </BakaSideNavigationItem>
</BakaSideNavigation>;
`})}),`
`,a.jsx(e.p,{children:"This will render a basic SideNavigation menu with section headers, selectable items, and a divider."})]})}function v(n={}){const{wrapper:e}=Object.assign({},k(),n.components);return e?a.jsx(e,Object.assign({},n,{children:a.jsx(s,n)})):s(n)}const j={title:"Material You/Primitives/Side Navigation",parameters:{layout:"centered",docs:{page:v}},tags:["autodocs"],argTypes:{}},r={args:{icons:!0},argTypes:{icons:{control:"boolean"}},render:n=>a.jsxs(x,{style:{width:300},children:[a.jsx("div",{style:{padding:"18px 16px"},children:a.jsx(i,{variant:"title-small",children:"Title"})}),a.jsx("div",{style:{padding:"18px 16px"},children:a.jsx(i,{variant:"title-small",children:"Section header"})}),a.jsxs(t,{selected:!0,children:[n.icons?a.jsx(l,{variant:"filled",children:"fiber_manual_record"}):null,a.jsx(d,{children:"BakaLabel"}),a.jsx(i,{children:"100+"})]}),a.jsxs(t,{children:[n.icons?a.jsx(l,{variant:"filled",children:"fiber_manual_record"}):null,a.jsx(d,{children:"BakaLabel"}),a.jsx(i,{children:"100+"})]}),a.jsxs(t,{children:[n.icons?a.jsx(l,{variant:"filled",children:"fiber_manual_record"}):null,a.jsx(d,{children:"BakaLabel"}),a.jsx(i,{children:"100+"})]}),a.jsx(h,{}),a.jsx("div",{style:{padding:"18px 16px"},children:a.jsx(i,{variant:"title-small",children:"Section header"})}),a.jsxs(t,{children:[n.icons?a.jsx(l,{variant:"filled",children:"fiber_manual_record"}):null,a.jsx(d,{children:"BakaLabel"})]}),a.jsxs(t,{children:[n.icons?a.jsx(l,{variant:"filled",children:"fiber_manual_record"}):null,a.jsx(d,{children:"BakaLabel"})]}),a.jsxs(t,{children:[n.icons?a.jsx(l,{variant:"filled",children:"fiber_manual_record"}):null,a.jsx(d,{children:"BakaLabel"})]})]})};var o,c,B;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    icons: true
  },
  argTypes: {
    icons: {
      control: "boolean"
    }
  },
  render: args => {
    return <BakaSideNavigation style={{
      width: 300
    }}>
        <div style={{
        padding: "18px 16px"
      }}>
          <BakaText variant={"title-small"}>Title</BakaText>
        </div>
        <div style={{
        padding: "18px 16px"
      }}>
          <BakaText variant={"title-small"}>Section header</BakaText>
        </div>
        <BakaSideNavigationItem selected={true}>
          {args.icons ? <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon> : null}
          <BakaLabel>BakaLabel</BakaLabel>
          <BakaText>100+</BakaText>
        </BakaSideNavigationItem>
        <BakaSideNavigationItem>
          {args.icons ? <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon> : null}
          <BakaLabel>BakaLabel</BakaLabel>
          <BakaText>100+</BakaText>
        </BakaSideNavigationItem>
        <BakaSideNavigationItem>
          {args.icons ? <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon> : null}
          <BakaLabel>BakaLabel</BakaLabel>
          <BakaText>100+</BakaText>
        </BakaSideNavigationItem>
        <BakaDivider />
        <div style={{
        padding: "18px 16px"
      }}>
          <BakaText variant={"title-small"}>Section header</BakaText>
        </div>
        <BakaSideNavigationItem>
          {args.icons ? <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon> : null}
          <BakaLabel>BakaLabel</BakaLabel>
        </BakaSideNavigationItem>
        <BakaSideNavigationItem>
          {args.icons ? <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon> : null}
          <BakaLabel>BakaLabel</BakaLabel>
        </BakaSideNavigationItem>
        <BakaSideNavigationItem>
          {args.icons ? <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon> : null}
          <BakaLabel>BakaLabel</BakaLabel>
        </BakaSideNavigationItem>
      </BakaSideNavigation>;
  }
}`,...(B=(c=r.parameters)==null?void 0:c.docs)==null?void 0:B.source}}};const b=["Basic"];export{r as Basic,b as __namedExportsOrder,j as default};
//# sourceMappingURL=SideNavigation.stories-59ac8e09.js.map
