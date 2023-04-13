import React from 'react'
import {faFaceMeh} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NoShowFound.css'
export const NoShowFound = () => {
    return(
        <div className='noUserFound-container'>
            <FontAwesomeIcon icon={faFaceMeh} className="noUserFound"/>
            <span className='errorText'>We couldn't find any shows matching your search</span>
        </div>
    )
}