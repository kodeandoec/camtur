import React, { useState } from "react"

import { baseUrl, camturAPI } from "../modules/camturAPI"

const useGetByTagSearch = ( id ) => {

    const [state, setState] = useState([])
    const [loading, setLoading] = useState(false)

    const getCommercesByTag = async ( term ) => {

        setLoading(true)

        const data = await camturAPI.get(`${baseUrl}/filter/tag/?tag=${term}`);

        setState(data.data)

        setLoading(false)
    }

    return{
        state,
        loading,
        getCommercesByTag
    }
}
 
export default useGetByTagSearch;