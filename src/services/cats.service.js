import axios from 'axios';

class CatsService {
    cats;

    async load() {
        return axios.get(`http://localhost:3001/cats?_sort=score&_order=asc`)
            .then(res => {
                this.cats = res.data;
                return res.data
            });
    }

    async vote(id) {
        const cat = this.cats.find(lCat => lCat.id === id);

        if (cat) {
            if (cat.score)
                cat.score++;
            else cat.score = 1;
        }

        return axios.put(`http://localhost:3001/cats/${cat.id}`
            , { ...cat, score: cat.score }
            , { headers: { 'Content-Type': 'application/json' } })
            .then(res => res.data);
    }

}

export default new CatsService();
