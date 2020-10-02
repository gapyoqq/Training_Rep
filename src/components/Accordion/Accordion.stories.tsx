import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";


export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action('accordion mode change event fired')

const onClickCallBack = action('some item was clicked')

export const MenuCollapsedMode = () => <Accordion items={[{value: 1, title: 'Dymich'}]}
                                                  onClick={onClickCallBack}
                                                  title={'Menu'}
                                                  collapsed={true} setCollapsed={callback}/>


export const UsersUncollapsedMode = () => <Accordion items={[{value: 2, title: 'Sasha'}]}
                                                     onClick={onClickCallBack}
                                                     title={'Users'} collapsed={false}
                                                     setCollapsed={callback}/>


export const ModeChanging = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    return <Accordion items={[{value: 2, title: 'Sasha'}]}
                      onClick={onClickCallBack} title={'Menu'} collapsed={collapsed} setCollapsed={setCollapsed}/>
}
