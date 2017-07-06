import axios from 'axios';

export function getTroops() {
    return axios.get('http://localhost:3005/defenses').then(res => res.data);
}

export function addTroop(recruit) {
    return axios.post('http://localhost:3005/defenses', {recruit: recruit})
}