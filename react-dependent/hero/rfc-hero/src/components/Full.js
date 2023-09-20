import React from 'react'
import './full.css'

export default function Full() {
  return (
    <div className='full-container'>
        <div className='img-grid'>
            <div className='text-div'>
                <div className='nav-menu'> <a>Fitness</a> <a>Finance</a> <a>Products</a> </div>
                <img className='img-rotate' src='./tomoe3.png' alt='eye' />
                <div className='info-menu'> <a>News</a> <a>Careers</a> <a>Contact</a> </div>
                <div className='footer-section'> &copy; 2023. Design practice with ❤ and respect. </div>
            </div>
            
        </div>
    </div>
  )
}
