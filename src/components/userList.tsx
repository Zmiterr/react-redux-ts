import React, {FC, useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchUsers} from "../store/reducers/action-creators/user";

const UserList:FC = () => {
    const {isLoading, users, error} = useTypedSelector(state => state.users)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchUsers())
    }, [dispatch])

    if(isLoading) return <div>Loading</div>
    if(error) return <div>Happen fetch error: {error}</div>
    return (
        <div>
            {users.map(user =>
                <p key={user.id}>{user.name}</p>
            )}
        </div>
    );
};

export default UserList;
