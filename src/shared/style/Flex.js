import React from 'react'

const Flex = ({className,children,...style}) => {
    return (
        <div
            className={className}
            children={children}
            style={style}
        />
    )
}
export default Flex;