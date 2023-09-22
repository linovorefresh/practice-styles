import React, { useState } from 'react'
import './nav.css'

export default function Nav() {

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true)
  }

  const handleMouseLeave = () => {
    setIsHover(false)
  }

  return (
    <>
    <div className='navbar-container'>
      <div className='left-nav-sec'>
        <a href='./' className='nav-cat' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> CATEGORY </a>
        <a href='./' className='nav-cat' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> CATEGORY2 </a>
        <a href='./' className='nav-cat' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> CATEGORY3 </a>
      </div>
      
      <div className='right-nav-sec'>
        RIGHT NAV SECTION
      </div>
    </div>
    <DropdownMenu isHoverProp={isHover}/>
    </>
  )
}

function DropdownMenu(props) {

  const { isHoverProp } = props;
  const [ isHover, setIsHover ] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true)
  }

  const handleMouseLeave = () => {
    setIsHover(false)
  }

  return (
    <div className={ isHoverProp || isHover ? 'dropdown-container' : 'dropdown-container hidden'} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
      <ul><li>item</li><li>item2</li><li>item3</li><li>itemN</li></ul>
      <ul><li>item</li><li>item2</li></ul>
      <div className='ad-container'>

      </div>
    </div>
  )
}