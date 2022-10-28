import axios from "axios";

export async function login(data) {
    try {
        const response = await axios.post("http://localhost:5000/api/login", data);
        console.log(response);
        return response;
    } catch (err) {
        console.log(err);
        alert('Internal Server Error.');
    }
}