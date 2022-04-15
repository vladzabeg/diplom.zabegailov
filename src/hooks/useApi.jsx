import React, { useEffect, useState } from "react";

export const useApi = (handlerData) => {

    const [data, setData] = useState();

    
    useEffect(() => {
        handlerData()
            .then(result => setData(result))
    }, [handlerData]);

    return { data }
}
