import React, {useState} from 'react';

const DisplayData = () => {

    const [data, setData] = useState([]);

    const loadData = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('https://localhost:8443/board');
            const result = await response.json();
            console.log(result);
            setData(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <div><h2>DisplayData</h2></div>
            <form onSubmit={loadData}>
                <button type="submit">Load Board</button>
            </form>

            <div>
                <table style={{ margin: '0 auto' }}>
                    <thead><tr><th>ID</th><th>제목</th><th>글쓴이</th><th>내용</th><th>작성일</th></tr></thead>
                    <tbody>
                        {data.map((board) => (
                            <tr key={board.seq}>
                                <td>{board.seq}</td>
                                <td>{board.title}</td>
                                <td>{board.writer}</td>
                                <td>{board.content}</td>
                                <td>{board.createDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DisplayData;