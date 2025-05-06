import React, { useState } from 'react';

function Form() {
    const [toan, setToan] = useState(""); 
    const [ly, setLy] = useState(""); 
    const [sum, setSum] = useState(null);
    const [loai, setLoai] = useState('');

    const Submit = () => {
        const total = parseFloat(toan) + parseFloat(ly);
        const average = total / 2;
        setSum(average);

        if (average >= 9) {
            setLoai('Xuất sắc');
        } else if (average >= 8) {
            setLoai('Giỏi');
        } else if (average >= 6.5) {
            setLoai('Khá');
        } else {
            setLoai('Trung bình');
        }
    };

    return (
        <div>
            <form>
                <label>Điểm toán:
                    <input type="number" value={toan} onChange={(e) => setToan(e.target.value)}/>
                </label>
                <br/>
                <br/>
                <label>Điểm lý:
                    <input type="number" value={ly} onChange={(e) => setLy(e.target.value)}/>
                </label>
            </form>
            <br/>
            <button type="button" onClick={Submit}>OK</button>
            <br/>
            <br/>
            <h2>{`Điển TB: ${sum}`}</h2>
            <h2>{`Xếp loại: ${loai}`}</h2>
        </div>
    );
}
export default Form;
