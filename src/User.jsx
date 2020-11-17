import React from 'react'

export default function User(props) {
    return (
        <p>
            Bonjour utilisateur n° {props.match.params.userId}
        </p>
    )
}