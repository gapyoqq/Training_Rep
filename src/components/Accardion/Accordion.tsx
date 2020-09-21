import React, {useState} from "react";
import MenuIcon from '@material-ui/icons/Menu';

type AccordionPropsType = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
}


function Accordion(props: AccordionPropsType) {


    return <div>
        <AccordionTitle collapsed={props.collapsed} setCollapsed = {props.setCollapsed} title={props.title}/>
        {!props.collapsed && <AccordionBody/>}
    </div>
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}


type AccordionTitleType = {
    title: string
    setCollapsed: (collapsed: boolean) => void
    collapsed: boolean
}

function AccordionTitle(props: AccordionTitleType) {
    return <h3><MenuIcon onClick={() => {props.setCollapsed(!props.collapsed)}}/>{props.title}</h3>
}


export default Accordion
