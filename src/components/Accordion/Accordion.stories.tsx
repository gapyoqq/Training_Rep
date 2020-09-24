import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";


export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action('accordion mode change event fired')

export const MenuCollapsedMode = () => <Accordion title={'Menu'}  collapsed={true} setCollapsed={callback}/>
export const UsersUncollapsedMode = () => <Accordion title={'Users'}  collapsed={false} setCollapsed={callback}/>


export const ModeChanging = () => {
    const [collapsed, setCollapsed]=useState<boolean>(true)
        return  <Accordion title={'Menu'}  collapsed={collapsed} setCollapsed={setCollapsed} />
}
