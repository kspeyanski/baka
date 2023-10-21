import{j as a}from"./jsx-runtime-ed146b25.js";import{k as t,R as d}from"./baka-ui-cb88fe88.js";import{u as I}from"./index-09fac16e.js";import"./index-c6dae603.js";function u(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",code:"code",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ul:"ul",li:"li",strong:"strong",h4:"h4"},I(),e.components);return a.jsxs(a.Fragment,{children:[a.jsx(n.h1,{id:"button",children:"Button"}),`
`,a.jsx(n.p,{children:'Welcome to the documentation for the "Button" component in the Baka UI Library. The "Button" component is a fundamental building block for user interactions in your web applications. It offers various styles and states to cater to different use cases.'}),`
`,a.jsx(n.h2,{id:"introduction",children:"Introduction"}),`
`,a.jsx(n.p,{children:'The "Button" component in Baka UI provides a versatile set of button styles, allowing you to choose the right appearance for your application. Whether you need a filled, outlined, text, elevated, tonal, or a Floating Action Button (FAB), this component has you covered.'}),`
`,a.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,a.jsxs(n.p,{children:['To use the "Button" component, import it from ',a.jsx(n.code,{children:"baka-ui"})," and include it in your JSX code. Here's a basic example:"]}),`
`,a.jsx(n.pre,{children:a.jsx(n.code,{className:"language-jsx",children:`import { BakaButton } from "baka-ui";

// Inside your component:
<BakaButton>Click Me</BakaButton>
`})}),`
`,a.jsx(n.h3,{id:"variants",children:"Variants"}),`
`,a.jsxs(n.table,{children:[a.jsx(n.thead,{children:a.jsxs(n.tr,{children:[a.jsx(n.th,{children:"Variant"}),a.jsx(n.th,{children:"Description"})]})}),a.jsxs(n.tbody,{children:[a.jsxs(n.tr,{children:[a.jsx(n.td,{children:"Filled"}),a.jsx(n.td,{children:"Solid background, suitable for primary actions."})]}),a.jsxs(n.tr,{children:[a.jsx(n.td,{children:"Outlined"}),a.jsx(n.td,{children:"Transparent background with a visible border, great for secondary actions."})]}),a.jsxs(n.tr,{children:[a.jsx(n.td,{children:"Text"}),a.jsx(n.td,{children:"No background, ideal for non-destructive actions."})]}),a.jsxs(n.tr,{children:[a.jsx(n.td,{children:"Elevated"}),a.jsx(n.td,{children:"Subtle shadow for a visual elevation effect, perfect for prominent calls to action."})]}),a.jsxs(n.tr,{children:[a.jsx(n.td,{children:"Tonal"}),a.jsx(n.td,{children:"Background color matches the primary color of your application, emphasizing brand actions."})]}),a.jsxs(n.tr,{children:[a.jsx(n.td,{children:"FAB"}),a.jsx(n.td,{children:"Floating Action Button, a circular button typically used for a promoted action."})]})]})]}),`
`,a.jsx(n.h3,{id:"states",children:"States"}),`
`,a.jsx(n.p,{children:"Buttons can have different states to provide visual feedback to users:"}),`
`,a.jsxs(n.ul,{children:[`
`,a.jsxs(n.li,{children:[a.jsx(n.strong,{children:"Hovered"}),": Adds a hover effect to the button."]}),`
`,a.jsxs(n.li,{children:[a.jsx(n.strong,{children:"Focused"}),": Highlights the button to indicate focus."]}),`
`,a.jsxs(n.li,{children:[a.jsx(n.strong,{children:"Activated"}),": Renders the button as active, typically when clicked."]}),`
`,a.jsxs(n.li,{children:[a.jsx(n.strong,{children:"Disabled"}),": Disables the button, preventing user interaction."]}),`
`]}),`
`,a.jsx(n.h3,{id:"iconbutton",children:"IconButton"}),`
`,a.jsx(n.p,{children:'In addition to the primary button variants, Baka UI also provides an "IconButton" variant for situations where you need an icon as the primary element within a button. This is useful when you want to emphasize the visual representation of an action.'}),`
`,a.jsx(n.pre,{children:a.jsx(n.code,{className:"language-jsx",children:`import { BakaButton, BakaIcon } from "baka-ui";

// IconButton example:
<BakaButton variant="icon">
  <BakaIcon>settings</BakaIcon>
</BakaButton>
`})}),`
`,a.jsx(n.h3,{id:"fab-floating-action-button",children:"FAB (Floating Action Button)"}),`
`,a.jsx(n.p,{children:'The "Floating Action Button" (FAB) is a circular button that typically represents a promoted action in your application. It stands out from other elements and is often used for primary actions.'}),`
`,a.jsx(n.h4,{id:"small-fabs",children:"Small FABs"}),`
`,a.jsx(n.p,{children:"Small FABs are suitable for situations where space is limited. They come in three primary variants: surface, primary, and secondary."}),`
`,a.jsx(n.pre,{children:a.jsx(n.code,{className:"language-jsx",children:`import { BakaButton, BakaIcon } from "baka-ui";

// Small FAB examples:
<BakaButton variant={["fab", "small"]}>
  <BakaIcon>edit</BakaIcon>
</BakaButton>
<BakaButton variant={["fab", "small", "primary"]}>
  <BakaIcon>edit</BakaIcon>
</BakaButton>
<BakaButton variant={["fab", "small", "secondary"]}>
  <BakaIcon>edit</BakaIcon>
</BakaButton>
`})}),`
`,a.jsx(n.h4,{id:"medium-fabs",children:"Medium FABs"}),`
`,a.jsx(n.p,{children:"Medium FABs are the default size and come in the same three primary variants: surface, primary, and secondary."}),`
`,a.jsx(n.pre,{children:a.jsx(n.code,{className:"language-jsx",children:`import { BakaButton, BakaIcon } from "baka-ui";

// Medium FAB examples:
<BakaButton variant={"fab"}>
  <BakaIcon>edit</BakaIcon>
</BakaButton>
<BakaButton variant={["fab", "primary"]}>
  <BakaIcon>edit</BakaIcon>
</BakaButton>
<BakaButton variant={["fab", "secondary"]}>
  <BakaIcon>edit</BakaIcon>
</BakaButton>
`})}),`
`,a.jsx(n.h4,{id:"large-fabs",children:"Large FABs"}),`
`,a.jsx(n.p,{children:"Large FABs are suitable for situations where you want to make the FAB more prominent. They also come in the same three primary variants: surface, primary, and secondary."}),`
`,a.jsx(n.pre,{children:a.jsx(n.code,{className:"language-jsx",children:`import { BakaButton, BakaIcon } from "baka-ui";

// Large FAB examples:
<BakaButton variant={["fab", "large"]}>
  <BakaIcon>edit</BakaIcon>
</BakaButton>
<BakaButton variant={["fab", "large", "primary"]}>
  <BakaIcon>edit</BakaIcon>
</BakaButton>
<BakaButton variant={["fab", "large", "secondary"]}>
  <BakaIcon>edit</BakaIcon>
</BakaButton>
`})}),`
`,a.jsx(n.h4,{id:"extended-fabs",children:"Extended FABs"}),`
`,a.jsx(n.p,{children:"Extended FABs combine an icon and a label to provide more context about the action. They come in the same three primary variants: surface, primary, and secondary."}),`
`,a.jsx(n.pre,{children:a.jsx(n.code,{className:"language-jsx",children:`import { BakaButton, BakaIcon } from "baka-ui";

// Extended FAB examples:
<BakaButton variant={["fab", "extended"]}>
  <BakaIcon>edit</BakaIcon>
  BakaLabel
</BakaButton>
<BakaButton variant={["fab", "extended", "primary"]}>
  <BakaIcon>edit</BakaIcon>
  BakaLabel
</BakaButton>
<BakaButton variant={["fab", "extended", "secondary"]}>
  <BakaIcon>edit</BakaIcon>
  BakaLabel
</BakaButton>
`})}),`
`,a.jsx(n.h3,{id:"usage-guidelines",children:"Usage Guidelines"}),`
`,a.jsx(n.p,{children:"When choosing a button style for your application, consider the following guidelines:"}),`
`,a.jsxs(n.ul,{children:[`
`,a.jsxs(n.li,{children:[a.jsx(n.strong,{children:"Button Variants"}),": Select the appropriate button variant based on the action's importance and context within your application."]}),`
`,a.jsxs(n.li,{children:[a.jsx(n.strong,{children:"States"}),": Utilize the various button states (hovered, focused, activated) to provide visual feedback to users and enhance user experience."]}),`
`,a.jsxs(n.li,{children:[a.jsx(n.strong,{children:"Disabled Buttons"}),": Disable buttons when the associated action is unavailable or invalid to prevent user interaction."]}),`
`]}),`
`,a.jsx(n.h2,{id:"real-world-examples",children:"Real-World Examples"}),`
`,a.jsx(n.p,{children:"Here are some real-world examples of using different button variants in various contexts:"}),`
`,a.jsx(n.h4,{id:"form-submission",children:"Form Submission"}),`
`,a.jsx(n.p,{children:'In a form, you can use a "filled" button for the "Submit" action to make it stand out as the primary action.'}),`
`,a.jsx(n.pre,{children:a.jsx(n.code,{className:"language-jsx",children:`<BakaButton variant="filled">Submit</BakaButton>
`})}),`
`,a.jsx(n.h4,{id:"secondary-action",children:"Secondary Action"}),`
`,a.jsx(n.p,{children:'For secondary actions, like canceling an operation, you can use an "outlined" button.'}),`
`,a.jsx(n.pre,{children:a.jsx(n.code,{className:"language-jsx",children:`<BakaButton variant="outlined">Cancel</BakaButton>
`})}),`
`,a.jsx(n.h4,{id:"non-destructive-action",children:"Non-Destructive Action"}),`
`,a.jsx(n.p,{children:'When you have a non-destructive action, such as "Read More," consider using a "text" button.'}),`
`,a.jsx(n.pre,{children:a.jsx(n.code,{className:"language-jsx",children:`<BakaButton variant="text">Read More</BakaButton>
`})}),`
`,a.jsx(n.h4,{id:"elevated-call-to-action",children:"Elevated Call to Action"}),`
`,a.jsx(n.p,{children:'An elevated button can be used for a prominent call to action, like "Sign Up Now."'}),`
`,a.jsx(n.pre,{children:a.jsx(n.code,{className:"language-jsx",children:`<BakaButton variant="elevated">Sign Up Now</BakaButton>
`})}),`
`,a.jsx(n.h4,{id:"brand-color-action",children:"Brand Color Action"}),`
`,a.jsx(n.p,{children:'If you want to emphasize a brand color action, use a "tonal" button.'}),`
`,a.jsx(n.pre,{children:a.jsx(n.code,{className:"language-jsx",children:`<BakaButton variant="tonal">Learn More</BakaButton>
`})}),`
`,a.jsx(n.h4,{id:"floating-action-button-fab",children:"Floating Action Button (FAB)"}),`
`,a.jsx(n.p,{children:"Floating Action Buttons (FABs) are typically used for promoting a primary action within your application. They are available in small, medium, large, and extended sizes."}),`
`,a.jsx(n.pre,{children:a.jsx(n.code,{className:"language-jsx",children:`<BakaButton variant={["fab", "small"]}>
  <BakaIcon>edit</BakaIcon>
</BakaButton>
<BakaButton variant={"fab"}>
  <BakaIcon>edit</BakaIcon>
</BakaButton>
`})})]})}function F(e={}){const{wrapper:n}=Object.assign({},I(),e.components);return n?a.jsx(n,Object.assign({},e,{children:a.jsx(u,e)})):u(e)}const w=["filled","outlined","text","elevated","tonal"],l={hovered:!1,focused:!1,activated:!1,disabled:!1},L={title:"Material You/Primitives/Button",component:e=>a.jsx(t,{...e}),render:e=>a.jsx(t,{...e}),parameters:{layout:"centered",docs:{page:F}},tags:["autodocs"],argTypes:{variant:{control:"radio",options:w},children:{table:{disable:!0}}}},r={args:{children:"Label",variant:"filled",...l}},o={args:{toggleable:!1,selected:!1,variant:"icon",children:a.jsx(d,{children:"settings"}),...l},render:e=>{const{toggleable:n,...c}=e;return a.jsx(t,{...c,variant:["icon",...Array.isArray(e.variant)?e.variant:[e.variant],n?"toggle":null].filter(Boolean)})},argTypes:{variant:{control:"radio",mapping:{icon:"icon","+ filled":["icon","filled"],"+ tonal":["icon","tonal"],"+ outlined":["icon","outlined"]},options:["icon","+ filled","+ tonal","+ outlined"]},selected:{control:"boolean",if:{arg:"toggleable"}},toggleable:{control:"boolean"}}},i={render:e=>{const{icon:n,children:c,...A}=e;return a.jsxs(t,{...A,children:[a.jsx(d,{children:n}),c]})},args:{children:"Label",icon:"add",variant:"filled",...l}},s={render:({extended:e,...n})=>a.jsxs(t,{...n,variant:[...Array.isArray(n.variant)?n.variant:[n.variant],...Array.isArray(n["variant (size)"])?n["variant (size)"]:[n["variant (size)"]],e?"extended":null],children:[n.children," ",e&&"Label"]}),args:{children:a.jsx(d,{children:"mode_edit"}),variant:"fab","variant (size)":"medium",extended:!1,...l},argTypes:{variant:{control:"radio",mapping:{fab:"fab","+ primary":["fab","primary"],"+ secondary":["fab","secondary"],"+ tertiary":["fab","tertiary"]},options:["fab","+ primary","+ secondary","+ tertiary"]},"variant (size)":{control:"radio",options:["small","medium","large"]},extended:{control:"boolean"}}};var h,B,p;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: "Label",
    variant: "filled",
    ...defaultArgs
  }
}`,...(p=(B=r.parameters)==null?void 0:B.docs)==null?void 0:p.source}}};var m,x,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    toggleable: false,
    selected: false,
    variant: "icon",
    children: <BakaIcon>settings</BakaIcon>,
    ...defaultArgs
  },
  render: props => {
    const {
      toggleable,
      ...other
    } = props;
    return <BakaButton {...other} variant={(["icon", ...(Array.isArray(props.variant) ? props.variant : [props.variant]), toggleable ? "toggle" : null].filter(Boolean) as ButtonVariant[])} />;
  },
  argTypes: {
    variant: {
      control: "radio",
      mapping: {
        ["icon"]: "icon",
        ["+ filled"]: ["icon", "filled"],
        ["+ tonal"]: ["icon", "tonal"],
        ["+ outlined"]: ["icon", "outlined"]
      },
      options: ["icon", "+ filled", "+ tonal", "+ outlined"]
    },
    selected: {
      control: "boolean",
      if: {
        arg: "toggleable"
      }
    },
    toggleable: {
      control: "boolean"
    }
  }
}`,...(g=(x=o.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var b,f,j;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: (props: BakaButtonProps & {
    icon?: string;
  }) => {
    const {
      icon,
      children,
      ...other
    } = props;
    return <BakaButton {...other}>
        <BakaIcon>{icon}</BakaIcon>
        {children}
      </BakaButton>;
  },
  args: {
    children: "Label",
    icon: "add",
    variant: "filled",
    ...defaultArgs
  }
}`,...(j=(f=i.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var k,v,y;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: ({
    extended,
    ...props
  }) => {
    return <BakaButton {...props} variant={[...(Array.isArray(props.variant) ? props.variant : [props.variant]), ...(Array.isArray(props["variant (size)"]) ? props["variant (size)"] : [props["variant (size)"]]), extended ? "extended" : null]}>
        {props.children} {extended && "Label"}
      </BakaButton>;
  },
  args: {
    children: <BakaIcon>mode_edit</BakaIcon>,
    variant: "fab",
    ["variant (size)"]: "medium",
    extended: false,
    ...defaultArgs
  },
  argTypes: {
    variant: {
      control: "radio",
      mapping: {
        ["fab"]: "fab",
        ["+ primary"]: ["fab", "primary"],
        ["+ secondary"]: ["fab", "secondary"],
        ["+ tertiary"]: ["fab", "tertiary"]
      },
      options: ["fab", "+ primary", "+ secondary", "+ tertiary"]
    },
    ["variant (size)"]: {
      control: "radio",
      options: ["small", "medium", "large"]
    },
    extended: {
      control: "boolean"
    }
  }
}`,...(y=(v=s.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const M=["Basic","IconButton","TextAndIcon","FAB"];export{r as Basic,s as FAB,o as IconButton,i as TextAndIcon,M as __namedExportsOrder,L as default};
//# sourceMappingURL=Button.stories-f4161cd5.js.map
