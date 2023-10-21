import{j as a}from"./jsx-runtime-ed146b25.js";import{g as s,k as t,R as r,O as l,h as v}from"./baka-ui-cb88fe88.js";import{u as m}from"./index-09fac16e.js";import"./index-c6dae603.js";function c(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",code:"code",pre:"pre",ul:"ul",li:"li",h4:"h4",strong:"strong"},m(),e.components);return a.jsxs(a.Fragment,{children:[a.jsx(n.h1,{id:"bars",children:"Bars"}),`
`,a.jsx(n.p,{children:'Welcome to the documentation for the "Bars" components in the Baka UI Library. This section covers two essential components: "BakaTopBar" and "BakaBottomBar." These components play a crucial role in creating consistent and user-friendly interfaces within your web applications.'}),`
`,a.jsx(n.h2,{id:"bakatopbar",children:"BakaTopBar"}),`
`,a.jsx(n.h3,{id:"introduction",children:"Introduction"}),`
`,a.jsx(n.p,{children:'The "BakaTopBar" component is designed to create top navigation bars in your application. It provides a flexible and customizable way to handle top-level navigation, actions, and titles.'}),`
`,a.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,a.jsxs(n.p,{children:['To use the "BakaTopBar" component, simply import it from ',a.jsx(n.code,{children:"baka-ui"})," and include it in your JSX code. Here's a basic example:"]}),`
`,a.jsx(n.pre,{children:a.jsx(n.code,{className:"language-jsx",children:`import { BakaTopBar, BakaButton, BakaIcon } from "baka-ui";

// Inside your component:
<BakaTopBar>
  {/* Add buttons, text, or icons here */}
</BakaTopBar>
`})}),`
`,a.jsx(n.h3,{id:"props",children:"Props"}),`
`,a.jsx(n.p,{children:'The following props can be used to customize the "BakaTopBar" component:'}),`
`,a.jsxs(n.ul,{children:[`
`,a.jsxs(n.li,{children:[`
`,a.jsxs(n.p,{children:[a.jsx(n.code,{children:"variant"}),' (string or array of strings): Sets the variant of the top bar. Available options are "medium," "large," and "elevated." You can use an array for multiple variants.']}),`
`]}),`
`,a.jsxs(n.li,{children:[`
`,a.jsxs(n.p,{children:[a.jsx(n.code,{children:"style"})," (object): Allows you to apply custom CSS styles to the top bar."]}),`
`]}),`
`,a.jsxs(n.li,{children:[`
`,a.jsx(n.p,{children:"More props can be added based on your specific use case."}),`
`]}),`
`]}),`
`,a.jsx(n.h3,{id:"variants",children:"Variants"}),`
`,a.jsx(n.h4,{id:"medium-variant",children:"Medium Variant"}),`
`,a.jsx(n.pre,{children:a.jsx(n.code,{className:"language-jsx",children:`<BakaTopBar variant="medium">
  {/* Components for the medium-sized top bar */}
</BakaTopBar>
`})}),`
`,a.jsx(n.p,{children:'Use the "medium" variant when you need a top bar that adapts well to medium-sized screens. It provides a balanced layout for elements within the bar.'}),`
`,a.jsx(n.h4,{id:"large-variant",children:"Large Variant"}),`
`,a.jsx(n.pre,{children:a.jsx(n.code,{className:"language-jsx",children:`<BakaTopBar variant="large">
  {/* Components for the large top bar */}
</BakaTopBar>
`})}),`
`,a.jsx(n.p,{children:'The "large" variant is suitable for top bars with complex content or when you have more screen real estate to work with. It offers a spacious layout for arranging components.'}),`
`,a.jsx(n.h4,{id:"elevated-variant",children:"Elevated Variant"}),`
`,a.jsx(n.pre,{children:a.jsx(n.code,{className:"language-jsx",children:`<BakaTopBar variant="elevated">
  {/* Components for the elevated top bar */}
</BakaTopBar>
`})}),`
`,a.jsx(n.p,{children:'If you want to emphasize the importance of the top bar in your interface, the "elevated" variant adds a subtle shadow to create a visual elevation effect.'}),`
`,a.jsx(n.h4,{id:"real-world-example",children:"Real-World Example"}),`
`,a.jsx(n.p,{children:'In an e-commerce website, you can utilize the "BakaTopBar" to display essential information like user account details and a search icon, while the "BakaBottomBar" can host navigation links to product categories, a shopping cart icon, and a "Checkout" button.'}),`
`,a.jsx(n.h3,{id:"bakabottombar",children:"BakaBottomBar"}),`
`,a.jsx(n.h4,{id:"introduction-1",children:"Introduction"}),`
`,a.jsx(n.p,{children:`The "BakaBottomBar" component serves as a bottom navigation bar within your application. It's ideal for displaying primary actions or navigation items.`}),`
`,a.jsx(n.h4,{id:"usage-1",children:"Usage"}),`
`,a.jsxs(n.p,{children:['To use the "BakaBottomBar" component, import it from ',a.jsx(n.code,{children:"baka-ui"})," and add it to your JSX code. Here's a basic example:"]}),`
`,a.jsx(n.pre,{children:a.jsx(n.code,{className:"language-jsx",children:`import { BakaBottomBar, BakaButton, BakaIcon } from "baka-ui";

// Inside your component:
<BakaBottomBar>
  {/* Add buttons or icons here */}
</BakaBottomBar>
`})}),`
`,a.jsx(n.h4,{id:"props-1",children:"Props"}),`
`,a.jsx(n.p,{children:'The "BakaBottomBar" component supports the following props:'}),`
`,a.jsxs(n.ul,{children:[`
`,a.jsxs(n.li,{children:[`
`,a.jsxs(n.p,{children:[a.jsx(n.code,{children:"style"})," (object): Apply custom CSS styles to the bottom bar."]}),`
`]}),`
`,a.jsxs(n.li,{children:[`
`,a.jsx(n.p,{children:"More props can be added to suit your needs."}),`
`]}),`
`]}),`
`,a.jsx(n.h4,{id:"real-world-example-1",children:"Real-World Example"}),`
`,a.jsx(n.p,{children:`For a social media app, the "BakaTopBar" can feature the user's profile picture, notifications, and messaging icons, while the "BakaBottomBar" provides shortcuts to the user's feed, notifications, and profile pages.`}),`
`,a.jsx(n.h2,{id:"usage-guidelines",children:"Usage Guidelines"}),`
`,a.jsx(n.p,{children:'When deciding whether to use the "BakaTopBar" or "BakaBottomBar" in your application, consider the following guidelines:'}),`
`,a.jsxs(n.ul,{children:[`
`,a.jsxs(n.li,{children:[`
`,a.jsxs(n.p,{children:[a.jsx(n.strong,{children:"TopBar vs. BottomBar"}),': Use the "BakaTopBar" for top-level navigation and actions. On the other hand, the "BakaBottomBar" is more appropriate for primary bottom navigation.']}),`
`]}),`
`,a.jsxs(n.li,{children:[`
`,a.jsxs(n.p,{children:[a.jsx(n.strong,{children:"Variants"}),": Select the appropriate variant (medium, large, or elevated) for your top bar based on your application's layout and design requirements."]}),`
`]}),`
`,a.jsxs(n.li,{children:[`
`,a.jsxs(n.p,{children:[a.jsx(n.strong,{children:"Customization"}),": Customize the components further with additional CSS styles or by extending their functionality using props as needed."]}),`
`]}),`
`]}),`
`,a.jsx(n.h2,{id:"real-world-examples",children:"Real-World Examples"}),`
`,a.jsx(n.p,{children:`To provide a more practical context, let's explore some real-world examples of using both "BakaTopBar" and "BakaBottomBar" together in a single interface:`}),`
`,a.jsx(n.h4,{id:"e-commerce-website",children:"E-commerce Website"}),`
`,a.jsx(n.p,{children:'In an e-commerce website, you can utilize the "BakaTopBar" to display essential information like user account details and a search icon, while the "BakaBottomBar" can host navigation links to product categories, a shopping cart icon, and a "Checkout" button.'}),`
`,a.jsx(n.h4,{id:"social-media-app",children:"Social Media App"}),`
`,a.jsx(n.p,{children:`For a social media app, the "BakaTopBar" can feature the user's profile picture, notifications, and messaging icons, while the "BakaBottomBar" provides shortcuts to the user's feed, notifications, and profile pages.`}),`
`,a.jsx(n.p,{children:'These examples demonstrate how the "Bars" components can be effectively combined in different scenarios to enhance user experience and navigation within your web application.'})]})}function j(e={}){const{wrapper:n}=Object.assign({},m(),e.components);return n?a.jsx(n,Object.assign({},e,{children:a.jsx(c,e)})):c(e)}const b={title:"Material You/Primitives/Bars",parameters:{layout:"centered",docs:{page:j}},tags:["autodocs"],argTypes:{}},i={render:e=>{switch(e.variant){case"large":return a.jsxs(s,{style:{width:404},variant:[e.variant,e.elevated?"elevated":null].filter(Boolean),children:[a.jsxs("div",{style:{display:"flex",flex:1},children:[a.jsx("div",{style:{flex:1},children:a.jsx(t,{variant:"icon",children:a.jsx(r,{children:"arrow_back"})})}),a.jsx(t,{variant:"icon",children:a.jsx(r,{children:"attach_file"})}),a.jsx(t,{variant:"icon",children:a.jsx(r,{children:"today"})}),a.jsx(t,{variant:"icon",children:a.jsx(r,{children:"more_vert"})})]}),a.jsx("div",{style:{paddingInline:16},children:a.jsx(l,{variant:"title-large",style:{flexGrow:1,textAlign:"left"},children:"Title"})})]});case"medium":return a.jsxs(s,{style:{width:404},variant:[e.variant,e.elevated?"elevated":null].filter(Boolean),children:[a.jsxs("div",{style:{display:"flex",flex:1},children:[a.jsx("div",{style:{flex:1},children:a.jsx(t,{variant:"icon",children:a.jsx(r,{children:"arrow_back"})})}),a.jsx(t,{variant:"icon",children:a.jsx(r,{children:"attach_file"})}),a.jsx(t,{variant:"icon",children:a.jsx(r,{children:"today"})}),a.jsx(t,{variant:"icon",children:a.jsx(r,{children:"more_vert"})})]}),a.jsx("div",{style:{paddingInline:16},children:a.jsx(l,{variant:"title-large",style:{flexGrow:1,textAlign:"left"},children:"Title"})})]});case"small":default:return a.jsxs(s,{style:{width:404},variant:[e.variant,e.elevated?"elevated":null].filter(Boolean),children:[a.jsx(t,{variant:"icon",children:a.jsx(r,{children:"menu"})}),a.jsx(l,{variant:"title-large",style:{flexGrow:1,textAlign:"center"},children:"Product"}),a.jsx(t,{variant:"icon",children:a.jsx(r,{variant:"filled",children:"account_circle"})})]})}},args:{variant:"small",elevated:!1},argTypes:{elevated:{control:{type:"boolean"}},variant:{control:"radio",options:["small","medium","large"]}}},o={render:e=>a.jsx(a.Fragment,{children:a.jsxs(v,{style:{width:400,display:"flex",justifyContent:"space-between"},children:[a.jsx("div",{style:{display:"flex",gap:8},children:["circle","change_history","rectangle","pentagon","hexagon"].slice(0,e.items).map(n=>a.jsx(t,{variant:"icon",children:a.jsx(r,{children:n})}))}),e.FAB?a.jsx(t,{variant:["fab","secondary"],children:a.jsx(r,{children:"add"})}):null]})}),args:{items:3,FAB:!0},argTypes:{items:{control:{type:"range",min:1,max:5}},FAB:{control:"boolean"}}};var d,h,p;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    switch (args.variant) {
      case "large":
        return <BakaTopBar style={{
          width: 404
        }} variant={[args.variant, args.elevated ? "elevated" : null].filter(Boolean)}>
            <div style={{
            display: "flex",
            flex: 1
          }}>
              <div style={{
              flex: 1
            }}>
                <BakaButton variant={"icon"}>
                  <BakaIcon>arrow_back</BakaIcon>
                </BakaButton>
              </div>
              <BakaButton variant={"icon"}>
                <BakaIcon>attach_file</BakaIcon>
              </BakaButton>
              <BakaButton variant={"icon"}>
                <BakaIcon>today</BakaIcon>
              </BakaButton>
              <BakaButton variant={"icon"}>
                <BakaIcon>more_vert</BakaIcon>
              </BakaButton>
            </div>
            <div style={{
            paddingInline: 16
          }}>
              <BakaText variant="title-large" style={{
              flexGrow: 1,
              textAlign: "left"
            }}>
                Title
              </BakaText>
            </div>
          </BakaTopBar>;
      case "medium":
        return <BakaTopBar style={{
          width: 404
        }} variant={[args.variant, args.elevated ? "elevated" : null].filter(Boolean)}>
            <div style={{
            display: "flex",
            flex: 1
          }}>
              <div style={{
              flex: 1
            }}>
                <BakaButton variant={"icon"}>
                  <BakaIcon>arrow_back</BakaIcon>
                </BakaButton>
              </div>
              <BakaButton variant={"icon"}>
                <BakaIcon>attach_file</BakaIcon>
              </BakaButton>
              <BakaButton variant={"icon"}>
                <BakaIcon>today</BakaIcon>
              </BakaButton>
              <BakaButton variant={"icon"}>
                <BakaIcon>more_vert</BakaIcon>
              </BakaButton>
            </div>
            <div style={{
            paddingInline: 16
          }}>
              <BakaText variant="title-large" style={{
              flexGrow: 1,
              textAlign: "left"
            }}>
                Title
              </BakaText>
            </div>
          </BakaTopBar>;
      case "small":
      default:
        return <BakaTopBar style={{
          width: 404
        }} variant={[args.variant, args.elevated ? "elevated" : null].filter(Boolean)}>
            <BakaButton variant={"icon"}>
              <BakaIcon>menu</BakaIcon>
            </BakaButton>
            <BakaText variant="title-large" style={{
            flexGrow: 1,
            textAlign: "center"
          }}>
              Product
            </BakaText>
            <BakaButton variant={"icon"}>
              <BakaIcon variant={"filled"}>account_circle</BakaIcon>
            </BakaButton>
          </BakaTopBar>;
    }
  },
  args: {
    variant: "small",
    elevated: false
  },
  argTypes: {
    elevated: {
      control: {
        type: "boolean"
      }
    },
    variant: {
      control: "radio",
      options: ["small", "medium", "large"]
    }
  }
}`,...(p=(h=i.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var B,u,x;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => {
    return <>
        <BakaBottomBar style={{
        width: 400,
        display: "flex",
        justifyContent: "space-between"
      }}>
          <div style={{
          display: "flex",
          gap: 8
        }}>
            {["circle", "change_history", "rectangle", "pentagon", "hexagon"].slice(0, args.items).map(shape => <BakaButton variant={"icon"}>
                  <BakaIcon>{shape}</BakaIcon>
                </BakaButton>)}
          </div>
          {args.FAB ? <BakaButton variant={["fab", "secondary"]}>
              <BakaIcon>add</BakaIcon>
            </BakaButton> : null}
        </BakaBottomBar>
      </>;
  },
  args: {
    items: 3,
    FAB: true
  },
  argTypes: {
    items: {
      control: {
        type: "range",
        min: 1,
        max: 5
      }
    },
    FAB: {
      control: "boolean"
    }
  }
}`,...(x=(u=o.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const w=["TopBar","BottomBar"];export{o as BottomBar,i as TopBar,w as __namedExportsOrder,b as default};
//# sourceMappingURL=Bars.stories-adf468a1.js.map
