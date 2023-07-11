 import data from '../data.js'
 import _ from 'lodash'
 
 export const resolvers =  {
    Query: {
        games(){
            return data.games
        },
        reviews() {
            return data.reviews
        }, 
        authors(){
            return data.authors
        },
        author(parent, args){
            const id = args.id
            const author = _.find(data.authors, {id: Number(id)});
            return author;
        }
    }
}