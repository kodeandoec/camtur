import React, { useEffect, useState } from "react"

import { baseUrl, camturAPI } from "../modules/camturAPI"

const useCommerces = ( navigation ) => {

    const [state, setState] = useState([])
    const [loading, setLoading] = useState(false)

    const getCommercesList = async ( ) => {
        
        setLoading(true)

        const data = await camturAPI.get(`${baseUrl}/`);

        setState(data.data.rows)

        setLoading(false)
    }

    useEffect(() => {
        getCommercesList( )
    }, []);

    return{
        state,
        loading,
    }
}
 
export default useCommerces;