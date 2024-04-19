import axios from 'axios';
import API_BASE from './customVariables';

interface UserData {
    id: number;
    username: string;
}

export const getAllUserService = async (): Promise<UserData> => {
    const requestUrl = `${API_BASE}/api/user/getall`;

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
