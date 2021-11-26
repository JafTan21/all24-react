import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { errorHandler } from '../../helper/apiHelper'

export default function Notice() {
    const [notice, setNotice] = useState(null);

    useEffect(() => {
        axios.get('/api/get-notice')
            .then(res => {
                setNotice(res.data.notice);
            })
            .catch(errorHandler);
    }, [])

    return (
        <div className="d-flex mb-2">
            <div className="w-100" style={{ background: 'black', color: 'white', border: '2px solid #8a9c24' }}>
                <marquee>
                    {notice}
                </marquee>
            </div>
        </div>


    )
}
