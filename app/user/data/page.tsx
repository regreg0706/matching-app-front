'use client';
import { useEffect,useState } from "react";
import axios from "axios";

const Example = () => {

    const [users,setUsers ] = useState({ name: "", email: "" })

    useEffect(() => {
        async function getUser() {
            const res = await axios.get('http://localhost:8080/api/user/data')
            console.log(res.data);
            setUsers(res.data);
            return res;

        }
        getUser();

    },[]);

    return (
        <div>
            <h3>{users.name}</h3>
            <h3>{users.email}</h3>
        </div>
    )
};

export default Example;

