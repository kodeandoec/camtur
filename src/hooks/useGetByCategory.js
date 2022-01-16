import React, { useEffect, useState } from "react"

import { baseUrl, camturAPI } from "../modules/camturAPI"

const useGetByCategory = ( id ) => {

    const [state, setState] = useState([])
    const [loading, setLoading] = useState(false)

    const getCommercesByCategory = async ( ) => {
        
        setLoading(true)

        const data = await camturAPI.get(`${baseUrl}/filter/category/?cat=${id}`);

        setState(data.data.rows)

        setLoading(false)
    }

    useEffect(() => {
        getCommercesByCategory( )
    }, []);

    return{
        state,
        loading,
    }
}
 
export default useGetByCategory;