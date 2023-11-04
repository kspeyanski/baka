import{j as a}from"./jsx-runtime-9c4ae004.js";import{B as t}from"./avatar-d223fbea.js";import{c as u,v as m}from"./variant-class-names-08f4b07b.js";import{s as k}from"./state-attributes-f1b2bd32.js";import{B as l}from"./icon-e14e50b0.js";import{u as p}from"./index-2ef8b458.js";import"./index-1b03fe98.js";const r=e=>{const{as:n="span",selected:i,hovered:B,focused:L,activated:j,disabled:f,variant:g,dragged:C,...b}=e;return a.jsx(n,{...b,className:u("baka-chip",e.className,k(e),m(g))})};function c(e){const n=Object.assign({h1:"h1",p:"p",h3:"h3",pre:"pre",code:"code",ul:"ul",li:"li"},p(),e.components);return a.jsxs(a.Fragment,{children:[a.jsx(n.h1,{id:"chip",children:"Chip"}),`
`,a.jsx(n.p,{children:"The Chip component in the Baka UI library is a versatile element that can display labels and icons in a compact format. Chips are commonly used to represent tags, categories, or actions in your web application."}),`
`,a.jsx(n.h3,{id:"installation",children:"Installation"}),`
`,a.jsx(n.p,{children:"Before using the Chip component, make sure you have the Baka UI library installed in your project:"}),`
`,a.jsx(n.pre,{children:a.jsx(n.code,{className:"language-bash",children:`npm install baka-ui
# or
yarn add baka-ui
`})}),`
`,a.jsx(n.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,a.jsxs(n.p,{children:["You can use the Chip component by importing it from ",a.jsx(n.code,{children:"baka-ui"})," and adding it to your JSX code:"]}),`
`,a.jsx(n.pre,{children:a.jsx(n.code,{className:"language-jsx",children:`import { BakaChip } from "baka-ui";

function MyComponent() {
  return <BakaChip>BakaLabel</BakaChip>;
}
`})}),`
`,a.jsx(n.h3,{id:"props",children:"Props"}),`
`,a.jsx(n.p,{children:"The Chip component supports the following props:"}),`
`,a.jsxs(n.ul,{children:[`
`,a.jsxs(n.li,{children:[a.jsx(n.code,{children:"variant"}),': An array of strings representing different variants such as "elevated," "selected," "hovered," "focused," "dragged," etc.']}),`
`,a.jsxs(n.li,{children:[a.jsx(n.code,{children:"selected"}),": A boolean that highlights the chip when set to ",a.jsx(n.code,{children:"true"}),"."]}),`
`,a.jsxs(n.li,{children:[a.jsx(n.code,{children:"hovered"}),": A boolean that changes the chip's appearance when hovered."]}),`
`,a.jsxs(n.li,{children:[a.jsx(n.code,{children:"focused"}),": A boolean that changes the chip's appearance when focused."]}),`
`,a.jsxs(n.li,{children:[a.jsx(n.code,{children:"dragged"}),": A boolean that changes the chip's appearance when dragged."]}),`
`]}),`
`,a.jsx(n.h3,{id:"examples",children:"Examples"}),`
`,a.jsx(n.p,{children:"Here are some examples of using the Chip component with different props:"}),`
`,a.jsx(n.pre,{children:a.jsx(n.code,{className:"language-jsx",children:`import { BakaChip } from "baka-ui";

function MyComponent() {
  return (
    <div>
      <BakaChip>BakaLabel</BakaChip> {/* Default Chip */}
      <BakaChip selected={true}>BakaLabel</BakaChip> {/* Selected Chip */}
      <BakaChip hovered={true}>BakaLabel</BakaChip> {/* Hovered Chip */}
      <BakaChip focused={true}>BakaLabel</BakaChip> {/* Focused Chip */}
      <BakaChip dragged={true}>BakaLabel</BakaChip> {/* Dragged Chip */}
    </div>
  );
}
`})})]})}function v(e={}){const{wrapper:n}=Object.assign({},p(),e.components);return n?a.jsx(n,Object.assign({},e,{children:a.jsx(c,e)})):c(e)}const x={hovered:!1,focused:!1,activated:!1,dragged:!1,selected:!1},D={title:"Material You/Primitives/Chip",component:e=>a.jsx(r,{...e}),parameters:{layout:"centered",docs:{page:v}},args:{},tags:["autodocs"]},o={render:e=>{const{configuration:n,...i}=e;switch(n){case"Label & trailing icon":return a.jsxs(r,{...i,label:"Label & trailing icon",children:[a.jsx("span",{children:"Label"}),a.jsx(l,{children:"close"})]});case"Leading BakaIcon & label":return a.jsxs(r,{...i,label:"Leading BakaIcon & label",children:[a.jsx(l,{variant:"primary",children:"local_taxi"}),a.jsx("span",{children:"Label"})]});case"Leading icon, label & trailing icon":return a.jsxs(r,{...i,label:"Leading icon, label & trailing icon",children:[a.jsx(l,{variant:"primary",children:"local_taxi"}),a.jsx("span",{children:"Label"}),a.jsx(l,{children:"close"})]});case"Label & Avatar":return a.jsxs(r,{...i,label:"Label & Avatar",children:[a.jsx(t,{children:e.selected?a.jsx(l,{variant:["filled"],children:"check"}):a.jsx("img",{src:"./avatar-light.svg"})}),a.jsx("span",{children:"Label"})]});case"Label, avatar & icon":return a.jsxs(r,{...i,label:"Label, avatar & icon",children:[a.jsx(t,{children:e.selected?a.jsx(l,{variant:["filled"],children:"check"}):a.jsx("img",{src:"./avatar-light.svg"})}),a.jsx("span",{children:"Label"}),a.jsx(l,{children:"close"})]});default:return a.jsx(r,{...i,children:"Label"})}},args:{variant:"normal",configuration:"Label only",...x},argTypes:{configuration:{control:"radio",map:{"Label only":null,"Label & trailing icon":"trailing-icon","Leading BakaIcon & label":"leading-icon","Leading icon, label & trailing icon":"leading-icon-trailing-icon","Label & Avatar":"avatar","Label, avatar & trailing icon":"avatar-trailing-icon"},options:["Label only","Label & trailing icon","Leading BakaIcon & label","Leading icon, label & trailing icon","Label & Avatar","Label, avatar & icon"]},variant:{control:"radio",map:{normal:null,elevated:"elevated"},options:["normal","elevated"]}}};var s,d,h;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: props => {
    const {
      configuration,
      ...other
    } = props;
    switch (configuration) {
      case "Label & trailing icon":
        return <BakaChip {...other} label="Label & trailing icon">
            <span>Label</span>
            <BakaIcon>close</BakaIcon>
          </BakaChip>;
      case "Leading BakaIcon & label":
        return <BakaChip {...other} label="Leading BakaIcon & label">
            <BakaIcon variant={"primary"}>local_taxi</BakaIcon>
            <span>Label</span>
          </BakaChip>;
      case "Leading icon, label & trailing icon":
        return <BakaChip {...other} label="Leading icon, label & trailing icon">
            <BakaIcon variant={"primary"}>local_taxi</BakaIcon>
            <span>Label</span>
            <BakaIcon>close</BakaIcon>
          </BakaChip>;
      case "Label & Avatar":
        return <BakaChip {...other} label="Label & Avatar">
            <BakaAvatar>
              {props.selected ? <BakaIcon variant={["filled"]}>check</BakaIcon> : <img src="./avatar-light.svg" />}
            </BakaAvatar>
            <span>Label</span>
          </BakaChip>;
      case "Label, avatar & icon":
        return <BakaChip {...other} label="Label, avatar & icon">
            <BakaAvatar>
              {props.selected ? <BakaIcon variant={["filled"]}>check</BakaIcon> : <img src="./avatar-light.svg" />}
            </BakaAvatar>
            <span>Label</span>
            <BakaIcon>close</BakaIcon>
          </BakaChip>;
      default:
        return <BakaChip {...other}>Label</BakaChip>;
    }
  },
  args: {
    // @ts-expect-error - \`normal\` is the default value
    variant: "normal",
    configuration: "Label only",
    ...defaultArgs
  },
  argTypes: {
    configuration: {
      control: "radio",
      map: {
        "Label only": null,
        "Label & trailing icon": "trailing-icon",
        "Leading BakaIcon & label": "leading-icon",
        "Leading icon, label & trailing icon": "leading-icon-trailing-icon",
        "Label & Avatar": "avatar",
        "Label, avatar & trailing icon": "avatar-trailing-icon"
      },
      options: ["Label only", "Label & trailing icon", "Leading BakaIcon & label", "Leading icon, label & trailing icon", "Label & Avatar", "Label, avatar & icon"]
    },
    variant: {
      control: "radio",
      map: {
        normal: null,
        elevated: "elevated"
      },
      options: ["normal", "elevated"]
    }
  }
}`,...(h=(d=o.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const O=["Basic"];export{o as Basic,O as __namedExportsOrder,D as default};
//# sourceMappingURL=Chip.stories-d079f456.js.map
