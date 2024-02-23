import { useState, useEffect } from 'react';
import axios from 'axios';

function UserData() {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('/api/user/data');
                setUserData(response.data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchUserData();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>User Data</h2>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
            {/* 他のデータも表示可能 */}
        </div>
    );
}

export default UserData;
