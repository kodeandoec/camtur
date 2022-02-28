import { useState, useCallback, useEffect } from 'react';

export default useTextSearch = ( input = '', time = 500 ) => {

    const [debouncedValue, setDebouncedValue] = useState(input);

    useEffect(() => {
        const timeout = setTimeout( () => {
            setDebouncedValue( input );
        }, time )

        return () => {
            clearTimeout( timeout );
        }

    }, [input])

    return debouncedValue;
}
