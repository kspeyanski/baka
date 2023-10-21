import{j as e}from"./jsx-runtime-ed146b25.js";import{y as s,m as u,O as v,w as i,k as d,R as j,P as y}from"./baka-ui-cb88fe88.js";import{u as g}from"./index-09fac16e.js";import"./index-c6dae603.js";function l(a){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",pre:"pre",h3:"h3",ul:"ul",li:"li"},g(),a.components);return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"card-component",children:"Card Component"}),`
`,e.jsx(n.p,{children:"The Card component is a versatile component for displaying content with a consistent and visually appealing design. It can be customized with different variants to match the style of your application."}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["To use the Card component, import it from ",e.jsx(n.code,{children:"baka-ui"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { BakaCard } from "baka-ui";
`})}),`
`,e.jsx(n.p,{children:"Then, you can create a Card with different variants and content as needed."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<BakaCard variant={"outlined"}>
  {/* Content goes here */}
</BakaCard>
`})}),`
`,e.jsx(n.h3,{id:"variants",children:"Variants"}),`
`,e.jsx(n.p,{children:"The Card component supports the following variants:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'"outlined"'}),": A card with an outlined border."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'"elevated"'}),": A card with elevated (raised) appearance."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'"filled"'}),": A card with a filled background color."]}),`
`]}),`
`,e.jsxs(n.p,{children:["You can also combine variants to create unique card styles, such as ",e.jsx(n.code,{children:'"["outlined", "horizontal"]"'})," for an outlined horizontal card."]}),`
`,e.jsx(n.h2,{id:"content",children:"Content"}),`
`,e.jsx(n.p,{children:"The content of a Card can be customized based on your needs. You can include text, images, buttons, and other components within the Card to display your content effectively."}),`
`,e.jsx(n.h3,{id:"example",children:"Example"}),`
`,e.jsx(n.p,{children:"Here's an example of how to create a Card with some content:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<BakaCard variant={"outlined"} style={{ width: 360 }}>
  <div>
    {/* Your content goes here */}
  </div>
</BakaCard>
`})}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"basic-card",children:"Basic Card"}),`
`,e.jsx(n.p,{children:"A basic Card with outlined variant:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<BakaCard variant={"outlined"} style={{ width: 360 }}>
  {/* Your content goes here */}
</BakaCard>
`})}),`
`,e.jsx(n.h3,{id:"elevated-card",children:"Elevated Card"}),`
`,e.jsx(n.p,{children:"An elevated Card with filled variant:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<BakaCard variant={"elevated"} style={{ width: 360 }}>
  {/* Your content goes here */}
</BakaCard>
`})}),`
`,e.jsx(n.h3,{id:"horizontal-card",children:"Horizontal Card"}),`
`,e.jsx(n.p,{children:"A horizontal Card with filled variant:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<BakaCard variant={["filled", "horizontal"]} style={{ width: 360 }}>
  {/* Your content goes here */}
</BakaCard>
`})}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"variant"}),": Specifies the visual style of the Card. It accepts a string or an array of strings for combining variants."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"style"}),": Customizes the styling of the Card, such as width and height."]}),`
`]}),`
`,e.jsx(n.h2,{id:"notes",children:"Notes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Be creative with the content you place inside the Card to make it visually appealing and informative."}),`
`]})]})}function f(a={}){const{wrapper:n}=Object.assign({},g(),a.components);return n?e.jsx(n,Object.assign({},a,{children:e.jsx(l,a)})):l(a)}const w={title:"Material You/Primitives/Card",component:a=>e.jsx(s,{...a}),parameters:{layout:"centered",docs:{page:f}},args:{variant:"outlined"},tags:["autodocs"]},t={render:a=>e.jsxs(s,{...a,style:{width:360},children:[e.jsxs("div",{style:{display:"flex",padding:"12px 4px 12px 16px",alignSelf:"stretch",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx(u,{children:e.jsx("span",{children:"A"})}),e.jsxs(v,{style:{display:"flex",flexDirection:"column",gap:4},children:[e.jsx(i,{variant:"title-medium",children:"Header"}),e.jsx(i,{variant:"body-medium",children:"Subhead"})]})]}),e.jsx(d,{variant:["icon"],children:e.jsx(j,{children:"more_vert"})})]}),e.jsx("div",{children:e.jsx("img",{src:"./media.png",alt:"media",width:720,height:376,style:{maxWidth:"100%",height:"auto"}})}),e.jsxs("div",{style:{display:"flex",alignSelf:"stretch",flexDirection:"column",gap:32,padding:16},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx(i,{variant:"body-large",children:"Title"}),e.jsx(i,{variant:"body-medium",children:"Subhead"})]}),e.jsx(y,{variant:"body-medium",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"}),e.jsxs("div",{style:{display:"flex",alignSelf:"stretch",justifyContent:"flex-end",gap:8},children:[e.jsx(d,{variant:["outlined"],children:"Enabled"}),e.jsx(d,{variant:["filled"],children:"Enabled"})]})]})]}),args:{variant:"outlined"},argTypes:{variant:{control:"radio",options:["outlined","elevated","filled"]}}},r={render:a=>e.jsxs(s,{variant:["horizontal",a.variant],style:{width:360},children:[e.jsxs("div",{style:{display:"flex",flexGrow:1,gap:16,padding:16,alignItems:"center"},children:[e.jsx(u,{children:e.jsx("span",{children:"A"})}),e.jsxs("div",{style:{display:"flex",flexGrow:1,flexDirection:"column",gap:4},children:[e.jsx(i,{variant:"title-medium",children:"Header"}),e.jsx(i,{variant:"body-medium",children:"Subhead"})]})]}),e.jsx("img",{src:"./media-small.png",alt:"media",width:80,height:80})]}),args:{variant:"outlined"},argTypes:{variant:{control:"radio",options:["outlined","elevated","filled"]}},parameters:{docs:{storyDescription:"A card displaying product information."}}};var o,c,h;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <BakaCard {...args} style={{
    width: 360
  }}>
      <div style={{
      display: "flex",
      padding: "12px 4px 12px 16px",
      alignSelf: "stretch",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
        <div style={{
        display: "flex",
        alignItems: "center",
        gap: 16
      }}>
          <BakaAvatar>
            <span>A</span>
          </BakaAvatar>
          <BakaText style={{
          display: "flex",
          flexDirection: "column",
          gap: 4
        }}>
            <BakaLabel variant={"title-medium"}>Header</BakaLabel>
            <BakaLabel variant={"body-medium"}>Subhead</BakaLabel>
          </BakaText>
        </div>
        <BakaButton variant={["icon"]}>
          <BakaIcon>more_vert</BakaIcon>
        </BakaButton>
      </div>
      <div>
        <img src="./media.png" alt="media" width={720} height={376} style={{
        maxWidth: "100%",
        height: "auto"
      }} />
      </div>
      <div style={{
      display: "flex",
      alignSelf: "stretch",
      flexDirection: "column",
      gap: 32,
      padding: 16
    }}>
        <div style={{
        display: "flex",
        flexDirection: "column"
      }}>
          <BakaLabel variant={"body-large"}>Title</BakaLabel>
          <BakaLabel variant={"body-medium"}>Subhead</BakaLabel>
        </div>
        <BakaParagraph variant={"body-medium"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        </BakaParagraph>
        <div style={{
        display: "flex",
        alignSelf: "stretch",
        justifyContent: "flex-end",
        gap: 8
      }}>
          <BakaButton variant={["outlined"]}>Enabled</BakaButton>
          <BakaButton variant={["filled"]}>Enabled</BakaButton>
        </div>
      </div>
    </BakaCard>,
  args: {
    variant: "outlined"
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["outlined", "elevated", "filled"]
    }
  }
}`,...(h=(c=t.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};var p,x,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <BakaCard variant={["horizontal", args.variant]} style={{
    width: 360
  }}>
      <div style={{
      display: "flex",
      flexGrow: 1,
      gap: 16,
      padding: 16,
      alignItems: "center"
    }}>
        <BakaAvatar>
          <span>A</span>
        </BakaAvatar>
        <div style={{
        display: "flex",
        flexGrow: 1,
        flexDirection: "column",
        gap: 4
      }}>
          <BakaLabel variant="title-medium">Header</BakaLabel>
          <BakaLabel variant="body-medium">Subhead</BakaLabel>
        </div>
      </div>

      <img src="./media-small.png" alt="media" width={80} height={80} />
    </BakaCard>,
  args: {
    variant: "outlined"
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["outlined", "elevated", "filled"]
    }
  },
  parameters: {
    docs: {
      storyDescription: "A card displaying product information."
    }
  }
}`,...(m=(x=r.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};const A=["Basic","Horizontal"];export{t as Basic,r as Horizontal,A as __namedExportsOrder,w as default};
//# sourceMappingURL=Card.stories-86781ef7.js.map
