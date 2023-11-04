import{j as n}from"./jsx-runtime-9c4ae004.js";import{B as c}from"./button-2adf44ad.js";import{B as a}from"./icon-e14e50b0.js";import{B as I,a as f}from"./input-8244a281.js";import{B as g}from"./text-c2c14b07.js";import{B as b}from"./label-b91e98f5.js";import{c as k}from"./variant-class-names-08f4b07b.js";import{s as y}from"./state-attributes-f1b2bd32.js";import{u as j}from"./index-2ef8b458.js";import"./index-1b03fe98.js";const l=t=>{const{as:e="ul",...s}=t;return n.jsx(e,{...s,className:k("baka-menu",t.className)})},o=t=>{const{as:e="li",readOnly:s,disabled:w,...M}=t;return n.jsx(e,{...M,className:k("baka-menu-item",t.className,y(t))})};function d(t){const e=Object.assign({h2:"h2",p:"p",code:"code",h3:"h3",pre:"pre",h4:"h4",ul:"ul",li:"li"},j(),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(e.h2,{id:"menu",children:"Menu"}),`
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
`,n.jsx(e.p,{children:"This will render a basic menu with three selectable options."})]})}function v(t={}){const{wrapper:e}=Object.assign({},j(),t.components);return e?n.jsx(e,Object.assign({},t,{children:n.jsx(d,t)})):d(t)}const S={title:"Material You/Primitives/Menu",component:t=>n.jsx(l,{...t}),render:t=>n.jsx(l,{...t}),parameters:{layout:"centered",docs:{page:v}},tags:["autodocs"]},i={args:{items:7,scrollable:!1},argTypes:{scrollable:{control:"boolean"},items:{control:{type:"range",min:1,max:10}}},render:t=>n.jsx("div",{children:n.jsx(l,{...t,style:{width:360,...t.scrollable?{maxHeight:300}:{}},children:Array.from({length:t.items},(e,s)=>n.jsx(o,{children:n.jsx(g,{variant:"body-large",children:"Menu item"})},s))})}),parameters:{docs:{storyDescription:"A basic menu with title and description."}}},r={args:{component:"text-field"},argTypes:{component:{control:"radio",options:["text-field","text-field-icon","icon-button"]}},render:t=>n.jsxs("div",{children:[(()=>{switch(t.component){case"text-field":case"text-field-icon":return n.jsxs(I,{variant:"outlined",children:[t.component==="text-field-icon"?n.jsx(a,{children:"search"}):null,n.jsx(b,{variant:"body-small",children:"BakaLabel"}),n.jsx(f,{defaultValue:"BakaInput",type:"text"}),n.jsx(c,{variant:"icon",children:n.jsx(a,{children:"cancel"})})]});case"icon-button":return n.jsx(c,{variant:["icon","filled","toggle"],selected:!0,children:n.jsx(a,{children:"settings"})});default:return}})(),n.jsxs(l,{children:[n.jsxs(o,{children:[t.component==="text-field-icon"?n.jsx(a,{children:" "}):null,"Menu item"]}),n.jsxs(o,{children:[t.component==="text-field-icon"?n.jsx(a,{children:" "}):null,"Menu item"]}),n.jsxs(o,{children:[t.component==="text-field-icon"?n.jsx(a,{children:" "}):null,"Menu item"]}),n.jsxs(o,{children:[t.component==="text-field-icon"?n.jsx(a,{children:" "}):null,"Menu item"]})]})]})};var u,m,p;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(p=(m=i.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var x,h,B;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(B=(h=r.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};const E=["Basic","Popup"];export{i as Basic,r as Popup,E as __namedExportsOrder,S as default};
//# sourceMappingURL=Menu.stories-88e08a20.js.map
