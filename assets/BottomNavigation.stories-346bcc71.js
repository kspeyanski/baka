import{j as a}from"./jsx-runtime-ed146b25.js";import{D as k,F as o,R as i,w as l,b as s}from"./baka-ui-74a68acc.js";import{u as B}from"./index-09fac16e.js";import"./index-c6dae603.js";function r(t){const e=Object.assign({h2:"h2",p:"p",code:"code",h3:"h3",pre:"pre",h4:"h4",ul:"ul",li:"li"},B(),t.components);return a.jsxs(a.Fragment,{children:[a.jsx(e.h2,{id:"bottomnavigation",children:"BottomNavigation"}),`
`,a.jsxs(e.p,{children:["The ",a.jsx(e.code,{children:"BottomNavigation"})," component is used to create a navigation bar typically placed at the bottom of a mobile app. It allows users to switch between different sections or views within the app."]}),`
`,a.jsx(e.h3,{id:"usage",children:"Usage"}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-jsx",children:`import { BakaBottomNavigation, BakaBottomNavigationItem, BakaIcon, BakaLabel, BakaBadge } from "baka-ui";

// Inside your component
<BakaBottomNavigation style={{ width: 400, display: "flex", justifyContent: "space-between" }}>
  <BakaBottomNavigationItem selected={true}>
    <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
    <BakaLabel>BakaLabel</BakaLabel>
  </BakaBottomNavigationItem>
  {/* Add more BottomNavigationItems as needed */}
</BakaBottomNavigation>;
`})}),`
`,a.jsx(e.h3,{id:"props",children:"Props"}),`
`,a.jsx(e.h4,{id:"style-optional",children:"style (optional)"}),`
`,a.jsxs(e.ul,{children:[`
`,a.jsxs(e.li,{children:["Type: ",a.jsx(e.code,{children:"object"})]}),`
`,a.jsxs(e.li,{children:["Default: ",a.jsx(e.code,{children:"null"})]}),`
`]}),`
`,a.jsxs(e.p,{children:["The ",a.jsx(e.code,{children:"style"})," prop allows you to apply custom CSS styles to the BottomNavigation component, controlling its width, height, or any other styling properties."]}),`
`,a.jsx(e.h3,{id:"bakabottomnavigationitem",children:"BakaBottomNavigationItem"}),`
`,a.jsxs(e.p,{children:["The ",a.jsx(e.code,{children:"BakaBottomNavigationItem"})," component represents an individual item within the BottomNavigation."]}),`
`,a.jsx(e.h4,{id:"props-1",children:"Props"}),`
`,a.jsx(e.h4,{id:"selected-optional",children:"selected (optional)"}),`
`,a.jsxs(e.ul,{children:[`
`,a.jsxs(e.li,{children:["Type: ",a.jsx(e.code,{children:"boolean"})]}),`
`,a.jsxs(e.li,{children:["Default: ",a.jsx(e.code,{children:"false"})]}),`
`]}),`
`,a.jsxs(e.p,{children:["Indicates whether this item is selected. When set to ",a.jsx(e.code,{children:"true"}),", it highlights the item as the currently active or selected option."]}),`
`,a.jsx(e.h3,{id:"examples",children:"Examples"}),`
`,a.jsx(e.h4,{id:"basic-bottomnavigation",children:"Basic BottomNavigation"}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-jsx",children:`import { BakaBottomNavigation, BakaBottomNavigationItem, BakaIcon, BakaLabel } from "baka-ui";

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
`,a.jsx(e.p,{children:"This will render a basic BottomNavigation bar with three selectable items."}),`
`,a.jsx(e.h3,{id:"advanced-bottomnavigation",children:"Advanced BottomNavigation"}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-jsx",children:`import { BakaBottomNavigation, BakaBottomNavigationItem, BakaIcon, BakaLabel, BakaBadge } from "baka-ui";

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
`,a.jsx(e.p,{children:"This example demonstrates a BottomNavigation bar with badge notifications on one of the items."})]})}function g(t={}){const{wrapper:e}=Object.assign({},B(),t.components);return e?a.jsx(e,Object.assign({},t,{children:a.jsx(r,t)})):r(t)}const x={title:"Material You/Primitives/Bottom Navigation",parameters:{layout:"centered",docs:{page:g}},tags:["autodocs"],argTypes:{}},n={args:{items:3,labels:!0},argTypes:{items:{control:{type:"range",min:3,max:5}},labels:{control:"boolean"}},render:t=>a.jsxs(k,{style:{width:400},children:[a.jsxs(o,{selected:!0,children:[a.jsx(i,{variant:"filled",children:"fiber_manual_record"}),t.labels?a.jsx(l,{children:"BakaLabel"}):null]}),Array.from({length:t.items-2},(e,h)=>a.jsxs(o,{children:[a.jsx(i,{variant:"filled",children:"fiber_manual_record"}),t.labels?a.jsx(l,{children:"BakaLabel"}):null]},h)),a.jsxs(o,{children:[a.jsxs(i,{variant:"filled",children:["fiber_manual_record",t.labels?a.jsx(s,{variant:"single-digit",style:{position:"absolute",right:16,top:2},children:"3"}):a.jsx(s,{variant:"small",style:{position:"absolute",right:16,top:2}})]}),t.labels?a.jsx(l,{children:"BakaLabel"}):null]})]})};var c,d,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const j=["Basic"];export{n as Basic,j as __namedExportsOrder,x as default};
//# sourceMappingURL=BottomNavigation.stories-346bcc71.js.map
