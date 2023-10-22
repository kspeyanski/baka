import{j as e}from"./jsx-runtime-ed146b25.js";import{N as u,R as t,w as h,j as p,k as l}from"./baka-ui-74a68acc.js";import{u as c}from"./index-09fac16e.js";import"./index-c6dae603.js";function d(a){const n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li"},c(),a.components);return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"textfield-component-documentation",children:"TextField Component Documentation"}),`
`,e.jsx(n.p,{children:'The TextField component in the "baka-ui" library provides a flexible and customizable text input field with various visual styles and configurations.'}),`
`,e.jsx(n.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(n.p,{children:'Before using the TextField component, make sure you have the "baka-ui" library installed in your project.'}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install baka-ui
`})}),`
`,e.jsx(n.h2,{id:"importing",children:"Importing"}),`
`,e.jsx(n.p,{children:"You can import the TextField component like this:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { BakaTextField, BakaLabel, BakaInput, BakaIcon, BakaButton } from "baka-ui";
`})}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<BakaTextField>
  <BakaLabel variant={"body-small"}>BakaLabel</BakaLabel>
  <BakaInput defaultValue="BakaInput" type="text" />
  <BakaButton variant={"icon"}>
    <BakaIcon>cancel</BakaIcon>
  </BakaButton>
</BakaTextField>
`})}),`
`,e.jsx(n.h3,{id:"visual-variations",children:"Visual Variations"}),`
`,e.jsx(n.p,{children:"The TextField component supports various visual styles and states:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"focused"}),": Indicates a focused input field."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"hovered"}),": Indicates a hovered input field."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"invalid"}),": Indicates an invalid input field."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"disabled"}),": Disables the input field."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"empty"}),": Indicates an empty input field."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'variant={"outlined"}'}),": Provides an outlined appearance."]}),`
`]}),`
`,e.jsx(n.h3,{id:"example",children:"Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<BakaTextField focused={true} variant={"outlined"}>
  <BakaLabel variant={"body-small"}>BakaLabel</BakaLabel>
  <BakaInput defaultValue="BakaInput" type="text" />
  <BakaButton variant={"icon"}>
    <BakaIcon>cancel</BakaIcon>
  </BakaButton>
</BakaTextField>
`})}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"focused"})," (boolean): Set to ",e.jsx(n.code,{children:"true"})," to indicate a focused input field."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"hovered"})," (boolean): Set to ",e.jsx(n.code,{children:"true"})," to indicate a hovered input field."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"invalid"})," (boolean): Set to ",e.jsx(n.code,{children:"true"})," to indicate an invalid input field."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"disabled"})," (boolean): Set to ",e.jsx(n.code,{children:"true"})," to disable the input field."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"empty"})," (boolean): Set to ",e.jsx(n.code,{children:"true"})," to indicate an empty input field."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"variant"}),' (string): Specifies the visual style of the input field. Options include "outlined" and others as needed.']}),`
`]})]})}function x(a={}){const{wrapper:n}=Object.assign({},c(),a.components);return n?e.jsx(n,Object.assign({},a,{children:e.jsx(d,a)})):d(a)}const k={title:"Material You/Primitives/Text Field",parameters:{layout:"centered",docs:{page:x}},tags:["autodocs"],argTypes:{}},i={render:a=>e.jsxs(u,{...a,style:{width:300},[a.state]:!0,children:[a["leading icon"]&&e.jsx(t,{children:"search"}),a.label&&e.jsx(h,{children:"BakaLabel"}),e.jsx(p,{...a.placeholder&&{placeholder:"Placeholder"},value:a.input,empty:!a.input}),a["trailing icon"]&&(a.state==="invalid"?e.jsx(l,{variant:["icon"],children:e.jsx(t,{variant:["filled","error"],children:"error"})}):e.jsx(l,{variant:"icon",children:e.jsx(t,{children:"cancel"})}))]}),args:{variant:"filled",state:"idle",input:"",placeholder:!0,label:!0,"leading icon":!0,"trailing icon":!0},argTypes:{input:{control:"text"},state:{control:"radio",map:{idle:"",hovered:"hovered",focused:"focused",invalid:"invalid",disabled:"disabled"},options:["idle","hovered","focused","invalid","disabled"]},variant:{control:"radio",options:["filled","outlined"]}}};var s,o,r;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => {
    return <BakaTextField {...args} style={{
      width: 300
    }} {...{
      [args.state]: true
    }}>
        {args["leading icon"] && <BakaIcon>search</BakaIcon>}
        {args.label && <BakaLabel>BakaLabel</BakaLabel>}
        <BakaInput {...args.placeholder && {
        placeholder: "Placeholder"
      }} value={args.input} empty={!args.input} />
        {args["trailing icon"] && (args.state === "invalid" ? <BakaButton variant={["icon"]}>
              <BakaIcon variant={["filled", "error"]}>error</BakaIcon>
            </BakaButton> : <BakaButton variant={"icon"}>
              <BakaIcon>cancel</BakaIcon>
            </BakaButton>)}
      </BakaTextField>;
  },
  args: {
    variant: "filled",
    state: "idle",
    input: "",
    placeholder: true,
    label: true,
    ["leading icon"]: true,
    ["trailing icon"]: true
  },
  argTypes: {
    input: {
      control: "text"
    },
    state: {
      control: "radio",
      map: {
        idle: "",
        hovered: "hovered",
        focused: "focused",
        invalid: "invalid",
        disabled: "disabled"
      },
      options: ["idle", "hovered", "focused", "invalid", "disabled"]
    },
    variant: {
      control: "radio",
      options: ["filled", "outlined"]
    }
  }
}`,...(r=(o=i.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const b=["Basic"];export{i as Basic,b as __namedExportsOrder,k as default};
//# sourceMappingURL=TextField.stories-1546da59.js.map
