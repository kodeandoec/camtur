import React, { useEffect, useState } from "react"

import { baseUrl, camturAPI } from "../modules/camturAPI"

const useAtractions = ( navigation ) => {

    const [state, setState] = useState([])
    const [loading, setLoading] = useState(false)

    const getAttractionsList = async ( ) => {
        
        setLoading(true)

        const data = await camturAPI.get(`${baseUrl}/attractions`);

        setState(data.data.rows)

        setLoading(false)
    }

    useEffect(() => {
        getAttractionsList( )
    }, []);

    return{
        state,
        loading,
    }
}
 
export default useAtractions;