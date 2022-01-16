import React, { useEffect, useState } from "react"

import { baseUrl, camturAPI } from "../modules/camturAPI"

const useBanner = ( navigation ) => {

    const [state, setState] = useState([])
    const [loading, setLoading] = useState(false)

    const getBannerList = async ( ) => {
        
        setLoading(true)

        const data = await camturAPI.get(`${baseUrl}/banners`);

        setState(data.data.rows)

        setLoading(false)
    }

    useEffect(() => {
        getBannerList( )
    }, []);

    return{
        state,
        loading,
    }
}
 
export default useBanner;