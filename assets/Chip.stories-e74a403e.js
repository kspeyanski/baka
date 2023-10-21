import{j as a}from"./jsx-runtime-ed146b25.js";import{p as l,m as t,R as i}from"./baka-ui-cb88fe88.js";import{u as p}from"./index-09fac16e.js";import"./index-c6dae603.js";function c(e){const n=Object.assign({h1:"h1",p:"p",h3:"h3",pre:"pre",code:"code",ul:"ul",li:"li"},p(),e.components);return a.jsxs(a.Fragment,{children:[a.jsx(n.h1,{id:"chip",children:"Chip"}),`
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
`})})]})}function k(e={}){const{wrapper:n}=Object.assign({},p(),e.components);return n?a.jsx(n,Object.assign({},e,{children:a.jsx(c,e)})):c(e)}const g={hovered:!1,focused:!1,activated:!1,dragged:!1,selected:!1},x={title:"Material You/Primitives/Chip",component:e=>a.jsx(l,{...e}),parameters:{layout:"centered",docs:{page:k}},args:{},tags:["autodocs"]},o={render:e=>{const{configuration:n,...r}=e;switch(n){case"BakaLabel & trailing icon":return a.jsxs(l,{...r,label:"BakaLabel & trailing icon",children:[a.jsx("span",{children:"BakaLabel"}),a.jsx(i,{children:"close"})]});case"Leading BakaIcon & label":return a.jsxs(l,{...r,label:"Leading BakaIcon & label",children:[a.jsx(i,{variant:"primary",children:"local_taxi"}),a.jsx("span",{children:"BakaLabel"})]});case"Leading icon, label & trailing icon":return a.jsxs(l,{...r,label:"Leading icon, label & trailing icon",children:[a.jsx(i,{variant:"primary",children:"local_taxi"}),a.jsx("span",{children:"BakaLabel"}),a.jsx(i,{children:"close"})]});case"BakaLabel & Avatar":return a.jsxs(l,{...r,label:"BakaLabel & Avatar",children:[a.jsx(t,{children:e.selected?a.jsx(i,{variant:["filled"],children:"check"}):a.jsx("img",{src:"/avatar-light.svg"})}),a.jsx("span",{children:"BakaLabel"})]});case"BakaLabel, avatar & icon":return a.jsxs(l,{...r,label:"BakaLabel, avatar & icon",children:[a.jsx(t,{children:e.selected?a.jsx(i,{variant:["filled"],children:"check"}):a.jsx("img",{src:"/avatar-light.svg"})}),a.jsx("span",{children:"BakaLabel"}),a.jsx(i,{children:"close"})]});default:return a.jsx(l,{...r,children:"BakaLabel"})}},args:{variant:"normal",configuration:"BakaLabel only",...g},argTypes:{configuration:{control:"radio",map:{"BakaLabel only":null,"BakaLabel & trailing icon":"trailing-icon","Leading BakaIcon & label":"leading-icon","Leading icon, label & trailing icon":"leading-icon-trailing-icon","BakaLabel & Avatar":"avatar","BakaLabel, avatar & trailing icon":"avatar-trailing-icon"},options:["BakaLabel only","BakaLabel & trailing icon","Leading BakaIcon & label","Leading icon, label & trailing icon","BakaLabel & Avatar","BakaLabel, avatar & icon"]},variant:{control:"radio",map:{normal:null,elevated:"elevated"},options:["normal","elevated"]}}};var s,d,h;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: props => {
    const {
      configuration,
      ...other
    } = props;
    switch (configuration) {
      case "BakaLabel & trailing icon":
        return <BakaChip {...other} label="BakaLabel & trailing icon">
            <span>BakaLabel</span>
            <BakaIcon>close</BakaIcon>
          </BakaChip>;
      case "Leading BakaIcon & label":
        return <BakaChip {...other} label="Leading BakaIcon & label">
            <BakaIcon variant={"primary"}>local_taxi</BakaIcon>
            <span>BakaLabel</span>
          </BakaChip>;
      case "Leading icon, label & trailing icon":
        return <BakaChip {...other} label="Leading icon, label & trailing icon">
            <BakaIcon variant={"primary"}>local_taxi</BakaIcon>
            <span>BakaLabel</span>
            <BakaIcon>close</BakaIcon>
          </BakaChip>;
      case "BakaLabel & Avatar":
        return <BakaChip {...other} label="BakaLabel & Avatar">
            <BakaAvatar>
              {props.selected ? <BakaIcon variant={["filled"]}>check</BakaIcon> : <img src="/avatar-light.svg" />}
            </BakaAvatar>
            <span>BakaLabel</span>
          </BakaChip>;
      case "BakaLabel, avatar & icon":
        return <BakaChip {...other} label="BakaLabel, avatar & icon">
            <BakaAvatar>
              {props.selected ? <BakaIcon variant={["filled"]}>check</BakaIcon> : <img src="/avatar-light.svg" />}
            </BakaAvatar>
            <span>BakaLabel</span>
            <BakaIcon>close</BakaIcon>
          </BakaChip>;
      default:
        return <BakaChip {...other}>BakaLabel</BakaChip>;
    }
  },
  args: {
    // @ts-expect-error - \`normal\` is the default value
    variant: "normal",
    configuration: "BakaLabel only",
    ...defaultArgs
  },
  argTypes: {
    configuration: {
      control: "radio",
      map: {
        "BakaLabel only": null,
        "BakaLabel & trailing icon": "trailing-icon",
        "Leading BakaIcon & label": "leading-icon",
        "Leading icon, label & trailing icon": "leading-icon-trailing-icon",
        "BakaLabel & Avatar": "avatar",
        "BakaLabel, avatar & trailing icon": "avatar-trailing-icon"
      },
      options: ["BakaLabel only", "BakaLabel & trailing icon", "Leading BakaIcon & label", "Leading icon, label & trailing icon", "BakaLabel & Avatar", "BakaLabel, avatar & icon"]
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
}`,...(h=(d=o.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const v=["Basic"];export{o as Basic,v as __namedExportsOrder,x as default};
//# sourceMappingURL=Chip.stories-e74a403e.js.map
