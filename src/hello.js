import {sayHi} from './function'
const name = "Theerasak"
console.log(sayHi(name))


import axios from 'axios'
const batmanUrl = 'http://www.omdbapi.com/?t=Batman&y=&plot=short&r=json'
axios.get(batmanUrl)
.then(response => {
        console.log(response.data)
    })