import React, { useState } from 'react'

export default function DienTichHCN() {
    const [dai, setDai] = useState();
    const [rong, setRong] = useState();
    const [area, setArea] = useState();

    const changArea = () => {
        setArea(dai * rong);
    }
    return (
        <div>
            <label>Chieu dai: </label>
            <input
                type='number'
                value={dai}
                onChange={(e) => setDai(Number(e.target.value))}
            />

            <label>Chieu dai: </label>
            <input
                type='number'
                value={rong}
                onChange={(e) => setRong(Number(e.target.value))}
            />
            <button onClick={changArea}>Tinh din tich</button>
            <h3>Dien tich: {area}</h3>
        </div>
    )
}
