import React, {MouseEvent} from "react";
import MenuIcon from '@material-ui/icons/Menu';


type ItemType = {
    title: string
    value: any
}


type AccordionPropsType = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
    items: ItemType[]
    onClick:(value: any)=> void
}


export function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitle collapsed={props.collapsed} setCollapsed={props.setCollapsed} title={props.title}/>
        {!props.collapsed && <AccordionBody onClick={props.onClick} items={props.items}/>}
    </div>
}


function AccordionBody(props: AccordionBodyPropsType) {
    return <ul>
        {props.items.map((i, index) => <li onClick={props.onClick(i.value)} key={index}>{i.title}</li>)}
    </ul>
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

type AccordionTitleType = {
    title: string
    setCollapsed: (collapsed: boolean) => void
    collapsed: boolean
}

function AccordionTitle(props: AccordionTitleType) {
    return <h3><MenuIcon onClick={() => {
        props.setCollapsed(!props.collapsed)
    }}/>{props.title}</h3>
}



