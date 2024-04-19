import axios from 'axios';
import API_BASE from './customVariables';


interface UserData {
    id: number;
    username: string;
}

export const getService = async (): Promise<UserData> => {
    const requestUrl = `${API_BASE}/api`;

    const headers = {
        'Content-Type': 'application/json', 
    };

    try {
        const response = await axios.get<UserData>(requestUrl, { headers });

        // Check response status
        if (response.status === 200) {
            console.log('User data', response.data);
            return response.data;
        } else {
            // Handle unexpected status code
            console.error('Unexpected status code:', response.status);
            throw new Error('Unexpected status code');
        }
    } catch (error) {
        // Handle login error
        console.error('Request error:', error);
        throw error;
    }
};


interface LoginData {
    userName: string;
    password: string;
}

interface UserData {
    id: number;
    username: string;
}

export const postService = async (username: string, password: string): Promise<UserData> => {
    const requestUrl = `${API_BASE}/api`;

    const data: LoginData = {
        userName: username,
        password: password
    };

    const headers = {
        'Content-Type': 'application/json', // Adjust content type if needed
        // Add any other headers as needed
    };

    try {
        const response = await axios.post<UserData>(requestUrl, data, { headers });

        // Check response status
        if (response.status === 200) {
            console.log('Login successful:', response.data);
            return response.data;
        } else {
            // Handle unexpected status code
            console.error('Unexpected status code:', response.status);
            throw new Error('Unexpected status code');
        }
    } catch (error) {
        // Handle login error
        console.error('Login error:', error);
        throw error;
    }
};

