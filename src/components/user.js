import React from 'react'

function user({user}) {
  return (
    <div className='userContainer'>
        <img src={user.picture.large} />
        <p>{`Full Name : ${user.name.first} ${user.name.last}`}</p>
        <p>{`Full Name : ${user.phone}`}</p>
    </div>
  )
}

export default user