import {useRef} from "react"
import useDropdown from "../../hooks/useDropdown"
import DropMenu from "./DropMenu";



function Dropdown({menuName, menuIcon, menus}){
    const ref = useRef();
    const [isOpen, setIsOpen] = useDropdown(ref, false)


    return(
        <div ref={ref} > 
            <label className="flex justify-end" onMouseUp={()=> setIsOpen(!isOpen)}>
                <button className="flex flex-row" >{menuIcon && menuIcon } {menuName && menuName} </button>
            </label>
            {isOpen && <DropMenu menus={menus}/>}
        </div>
    )
}
export default Dropdown;