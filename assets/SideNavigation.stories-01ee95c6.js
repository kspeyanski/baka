import{j as a}from"./jsx-runtime-9c4ae004.js";import{B as v}from"./divider-6c451f42.js";import{B as i}from"./icon-e14e50b0.js";import{B as t}from"./text-c2c14b07.js";import{B as l}from"./label-b91e98f5.js";import{c as x}from"./variant-class-names-08f4b07b.js";import{s as p}from"./state-attributes-f1b2bd32.js";import{u as m}from"./index-2ef8b458.js";import"./index-1b03fe98.js";const g=n=>{const{as:e="div",...s}=n;return a.jsx(e,{...s,className:x("baka-side-navigation",n.className)})},d=n=>{const{as:e="div",selected:s,...h}=n;return a.jsx(e,{...h,className:x("baka-side-navigation-item",n.className,p(n))})};function o(n){const e=Object.assign({h2:"h2",p:"p",code:"code",h3:"h3",pre:"pre",h4:"h4",ul:"ul",li:"li"},m(),n.components);return a.jsxs(a.Fragment,{children:[a.jsx(e.h2,{id:"sidenavigation",children:"SideNavigation"}),`
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
`,a.jsx(e.p,{children:"This will render a basic SideNavigation menu with section headers, selectable items, and a divider."})]})}function u(n={}){const{wrapper:e}=Object.assign({},m(),n.components);return e?a.jsx(e,Object.assign({},n,{children:a.jsx(o,n)})):o(n)}const y={title:"Material You/Primitives/Side Navigation",parameters:{layout:"centered",docs:{page:u}},tags:["autodocs"],argTypes:{}},r={args:{icons:!0},argTypes:{icons:{control:"boolean"}},render:n=>a.jsxs(g,{style:{width:300},children:[a.jsx("div",{style:{padding:"18px 16px"},children:a.jsx(t,{variant:"title-small",children:"Title"})}),a.jsx("div",{style:{padding:"18px 16px"},children:a.jsx(t,{variant:"title-small",children:"Section header"})}),a.jsxs(d,{selected:!0,children:[n.icons?a.jsx(i,{variant:"filled",children:"fiber_manual_record"}):null,a.jsx(l,{children:"BakaLabel"}),a.jsx(t,{children:"100+"})]}),a.jsxs(d,{children:[n.icons?a.jsx(i,{variant:"filled",children:"fiber_manual_record"}):null,a.jsx(l,{children:"BakaLabel"}),a.jsx(t,{children:"100+"})]}),a.jsxs(d,{children:[n.icons?a.jsx(i,{variant:"filled",children:"fiber_manual_record"}):null,a.jsx(l,{children:"BakaLabel"}),a.jsx(t,{children:"100+"})]}),a.jsx(v,{}),a.jsx("div",{style:{padding:"18px 16px"},children:a.jsx(t,{variant:"title-small",children:"Section header"})}),a.jsxs(d,{children:[n.icons?a.jsx(i,{variant:"filled",children:"fiber_manual_record"}):null,a.jsx(l,{children:"BakaLabel"})]}),a.jsxs(d,{children:[n.icons?a.jsx(i,{variant:"filled",children:"fiber_manual_record"}):null,a.jsx(l,{children:"BakaLabel"})]}),a.jsxs(d,{children:[n.icons?a.jsx(i,{variant:"filled",children:"fiber_manual_record"}):null,a.jsx(l,{children:"BakaLabel"})]})]})};var c,B,k;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(k=(B=r.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};const w=["Basic"];export{r as Basic,w as __namedExportsOrder,y as default};
//# sourceMappingURL=SideNavigation.stories-01ee95c6.js.map
