import React from "react";



const Header = ({title,bgclass,children}) => {

    return (
        <div className={bgclass}>
            <div className="text-content">
                <h1 className="header-title">{title}</h1>
                  {children}
            </div>
        </div>
    )
}

export default Header;