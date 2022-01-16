import React, { useEffect, useState } from "react"

import { baseUrl, camturAPI } from "../modules/camturAPI"

const useNews = ( navigation ) => {

    const [state, setState] = useState([])
    const [loading, setLoading] = useState(false)

    const getNewsList = async ( ) => {
        
        setLoading(true)

        const data = await camturAPI.get(`${baseUrl}/news`);

        setState(data.data.rows)

        setLoading(false)
    }

    useEffect(() => {
        getNewsList( )
    }, []);

    return{
        state,
        loading,
    }
}
 
export default useNews;