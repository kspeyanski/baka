import{j as n}from"./jsx-runtime-ed146b25.js";import{E as a}from"./baka-ui-74a68acc.js";import{u as c}from"./index-09fac16e.js";import"./index-c6dae603.js";function t(i){const e=Object.assign({h1:"h1",p:"p",h3:"h3",pre:"pre",code:"code",ul:"ul",li:"li"},c(),i.components);return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"divider",children:"Divider"}),`
`,n.jsx(e.p,{children:"The Divider component in the Baka UI library is a simple horizontal or vertical line that can be used to separate content or create visual divisions in your user interface."}),`
`,n.jsx(e.h3,{id:"installation",children:"Installation"}),`
`,n.jsx(e.p,{children:"Before using the Divider component, make sure you have the Baka UI library installed in your project:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install baka-ui
# or
yarn add baka-ui
`})}),`
`,n.jsx(e.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,n.jsxs(e.p,{children:["You can use the Divider component by importing it from ",n.jsx(e.code,{children:"baka-ui"})," and adding it to your JSX code:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { BakaDivider } from "baka-ui";

function MyComponent() {
  return (
    <div>
      {/* Horizontal Divider */}
      <BakaDivider />

      {/* Vertical Divider */}
      <BakaDivider variant="vertical" />
    </div>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"props",children:"Props"}),`
`,n.jsx(e.p,{children:"The Divider component supports the following props:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"variant"}),' (optional): Specifies the variant of the divider. It can be either "horizontal" (default) or "vertical."']}),`
`]}),`
`,n.jsx(e.h3,{id:"examples",children:"Examples"}),`
`,n.jsx(e.p,{children:"Here are some examples of using the Divider component:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { BakaDivider } from "baka-ui";

function MyComponent() {
  return (
    <div>
      {/* Horizontal Divider */}
      <BakaDivider />

      {/* Vertical Divider */}
      <BakaDivider variant="vertical" />
    </div>
  );
}
`})}),`
`,n.jsx(e.p,{children:"The Divider component is a simple yet effective way to add visual separation and structure to your user interface elements. You can customize its appearance to match your design requirements."})]})}function l(i={}){const{wrapper:e}=Object.assign({},c(),i.components);return e?n.jsx(e,Object.assign({},i,{children:n.jsx(t,i)})):t(i)}const v={title:"Material You/Primitives/Divider",component:i=>n.jsx(a,{...i}),render:i=>n.jsx(a,{...i}),parameters:{layout:"centered",docs:{page:l}},tags:["autodocs"]},r={args:{variant:"horizontal"},argTypes:{variant:{control:"radio",options:["horizontal","vertical"]}},render:i=>n.jsx("div",{style:i.variant==="horizontal"?{width:320}:{height:320},children:n.jsx(a,{...i})}),parameters:{docs:{storyDescription:"A basic divider with title and description."}}};var o,s,d;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    variant: "horizontal"
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["horizontal", "vertical"]
    }
  },
  render: args => {
    return <div style={args.variant === "horizontal" ? {
      width: 320
    } : {
      height: 320
    }}>
        <BakaDivider {...args} />
      </div>;
  },
  parameters: {
    docs: {
      storyDescription: "A basic divider with title and description."
    }
  }
}`,...(d=(s=r.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const x=["Basic"];export{r as Basic,x as __namedExportsOrder,v as default};
//# sourceMappingURL=Divider.stories-ba4f072a.js.map
