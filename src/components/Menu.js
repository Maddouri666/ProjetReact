import {NavLink } from 'react-router-dom';
import {FaHome} from 'react-icons/fa';

export default function Menu(){
    return(
     <div className="menu">
       <ul>
         <li><NavLink to="/" className={({isActive}) =>(isActive? "activelink":undefined)}><FaHome/> Home</NavLink> </li>
         <li><NavLink to="/add" className={({isActive}) =>(isActive? "activelink":undefined)}> Add techno</NavLink></li>
         <li><NavLink to="/all" className={({isActive}) =>(isActive? "activelink":undefined)}> All Technos</NavLink></li>
         <li><NavLink to="/form" className={({isActive}) =>(isActive? "activelink":undefined)}>S'inscrire</NavLink></li>
       </ul>

     </div>


    );
}