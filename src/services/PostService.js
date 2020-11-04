import axios from 'axios';
import { BASE_URL } from '../constants';

class PostService {
    static async getPost(id) {
        try {
            return (await axios.get(`${ BASE_URL }${ id }`)).data;
        } catch(exception) {
            console.error(exception);
        }
    }
}

export default PostService;
