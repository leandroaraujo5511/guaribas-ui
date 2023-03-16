var d=Object.defineProperty;var r=(s,n)=>d(s,"name",{value:n,configurable:!0});import{M as m,H as t,T as o,a as c}from"./index.e62b2d87.js";import{r as p}from"./index.62b3d42c.js";import{a as i,F as a,j as e}from"./jsx-runtime.1bab66e9.js";import"./index.c38b15f4.js";import"./iframe.f0e01c5e.js";const T={parameters:{storySource:{source:`import type { Meta, Story } from '@storybook/react'
import { Button, Heading, Modal, ModalProps, Text } from '@guaribas-ui/react'
import { useState } from 'react'

export default {
  title: 'Overlay/Modal',
  component: Modal,
  args: {
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<ModalProps>

const Template: Story<ModalProps> = (args) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button onClick={() => setOpen(!open)}>Open Modal</Button>
      <Modal {...args} open={open} setOpen={setOpen}></Modal>
    </>
  )
}

export const Primary = Template.bind({})
export const Header = Template.bind({})
export const Action = Template.bind({})

Primary.args = {
  action: true,
  title: 'Modal',
  children: (
    <>
      <Heading size={'lg'}>Lorem Ipsum</Heading>
      <Text>
        {' '}
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
        quidem quis voluptatem, eaque laudantium, nemo suscipit dolores numquam
        repellendus officia blanditiis porro non veniam iste, cum ea! Officia,
        fugiat inventore.
      </Text>
      <Heading>Lorem Ipsum </Heading>
      <Text>
        {' '}
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
        quidem quis voluptatem, eaque laudantium, nemo suscipit dolores numquam
        repellendus officia blanditiis porro non veniam iste, cum ea! Officia,
        fugiat inventore. Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Deleniti quidem quis voluptatem, eaque laudantium, nemo suscipit
        dolores numquam repellendus officia blanditiis porro non veniam iste,
        cum ea! Officia, fugiat inventore.Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Deleniti quidem quis voluptatem, eaque
        laudantium, nemo suscipit dolores numquam repellendus officia blanditiis
        porro non veniam iste, cum ea! Officia, fugiat inventore.Lorem ipsum
        dolor, sit amet consectetur adipisicing elit. Deleniti quidem quis
        voluptatem, eaque laudantium, nemo suscipit dolores numquam repellendus
        officia blanditiis porro non veniam iste, cum ea! Officia, fugiat
        inventore.Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Deleniti quidem quis voluptatem, eaque laudantium, nemo suscipit dolores
        numquam repellendus officia blanditiis porro non veniam iste, cum ea!
        Officia, fugiat inventore.Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Deleniti quidem quis voluptatem, eaque laudantium,
        nemo suscipit dolores numquam repellendus officia blanditiis porro non
        veniam iste, cum ea! Officia, fugiat inventore.
      </Text>
    </>
  ),
}

Header.args = {
  children: (
    <>
      <Heading>Lorem Ipsum</Heading>
      <Text>
        {' '}
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
        quidem quis voluptatem, eaque laudantium, nemo suscipit dolores numquam
        repellendus officia blanditiis porro non veniam iste, cum ea! Officia,
        fugiat inventore.
      </Text>
    </>
  ),
  title: 'Modal Title',
}

Action.args = {
  children: (
    <>
      <Heading>Lorem Ipsum</Heading>
      <Text>
        {' '}
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
        quidem quis voluptatem, eaque laudantium, nemo suscipit dolores numquam
        repellendus officia blanditiis porro non veniam iste, cum ea! Officia,
        fugiat inventore.
      </Text>
    </>
  ),
  title: 'Modal Title',
  action: true,
}
`,locationsMap:{primary:{startLoc:{col:36,line:21},endLoc:{col:1,line:29},startBody:{col:36,line:21},endBody:{col:1,line:29}},header:{startLoc:{col:36,line:21},endLoc:{col:1,line:29},startBody:{col:36,line:21},endBody:{col:1,line:29}},action:{startLoc:{col:36,line:21},endLoc:{col:1,line:29},startBody:{col:36,line:21},endBody:{col:1,line:29}}}}},title:"Overlay/Modal",component:m,args:{size:"md"},argTypes:{size:{options:["sm","md","lg","xl"],control:{type:"inline-radio"}}}},u=r(s=>{const[n,l]=p.exports.useState(!1);return i(a,{children:[e(c,{onClick:()=>l(!n),children:"Open Modal"}),e(m,{...s,open:n,setOpen:l})]})},"Template"),f=u.bind({}),q=u.bind({}),g=u.bind({});f.args={action:!0,title:"Modal",children:i(a,{children:[e(t,{size:"lg",children:"Lorem Ipsum"}),i(o,{children:[" ","Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti quidem quis voluptatem, eaque laudantium, nemo suscipit dolores numquam repellendus officia blanditiis porro non veniam iste, cum ea! Officia, fugiat inventore."]}),e(t,{children:"Lorem Ipsum "}),i(o,{children:[" ","Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti quidem quis voluptatem, eaque laudantium, nemo suscipit dolores numquam repellendus officia blanditiis porro non veniam iste, cum ea! Officia, fugiat inventore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti quidem quis voluptatem, eaque laudantium, nemo suscipit dolores numquam repellendus officia blanditiis porro non veniam iste, cum ea! Officia, fugiat inventore.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti quidem quis voluptatem, eaque laudantium, nemo suscipit dolores numquam repellendus officia blanditiis porro non veniam iste, cum ea! Officia, fugiat inventore.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti quidem quis voluptatem, eaque laudantium, nemo suscipit dolores numquam repellendus officia blanditiis porro non veniam iste, cum ea! Officia, fugiat inventore.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti quidem quis voluptatem, eaque laudantium, nemo suscipit dolores numquam repellendus officia blanditiis porro non veniam iste, cum ea! Officia, fugiat inventore.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti quidem quis voluptatem, eaque laudantium, nemo suscipit dolores numquam repellendus officia blanditiis porro non veniam iste, cum ea! Officia, fugiat inventore."]})]})};q.args={children:i(a,{children:[e(t,{children:"Lorem Ipsum"}),i(o,{children:[" ","Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti quidem quis voluptatem, eaque laudantium, nemo suscipit dolores numquam repellendus officia blanditiis porro non veniam iste, cum ea! Officia, fugiat inventore."]})]}),title:"Modal Title"};g.args={children:i(a,{children:[e(t,{children:"Lorem Ipsum"}),i(o,{children:[" ","Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti quidem quis voluptatem, eaque laudantium, nemo suscipit dolores numquam repellendus officia blanditiis porro non veniam iste, cum ea! Officia, fugiat inventore."]})]}),title:"Modal Title",action:!0};const x=["Primary","Header","Action"];export{g as Action,q as Header,f as Primary,x as __namedExportsOrder,T as default};
//# sourceMappingURL=Modal.stories.302c49ba.js.map
