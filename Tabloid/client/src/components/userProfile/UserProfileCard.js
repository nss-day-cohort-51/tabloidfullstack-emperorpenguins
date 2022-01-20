export const UserProfileCard = ({ fullName, displayName, userType }) => {
    return (
        <div className="ProfileCard" style={{
            border: "1px solid black",
            padding: "5px"
        }}>
            <h4>{displayName}</h4>
            <p>Full Name: {fullName}</p>
            <p>User Type: {userType}</p>
        </div>
    );
}