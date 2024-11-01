import { API } from '~/configs/axios';

export const login = async (params: {email: string, password: string}) => {
    return await API.post('auth/login', params);
};
