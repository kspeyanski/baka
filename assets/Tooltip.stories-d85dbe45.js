import{j as a}from"./jsx-runtime-ed146b25.js";import{q as e,P as o,w as h,k as r}from"./baka-ui-cb88fe88.js";import{u as d}from"./index-09fac16e.js";import"./index-c6dae603.js";function s(t){const n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li"},d(),t.components);return a.jsxs(a.Fragment,{children:[a.jsx(n.h1,{id:"tooltip",children:"Tooltip"}),`
`,a.jsx(n.p,{children:'The Tooltip component in the "baka-ui" library allows you to display additional information or actions when users hover over or interact with an element.'}),`
`,a.jsx(n.h2,{id:"installation",children:"Installation"}),`
`,a.jsx(n.p,{children:'Before using the Tooltip component, make sure you have the "baka-ui" library installed in your project.'}),`
`,a.jsx(n.pre,{children:a.jsx(n.code,{className:"language-bash",children:`npm install baka-ui
`})}),`
`,a.jsx(n.h2,{id:"importing",children:"Importing"}),`
`,a.jsx(n.p,{children:"You can import the Tooltip component like this:"}),`
`,a.jsx(n.pre,{children:a.jsx(n.code,{className:"language-javascript",children:`import { BakaTooltip } from "baka-ui";
`})}),`
`,a.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,a.jsx(n.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,a.jsx(n.p,{children:"The Tooltip component can be used to wrap any element you want to add additional information or actions to. Here's a basic example:"}),`
`,a.jsx(n.pre,{children:a.jsx(n.code,{className:"language-jsx",children:`<BakaTooltip>
  <div className={styles["content"]}>
    <BakaLabel variant={"title-small"}>Title</BakaLabel>
    <BakaParagraph variant={"body-medium"}>
      Supporting line text lorem ipsum dolor sit amet, consectetur
    </BakaParagraph>
  </div>
  <div className={styles["actions"]}>
    <BakaButton variant={"text"}>Action</BakaButton>
    <BakaButton variant={"text"}>Action</BakaButton>
  </div>
</BakaTooltip>
`})}),`
`,a.jsx(n.h3,{id:"variations",children:"Variations"}),`
`,a.jsx(n.p,{children:"The Tooltip component supports different variations:"}),`
`,a.jsxs(n.ul,{children:[`
`,a.jsxs(n.li,{children:[a.jsx(n.code,{children:'variant={"plain"}'}),': Use the "plain" variant for simple text tooltips without additional styling.']}),`
`]}),`
`,a.jsx(n.pre,{children:a.jsx(n.code,{className:"language-jsx",children:`<BakaTooltip variant={"plain"}>
  <BakaText variant="body-small">Supporting text</BakaText>
</BakaTooltip>
`})}),`
`,a.jsx(n.h3,{id:"customization",children:"Customization"}),`
`,a.jsx(n.p,{children:"You can customize the width and style of the Tooltip by applying CSS styles directly to the component."}),`
`,a.jsx(n.pre,{children:a.jsx(n.code,{className:"language-jsx",children:`<BakaTooltip variant={"plain"} style={{ width: 184 }}>
  <BakaParagraph variant="body-small">
    Supporting text Body text string goes here psum dolor sit amet, consectetur adipiscing elit, sed
    do eiusmod tempor incididunt
  </BakaParagraph>
</BakaTooltip>
`})})]})}function m(t={}){const{wrapper:n}=Object.assign({},d(),t.components);return n?a.jsx(n,Object.assign({},t,{children:a.jsx(s,t)})):s(t)}const j={title:"Material You/Primitives/Tooltip",component:t=>a.jsx(e,{...t}),render:t=>a.jsx(e,{...t}),parameters:{layout:"centered",docs:{page:m}},tags:["autodocs"]},i={args:{variant:"basic",actions:!0},argTypes:{variant:{control:"radio",map:{basic:"",plain:"plain"},options:["basic","plain"]}},render:t=>t.variant==="plain"?a.jsx(e,{variant:t.variant,children:a.jsx(o,{variant:"body-small",children:"Supporting text"})}):a.jsxs(e,{style:{width:320},variant:t.variant,children:[a.jsxs("div",{style:{padding:"12px 16px 0 16px"},children:[a.jsx(h,{variant:"title-small",children:"Title"}),a.jsx(o,{variant:"body-medium",children:"Supporting line text lorem ipsum dolor sit amet, consectetur"})]}),t.actions?a.jsxs("div",{style:{display:"flex",gap:8,paddingInline:8},children:[a.jsx(r,{variant:"text",children:"Action"}),a.jsx(r,{variant:"text",children:"Action"})]}):null]}),parameters:{docs:{storyDescription:"A basic tooltip with title and description."}}};var l,p,c;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: ("basic" as BakaTooltipProps["variant"]),
    actions: true
  },
  argTypes: {
    variant: {
      control: "radio",
      map: {
        basic: "",
        plain: "plain"
      },
      options: ["basic", "plain"]
    }
  },
  render: args => {
    return args.variant === "plain" ? <BakaTooltip variant={args.variant}>
        <BakaParagraph variant="body-small">Supporting text</BakaParagraph>
      </BakaTooltip> : <BakaTooltip style={{
      width: 320
    }} variant={args.variant}>
        <div style={{
        padding: "12px 16px 0 16px"
      }}>
          <BakaLabel variant={"title-small"}>Title</BakaLabel>
          <BakaParagraph variant={"body-medium"}>
            Supporting line text lorem ipsum dolor sit amet, consectetur
          </BakaParagraph>
        </div>
        {args.actions ? <div style={{
        display: "flex",
        gap: 8,
        paddingInline: 8
      }}>
            <BakaButton variant={"text"}>Action</BakaButton>
            <BakaButton variant={"text"}>Action</BakaButton>
          </div> : null}
      </BakaTooltip>;
  },
  parameters: {
    docs: {
      storyDescription: "A basic tooltip with title and description."
    }
  }
}`,...(c=(p=i.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const B=["Basic"];export{i as Basic,B as __namedExportsOrder,j as default};
//# sourceMappingURL=Tooltip.stories-d85dbe45.js.map
