import{j as e}from"./jsx-runtime-9c4ae004.js";import{B as a}from"./divider-6c451f42.js";import{u as c}from"./index-2ef8b458.js";import"./index-1b03fe98.js";import"./variant-class-names-08f4b07b.js";function t(i){const n=Object.assign({h1:"h1",p:"p",h3:"h3",pre:"pre",code:"code",ul:"ul",li:"li"},c(),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"divider",children:"Divider"}),`
`,e.jsx(n.p,{children:"The Divider component in the Baka UI library is a simple horizontal or vertical line that can be used to separate content or create visual divisions in your user interface."}),`
`,e.jsx(n.h3,{id:"installation",children:"Installation"}),`
`,e.jsx(n.p,{children:"Before using the Divider component, make sure you have the Baka UI library installed in your project:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install baka-ui
# or
yarn add baka-ui
`})}),`
`,e.jsx(n.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsxs(n.p,{children:["You can use the Divider component by importing it from ",e.jsx(n.code,{children:"baka-ui"})," and adding it to your JSX code:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { BakaDivider } from "baka-ui";

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
`,e.jsx(n.h3,{id:"props",children:"Props"}),`
`,e.jsx(n.p,{children:"The Divider component supports the following props:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"variant"}),' (optional): Specifies the variant of the divider. It can be either "horizontal" (default) or "vertical."']}),`
`]}),`
`,e.jsx(n.h3,{id:"examples",children:"Examples"}),`
`,e.jsx(n.p,{children:"Here are some examples of using the Divider component:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { BakaDivider } from "baka-ui";

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
`,e.jsx(n.p,{children:"The Divider component is a simple yet effective way to add visual separation and structure to your user interface elements. You can customize its appearance to match your design requirements."})]})}function l(i={}){const{wrapper:n}=Object.assign({},c(),i.components);return n?e.jsx(n,Object.assign({},i,{children:e.jsx(t,i)})):t(i)}const x={title:"Material You/Primitives/Divider",component:i=>e.jsx(a,{...i}),render:i=>e.jsx(a,{...i}),parameters:{layout:"centered",docs:{page:l}},tags:["autodocs"]},r={args:{variant:"horizontal"},argTypes:{variant:{control:"radio",options:["horizontal","vertical"]}},render:i=>e.jsx("div",{style:i.variant==="horizontal"?{width:320}:{height:320},children:e.jsx(a,{...i})}),parameters:{docs:{storyDescription:"A basic divider with title and description."}}};var o,s,d;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(d=(s=r.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const j=["Basic"];export{r as Basic,j as __namedExportsOrder,x as default};
//# sourceMappingURL=Divider.stories-e35fa413.js.map
