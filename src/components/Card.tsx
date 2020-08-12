import { Link } from "react-router-dom";
import React from 'react';
import { User } from '../interfaces/user.interface';

export const Card: React.FC<User> = ({
    id,
    username,
    email,
    address: {
        city,
        street,
        suite,
        zipcode
    },
    company: {
        name
    } }) => {

    return (
        <div className="card mb-4">
            <div className="card-body">
                <h5 className="card-title">
                    <Link to={"profile/" + id} >
                        {username}
                    </Link>
                </h5>
                <ul>
                    <li>Email: {email}</li>
                    <li>Адрес: Город {city}, улица {street} {suite} индекс {zipcode}
                    </li>
                    <li>Компания: {name}</li>
                </ul>
            </div>
        </ div >
    )

}
export default Card;