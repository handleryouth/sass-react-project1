import React from 'react'

export default function Number(props) {
    return (
        <div className="number-list">
            <h3>{props.title}</h3>
            <p>{props.subtitle}</p>
        </div>
    )
}
