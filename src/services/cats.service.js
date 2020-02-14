import { CATS } from '../data/cats';

class CatsService {
    cats = CATS;

    constructor() {
        this.cats.forEach(cat => cat.score = Math.floor(Math.random() * 10));
    }

    vote(id) {
        const cat = this.cats.find(lCat => lCat.id === id);

        if (cat) {
            cat.score++;
        }
    }

}

export default new CatsService();
