import{j as a}from"./jsx-runtime-9c4ae004.js";import{B as r}from"./badge-544fbac3.js";import{B as i}from"./icon-e14e50b0.js";import{B as l}from"./label-b91e98f5.js";import{c as h}from"./variant-class-names-08f4b07b.js";import{s as b}from"./state-attributes-f1b2bd32.js";import{u as k}from"./index-2ef8b458.js";import"./index-1b03fe98.js";const p=e=>{const{as:t="div",...n}=e;return a.jsx(t,{...n,className:h("baka-bottom-navigation",e.className)})},s=e=>{const{as:t="div",selected:n,...g}=e;return a.jsx(t,{...g,className:h("baka-bottom-navigation-item",e.className,b(e))})};function c(e){const t=Object.assign({h2:"h2",p:"p",code:"code",h3:"h3",pre:"pre",h4:"h4",ul:"ul",li:"li"},k(),e.components);return a.jsxs(a.Fragment,{children:[a.jsx(t.h2,{id:"bottomnavigation",children:"BottomNavigation"}),`
`,a.jsxs(t.p,{children:["The ",a.jsx(t.code,{children:"BottomNavigation"})," component is used to create a navigation bar typically placed at the bottom of a mobile app. It allows users to switch between different sections or views within the app."]}),`
`,a.jsx(t.h3,{id:"usage",children:"Usage"}),`
`,a.jsx(t.pre,{children:a.jsx(t.code,{className:"language-jsx",children:`import { BakaBottomNavigation, BakaBottomNavigationItem, BakaIcon, BakaLabel, BakaBadge } from "baka-ui";

// Inside your component
<BakaBottomNavigation style={{ width: 400, display: "flex", justifyContent: "space-between" }}>
  <BakaBottomNavigationItem selected={true}>
    <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
    <BakaLabel>BakaLabel</BakaLabel>
  </BakaBottomNavigationItem>
  {/* Add more BottomNavigationItems as needed */}
</BakaBottomNavigation>;
`})}),`
`,a.jsx(t.h3,{id:"props",children:"Props"}),`
`,a.jsx(t.h4,{id:"style-optional",children:"style (optional)"}),`
`,a.jsxs(t.ul,{children:[`
`,a.jsxs(t.li,{children:["Type: ",a.jsx(t.code,{children:"object"})]}),`
`,a.jsxs(t.li,{children:["Default: ",a.jsx(t.code,{children:"null"})]}),`
`]}),`
`,a.jsxs(t.p,{children:["The ",a.jsx(t.code,{children:"style"})," prop allows you to apply custom CSS styles to the BottomNavigation component, controlling its width, height, or any other styling properties."]}),`
`,a.jsx(t.h3,{id:"bakabottomnavigationitem",children:"BakaBottomNavigationItem"}),`
`,a.jsxs(t.p,{children:["The ",a.jsx(t.code,{children:"BakaBottomNavigationItem"})," component represents an individual item within the BottomNavigation."]}),`
`,a.jsx(t.h4,{id:"props-1",children:"Props"}),`
`,a.jsx(t.h4,{id:"selected-optional",children:"selected (optional)"}),`
`,a.jsxs(t.ul,{children:[`
`,a.jsxs(t.li,{children:["Type: ",a.jsx(t.code,{children:"boolean"})]}),`
`,a.jsxs(t.li,{children:["Default: ",a.jsx(t.code,{children:"false"})]}),`
`]}),`
`,a.jsxs(t.p,{children:["Indicates whether this item is selected. When set to ",a.jsx(t.code,{children:"true"}),", it highlights the item as the currently active or selected option."]}),`
`,a.jsx(t.h3,{id:"examples",children:"Examples"}),`
`,a.jsx(t.h4,{id:"basic-bottomnavigation",children:"Basic BottomNavigation"}),`
`,a.jsx(t.pre,{children:a.jsx(t.code,{className:"language-jsx",children:`import { BakaBottomNavigation, BakaBottomNavigationItem, BakaIcon, BakaLabel } from "baka-ui";

<BakaBottomNavigation style={{ width: 400, display: "flex", justifyContent: "space-between" }}>
  <BakaBottomNavigationItem selected={true}>
    <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
    <BakaLabel>Home</BakaLabel>
  </BakaBottomNavigationItem>
  <BakaBottomNavigationItem>
    <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
    <BakaLabel>Profile</BakaLabel>
  </BakaBottomNavigationItem>
  <BakaBottomNavigationItem>
    <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
    <BakaLabel>Settings</BakaLabel>
  </BakaBottomNavigationItem>
</BakaBottomNavigation>;
`})}),`
`,a.jsx(t.p,{children:"This will render a basic BottomNavigation bar with three selectable items."}),`
`,a.jsx(t.h3,{id:"advanced-bottomnavigation",children:"Advanced BottomNavigation"}),`
`,a.jsx(t.pre,{children:a.jsx(t.code,{className:"language-jsx",children:`import { BakaBottomNavigation, BakaBottomNavigationItem, BakaIcon, BakaLabel, BakaBadge } from "baka-ui";

<BakaBottomNavigation style={{ width: 400, display: "flex", justifyContent: "space-between" }}>
  <BakaBottomNavigationItem selected={true}>
    <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
    <BakaLabel>Home</BakaLabel>
  </BakaBottomNavigationItem>
  <BakaBottomNavigationItem>
    <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
    <BakaLabel>Profile</BakaLabel>
  </BakaBottomNavigationItem>
  <BakaBottomNavigationItem>
    <BakaIcon variant={"filled"}>
      fiber_manual_record
      <BakaBadge variant={"small"} style={{ position: "absolute", right: 16, top: 2 }}>
        3
      </BakaBadge>
    </BakaIcon>
    <BakaLabel>Notifications</BakaLabel>
  </BakaBottomNavigationItem>
</BakaBottomNavigation>;
`})}),`
`,a.jsx(t.p,{children:"This example demonstrates a BottomNavigation bar with badge notifications on one of the items."})]})}function v(e={}){const{wrapper:t}=Object.assign({},k(),e.components);return t?a.jsx(t,Object.assign({},e,{children:a.jsx(c,e)})):c(e)}const _={title:"Material You/Primitives/Bottom Navigation",parameters:{layout:"centered",docs:{page:v}},tags:["autodocs"],argTypes:{}},o={args:{items:3,labels:!0},argTypes:{items:{control:{type:"range",min:3,max:5}},labels:{control:"boolean"}},render:e=>a.jsxs(p,{style:{width:400},children:[a.jsxs(s,{selected:!0,children:[a.jsx(i,{variant:"filled",children:"fiber_manual_record"}),e.labels?a.jsx(l,{children:"BakaLabel"}):null]}),Array.from({length:e.items-2},(t,n)=>a.jsxs(s,{children:[a.jsx(i,{variant:"filled",children:"fiber_manual_record"}),e.labels?a.jsx(l,{children:"BakaLabel"}):null]},n)),a.jsxs(s,{children:[a.jsxs(i,{variant:"filled",children:["fiber_manual_record",e.labels?a.jsx(r,{variant:"single-digit",style:{position:"absolute",right:16,top:2},children:"3"}):a.jsx(r,{variant:"small",style:{position:"absolute",right:16,top:2}})]}),e.labels?a.jsx(l,{children:"BakaLabel"}):null]})]})};var m,B,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    items: 3,
    labels: true
  },
  argTypes: {
    items: {
      control: {
        type: "range",
        min: 3,
        max: 5
      }
    },
    labels: {
      control: "boolean"
    }
  },
  render: args => {
    return <BakaBottomNavigation style={{
      width: 400
    }}>
        <BakaBottomNavigationItem selected={true}>
          <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
          {args.labels ? <BakaLabel>BakaLabel</BakaLabel> : null}
        </BakaBottomNavigationItem>
        {Array.from({
        length: args.items - 2
      }, (_, i) => <BakaBottomNavigationItem key={i}>
            <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
            {args.labels ? <BakaLabel>BakaLabel</BakaLabel> : null}
          </BakaBottomNavigationItem>)}
        <BakaBottomNavigationItem>
          <BakaIcon variant={"filled"}>
            fiber_manual_record
            {args.labels ? <BakaBadge variant={"single-digit"} style={{
            position: "absolute",
            right: 16,
            top: 2
          }}>
                3
              </BakaBadge> : <BakaBadge variant={"small"} style={{
            position: "absolute",
            right: 16,
            top: 2
          }} />}
          </BakaIcon>
          {args.labels ? <BakaLabel>BakaLabel</BakaLabel> : null}
        </BakaBottomNavigationItem>
      </BakaBottomNavigation>;
  }
}`,...(d=(B=o.parameters)==null?void 0:B.docs)==null?void 0:d.source}}};const w=["Basic"];export{o as Basic,w as __namedExportsOrder,_ as default};
//# sourceMappingURL=BottomNavigation.stories-594bfc00.js.map
