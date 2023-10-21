import{j as e}from"./jsx-runtime-ed146b25.js";import{C as a}from"./baka-ui-cb88fe88.js";import{u as c}from"./index-09fac16e.js";import"./index-c6dae603.js";function o(t){const n=Object.assign({h2:"h2",p:"p",code:"code",h3:"h3",pre:"pre",h4:"h4",ul:"ul",li:"li"},c(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"radiobutton",children:"RadioButton"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"RadioButton"})," component is used to create radio buttons in your web application. Radio buttons are typically used to allow users to select one option from a group of mutually exclusive choices."]}),`
`,e.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { BakaRadioButton } from "baka-ui";

// Inside your component
<BakaRadioButton checked={true} />;
`})}),`
`,e.jsx(n.h3,{id:"props",children:"Props"}),`
`,e.jsx(n.h4,{id:"checked-optional",children:"checked (optional)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Type: ",e.jsx(n.code,{children:"boolean"})]}),`
`,e.jsxs(n.li,{children:["Default: ",e.jsx(n.code,{children:"false"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Indicates whether the radio button is checked."}),`
`,e.jsx(n.h4,{id:"hovered-optional",children:"hovered (optional)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Type: ",e.jsx(n.code,{children:"boolean"})]}),`
`,e.jsxs(n.li,{children:["Default: ",e.jsx(n.code,{children:"false"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Indicates whether the radio button is being hovered over by the cursor."}),`
`,e.jsx(n.h4,{id:"focused-optional",children:"focused (optional)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Type: ",e.jsx(n.code,{children:"boolean"})]}),`
`,e.jsxs(n.li,{children:["Default: ",e.jsx(n.code,{children:"false"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Indicates whether the radio button is in focus, typically when it's selected using the keyboard."}),`
`,e.jsx(n.h4,{id:"activated-optional",children:"activated (optional)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Type: ",e.jsx(n.code,{children:"boolean"})]}),`
`,e.jsxs(n.li,{children:["Default: ",e.jsx(n.code,{children:"false"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Indicates whether the radio button is activated, which might be the case when a user clicks it."}),`
`,e.jsx(n.h4,{id:"disabled-optional",children:"disabled (optional)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Type: ",e.jsx(n.code,{children:"boolean"})]}),`
`,e.jsxs(n.li,{children:["Default: ",e.jsx(n.code,{children:"false"})]}),`
`]}),`
`,e.jsx(n.p,{children:`Indicates whether the radio button is disabled and cannot be interacted with.
adio button. When multiple radio buttons share the same name, they are part of the same radio button group, and only one can be selected at a time. This enforces mutual exclusivity among radio buttons.`}),`
`,e.jsx(n.h3,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h4,{id:"basic-radiobutton",children:"Basic RadioButton"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { BakaRadioButton } from "baka-ui";

<BakaRadioButton checked={true} />;
`})}),`
`,e.jsx(n.p,{children:"This will render a basic radio button that is initially checked."}),`
`,e.jsx(n.h4,{id:"radio-button-group",children:"Radio Button Group"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { BakaRadioButton } from "baka-ui";

<div>
  <BakaRadioButton name="gender" checked={true} />
  <span>Male</span>
</div>
<div>
  <BakaRadioButton name="gender" />
  <span>Female</span>
</div>
<div>
  <BakaRadioButton name="gender" />
  <span>Other</span>
</div>
`})}),`
`,e.jsxs(n.p,{children:["This example creates a group of radio buttons with the same ",e.jsx(n.code,{children:"name"})," attribute, allowing users to select their gender. Only one option can be selected at a time within the same group."]})]})}function l(t={}){const{wrapper:n}=Object.assign({},c(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(o,t)})):o(t)}const j={title:"Material You/Primitives/Radio Button",component:t=>e.jsx(a,{...t}),render:t=>e.jsx(a,{...t}),parameters:{layout:"centered",docs:{page:l}},tags:["autodocs"]},i={args:{checked:!0},argTypes:{checked:{control:"boolean"}},render:t=>e.jsx(a,{...t})};var s,r,d;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    checked: true
  },
  argTypes: {
    checked: {
      control: "boolean"
    }
  },
  render: args => {
    return <BakaRadioButton {...args} />;
  }
}`,...(d=(r=i.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};const m=["Basic"];export{i as Basic,m as __namedExportsOrder,j as default};
//# sourceMappingURL=RadioButton.stories-4b36f3e0.js.map
