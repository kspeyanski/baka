import{j as e}from"./jsx-runtime-9c4ae004.js";import{B as f}from"./avatar-d223fbea.js";import{B as c}from"./icon-e14e50b0.js";import{B as o}from"./checkbox-a49cd530.js";import{B as j}from"./radio-button-63059f31.js";import{B as y}from"./switch-9d751d53.js";import{B as l}from"./text-c2c14b07.js";import{c as L}from"./variant-class-names-08f4b07b.js";import{B}from"./list-item-58b12f40.js";import{u as g}from"./index-2ef8b458.js";import"./index-1b03fe98.js";import"./state-attributes-f1b2bd32.js";const r=n=>{const{as:t="ul",...s}=n;return e.jsx(t,{...s,className:L("baka-list",n.className)})};function d(n){const t=Object.assign({h2:"h2",p:"p",code:"code",h3:"h3",pre:"pre",h4:"h4"},g(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h2,{id:"bakalist",children:"BakaList"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"BakaList"})," component is used to display a collection of items in a list format."]}),`
`,e.jsx(t.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`import { BakaList, BakaListItem } from "baka-ui";

// Inside your component
<BakaList style={{ width: 360 }}>
  <BakaListItem>{/* Content for List Item 1 */}</BakaListItem>
  <BakaListItem>{/* Content for List Item 2 */}</BakaListItem>
  {/* Add more ListItems as needed */}
</BakaList>;
`})}),`
`,e.jsx(t.h3,{id:"bakalistitem",children:"BakaListItem"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"BakaListItem"})," component is used to define individual items within the BakaList."]}),`
`,e.jsx(t.h4,{id:"usage-1",children:"Usage"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`import { BakaListItem } from "baka-ui";

<BakaListItem>{/* Content for List Item */}</BakaListItem>;
`})}),`
`,e.jsx(t.h3,{id:"examples",children:"Examples"}),`
`,e.jsx(t.h4,{id:"basic-bakalist",children:"Basic BakaList"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`import { BakaList, BakaListItem } from "baka-ui";

<BakaList style={{ width: 360 }}>
  <BakaListItem>
    <span>Item 1</span>
  </BakaListItem>
  <BakaListItem>
    <span>Item 2</span>
  </BakaListItem>
</BakaList>;
`})}),`
`,e.jsx(t.p,{children:"This will render a basic list with two items."})]})}function v(n={}){const{wrapper:t}=Object.assign({},g(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(d,n)})):d(n)}const M={title:"Material You/Primitives/List",component:n=>e.jsx(r,{...n}),render:n=>e.jsx(r,{...n}),parameters:{layout:"centered",docs:{page:v}},tags:["autodocs"]},a={args:{items:7,scrollable:!1},argTypes:{scrollable:{control:"boolean"},items:{control:{type:"range",min:1,max:10}}},render:n=>e.jsx("div",{className:"container-high",children:e.jsx(r,{...n,style:{width:360,...n.scrollable?{maxHeight:300}:{}},children:Array.from({length:n.items},(t,s)=>e.jsxs(B,{children:[e.jsx(f,{children:"A"}),e.jsx(l,{style:{flexGrow:1},variant:"body-large",children:"BakaList item"}),e.jsx(o,{readOnly:!0,checked:!0})]},s))})}),parameters:{docs:{storyDescription:"A basic list with title and description."}}},i={args:{prefix:"avatar",suffix:"none","supporting text":!0,"multi-line":!0},argTypes:{prefix:{control:"radio",options:["none","icon","avatar","image","video","checkbox","radio","switch"]},suffix:{control:"radio",options:["none","checkbox","icon"]},"multi-line":{if:{arg:"supporting text",eq:!0}}},render:n=>e.jsx("div",{className:"container-low",children:e.jsx(r,{children:e.jsxs(B,{style:{width:360},variant:[(n==null?void 0:n["multi-line"])&&"multi-line",(n==null?void 0:n.prefix)==="video"&&"video"],children:[n.prefix==="avatar"&&e.jsx(f,{children:"A"}),n.prefix==="icon"&&e.jsx(c,{children:"person"}),n.prefix==="image"&&e.jsx("img",{style:{width:56,height:56},src:"./media-small.png"}),n.suffix==="checkbox"?e.jsx(o,{readOnly:!0,checked:!0}):null,n.prefix==="video"&&e.jsx("img",{style:{width:114,height:64},src:"./media.png"}),n.prefix==="radio"&&e.jsx(j,{checked:!0,readOnly:!0}),n.prefix==="switch"&&e.jsx(y,{checked:!1,readOnly:!0}),e.jsxs("div",{style:{display:"flex",flexGrow:1,flexDirection:"column",overflow:"hidden"},children:[e.jsx(l,{variant:"body-large",children:"List Item"}),n["supporting text"]?e.jsx(l,{style:{flexGrow:1,...n!=null&&n["multi-line"]?{}:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},variant:"body-medium",children:"Supporting line text lorem ipsum dolor sit amet, consectetur."}):null]}),n.suffix==="checkbox"?e.jsx(o,{readOnly:!0,checked:!0}):null,n.suffix==="icon"?e.jsx(c,{children:"arrow_right"}):null]})})})};var m,x,h;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
    return <div className="container-high">
        <BakaList {...args} style={{
        width: 360,
        ...(args.scrollable ? {
          maxHeight: 300
        } : {})
      }}>
          {Array.from({
          length: args.items
        }, (_, i) => <BakaListItem key={i}>
              <BakaAvatar>A</BakaAvatar>
              <BakaText style={{
            flexGrow: 1
          }} variant={"body-large"}>
                BakaList item
              </BakaText>
              <BakaCheckbox readOnly={true} checked={true} />
            </BakaListItem>)}
        </BakaList>
      </div>;
  },
  parameters: {
    docs: {
      storyDescription: "A basic list with title and description."
    }
  }
}`,...(h=(x=a.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var p,u,k;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    prefix: "avatar",
    suffix: "none",
    ["supporting text"]: true,
    "multi-line": true
  },
  argTypes: {
    prefix: {
      control: "radio",
      options: ["none", "icon", "avatar", "image", "video", "checkbox", "radio", "switch"]
    },
    suffix: {
      control: "radio",
      options: ["none", "checkbox", "icon"]
    },
    "multi-line": {
      if: {
        arg: "supporting text",
        eq: true
      }
    }
  },
  render: args => {
    return <div className="container-low">
        <BakaList>
          <BakaListItem style={{
          width: 360
        }} variant={[args?.["multi-line"] && "multi-line", args?.["prefix"] === "video" && "video"]}>
            {args.prefix === "avatar" && <BakaAvatar>A</BakaAvatar>}
            {args.prefix === "icon" && <BakaIcon>person</BakaIcon>}
            {args.prefix === "image" && <img style={{
            width: 56,
            height: 56
          }} src="./media-small.png" />}
            {args.suffix === "checkbox" ? <BakaCheckbox readOnly={true} checked={true} /> : null}
            {args.prefix === "video" && <img style={{
            width: 114,
            height: 64
          }} src="./media.png" />}
            {args.prefix === "radio" && <BakaRadioButton checked={true} readOnly={true} />}
            {args.prefix === "switch" && <BakaSwitch checked={false} readOnly={true} />}
            <div style={{
            display: "flex",
            flexGrow: 1,
            flexDirection: "column",
            overflow: "hidden"
          }}>
              <BakaText variant={"body-large"}>List Item</BakaText>
              {args["supporting text"] ? <BakaText style={{
              flexGrow: 1,
              ...(!args?.["multi-line"] ? {
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis"
              } : {})
            }} variant={"body-medium"}>
                  Supporting line text lorem ipsum dolor sit amet, consectetur.
                </BakaText> : null}
            </div>
            {args.suffix === "checkbox" ? <BakaCheckbox readOnly={true} checked={true} /> : null}
            {args.suffix === "icon" ? <BakaIcon>arrow_right</BakaIcon> : null}
          </BakaListItem>
        </BakaList>
      </div>;
  }
}`,...(k=(u=i.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};const E=["Basic","Items"];export{a as Basic,i as Items,E as __namedExportsOrder,M as default};
//# sourceMappingURL=List.stories-905b598e.js.map
