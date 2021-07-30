import React from 'react'

const Welcome = ({ color, backgroundColor }) => {
    return (
        <div>
            <nav>
                <h3 style={{ color, backgroundColor }}>Welcome</h3>
            </nav>
        </div>
    )
}

export default Welcome
