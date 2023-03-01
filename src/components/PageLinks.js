import React from 'react';
import { pageLinks } from '../data.js';

const PageLinks = ({parentClass, itemClass}) => {

  return (
    <>
        <ul className={parentClass} id={parentClass}>
            {
            pageLinks.map((link) => {
            return( <li key={link.id}>
                    <a href={link.href} className={itemClass}> {link.text} </a>
                </li>)
            })
            }
        </ul>
    </>
  )
}

export default PageLinks