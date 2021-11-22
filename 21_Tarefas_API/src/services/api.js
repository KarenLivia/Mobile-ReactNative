import axios from 'axios';
 
//http://localhost:3333/tasks
 
const api = axios.create({
  baseURL: 'https://tarefa-backend.herokuapp.com'
});
 
export default api;