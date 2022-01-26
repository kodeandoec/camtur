import React, { useEffect, useState } from "react"

import { baseUrl, camturAPI } from "../modules/camturAPI"

const useCategories = ( navigation ) => {

    const [state, setState] = useState([])
    const [loading, setLoading] = useState(false)

    const getCategoriesList = async ( ) => {
        
        setLoading(true)

        const data = await camturAPI.get(`${baseUrl}/categories`);

        setState(data.data.rows)

        setLoading(false)
    }

    useEffect(() => {
        getCategoriesList( )
    }, []);

    return{
        state,
        loading,
    }
}
 
export default useCategories;