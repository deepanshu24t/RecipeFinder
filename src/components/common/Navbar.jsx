import React from 'react'
import { MenuItem, Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <Menu>
       <Link to = "/"> <MenuItem name='Home'></MenuItem></Link> 
       <Link to = "/recipes"><MenuItem name='Recipes'></MenuItem></Link> 
        </Menu>
    </div>
  )
}

export default Navbar;