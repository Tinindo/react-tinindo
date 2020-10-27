export default class UsersService {
    constructor(axios) {
        this.authToken = null;
        this.axios = axios;
    }

    async login({ email, password }) {
        const loginResponse = await this.axios.post('sessions', { email, password });

        console.log(loginResponse);

        this.authToken = loginResponse.data.token;

        return loginResponse.data;
    }
}