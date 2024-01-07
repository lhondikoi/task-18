import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './store/slices/userSlice';
import User from './components/user'
import AddUserForm from './components/addUserForm'
import './styles/app.css'

export default function App() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    React.useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <div className="container">
            <h1 className='app-title'>CRUD with Axios & Redux Store</h1>
            {user.loading && <strong>Loading...</strong>}
            {!user.loading && user.error ? <strong>Error: {user.error}</strong> : null}
            {!user.loading && user.users.length ? (
                <div className="user-list">
                    { user.users.map((user) => (
                        <User key={user.id} {...user}/>
                    ))}
                </div>
            ) : null}
            <AddUserForm />
        </div>
    )
}