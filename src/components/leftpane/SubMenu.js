import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import { CgMoreAlt } from "react-icons/cg";

const SubMenu = (props) => {
    const { name, subMenus, change } = props
    const [expand, setExpand] = useState(false)
 
    return (
        <li onClick={change} >
            <a className='sub-item'   onClick ={()=> setExpand(!expand)}>
                <div className='icon'>
                    <CgMoreAlt />
                </div>
                <span className='text' >{name}</span>
            </a>
            {
                subMenus && subMenus.length > 0 ? (
                    <ul className={`sub-menu ${expand ? "active" : ""}` }>
                        {
                            subMenus.map((menu, index) => (
                                <li key={index}>
                                    <NavLink to='' >
                                    {menu.name}
                                    </NavLink>
                                </li>
                            ))
                        }
                </ul>) : null
            }
           
        </li>
    )
}

export default SubMenu


