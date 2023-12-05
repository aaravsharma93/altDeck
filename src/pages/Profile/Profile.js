import React from 'react'
import Button from '@mui/material/Button';
import "./Profile.css"

const Profile = () => {
    return (
        <div className="profile_outer_container">
            Connect wallet to see profile page
            <Button variant="contained" style = {{width:"200px" , fontSize:"large"}}>Connect Wallet</Button>
        </div>
    )
}

export default Profile
