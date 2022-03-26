import React from 'react'
import './DropDown.css'

const DropDown = () => {
    return (
        <ul class="menu">
            <li>
                <a href="#">Parent Link</a>

                <ul>
                    <li><a href="#">Child Link</a></li>
                    <li><a href="#">Child Link</a></li>
                    <li><a href="#">Child Link</a></li>
                    <li><a href="#">Child Link</a></li>
                </ul>
            </li>
        </ul>
    )
}
export default DropDown
