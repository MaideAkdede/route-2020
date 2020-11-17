import React from 'react'
import {Link} from 'react-router-dom'

function Users () {

    const users = [
        {
            userId: 1,
            userName: "Samantha"
        },
        {
            userId: 2,
            userName: "David"
        },
        {
            userId: 3,
            userName: "Rachel"
        }
    ]
    return (
        <ul>
            {
                users.map( user =>(
                    <li key={user.userId}>
                        <Link to={`/users/${user.userId}`}>
                            Utilisateur : {user.userName}
                        </Link>
                    </li>
                    )
                )
            }
        </ul>
    )
}
export default Users;