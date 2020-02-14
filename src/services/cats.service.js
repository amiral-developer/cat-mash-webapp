import axios from 'axios';

class CatsService {
    cats;

    async load() {
        return axios.get(`http://localhost:3001/cats/`)
            .then(res => {
                this.cats = res.data;
                this.cats.forEach(cat => cat.score = Math.floor(Math.random() * 10));
                return res.data
            });
    }

    vote(id) {
        const cat = this.cats.find(lCat => lCat.id === id);

        if (cat) {
            cat.score++;
        }
    }

}

export default new CatsService();
