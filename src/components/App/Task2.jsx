import { useEffect, useRef, useState } from "react";

export function ProductLists() {
    const state = useRef(null);
    useEffect(() => {
        fetch("https://656ca88ee1e03bfd572e9c16.mockapi.io/products")
        .then(res => {
            return res.json()
        })
        .then(data => {
            state.current = data;
        })
        .catch(error => {
            console.log(error);
        })
    })

    return (
    <div>
        {state.current && state.current.map((product, index) => (
            <div key={product.id}>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                {index < state.current.length - 1 && <hr />}
            </div>
        ))}
    </div>
    )
}