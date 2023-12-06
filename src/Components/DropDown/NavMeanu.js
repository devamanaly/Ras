import React from 'react'
import Dropdown from './DropDown'

const NavMeanu = (props) => {
    return (
        <div className='sm:hidden md:flex items-center lg:w-[699px] md:w-[463px] lg:flex ' >
            <ul className={`flex justify-between w-full gap-5 `}>
                <li >
                    <Dropdown name={"Things To Do"} funx={props.state} />

                </li>
                    
                <li><Dropdown name="Things To Do"/></li>
                <li><Dropdown name="Things To Do"/></li>
                <li><Dropdown name="Things To Do"/></li>
            </ul>
        </div>
    )
}

export default NavMeanu