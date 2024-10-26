import React,{Component} from "react"
import ChildComponent from './ChildComponent'

export function ParentComponent(){
    const person = {uname:"Kishore", place:"Coimbatore"}

    return(
        <div>
            <ChildComponent data={person}/>
        </div>
    )
}