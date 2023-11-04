import{j as n}from"./jsx-runtime-9c4ae004.js";import{B as l}from"./text-c2c14b07.js";import{c as t,v as r}from"./variant-class-names-08f4b07b.js";import{u as h}from"./index-2ef8b458.js";import"./index-1b03fe98.js";const x=o=>{const{as:e="div",variant:a,...s}=o;return n.jsx(e,{...s,className:t("baka-container",o.className,r(a))})},j=o=>{const{as:e="div",variant:a,...s}=o;return n.jsx(e,{...s,className:t("baka-row",o.className,r(a))})},g=o=>{const{as:e="div",variant:a,count:s,...p}=o;return n.jsx(e,{...p,"data-count":s,className:t("baka-column",o.className,r(a))})};function c(o){const e=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li"},h(),o.components);return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"layout-module-documentation",children:"Layout Module Documentation"}),`
`,n.jsx(e.p,{children:'The Layout module in the "baka-ui" library provides a set of components for building responsive and flexible layouts. These components help in organizing your content within containers, rows, and columns, allowing you to create dynamic and visually appealing designs. Below are the details of the available layout components.'}),`
`,n.jsx(e.h2,{id:"installation",children:"Installation"}),`
`,n.jsx(e.p,{children:'Before using the Layout module, ensure you have the "baka-ui" library installed in your project:'}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install baka-ui
`})}),`
`,n.jsx(e.h2,{id:"importing",children:"Importing"}),`
`,n.jsx(e.p,{children:"You can import the Layout components as follows:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { BakaContainer, BakaRow, BakaColumn } from "baka-ui";
`})}),`
`,n.jsx(e.h2,{id:"container",children:"Container"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"BakaContainer"})," component provides a container to hold your layout elements. It helps in maintaining consistent spacing and alignment for the content inside it."]}),`
`,n.jsx(e.h3,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<BakaContainer>{/* Your content goes here */}</BakaContainer>
`})}),`
`,n.jsx(e.h2,{id:"row",children:"Row"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"BakaRow"})," component is used to create horizontal rows within a container. It allows you to organize content from left to right."]}),`
`,n.jsx(e.h3,{id:"usage-1",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<BakaRow>{/* BakaColumn components or other elements */}</BakaRow>
`})}),`
`,n.jsx(e.h2,{id:"column",children:"Column"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"BakaColumn"})," component is used to create columns within a row. It allows you to divide the row into a specified number of columns."]}),`
`,n.jsx(e.h3,{id:"usage-2",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<BakaColumn count={4} style={{ background: "red" }}>
  {/* Column content */}
</BakaColumn>
`})}),`
`,n.jsx(e.h3,{id:"props",children:"Props"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"count"}),": (Required) The number of columns to divide the row into."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"style"}),": (Optional) Custom styles to be applied to the column."]}),`
`]}),`
`,n.jsx(e.h2,{id:"additional-notes",children:"Additional Notes"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"The Layout module simplifies the process of creating responsive layouts in your web application."}),`
`,n.jsxs(e.li,{children:["Use ",n.jsx(e.code,{children:"BakaContainer"})," to encapsulate sections of your UI, ensuring consistent spacing and alignment."]}),`
`,n.jsxs(e.li,{children:["Combine ",n.jsx(e.code,{children:"BakaRow"})," and ",n.jsx(e.code,{children:"BakaColumn"})," to create grid-based layouts, organizing content into rows and columns."]}),`
`,n.jsx(e.li,{children:"Customize the number of columns and apply styles to create visually appealing designs."}),`
`,n.jsx(e.li,{children:"Utilize responsive design principles to ensure your layouts adapt well to different screen sizes and devices."}),`
`]})]})}function y(o={}){const{wrapper:e}=Object.assign({},h(),o.components);return e?n.jsx(e,Object.assign({},o,{children:n.jsx(c,o)})):c(o)}const B={title:"Material You/Primitives/Layout",component:o=>n.jsx(l,{...o}),render:o=>n.jsx(l,{...o}),parameters:{layout:"fullscreen",docs:{page:y}},tags:["autodocs"],argTypes:{}},i={render:o=>n.jsx("div",{style:{height:"100vh"},children:n.jsx(x,{children:n.jsx(j,{children:Array.from({length:o.columns}).map((e,a)=>n.jsx(g,{count:o.size,style:{background:"#E0F0F0"}}))})})}),args:{columns:4,size:3},argTypes:{columns:{control:{type:"range",min:1,max:12}},size:{control:{type:"range",min:1,max:12}}}};var d,u,m;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: props => {
    return <div style={{
      height: "100vh"
    }}>
        <BakaContainer>
          <BakaRow>
            {Array.from({
            length: props.columns
          }).map((_, index) => <BakaColumn count={props.size} style={{
            background: "#E0F0F0"
          }}></BakaColumn>)}
          </BakaRow>
        </BakaContainer>
      </div>;
  },
  args: {
    columns: 4,
    size: 3
  },
  argTypes: {
    columns: {
      control: {
        type: "range",
        min: 1,
        max: 12
      }
    },
    size: {
      control: {
        type: "range",
        min: 1,
        max: 12
      }
    }
  }
}`,...(m=(u=i.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const b=["Overview"];export{i as Overview,b as __namedExportsOrder,B as default};
//# sourceMappingURL=Layout.stories-1b9a2779.js.map
