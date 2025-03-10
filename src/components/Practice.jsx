import React, { useEffect, useState } from 'react';

function Practice(props) {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);

    const fetchData = async () => {
        let response = await fetch("https://dummyjson.com/users");
        let result = await response.json();
        let users = await result.users;
        setData(users);
        console.log("response", response);
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div >
            {
                data?.map((item) => (
                    <div key={item.id}>
                        <p>{item.firstName}</p>
                        <p>{item.email}</p>
                        <img src={item.image} alt="nothing" />
                    </div>
                ))
            }
        </div>
    );
}

export default Practice;