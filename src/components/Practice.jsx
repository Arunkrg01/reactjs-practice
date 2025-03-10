import React, { useEffect, useState } from 'react';

function Practice(props) {
  

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div >
           hello child 4
        </div>
    );
}

export default Practice;