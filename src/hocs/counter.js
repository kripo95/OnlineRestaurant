import React from 'react';

import useAmount from "../customHooks/use-amount";

export default (WrappedComponent) => (props) => {
    const amountProps = useAmount(0);
    return (
        <WrappedComponent
            {...props}
            {...amountProps} />
    )
}
