import { ReactNode } from "react";
import './style.css'

const AuthentificationLayout =({children} : {children: ReactNode}) => {
  return (
        <div className='L-R-card'>
          {children}          
        </div> 
  );
}

export default AuthentificationLayout;
