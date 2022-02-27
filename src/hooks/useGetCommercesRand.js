import React, { useEffect, useState } from "react"

import { baseUrl, camturAPI } from "../modules/camturAPI"

const useGetCommercesRand = ( id ) => {

    const [state, setState] = useState([])
    const [loading, setLoading] = useState(false)

    const getRandData = async ( ) => {
        
        setLoading(true)

        const data = await camturAPI.get(`${baseUrl}/rand`);

        setState(data.data)

        setLoading(false)
    }

    useEffect(() => {
        getRandData( )
    }, []);

    return{
        state,
        loading,
    }
}
 
export default useGetCommercesRand;