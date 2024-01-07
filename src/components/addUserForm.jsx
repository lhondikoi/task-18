import React from 'react';
import { useDispatch } from 'react-redux'
import { createUser } from '../store/slices/userSlice';
import '../styles/userform.css'


export default function AddUserForm() {
    const dispatch = useDispatch()
    const [newUser, setNewUser] = React.useState({
        name: "",
        username: "asdfasdf",
        email: "asdfasdf",
        address: {
            street: "",
            suite: "",
            city: "",
            zipcode: ""
        },
        phone: "asdfadsa",
        website: ""
    })
    return (
        <div className="add-user-form">
            <form className="user-form">
                <label htmlFor="name">Name
                    <input type="text" name="name" defaultValue={newUser.name} onChange={(e)=>setNewUser({...newUser, name: e.target.value})}/>
                </label>
                <label htmlFor="uname">Username
                    <input type="text" name="uname" defaultValue={newUser.username} onChange={(e)=>setNewUser({...newUser, username: e.target.value})}/>
                </label>
                <label htmlFor="email">Email
                    <input type="text" name="mail" defaultValue={newUser.email} onChange={(e)=>setNewUser({...newUser, email: e.target.value})}/>
                </label>
                <fieldset>
                    <legend>Address</legend>
                    <label htmlFor="address_street">Street
                        <input type="text" name="address_street" defaultValue={newUser.address.street} onChange={(e)=>setNewUser({...newUser, address: { ...newUser.address, street: e.target.value}})}/>
                    </label>
                    <label htmlFor="address_suite">Suite
                        <input type="text" name="address_suite" defaultValue={newUser.address.suite} onChange={(e)=>setNewUser({...newUser, address: { ...newUser.suite, suite: e.target.value}})}/>
                    </label>
                    <label htmlFor="address_city">City
                        <input type="text" name="address_city" defaultValue={newUser.address.city} onChange={(e)=>setNewUser({...newUser, address: { ...newUser.city, city: e.target.value}})}/>
                    </label>
                    <label htmlFor="address_zipcode">Zipcode
                        <input type="text" name="address_zipcode" defaultValue={newUser.address.zipcode} onChange={(e)=>setNewUser({...newUser, address: { ...newUser.address, zipcode: e.target.value}})}/>
                    </label>
                </fieldset>
                <label htmlFor="phone">Phone
                    <input type="text" name="phone" defaultValue={newUser.phone} onChange={(e)=>setNewUser({...newUser, phone: e.target.value})}/>
                </label>
                <label htmlFor="website">Website
                    <input type="text" name="website" defaultValue={newUser.website} onChange={(e)=>setNewUser({...newUser, website: e.target.value})}/>
                </label>
            </form>
            <button onClick={() => { dispatch(createUser(newUser)) }}>Add user</button>
        </div>
    )
}