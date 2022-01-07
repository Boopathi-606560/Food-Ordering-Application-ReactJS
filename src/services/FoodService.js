import axios from 'axios';

const FOOD_API_BASE_URL = "http://localhost:8080/api/v1/";

class FoodService {

    getAllOrdersList(){
        return axios.get(FOOD_API_BASE_URL);
    }

    createUser(userDetail){
        return axios.post(FOOD_API_BASE_URL + 'createUser', userDetail);
    }
    loginUserValidation(userDetail){
        return axios.post(FOOD_API_BASE_URL + 'login', userDetail);
    }
    getUserById(userId){
        return axios.get(FOOD_API_BASE_URL + '/' + userId);
    }

    updateEmployee(employee, employeeId){
        return axios.put(FOOD_API_BASE_URL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(FOOD_API_BASE_URL + '/' + employeeId);
    }

    placeOrder(order){
        return axios.post(FOOD_API_BASE_URL + '/placeOrder', order)
    }
}

export default new FoodService()