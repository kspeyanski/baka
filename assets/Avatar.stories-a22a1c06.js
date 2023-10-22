import{j as a}from"./jsx-runtime-ed146b25.js";import{m as c,R as j}from"./baka-ui-74a68acc.js";import{u as A}from"./index-09fac16e.js";import"./index-c6dae603.js";function o(n){const e=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",code:"code",pre:"pre",ul:"ul",li:"li",strong:"strong",h4:"h4"},A(),n.components);return a.jsxs(a.Fragment,{children:[a.jsx(e.h1,{id:"avatar",children:"Avatar"}),`
`,a.jsx(e.p,{children:`Welcome to the documentation for the "Avatar" component in the Baka UI Library. The "Avatar" component is used to represent a user's profile image or initials in a compact, visually appealing manner.`}),`
`,a.jsx(e.h2,{id:"introduction",children:"Introduction"}),`
`,a.jsx(e.p,{children:`The "Avatar" component is a versatile element that can be used to display user profile images, initials, or icons. It's a crucial part of creating user-friendly interfaces, providing visual context to user identities.`}),`
`,a.jsx(e.h3,{id:"usage",children:"Usage"}),`
`,a.jsxs(e.p,{children:['To use the "Avatar" component, import it from ',a.jsx(e.code,{children:"baka-ui"})," and include it in your JSX code. Here's a basic example:"]}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-jsx",children:`import { BakaAvatar } from "baka-ui";

// Inside your component:
<BakaAvatar>A</BakaAvatar>
`})}),`
`,a.jsx(e.h3,{id:"variants",children:"Variants"}),`
`,a.jsx(e.p,{children:'The "Avatar" component can be customized in various ways:'}),`
`,a.jsxs(e.ul,{children:[`
`,a.jsxs(e.li,{children:[a.jsx(e.strong,{children:"BakaIcon Avatar"}),': You can place an icon or any content inside the "Avatar" component to represent the user.']}),`
`]}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-jsx",children:`<BakaAvatar>
  <BakaIcon>check</BakaIcon>
</BakaAvatar>
`})}),`
`,a.jsxs(e.ul,{children:[`
`,a.jsxs(e.li,{children:[a.jsx(e.strong,{children:"Text Avatar"}),": You can use initials or any text to create a simple text-based avatar."]}),`
`]}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-jsx",children:`<BakaAvatar>A</BakaAvatar>
`})}),`
`,a.jsxs(e.ul,{children:[`
`,a.jsxs(e.li,{children:[a.jsx(e.strong,{children:"Image Avatar"}),": If you have user profile images, you can use an image as the avatar."]}),`
`]}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-jsx",children:`<BakaAvatar>
  <BakaIcon as="img" src="./avatar.svg" />
</BakaAvatar>
`})}),`
`,a.jsx(e.h3,{id:"usage-guidelines",children:"Usage Guidelines"}),`
`,a.jsx(e.p,{children:'When using the "Avatar" component, consider the following guidelines:'}),`
`,a.jsxs(e.ul,{children:[`
`,a.jsxs(e.li,{children:[a.jsx(e.strong,{children:"BakaIcon Avatars"}),": These are suitable for representing actions or states associated with the user. For example, you can use a checkmark icon to indicate a verified user."]}),`
`]}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-jsx",children:`<BakaAvatar>
  <BakaIcon>check</BakaIcon>
</BakaAvatar>
`})}),`
`,a.jsxs(e.ul,{children:[`
`,a.jsxs(e.li,{children:[a.jsx(e.strong,{children:"Text Avatars"}),": Use text avatars when you want a simple and clean representation of the user, such as displaying their initials."]}),`
`]}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-jsx",children:`<BakaAvatar>A</BakaAvatar>
`})}),`
`,a.jsxs(e.ul,{children:[`
`,a.jsxs(e.li,{children:[a.jsx(e.strong,{children:"Image Avatars"}),": When you have user profile images, use image avatars to provide a visual representation of the user."]}),`
`]}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-jsx",children:`<BakaAvatar>
  <BakaIcon as="img" src="./avatar.svg" />
</BakaAvatar>
`})}),`
`,a.jsx(e.h2,{id:"real-world-examples",children:"Real-World Examples"}),`
`,a.jsx(e.p,{children:'Here are some real-world examples of using different "Avatar" variants:'}),`
`,a.jsx(e.h4,{id:"verified-user-bakaicon-avatar",children:"Verified User BakaIcon Avatar"}),`
`,a.jsx(e.p,{children:"You can use an icon avatar to indicate a verified user with a checkmark icon."}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-jsx",children:`<BakaAvatar>
  <BakaIcon>check</BakaIcon>
</BakaAvatar>
`})}),`
`,a.jsx(e.h4,{id:"initials-text-avatar",children:"Initials Text Avatar"}),`
`,a.jsx(e.p,{children:"For users without profile images, you can use text avatars to display their initials."}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-jsx",children:`<BakaAvatar>A</BakaAvatar>
`})}),`
`,a.jsx(e.h4,{id:"image-avatar",children:"Image Avatar"}),`
`,a.jsx(e.p,{children:"When you have user profile images, use image avatars to display user photos."}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-jsx",children:`<BakaAvatar>
  <BakaIcon as="img" src="./avatar.svg" />
</BakaAvatar>
`})}),`
`,a.jsx(e.p,{children:`The "Avatar" component is a versatile tool for representing user profiles in a visually appealing and informative way. You can mix and match different variants to best suit your application's design and user experience needs.`})]})}function k(n={}){const{wrapper:e}=Object.assign({},A(),n.components);return e?a.jsx(e,Object.assign({},n,{children:a.jsx(o,n)})):o(n)}const t={},b={title:"Material You/Primitives/Avatar",component:n=>a.jsx(c,{...n}),render:n=>a.jsx(c,{...n}),parameters:{layout:"centered",docs:{page:k}},tags:["autodocs"],argTypes:{children:{table:{disable:!0}}}},r={args:{children:"A",...t}},s={args:{children:a.jsx(j,{children:"check"}),...t}},i={args:{children:a.jsx(j,{as:"img",src:"./avatar.svg"}),...t}};var l,d,h;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: "A",
    ...defaultArgs
  }
}`,...(h=(d=r.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var u,x,p;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: <BakaIcon>check</BakaIcon>,
    ...defaultArgs
  }
}`,...(p=(x=s.parameters)==null?void 0:x.docs)==null?void 0:p.source}}};var m,g,v;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: <BakaIcon as="img" src="./avatar.svg" />,
    ...defaultArgs
  }
}`,...(v=(g=i.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const w=["Basic","IconBakaAvatar","ImageBakaAvatar"];export{r as Basic,s as IconBakaAvatar,i as ImageBakaAvatar,w as __namedExportsOrder,b as default};
//# sourceMappingURL=Avatar.stories-a22a1c06.js.map
