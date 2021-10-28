import axios from 'axios';

const EXPENSE_API_BASE_URL= "http://localhost:8081/api";
class ExpenseService{

    getExpenses(){
       return axios.get(EXPENSE_API_BASE_URL+"/allexpenses");
    }
    createExpense(expense){
        return axios.post(EXPENSE_API_BASE_URL+"/expense/add",expense);
    }

    getExpenseById(id){
        return axios.get(EXPENSE_API_BASE_URL+"/expense/"+id);
    }

    updateExpense(id,expense){
        return axios.put(EXPENSE_API_BASE_URL+"/expense/"+id,expense);
    }

    deleteExpense(id){
        return axios.delete(EXPENSE_API_BASE_URL+"/expense/"+id);
    }

}

export default new ExpenseService();