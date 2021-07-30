import React from 'react'

const ShowBoxes = (props) => {
    return (
    <div style={{display:'flex'}}>
        {
            props.boxes.map((box, index) => {
                return <div style={{backgroundColor:box, width:'50px', height:'50px'}}>
                </div>
            })
        }
    </div>
    )
}

export default ShowBoxes
