import React, { useState, useEffect } from 'react';

function MyComponent() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/inventory'); // Replace with your backend endpoint URL
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []
    )
    console.log("hello there I'm data")
    return <p> {JSON.stringify(data)} </p>
}

export default MyComponent 