import{j as e}from"./jsx-runtime-ed146b25.js";import{b as o}from"./baka-ui-74a68acc.js";import{u as l}from"./index-09fac16e.js";import"./index-c6dae603.js";function t(a){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",code:"code",pre:"pre",ul:"ul",li:"li",strong:"strong",h4:"h4"},l(),a.components);return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"badge",children:"Badge"}),`
`,e.jsx(n.p,{children:'Welcome to the documentation for the "Badge" component in the Baka UI Library. The "Badge" component is a small, self-contained element used to display numerical or status information.'}),`
`,e.jsx(n.h2,{id:"introduction",children:"Introduction"}),`
`,e.jsx(n.p,{children:'The "Badge" component is a simple but versatile element that can be used to display various types of information. Whether you need to show a count, a status indicator, or any other numerical value, the "Badge" component has you covered.'}),`
`,e.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:['To use the "Badge" component, import it from ',e.jsx(n.code,{children:"baka-ui"})," and include it in your JSX code. Here's a basic example:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { BakaBadge } from "baka-ui";

// Inside your component:
<BakaBadge>3</BakaBadge>
`})}),`
`,e.jsx(n.h3,{id:"variants",children:"Variants"}),`
`,e.jsx(n.p,{children:'The "Badge" component offers different variants to suit your specific needs:'}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Self-container"}),": A badge without any content."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Single-digit"}),": A badge designed to display a single-digit number."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Multi-digit"}),": A badge capable of displaying multiple digits."]}),`
`]}),`
`,e.jsx(n.h3,{id:"constructed-badge",children:"Constructed Badge"}),`
`,e.jsx(n.p,{children:'You can also create a "Badge" by using the "BakaLabel" component within the "BakaBadge" component. This allows you to include additional content alongside the badge, making it more informative.'}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { BakaBadge, BakaLabel } from "baka-ui";

// Constructed Badge examples:
<BakaBadge variant={"single-digit"}>
  <BakaLabel>3</BakaLabel>
</BakaBadge>
<BakaBadge variant={"multi-digit"}>
  <BakaLabel>32</BakaLabel>
</BakaBadge>
`})}),`
`,e.jsx(n.h3,{id:"usage-guidelines",children:"Usage Guidelines"}),`
`,e.jsx(n.p,{children:'When using the "Badge" component, consider the following guidelines:'}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Self-container Badge"}),": Use the self-container badge when you only need a simple visual indicator without additional content."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Single-digit and Multi-digit Badges"}),": Choose the appropriate variant based on the expected content. Single-digit badges are ideal for displaying single-digit numbers, while multi-digit badges are suitable for longer numbers."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Constructed Badges"}),': If you need to provide additional context or content alongside the badge, use the constructed badge with the "BakaLabel" component.']}),`
`]}),`
`,e.jsx(n.h2,{id:"real-world-examples",children:"Real-World Examples"}),`
`,e.jsx(n.p,{children:'Here are some real-world examples of using different "Badge" variants:'}),`
`,e.jsx(n.h4,{id:"notification-count",children:"Notification Count"}),`
`,e.jsx(n.p,{children:"You can use a single-digit badge to display the count of unread notifications."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<BakaBadge variant={"single-digit"}>3</BakaBadge>
`})}),`
`,e.jsx(n.h4,{id:"message-count",children:"Message Count"}),`
`,e.jsx(n.p,{children:"For situations where you need to display a larger count, such as the number of messages in a chat, you can use a multi-digit badge."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<BakaBadge variant={"multi-digit"}>32</BakaBadge>
`})}),`
`,e.jsx(n.h4,{id:"constructed-badge-with-bakalabel",children:"Constructed Badge with BakaLabel"}),`
`,e.jsx(n.p,{children:'In cases where you want to provide additional information alongside the badge, you can use a constructed badge with the "BakaLabel" component.'}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<BakaBadge variant={"single-digit"}>
  <BakaLabel>New</BakaLabel>
</BakaBadge>
`})}),`
`,e.jsx(n.p,{children:'The "Badge" component is a versatile tool for adding numerical or status indicators to your user interface, helping to enhance user experience and provide valuable information at a glance.'})]})}function c(a={}){const{wrapper:n}=Object.assign({},l(),a.components);return n?e.jsx(n,Object.assign({},a,{children:e.jsx(t,a)})):t(a)}const m={title:"Material You/Primitives/Badge",component:o,parameters:{layout:"centered",docs:{page:c}},tags:["autodocs"],argTypes:{}},i={render:a=>e.jsx(o,{...a,variant:"single-digit",children:(()=>{switch(a.variant){case"dot":return null;case"single-digit":return 1;case"multi-digit":return 42}})()}),args:{children:"Badge",variant:"single-digit"},argTypes:{variant:{control:"radio",options:["dot","single-digit","multi-digit"]}}};var s,d,r;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: props => {
    return <BakaBadge {...props} variant={"single-digit"}>
        {(() => {
        switch (props.variant) {
          case "dot":
            return null;
          case "single-digit":
            return 1;
          case "multi-digit":
            return 42;
        }
      })()}
      </BakaBadge>;
  },
  args: {
    children: "Badge",
    variant: "single-digit"
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["dot", "single-digit", "multi-digit"]
    }
  }
}`,...(r=(d=i.parameters)==null?void 0:d.docs)==null?void 0:r.source}}};const x=["Basic"];export{i as Basic,x as __namedExportsOrder,m as default};
//# sourceMappingURL=Badge.stories-622d4904.js.map
