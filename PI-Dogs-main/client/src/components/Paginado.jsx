/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './Paginado.css'


export default function Paginado({ dogsPerPage, dogs, paginado }) {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(dogs/dogsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (   
        <nav>
            <ul className="paginado">
                {
                    pageNumbers.length === 1 ? <div></div>
                    :
                    (
                        pageNumbers && 
                       pageNumbers.map(number => {
                           return (<li className="number" key={number}>
                               <a onClick={() => paginado(number)}>{number}</a>
                           </li>
                           )
                       })
                    )

                }
            </ul>
        </nav>
    )
}