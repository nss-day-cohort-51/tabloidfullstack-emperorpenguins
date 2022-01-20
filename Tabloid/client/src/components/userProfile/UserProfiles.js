import React, { useEffect, useState } from "react";
import { _getAllProfiles } from "../../modules/UserProfileManager";
import { UserProfileCard } from "./UserProfileCard";

export const UserProfiles = () => {
    const [profiles, setProfiles] = useState([]);
    useEffect(() => {
        _getAllProfiles().then(res => setProfiles(res))
    }, [])
    return (
        profiles.map(p => <UserProfileCard fullName={p.fullName} displayName={p.displayName} userType={p.userType.name} key={p.id} />)
    );
}