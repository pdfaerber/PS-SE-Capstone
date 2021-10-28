package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.Model.ExpenseModel;

import java.util.List;

@Repository
public interface ExpenseRepository extends JpaRepository <ExpenseModel, Integer> {
	List <ExpenseModel> findByTitle(String title);

}
