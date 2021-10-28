package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Exception.ResourceNotFoundException;
import com.example.demo.Model.ExpenseModel;
import com.example.demo.Repository.ExpenseRepository;

@CrossOrigin (origins = "http://localhost:3000")
@RestController 
@RequestMapping ("/api")


public class ExpenseController {
	
	@Autowired
	private ExpenseRepository expenseRepo; 
	
 
//get request URL: "/api/allexpenses"
	
	@GetMapping ("/allexpenses")
	public List<ExpenseModel> getAllExpenses(){
		return expenseRepo.findAll();
	}
	
	@GetMapping ("/expense/{id}")
	public ResponseEntity <ExpenseModel> getExpenseById(@PathVariable int id ){
		ExpenseModel s = expenseRepo.findById(id).orElseThrow(()-> new ResourceNotFoundException());
		System.out.println("get id: "+id);
		return ResponseEntity.ok(s);
	}
	
	//post request
	@PostMapping ("/expense/add")
	public ExpenseModel addItem(@RequestBody ExpenseModel expense) {
//		System.out.println("post id: "+ expense.toString());
		return expenseRepo.save(expense);
	}
	
	@PutMapping ("/expense/{id}")
    public ExpenseModel updateItem(@PathVariable int id, @RequestBody ExpenseModel expense) {
		ExpenseModel oldExpense = expenseRepo.findById(id).orElseThrow(()-> new ResourceNotFoundException());
		oldExpense.setTitle(expense.getTitle());
		oldExpense.setComment(expense.getComment());
		oldExpense.setAmount(expense.getAmount());
		oldExpense.setDate(expense.getDate());
		System.out.println("update name: "+ id +  expense.toString());
        return expenseRepo.save(oldExpense);
    }//end updateItem
	
	@DeleteMapping ("/expense/{id}")
	public void deleteItem(@PathVariable int id) {
		expenseRepo.deleteById(id);
		
	}
	
	
}//end class Expense Controller
