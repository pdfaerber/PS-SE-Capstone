package com.example.demo.Model;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name = "expenses")

public class ExpenseModel {

	@Id
	private int id; 
	private String title;
	private String comment;
	private double amount;
	private String date;
	
		
	public ExpenseModel(int id, String title, String comment, double amount, String date) {
		super();
		this.id = id;
		this.title = title;
		this.comment = comment;
		this.amount = amount;
		this.date = date;
	}

	public ExpenseModel() {
		
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	@Override
	public String toString() {
		return "ExpenseModel [id=" + id + ", title=" + title + ", comment=" + comment + ", amount=" + amount + ", date="
				+ date + "]";
	}


	
}//end ExpenseModel Class
