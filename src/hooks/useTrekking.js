import React, { useEffect, useState } from "react"

import { baseUrl, camturAPI } from "../modules/camturAPI"

const useTrekking = ( navigation ) => {

    const [state, setState] = useState([])
    const [loading, setLoading] = useState(false)

    const listTrekking = async ( ) => {
        
        setLoading(true)

        const data = await camturAPI.get(`${baseUrl}/trekking`);

        setState(data.data.rows)

        setLoading(false)
    }

    useEffect(() => {
        listTrekking( )
    }, []);

    return{
        state,
        loading,
    }
}
 
export default useTrekking;