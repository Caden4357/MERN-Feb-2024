import React, { useState } from 'react';

const DisplayUsers = (props) => {
    const {userList} = props
    return (
        <div>
            {
                userList.map((user, idx) => (
                    <div key={idx}>
                        <p>{user.username}</p>
                        <p>{user.email}</p>
                        <p>{user.password}</p>
                        <p>{user.age}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayUsers;