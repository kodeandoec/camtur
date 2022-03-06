import React, { useState } from "react"

import { baseUrl, camturAPI } from "../modules/camturAPI"

const useGetByTagSearchEn = ( id ) => {

    const [state, setState] = useState([])
    const [loading, setLoading] = useState(false)

    const getCommercesByTag = async ( term ) => {

        setLoading(true)

        const data = await camturAPI.get(`${baseUrl}/filter/tag/en/?tag=${term}`);

        setState(data.data)

        setLoading(false)
    }

    return{
        state,
        loading,
        getCommercesByTag
    }
}
 
export default useGetByTagSearchEn;