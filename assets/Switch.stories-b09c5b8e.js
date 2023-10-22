import{j as e}from"./jsx-runtime-ed146b25.js";import{x as t}from"./baka-ui-74a68acc.js";import{u as h}from"./index-09fac16e.js";import"./index-c6dae603.js";function c(s){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",pre:"pre",h3:"h3",h4:"h4",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},h(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"switch",children:"Switch"}),`
`,e.jsx(n.p,{children:"The Switch component allows users to toggle between two states: on and off. It is a common UI element used for binary choices."}),`
`,e.jsx(n.h2,{id:"installation",children:"Installation"}),`
`,e.jsxs(n.p,{children:["To use the Switch component in your project, make sure you have the ",e.jsx(n.code,{children:"baka-ui"})," package installed. You can install it using npm or yarn:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install baka-ui
`})}),`
`,e.jsx(n.p,{children:"or"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`yarn add baka-ui
`})}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["Import the ",e.jsx(n.code,{children:"BakaSwitch"})," component from ",e.jsx(n.code,{children:"baka-ui"})," in your JavaScript or TypeScript file."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { BakaSwitch } from "baka-ui";
`})}),`
`,e.jsx(n.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<BakaSwitch checked={true} />
`})}),`
`,e.jsx(n.h3,{id:"variants",children:"Variants"}),`
`,e.jsx(n.p,{children:"The Switch component comes in two variants: default and icon."}),`
`,e.jsx(n.h4,{id:"default-variant",children:"Default Variant"}),`
`,e.jsx(n.p,{children:"The default variant of the Switch is used for simple binary choices."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<BakaSwitch  />
`})}),`
`,e.jsx(n.h4,{id:"bakaicon-variant",children:"BakaIcon Variant"}),`
`,e.jsx(n.p,{children:"The icon variant of the Switch is used when you want to represent the on and off states with icons."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<BakaSwitch variant={"icon"} />
`})}),`
`,e.jsx(n.h3,{id:"states",children:"States"}),`
`,e.jsx(n.p,{children:"The Switch component supports several states, including hovered, focused, activated, and disabled."}),`
`,e.jsx(n.h4,{id:"hovered",children:"Hovered"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<BakaSwitch hovered={true} />
`})}),`
`,e.jsx(n.h4,{id:"focused",children:"Focused"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<BakaSwitch focused={true} />
`})}),`
`,e.jsx(n.h4,{id:"activated",children:"Activated"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<BakaSwitch activated={true} />
`})}),`
`,e.jsx(n.h4,{id:"disabled",children:"Disabled"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<BakaSwitch disabled={true} />
`})}),`
`,e.jsx(n.h3,{id:"controlled-vs-uncontrolled",children:"Controlled vs. Uncontrolled"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"BakaSwitch"})," component can be used in controlled or uncontrolled mode. In controlled mode, you provide the ",e.jsx(n.code,{children:"checked"})," prop to specify the state of the switch. In uncontrolled mode, you omit the ",e.jsx(n.code,{children:"checked"})," prop, and the component manages its state internally."]}),`
`,e.jsx(n.h3,{id:"events",children:"Events"}),`
`,e.jsxs(n.p,{children:["The Switch component does not emit any custom events. You can handle changes in its state by listening to the ",e.jsx(n.code,{children:"onChange"})," event if you are using it in a controlled mode."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<BakaSwitch onChange={(event) => console.log(event.target.checked)} />
`})}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"checked"}),e.jsx(n.td,{children:"boolean"}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:'Determines whether the switch is in the "on" or "off" state.'})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"hovered"}),e.jsx(n.td,{children:"boolean"}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Indicates whether the switch is being hovered over."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"focused"}),e.jsx(n.td,{children:"boolean"}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Indicates whether the switch is currently focused."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"activated"}),e.jsx(n.td,{children:"boolean"}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Indicates whether the switch is activated (pressed)."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"disabled"}),e.jsx(n.td,{children:"boolean"}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Disables the switch, preventing user interaction."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"variant"}),e.jsx(n.td,{children:"string"}),e.jsx(n.td,{children:'"default"'}),e.jsx(n.td,{children:'Specifies the variant of the switch ("default" or "icon").'})]})]})]}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"basic-usage-1",children:"Basic Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<BakaSwitch checked={true} />
`})}),`
`,e.jsx(n.h3,{id:"bakaicon-variant-1",children:"BakaIcon Variant"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<BakaSwitch checked={true} variant={"icon"} />
`})})]})}function o(s={}){const{wrapper:n}=Object.assign({},h(),s.components);return n?e.jsx(n,Object.assign({},s,{children:e.jsx(c,s)})):c(s)}const p={title:"Material You/Primitives/Switch",component:s=>e.jsx(t,{...s}),render:s=>e.jsx(t,{...s}),parameters:{layout:"centered",docs:{page:o}},tags:["autodocs"]},a={args:{checked:!1,disabled:!1,variant:"none"},argTypes:{checked:{control:"boolean"},variant:{control:"radio",maps:{icon:"icon",none:"basic"},options:["none","icon"]}},render:s=>e.jsx(t,{...s})};var i,r,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    variant: ("none" as BakaSwitchVariant)
  },
  argTypes: {
    checked: {
      control: "boolean"
    },
    variant: {
      control: "radio",
      maps: {
        icon: "icon",
        none: "basic"
      },
      options: ["none", "icon"]
    }
  },
  render: args => {
    return <BakaSwitch {...args} />;
  }
}`,...(d=(r=a.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};const m=["Basic"];export{a as Basic,m as __namedExportsOrder,p as default};
//# sourceMappingURL=Switch.stories-b09c5b8e.js.map
