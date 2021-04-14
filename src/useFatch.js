import { useEffect, useState } from 'react';
const useFatch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(true);

    const addAbortconst = new AbortController();           
    useEffect(() => {
        setTimeout(() => {
            fetch(url, {signal:addAbortconst.signal})              
                .then(res => {
                    if (!res.ok) {
                        throw Error(`unable to make connection`);
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setLoading(false);
                    setError(false);
                })
                .catch(err => {
                    if(err.name==='AbortError'){
                        console.log('function aborted')
                    }
                    else {           
                        setError(err.message);
                        setLoading(false);
                    }
                })

        }, 500);

        return ()=> addAbortconst.abort();           
    
    }, [url]);
    return {data,error,loading}
}
export default useFatch;
