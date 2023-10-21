import{j as n}from"./jsx-runtime-ed146b25.js";import{T as o,R as f,S as k,P as B,k as s,Y as l,m as c,O as t,_ as d}from"./baka-ui-cb88fe88.js";import{u as j}from"./index-09fac16e.js";import"./index-c6dae603.js";function p(e){const a=Object.assign({h1:"h1",p:"p",h3:"h3",pre:"pre",code:"code",ul:"ul",li:"li"},j(),e.components);return n.jsxs(n.Fragment,{children:[n.jsx(a.h1,{id:"dialog-overivew",children:"Dialog Overivew"}),`
`,n.jsx(a.p,{children:"The Dialog component in the Baka UI library is a versatile modal window that can be used to display critical information, prompt for decisions, or present content that requires user attention."}),`
`,n.jsx(a.h3,{id:"installation",children:"Installation"}),`
`,n.jsx(a.p,{children:"Before using the Dialog component, make sure you have the Baka UI library installed in your project:"}),`
`,n.jsx(a.pre,{children:n.jsx(a.code,{className:"language-bash",children:`npm install baka-ui
# or
yarn add baka-ui
`})}),`
`,n.jsx(a.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,n.jsxs(a.p,{children:["You can use the Dialog component by importing it from ",n.jsx(a.code,{children:"baka-ui"})," and adding it to your JSX code:"]}),`
`,n.jsx(a.pre,{children:n.jsx(a.code,{className:"language-jsx",children:`import { BakaDialog } from "baka-ui";

function MyComponent() {
  return (
    <BakaDialog>
      {/* Dialog content goes here */}
    </BakaDialog>
  );
}
`})}),`
`,n.jsx(a.h3,{id:"props",children:"Props"}),`
`,n.jsx(a.p,{children:"The Dialog component supports the following style props:"}),`
`,n.jsxs(a.ul,{children:[`
`,n.jsxs(a.li,{children:[n.jsx(a.code,{children:"style"}),": An object representing the CSS styles for the dialog, including width, height, and more."]}),`
`]}),`
`,n.jsx(a.h3,{id:"examples",children:"Examples"}),`
`,n.jsx(a.p,{children:"Here are some examples of using the Dialog component:"}),`
`,n.jsx(a.pre,{children:n.jsx(a.code,{className:"language-jsx",children:`import { BakaDialog } from "baka-ui";

function MyComponent() {
  return (
    <div>
      <BakaDialog style={{ width: 312 }}>
        {/* Dialog content goes here */}
      </BakaDialog>
    </div>
  );
}
`})})]})}function v(e={}){const{wrapper:a}=Object.assign({},j(),e.components);return a?n.jsx(a,Object.assign({},e,{children:n.jsx(p,e)})):p(e)}const T={title:"Material You/Primitives/Dialog",component:e=>n.jsx(o,{...e}),render:e=>n.jsx(o,{...e}),parameters:{layout:"centered",docs:{page:v}},tags:["autodocs"]},i={args:{variant:"basic",icon:!1},argTypes:{variant:{control:"radio",options:["basic","full-screen"]},icon:{control:"boolean"}},render:e=>n.jsxs(o,{style:{width:320},variant:e.variant,children:[n.jsxs("div",{style:{display:"flex",gap:16,flexDirection:"column"},children:[e.icon&&n.jsx(f,{style:{justifyContent:"center"},children:"mobile_friendly"}),n.jsx(k,{style:{display:"flex",justifyContent:e.icon?"center":"flex-start"},variant:"headline-small",children:"Basic dialog title"}),n.jsx(B,{variant:"body-medium",children:"A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made."})]}),n.jsxs("div",{style:{display:"flex",gap:8,width:"100%",justifyContent:"flex-end"},children:[n.jsx(s,{variant:["text"],children:"Action 2"}),n.jsx(s,{variant:["text"],children:"Action 1"})]})]}),parameters:{docs:{storyDescription:"A basic dialog with title and description."}}},r={args:{variant:"basic",icon:!1},argTypes:{variant:{control:"radio",options:["basic","full-screen"]},icon:{control:"boolean"}},render:e=>n.jsxs(o,{style:{width:320},variant:e.variant,children:[n.jsxs("div",{style:{display:"flex",gap:16,flexDirection:"column"},children:[e.icon&&n.jsx(f,{style:{justifyContent:"center"},children:"mobile_friendly"}),n.jsx(k,{style:{display:"flex",justifyContent:e.icon?"center":"flex-start"},variant:"headline-small",children:"Dialog Title"}),n.jsx(B,{variant:"body-medium",children:"A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made."})]}),n.jsxs("ul",{style:{background:"none",padding:0,margin:0,width:"calc(100% + 48px)",marginInline:"-24px"},children:[n.jsxs(l,{children:[n.jsx(c,{children:"A"}),n.jsx(t,{style:{flexGrow:1},variant:"body-large",children:"BakaList item"}),n.jsx(t,{children:"100+"}),n.jsx(d,{readOnly:!0})]}),n.jsxs(l,{children:[n.jsx(c,{children:"A"}),n.jsx(t,{style:{flexGrow:1},variant:"body-large",children:"BakaList item"}),n.jsx(t,{children:"100+"}),n.jsx(d,{readOnly:!0,checked:!0})]}),n.jsxs(l,{children:[n.jsx(c,{children:"A"}),n.jsx(t,{style:{flexGrow:1},variant:"body-large",children:"BakaList item"}),n.jsx(t,{children:"100+"}),n.jsx(d,{readOnly:!0,checked:!0})]})]}),n.jsxs("div",{style:{display:"flex",gap:8,width:"100%",justifyContent:"flex-end"},children:[n.jsx(s,{variant:["text"],children:"Action 2"}),n.jsx(s,{variant:["text"],children:"Action 1"})]})]}),parameters:{docs:{storyDescription:"A dialog with a list of items and actions."}}};var x,h,m;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: "basic",
    icon: false
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["basic", "full-screen"]
    },
    icon: {
      control: "boolean"
    }
  },
  render: args => {
    return <BakaDialog style={{
      width: 320
    }} variant={args.variant}>
        <div style={{
        display: "flex",
        gap: 16,
        flexDirection: "column"
      }}>
          {args.icon && <BakaIcon style={{
          justifyContent: "center"
        }}>mobile_friendly</BakaIcon>}
          <BakaHeading style={{
          display: "flex",
          justifyContent: args.icon ? "center" : "flex-start"
        }} variant={"headline-small"}>
            Basic dialog title
          </BakaHeading>
          <BakaParagraph variant={"body-medium"}>
            A dialog is a type of modal window that appears in front of app content to provide
            critical information, or prompt for a decision to be made.
          </BakaParagraph>
        </div>
        <div style={{
        display: "flex",
        gap: 8,
        width: "100%",
        justifyContent: "flex-end"
      }}>
          <BakaButton variant={["text"]}>Action 2</BakaButton>
          <BakaButton variant={["text"]}>Action 1</BakaButton>
        </div>
      </BakaDialog>;
  },
  parameters: {
    docs: {
      storyDescription: "A basic dialog with title and description."
    }
  }
}`,...(m=(h=i.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var g,u,y;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: "basic",
    icon: false
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["basic", "full-screen"]
    },
    icon: {
      control: "boolean"
    }
  },
  render: args => {
    return <BakaDialog style={{
      width: 320
    }} variant={args.variant}>
        {/* TODO: extract to sub-component */}
        <div style={{
        display: "flex",
        gap: 16,
        flexDirection: "column"
      }}>
          {args.icon && <BakaIcon style={{
          justifyContent: "center"
        }}>mobile_friendly</BakaIcon>}
          <BakaHeading style={{
          display: "flex",
          justifyContent: args.icon ? "center" : "flex-start"
        }} variant={"headline-small"}>
            Dialog Title
          </BakaHeading>
          <BakaParagraph variant={"body-medium"}>
            A dialog is a type of modal window that appears in front of app content to provide
            critical information, or prompt for a decision to be made.
          </BakaParagraph>
        </div>
        <ul style={{
        background: "none",
        padding: 0,
        margin: 0,
        width: "calc(100% + 48px)",
        marginInline: "-24px"
      }}>
          <BakaListItem>
            <BakaAvatar>A</BakaAvatar>
            <BakaText style={{
            flexGrow: 1
          }} variant={"body-large"}>
              BakaList item
            </BakaText>
            <BakaText>100+</BakaText>
            <BakaCheckbox readOnly={true} />
          </BakaListItem>
          <BakaListItem>
            <BakaAvatar>A</BakaAvatar>
            <BakaText style={{
            flexGrow: 1
          }} variant={"body-large"}>
              BakaList item
            </BakaText>
            <BakaText>100+</BakaText>
            <BakaCheckbox readOnly={true} checked={true} />
          </BakaListItem>
          <BakaListItem>
            <BakaAvatar>A</BakaAvatar>
            <BakaText style={{
            flexGrow: 1
          }} variant={"body-large"}>
              BakaList item
            </BakaText>
            <BakaText>100+</BakaText>
            <BakaCheckbox readOnly={true} checked={true} />
          </BakaListItem>
        </ul>
        <div style={{
        display: "flex",
        gap: 8,
        width: "100%",
        justifyContent: "flex-end"
      }}>
          <BakaButton variant={["text"]}>Action 2</BakaButton>
          <BakaButton variant={["text"]}>Action 1</BakaButton>
        </div>
      </BakaDialog>;
  },
  parameters: {
    docs: {
      storyDescription: "A dialog with a list of items and actions."
    }
  }
}`,...(y=(u=r.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const C=["Basic","WithList"];export{i as Basic,r as WithList,C as __namedExportsOrder,T as default};
//# sourceMappingURL=Dialog.stories-0157374c.js.map
