import{j as n}from"./jsx-runtime-ed146b25.js";import{V as r,U as o,O as j,k as l,R as a,N as M,w as I,j as g}from"./baka-ui-cb88fe88.js";import{u as k}from"./index-09fac16e.js";import"./index-c6dae603.js";function c(t){const e=Object.assign({h2:"h2",p:"p",code:"code",h3:"h3",pre:"pre",h4:"h4",ul:"ul",li:"li"},k(),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(e.h2,{id:"menu",children:"Menu"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"Menu"})," component provides a list of selectable options or actions that can be triggered by the user. It's often used in conjunction with other UI components like text fields or buttons."]}),`
`,n.jsx(e.h3,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { BakaMenu, BakaMenuItem } from "baka-ui";

// Inside your component
<div>
  <BakaMenu style={{ width: 360 }}>
    <BakaMenuItem>{/* Content for Menu Item 1 */}</BakaMenuItem>
    <BakaMenuItem>{/* Content for Menu Item 2 */}</BakaMenuItem>
    {/* Add more MenuItems as needed */}
  </BakaMenu>
</div>;
`})}),`
`,n.jsx(e.h3,{id:"props",children:"Props"}),`
`,n.jsx(e.h4,{id:"style-optional",children:"style (optional)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Type: ",n.jsx(e.code,{children:"object"})]}),`
`,n.jsxs(e.li,{children:["Default: ",n.jsx(e.code,{children:"null"})]}),`
`]}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"style"})," prop allows you to apply custom CSS styles to the Menu component, controlling its width, height, or any other styling properties."]}),`
`,n.jsx(e.h3,{id:"menuitem",children:"MenuItem"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"MenuItem"})," component represents an individual item within the Menu."]}),`
`,n.jsx(e.h4,{id:"usage-1",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { BakaMenuItem } from "baka-ui";

<BakaMenuItem>{/* Content for Menu Item */}</BakaMenuItem>;
`})}),`
`,n.jsx(e.h3,{id:"examples",children:"Examples"}),`
`,n.jsx(e.h4,{id:"basic-menu",children:"Basic Menu"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { BakaMenu, BakaMenuItem } from "baka-ui";

<BakaMenu style={{ width: 360 }}>
  <BakaMenuItem>Option 1</BakaMenuItem>
  <BakaMenuItem>Option 2</BakaMenuItem>
  <BakaMenuItem>Option 3</BakaMenuItem>
</BakaMenu>;
`})}),`
`,n.jsx(e.p,{children:"This will render a basic menu with three selectable options."})]})}function f(t={}){const{wrapper:e}=Object.assign({},k(),t.components);return e?n.jsx(e,Object.assign({},t,{children:n.jsx(c,t)})):c(t)}const T={title:"Material You/Primitives/Menu",component:t=>n.jsx(r,{...t}),render:t=>n.jsx(r,{...t}),parameters:{layout:"centered",docs:{page:f}},tags:["autodocs"]},i={args:{items:7,scrollable:!1},argTypes:{scrollable:{control:"boolean"},items:{control:{type:"range",min:1,max:10}}},render:t=>n.jsx("div",{children:n.jsx(r,{...t,style:{width:360,...t.scrollable?{maxHeight:300}:{}},children:Array.from({length:t.items},(e,B)=>n.jsx(o,{children:n.jsx(j,{variant:"body-large",children:"Menu item"})},B))})}),parameters:{docs:{storyDescription:"A basic menu with title and description."}}},s={args:{component:"text-field"},argTypes:{component:{control:"radio",options:["text-field","text-field-icon","icon-button"]}},render:t=>n.jsxs("div",{children:[(()=>{switch(t.component){case"text-field":case"text-field-icon":return n.jsxs(M,{variant:"outlined",children:[t.component==="text-field-icon"?n.jsx(a,{children:"search"}):null,n.jsx(I,{variant:"body-small",children:"BakaLabel"}),n.jsx(g,{defaultValue:"BakaInput",type:"text"}),n.jsx(l,{variant:"icon",children:n.jsx(a,{children:"cancel"})})]});case"icon-button":return n.jsx(l,{variant:["icon","filled","toggle"],selected:!0,children:n.jsx(a,{children:"settings"})});default:return}})(),n.jsxs(r,{children:[n.jsxs(o,{children:[t.component==="text-field-icon"?n.jsx(a,{children:" "}):null,"Menu item"]}),n.jsxs(o,{children:[t.component==="text-field-icon"?n.jsx(a,{children:" "}):null,"Menu item"]}),n.jsxs(o,{children:[t.component==="text-field-icon"?n.jsx(a,{children:" "}):null,"Menu item"]}),n.jsxs(o,{children:[t.component==="text-field-icon"?n.jsx(a,{children:" "}):null,"Menu item"]})]})]})};var d,u,m;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    items: 7,
    scrollable: false
  },
  argTypes: {
    scrollable: {
      control: "boolean"
    },
    items: {
      control: {
        type: "range",
        min: 1,
        max: 10
      }
    }
  },
  render: args => {
    return <div>
        <BakaMenu {...args} style={{
        width: 360,
        ...(args.scrollable ? {
          maxHeight: 300
        } : {})
      }}>
          {Array.from({
          length: args.items
        }, (_, i) => <BakaMenuItem key={i}>
              <BakaText variant={"body-large"}>Menu item</BakaText>
            </BakaMenuItem>)}
        </BakaMenu>
      </div>;
  },
  parameters: {
    docs: {
      storyDescription: "A basic menu with title and description."
    }
  }
}`,...(m=(u=i.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,h,x;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    component: "text-field"
  },
  argTypes: {
    component: {
      control: "radio",
      options: ["text-field", "text-field-icon", "icon-button"]
    }
  },
  render: args => {
    return <div>
        {(() => {
        switch (args.component) {
          case "text-field":
          case "text-field-icon":
            return <BakaTextField variant={"outlined"}>
                  {args.component === "text-field-icon" ? <BakaIcon>search</BakaIcon> : null}
                  <BakaLabel variant={"body-small"}>BakaLabel</BakaLabel>
                  <BakaInput defaultValue="BakaInput" type="text" />
                  <BakaButton variant={"icon"}>
                    <BakaIcon>cancel</BakaIcon>
                  </BakaButton>
                </BakaTextField>;
          case "icon-button":
            return <BakaButton variant={["icon", "filled", "toggle"]} selected={true}>
                  <BakaIcon>settings</BakaIcon>
                </BakaButton>;
          default:
            return;
        }
      })()}
        <BakaMenu>
          <BakaMenuItem>
            {args.component === "text-field-icon" ? <BakaIcon>&nbsp;</BakaIcon> : null}
            Menu item
          </BakaMenuItem>
          <BakaMenuItem>
            {args.component === "text-field-icon" ? <BakaIcon>&nbsp;</BakaIcon> : null}
            Menu item
          </BakaMenuItem>
          <BakaMenuItem>
            {args.component === "text-field-icon" ? <BakaIcon>&nbsp;</BakaIcon> : null}
            Menu item
          </BakaMenuItem>
          <BakaMenuItem>
            {args.component === "text-field-icon" ? <BakaIcon>&nbsp;</BakaIcon> : null}
            Menu item
          </BakaMenuItem>
        </BakaMenu>
      </div>;
  }
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const O=["Basic","Popup"];export{i as Basic,s as Popup,O as __namedExportsOrder,T as default};
//# sourceMappingURL=Menu.stories-9c632763.js.map
