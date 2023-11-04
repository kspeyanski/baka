import{j as e}from"./jsx-runtime-9c4ae004.js";import{B as t}from"./checkbox-a49cd530.js";import{u as d}from"./index-2ef8b458.js";import"./index-1b03fe98.js";import"./variant-class-names-08f4b07b.js";import"./state-attributes-f1b2bd32.js";function a(o){const n=Object.assign({p:"p",strong:"strong",h3:"h3",pre:"pre",code:"code",ul:"ul",li:"li"},d(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Sure, here's the documentation for the Checkbox component along with scenario-based stories:"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Checkbox Documentation"})}),`
`,e.jsx(n.p,{children:"The Checkbox component in the Baka UI library provides a simple way to include interactive checkboxes in your web applications. Checkboxes allow users to make binary choices, such as selecting or deselecting an option."}),`
`,e.jsx(n.h3,{id:"installation",children:"Installation"}),`
`,e.jsx(n.p,{children:"Before using the Checkbox component, make sure you have the Baka UI library installed in your project."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install baka-ui
# or
yarn add baka-ui
`})}),`
`,e.jsx(n.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsxs(n.p,{children:["You can use the Checkbox component by importing it from ",e.jsx(n.code,{children:"baka-ui"})," and adding it to your JSX code:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { Checkbox } from "baka-ui";

function MyComponent() {
  return <Checkbox />;
}
`})}),`
`,e.jsx(n.h3,{id:"props",children:"Props"}),`
`,e.jsx(n.p,{children:"The Checkbox component supports the following props:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"disabled"}),": A boolean that disables the checkbox when set to ",e.jsx(n.code,{children:"true"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"hovered"}),": A boolean that changes the checkbox's appearance when hovered."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"focused"}),": A boolean that changes the checkbox's appearance when focused."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"activated"}),": A boolean that changes the checkbox's appearance when activated (clicked)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"checked"}),": A boolean that sets the checkbox to a checked state when set to ",e.jsx(n.code,{children:"true"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"indeterminate"}),": A boolean that sets the checkbox to an indeterminate state when set to ",e.jsx(n.code,{children:"true"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"readOnly"}),": A boolean that sets the checkbox to a read-only state when set to ",e.jsx(n.code,{children:"true"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:["The Checkbox component also supports all the props of the ",e.jsx(n.code,{children:"input"})," HTML element."]}),`
`,e.jsx(n.h3,{id:"examples",children:"Examples"}),`
`,e.jsx(n.p,{children:"Here are some examples of using the Checkbox component with different props:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { Checkbox } from "baka-ui";

function MyComponent() {
  return (
    <div>
      <Checkbox /> {/* Default Checkbox */}
      <Checkbox disabled={true} /> {/* Disabled Checkbox */}
      <Checkbox hovered={true} /> {/* Hovered Checkbox */}
      <Checkbox focused={true} /> {/* Focused Checkbox */}
      <Checkbox activated={true} /> {/* Activated Checkbox */}
    </div>
  );
}
`})})]})}function h(o={}){const{wrapper:n}=Object.assign({},d(),o.components);return n?e.jsx(n,Object.assign({},o,{children:e.jsx(a,o)})):a(o)}const j={title:"Material You/Primitives/Checkbox",component:o=>e.jsx(t,{...o}),render:o=>e.jsx(t,{...o}),parameters:{layout:"centered",docs:{page:h}},tags:["autodocs"]},r={args:{variant:"primary",checked:!0,indeterminate:!1,hovered:!1,focused:!1,activated:!1,disabled:!1},argTypes:{variant:{control:"radio",map:{primary:null,error:"error"},options:["primary","error"]},indeterminate:{control:"boolean",if:{arg:"checked",neq:!0}}}};var s,c,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    // @ts-expect-error - \`primary\` is the default value
    variant: "primary",
    checked: true,
    indeterminate: false,
    hovered: false,
    focused: false,
    activated: false,
    disabled: false
  },
  argTypes: {
    variant: {
      control: "radio",
      map: {
        primary: null,
        error: "error"
      },
      options: ["primary", "error"]
    },
    indeterminate: {
      control: "boolean",
      if: {
        arg: "checked",
        neq: true
      }
    }
  }
}`,...(i=(c=r.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const k=["Basic"];export{r as Basic,k as __namedExportsOrder,j as default};
//# sourceMappingURL=Checkbox.stories-5bcce387.js.map
