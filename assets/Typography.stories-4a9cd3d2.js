import{j as a}from"./jsx-runtime-ed146b25.js";import{O as c,y as i,S as r,w as l,P as b}from"./baka-ui-cb88fe88.js";import{u as f}from"./index-09fac16e.js";import"./index-c6dae603.js";function u(n){const e=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li"},f(),n.components);return a.jsxs(a.Fragment,{children:[a.jsx(e.h1,{id:"typography",children:"Typography"}),`
`,a.jsx(e.p,{children:'The Typography module in the "baka-ui" library provides a range of typographic components for styling text elements. These components allow you to apply consistent typography throughout your web application. Below are the details of the available typography components.'}),`
`,a.jsx(e.h2,{id:"installation",children:"Installation"}),`
`,a.jsx(e.p,{children:'Before using the Typography module, ensure you have the "baka-ui" library installed in your project:'}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-bash",children:`npm install baka-ui
`})}),`
`,a.jsx(e.h2,{id:"importing",children:"Importing"}),`
`,a.jsx(e.p,{children:"You can import the Typography components as follows:"}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-javascript",children:`import { BakaHeading, BakaText, BakaLabel, BakaParagraph } from "baka-ui";
`})}),`
`,a.jsx(e.h2,{id:"bakaheading",children:"BakaHeading"}),`
`,a.jsxs(e.p,{children:["The ",a.jsx(e.code,{children:"BakaHeading"})," component is used for headings in various sizes. It allows you to apply different styles to text elements."]}),`
`,a.jsx(e.h3,{id:"usage",children:"Usage"}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-jsx",children:`<BakaHeading as="h1" variant={"display-large"}>
  Display Large - Roboto 57/64 -0.25
</BakaHeading>
`})}),`
`,a.jsx(e.h3,{id:"available-variants",children:"Available Variants"}),`
`,a.jsxs(e.ul,{children:[`
`,a.jsxs(e.li,{children:[a.jsx(e.code,{children:"display-large"}),": Display Large - Roboto 57/64 -0.25"]}),`
`,a.jsxs(e.li,{children:[a.jsx(e.code,{children:"display-medium"}),": Display Medium - Roboto 57/64 -0.25"]}),`
`,a.jsxs(e.li,{children:[a.jsx(e.code,{children:"display-small"}),": Display Small - Roboto 57/64 -0.25"]}),`
`,a.jsxs(e.li,{children:[a.jsx(e.code,{children:"headline-large"}),": Headline Large - Roboto 32/40 . 0"]}),`
`,a.jsxs(e.li,{children:[a.jsx(e.code,{children:"headline-medium"}),": Headline Medium - Roboto 28/36 . 0"]}),`
`,a.jsxs(e.li,{children:[a.jsx(e.code,{children:"headline-small"}),": Headline Small - Roboto 24/32 . 0"]}),`
`]}),`
`,a.jsx(e.h2,{id:"bakatext",children:"BakaText"}),`
`,a.jsxs(e.p,{children:["The ",a.jsx(e.code,{children:"BakaText"})," component is a versatile text component for styling various types of text elements."]}),`
`,a.jsx(e.h3,{id:"usage-1",children:"Usage"}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-jsx",children:`<BakaText as="span" variant={"title-large"}>
  Title Large - Roboto Regular 22/28 . 0
</BakaText>
`})}),`
`,a.jsx(e.h3,{id:"available-variants-1",children:"Available Variants"}),`
`,a.jsxs(e.ul,{children:[`
`,a.jsxs(e.li,{children:[a.jsx(e.code,{children:"title-large"}),": Title Large - Roboto Regular 22/28 . 0"]}),`
`,a.jsxs(e.li,{children:[a.jsx(e.code,{children:"title-medium"}),": Title Medium - Roboto Medium 16/24 . +0.15"]}),`
`,a.jsxs(e.li,{children:[a.jsx(e.code,{children:"title-small"}),": Title Small - Roboto Medium 14/20 . +0.1"]}),`
`]}),`
`,a.jsx(e.h2,{id:"bakalabel",children:"BakaLabel"}),`
`,a.jsxs(e.p,{children:["The ",a.jsx(e.code,{children:"BakaLabel"})," component is designed for labeling elements in your application."]}),`
`,a.jsx(e.h3,{id:"usage-2",children:"Usage"}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-jsx",children:`<BakaLabel as="label" variant={"label-large"}>
  BakaLabel Large - Roboto Medium 14/20 . +0.1
</BakaLabel>
`})}),`
`,a.jsx(e.h3,{id:"available-variants-2",children:"Available Variants"}),`
`,a.jsxs(e.ul,{children:[`
`,a.jsxs(e.li,{children:[a.jsx(e.code,{children:"label-large"}),": BakaLabel Large - Roboto Medium 14/20 . +0.1"]}),`
`,a.jsxs(e.li,{children:[a.jsx(e.code,{children:"label-medium"}),": BakaLabel Medium - Roboto Medium 12/16 . +0.5"]}),`
`,a.jsxs(e.li,{children:[a.jsx(e.code,{children:"label-small"}),": BakaLabel Small - Roboto Medium 11/16 . +0.5"]}),`
`]}),`
`,a.jsx(e.h2,{id:"bakaparagraph",children:"BakaParagraph"}),`
`,a.jsxs(e.p,{children:["The ",a.jsx(e.code,{children:"BakaParagraph"})," component is used for styling body text and paragraphs."]}),`
`,a.jsx(e.h3,{id:"usage-3",children:"Usage"}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-jsx",children:`<BakaParagraph as="p" variant={"body-large"}>
  Body Large - Roboto 16/24 . +0.5
</BakaParagraph>
`})}),`
`,a.jsx(e.h3,{id:"available-variants-3",children:"Available Variants"}),`
`,a.jsxs(e.ul,{children:[`
`,a.jsxs(e.li,{children:[a.jsx(e.code,{children:"body-large"}),": Body Large - Roboto 16/24 . +0.5"]}),`
`,a.jsxs(e.li,{children:[a.jsx(e.code,{children:"body-medium"}),": Body Medium - Roboto 14/20 . +0.25"]}),`
`,a.jsxs(e.li,{children:[a.jsx(e.code,{children:"body-small"}),": Body Small - Roboto 12/16 . +0.4"]}),`
`]}),`
`,a.jsx(e.h2,{id:"additional-notes",children:"Additional Notes"}),`
`,a.jsxs(e.ul,{children:[`
`,a.jsx(e.li,{children:"The Typography module provides consistent and flexible typography styles for your application's text elements."}),`
`,a.jsx(e.li,{children:"You can easily apply different styles to headings, text, labels, and paragraphs using the provided variants."}),`
`,a.jsx(e.li,{children:"Customize the typography to match your design requirements while maintaining a consistent look and feel throughout your application."}),`
`]})]})}function F(n={}){const{wrapper:e}=Object.assign({},f(),n.components);return e?a.jsx(e,Object.assign({},n,{children:a.jsx(u,n)})):u(n)}const O={title:"Material You/Primitives/Typography",component:n=>a.jsx(c,{...n}),render:n=>a.jsx(c,{...n}),parameters:{layout:"centered",docs:{page:F}},tags:["autodocs"],argTypes:{}},o={render:()=>a.jsxs(a.Fragment,{children:[a.jsxs(i,{style:{padding:24},children:[a.jsx(r,{variant:"display-large",children:"Display Large — Roboto 57/64 -0.25"}),a.jsx(r,{variant:"display-medium",children:"Display Medium — Roboto 45/52 . 0"}),a.jsx(r,{variant:"display-small",children:"Display Small — Roboto 36/44 . 0"})]}),a.jsx("br",{}),a.jsxs(i,{style:{padding:24},children:[a.jsx(r,{variant:"headline-large",children:"Headline Large — Roboto 32/40 . 0"}),a.jsx(r,{variant:"headline-medium",children:"Headline Medium — Roboto 28/36 . 0"}),a.jsx(r,{variant:"headline-small",children:"Headline Small — Roboto 24/32 . 0"})]}),a.jsx("br",{}),a.jsxs(i,{style:{padding:24},children:[a.jsx(l,{variant:"title-large",children:"Title Large — Roboto Regular 22/28 . 0"}),a.jsx(l,{variant:"title-medium",children:"Title Medium — Roboto Medium 16/24 . +0.15"}),a.jsx(l,{variant:"title-small",children:"Title Small — Roboto Medium 14/20 . +0.1"})]}),a.jsx("br",{}),a.jsxs(i,{style:{padding:24},children:[a.jsx(l,{variant:"label-large",children:"Label Large — Roboto Medium 14/20 . +0.1"}),a.jsx(l,{variant:"label-medium",children:"Label Medium — Roboto Medium 12/16 . +0.5"}),a.jsx(l,{variant:"label-small",children:"Label Small — Roboto Medium 11/16 . +0.5"})]}),a.jsx("br",{}),a.jsxs(i,{style:{padding:24},children:[a.jsx(b,{variant:"body-large",children:"Body Large — Roboto 16/24 . +0.5"}),a.jsx(b,{variant:"body-medium",children:"Body Medium — Roboto 14/20 . +0.25"}),a.jsx(b,{variant:"body-small",children:"Body Small — Roboto 12/16 . +0.4"})]})]})},s={render:n=>a.jsx(r,{...n,children:(()=>{switch(n.variant){case"display-large":return a.jsxs(a.Fragment,{children:["Display Large ",a.jsx("br",{})," Roboto 57/64 -0.25"]});case"display-medium":return a.jsxs(a.Fragment,{children:["Display Medium ",a.jsx("br",{})," Roboto 45/52 . 0"]});case"display-small":return a.jsxs(a.Fragment,{children:["Display Small ",a.jsx("br",{})," Roboto 36/44 . 0"]});case"headline-large":return a.jsxs(a.Fragment,{children:["Headline Large ",a.jsx("br",{})," Roboto 32/40 . 0"]});case"headline-medium":return a.jsxs(a.Fragment,{children:["Headline Medium ",a.jsx("br",{})," Roboto 28/36 . 0"]});case"headline-small":return a.jsxs(a.Fragment,{children:["Headline Small ",a.jsx("br",{})," Roboto 24/32 . 0"]});default:return"Text"}})()}),args:{variant:"display-medium"},argTypes:{variant:{control:"radio",options:["display-large","display-medium","display-small","headline-large","headline-medium","headline-small"]}}},t={render:n=>a.jsx(l,{...n,children:(()=>{switch(n.variant){case"title-large":return a.jsxs(a.Fragment,{children:["Title Large",a.jsx("br",{}),"Roboto Regular 22/28 . 0"]});case"title-medium":return a.jsxs(a.Fragment,{children:["Title Medium",a.jsx("br",{}),"Roboto Medium 16/24 . +0.15"]});case"title-small":return a.jsxs(a.Fragment,{children:["Title Small",a.jsx("br",{}),"Roboto Medium 14/20 . +0.1"]});case"label-large":return a.jsxs(a.Fragment,{children:["Label Large",a.jsx("br",{}),"Roboto Medium 14/20 . +0.1"]});case"label-medium":return a.jsxs(a.Fragment,{children:["Label Medium",a.jsx("br",{}),"Roboto Medium 12/16 . +0.5"]});case"label-small":return a.jsxs(a.Fragment,{children:["Label Small",a.jsx("br",{}),"Roboto Medium 11/16 . +0.5"]});case"body-large":return a.jsxs(a.Fragment,{children:["Body Large",a.jsx("br",{}),"Roboto 16/24 . +0.5"]});case"body-medium":return a.jsxs(a.Fragment,{children:["Body Medium",a.jsx("br",{}),"Roboto 14/20 . +0.25"]});case"body-small":return a.jsxs(a.Fragment,{children:["Body Small",a.jsx("br",{}),"Roboto 12/16 . +0.4"]});default:return"Text"}})()}),args:{variant:"label-medium"},argTypes:{variant:{control:"radio",options:["title-large","title-medium","title-small","label-large","label-medium","label-small","body-large","body-medium","body-small"]}}},d={render:n=>a.jsx(c,{...n,children:(()=>{switch(n.variant){case"title-large":return a.jsxs(a.Fragment,{children:["Title Large",a.jsx("br",{}),"Roboto Regular 22/28 . 0"]});case"title-medium":return a.jsxs(a.Fragment,{children:["Title Medium",a.jsx("br",{}),"Roboto Medium 16/24 . +0.15"]});case"title-small":return a.jsxs(a.Fragment,{children:["Title Small",a.jsx("br",{}),"Roboto Medium 14/20 . +0.1"]});case"label-large":return a.jsxs(a.Fragment,{children:["Label Large",a.jsx("br",{}),"Roboto Medium 14/20 . +0.1"]});case"label-medium":return a.jsxs(a.Fragment,{children:["Label Medium",a.jsx("br",{}),"Roboto Medium 12/16 . +0.5"]});case"label-small":return a.jsxs(a.Fragment,{children:["Label Small",a.jsx("br",{}),"Roboto Medium 11/16 . +0.5"]});case"body-large":return a.jsxs(a.Fragment,{children:["Body Large",a.jsx("br",{}),"Roboto 16/24 . +0.5"]});case"body-medium":return a.jsxs(a.Fragment,{children:["Body Medium",a.jsx("br",{}),"Roboto 14/20 . +0.25"]});case"body-small":return a.jsxs(a.Fragment,{children:["Body Small",a.jsx("br",{}),"Roboto 12/16 . +0.4"]});default:return"Text"}})()}),args:{variant:"label-medium"},argTypes:{variant:{control:"radio",options:["title-large","title-medium","title-small","label-large","label-medium","label-small","body-large","body-medium","body-small"]}}},m={render(n){return a.jsx(b,{...n,children:(()=>{switch(n.variant){case"body-large":return a.jsxs(a.Fragment,{children:["Body Large",a.jsx("br",{}),"Roboto 16/24 . +0.5"]});case"body-medium":return a.jsxs(a.Fragment,{children:["Body Medium",a.jsx("br",{}),"Roboto 14/20 . +0.25"]});case"body-small":return a.jsxs(a.Fragment,{children:["Body Small",a.jsx("br",{}),"Roboto 12/16 . +0.4"]});default:return"Text"}})()})},args:{variant:"body-medium"},argTypes:{variant:{control:"radio",options:["body-large","body-medium","body-small"]}}};var g,h,p;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    return <>
        <BakaCard style={{
        padding: 24
      }}>
          <BakaHeading variant={"display-large"}>
            Display Large &mdash; Roboto 57/64 -0.25
          </BakaHeading>
          <BakaHeading variant={"display-medium"}>
            Display Medium &mdash; Roboto 45/52 . 0
          </BakaHeading>
          <BakaHeading variant={"display-small"}>
            Display Small &mdash; Roboto 36/44 . 0
          </BakaHeading>
        </BakaCard>
        <br />
        <BakaCard style={{
        padding: 24
      }}>
          <BakaHeading variant={"headline-large"}>
            Headline Large &mdash; Roboto 32/40 . 0
          </BakaHeading>
          <BakaHeading variant={"headline-medium"}>
            Headline Medium &mdash; Roboto 28/36 . 0
          </BakaHeading>
          <BakaHeading variant={"headline-small"}>
            Headline Small &mdash; Roboto 24/32 . 0
          </BakaHeading>
        </BakaCard>
        <br />
        <BakaCard style={{
        padding: 24
      }}>
          <BakaLabel variant={"title-large"}>
            Title Large &mdash; Roboto Regular 22/28 . 0
          </BakaLabel>
          <BakaLabel variant={"title-medium"}>
            Title Medium &mdash; Roboto Medium 16/24 . +0.15
          </BakaLabel>
          <BakaLabel variant={"title-small"}>
            Title Small &mdash; Roboto Medium 14/20 . +0.1
          </BakaLabel>
        </BakaCard>
        <br />
        <BakaCard style={{
        padding: 24
      }}>
          <BakaLabel variant={"label-large"}>
            Label Large &mdash; Roboto Medium 14/20 . +0.1
          </BakaLabel>
          <BakaLabel variant={"label-medium"}>
            Label Medium &mdash; Roboto Medium 12/16 . +0.5
          </BakaLabel>
          <BakaLabel variant={"label-small"}>
            Label Small &mdash; Roboto Medium 11/16 . +0.5
          </BakaLabel>
        </BakaCard>
        <br />
        <BakaCard style={{
        padding: 24
      }}>
          <BakaParagraph variant={"body-large"}>
            Body Large &mdash; Roboto 16/24 . +0.5
          </BakaParagraph>
          <BakaParagraph variant={"body-medium"}>
            Body Medium &mdash; Roboto 14/20 . +0.25
          </BakaParagraph>
          <BakaParagraph variant={"body-small"}>
            Body Small &mdash; Roboto 12/16 . +0.4
          </BakaParagraph>
        </BakaCard>
      </>;
  }
}`,...(p=(h=o.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var x,y,j;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: (props: BakaHeadingProps) => {
    return <BakaHeading {...props}>
        {(() => {
        switch (props.variant) {
          case "display-large":
            return <>
                  Display Large <br /> Roboto 57/64 -0.25
                </>;
          case "display-medium":
            return <>
                  Display Medium <br /> Roboto 45/52 . 0
                </>;
          case "display-small":
            return <>
                  Display Small <br /> Roboto 36/44 . 0
                </>;
          case "headline-large":
            return <>
                  Headline Large <br /> Roboto 32/40 . 0
                </>;
          case "headline-medium":
            return <>
                  Headline Medium <br /> Roboto 28/36 . 0
                </>;
          case "headline-small":
            return <>
                  Headline Small <br /> Roboto 24/32 . 0
                </>;
          default:
            return "Text";
        }
      })()}
      </BakaHeading>;
  },
  args: {
    variant: "display-medium"
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["display-large", "display-medium", "display-small", "headline-large", "headline-medium", "headline-small"]
    }
  }
}`,...(j=(y=s.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var R,B,k;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: (props: BakaLabelProps) => {
    return <BakaLabel {...props}>
        {(() => {
        switch (props.variant) {
          case "title-large":
            return <>
                  Title Large
                  <br />
                  Roboto Regular 22/28 . 0
                </>;
          case "title-medium":
            return <>
                  Title Medium
                  <br />
                  Roboto Medium 16/24 . +0.15
                </>;
          case "title-small":
            return <>
                  Title Small
                  <br />
                  Roboto Medium 14/20 . +0.1
                </>;
          case "label-large":
            return <>
                  Label Large
                  <br />
                  Roboto Medium 14/20 . +0.1
                </>;
          case "label-medium":
            return <>
                  Label Medium
                  <br />
                  Roboto Medium 12/16 . +0.5
                </>;
          case "label-small":
            return <>
                  Label Small
                  <br />
                  Roboto Medium 11/16 . +0.5
                </>;
          case "body-large":
            return <>
                  Body Large
                  <br />
                  Roboto 16/24 . +0.5
                </>;
          case "body-medium":
            return <>
                  Body Medium
                  <br />
                  Roboto 14/20 . +0.25
                </>;
          case "body-small":
            return <>
                  Body Small
                  <br />
                  Roboto 12/16 . +0.4
                </>;
          default:
            return "Text";
        }
      })()}
      </BakaLabel>;
  },
  args: {
    variant: "label-medium"
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["title-large", "title-medium", "title-small", "label-large", "label-medium", "label-small", "body-large", "body-medium", "body-small"]
    }
  }
}`,...(k=(B=t.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var v,L,M;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (props: BakaTextProps) => {
    return <BakaText {...props}>
        {(() => {
        switch (props.variant) {
          case "title-large":
            return <>
                  Title Large
                  <br />
                  Roboto Regular 22/28 . 0
                </>;
          case "title-medium":
            return <>
                  Title Medium
                  <br />
                  Roboto Medium 16/24 . +0.15
                </>;
          case "title-small":
            return <>
                  Title Small
                  <br />
                  Roboto Medium 14/20 . +0.1
                </>;
          case "label-large":
            return <>
                  Label Large
                  <br />
                  Roboto Medium 14/20 . +0.1
                </>;
          case "label-medium":
            return <>
                  Label Medium
                  <br />
                  Roboto Medium 12/16 . +0.5
                </>;
          case "label-small":
            return <>
                  Label Small
                  <br />
                  Roboto Medium 11/16 . +0.5
                </>;
          case "body-large":
            return <>
                  Body Large
                  <br />
                  Roboto 16/24 . +0.5
                </>;
          case "body-medium":
            return <>
                  Body Medium
                  <br />
                  Roboto 14/20 . +0.25
                </>;
          case "body-small":
            return <>
                  Body Small
                  <br />
                  Roboto 12/16 . +0.4
                </>;
          default:
            return "Text";
        }
      })()}
      </BakaText>;
  },
  args: {
    variant: "label-medium"
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["title-large", "title-medium", "title-small", "label-large", "label-medium", "label-small", "body-large", "body-medium", "body-small"]
    }
  }
}`,...(M=(L=d.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var T,S,H;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render(props: BakaParagraphProps) {
    return <BakaParagraph {...props}>
        {(() => {
        switch (props.variant) {
          case "body-large":
            return <>
                  Body Large
                  <br />
                  Roboto 16/24 . +0.5
                </>;
          case "body-medium":
            return <>
                  Body Medium
                  <br />
                  Roboto 14/20 . +0.25
                </>;
          case "body-small":
            return <>
                  Body Small
                  <br />
                  Roboto 12/16 . +0.4
                </>;
          default:
            return "Text";
        }
      })()}
      </BakaParagraph>;
  },
  args: {
    variant: "body-medium"
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["body-large", "body-medium", "body-small"]
    }
  }
}`,...(H=(S=m.parameters)==null?void 0:S.docs)==null?void 0:H.source}}};const N=["Overview","Heading","Label","Text","Paragraph"];export{s as Heading,t as Label,o as Overview,m as Paragraph,d as Text,N as __namedExportsOrder,O as default};
//# sourceMappingURL=Typography.stories-4a9cd3d2.js.map
