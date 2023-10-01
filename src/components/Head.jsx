import React, { useEffect } from 'react';

const Head = () => {
    return (
            useEffect(() => {
                document.title = 'MemoBus';
            }, [])
        );

 }

export default Head;