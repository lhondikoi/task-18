import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteUser, updateUser } from '../store/slices/userSlice'
import '../styles/user.css'

export default function User({ id, username, name, email, phone, website, address }) {

    const dispatch = useDispatch()
    const dummy = {
        name: "test"
    }

    return (
        <div className="user">
            <h4>@{ username }</h4>
            <span>{ name }</span>
            <span>
                <small>{email} | {phone} | {website}</small>
            </span>
            <span><small>Address: {address.street}, {address.suite}, {address.city}, {address.zipcode} </small></span>
            <div className="user-actions">
                <button onClick={()=>{dispatch(deleteUser(id))}}>Delete</button>
                <button onClick={()=>{dispatch(updateUser({id, updateFields: dummy}))}}>Update</button>
            </div>
        </div>
    )
}