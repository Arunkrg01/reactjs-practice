import React, { useEffect, useState } from 'react';

function Practice(props) {
  

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div >
           hello child 2
        </div>
    );
}

export default Practice;