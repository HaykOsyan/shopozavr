import axios from "axios";
import { $host, $authHost } from ".";


// export const createClient = async(name,phone,type) => {
//     const {data} = await $authHost.post('api/client',{'name': name, 'phone':phone, 'type':type})
//     return data
// }

// export const fetchClients = async () => {
//     const {data} = await $host.get('api/client')
//     return data
// }

export const createClient = async (client) => {
    try {
      const response = await axios.post(`/api/client`, client);
      return response.data;
    } catch (error) {
      console.error('Error creating client:', error);
      throw error;
    }
  };
  
  export const fetchClients = async () => {
    try {
      const response = await axios.get(`api/clients`);
      return response.data.clients;
    } catch (error) {
      console.error('Error fetching clients:', error);
      throw error;
    }
  };
  
  export const fetchOneClient = async (id) => {
    try {
      const response = await axios.get(`api/client/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching one client:', error);
      throw error;
    }
  };