package com.example.technologia.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.technologia.entites.Category;
import com.example.technologia.repository.CategoryRepository;

@RestController
@RequestMapping("categories")
public class CategoryController {
	
	
	
	@Autowired
	CategoryRepository cr;

	@GetMapping("/list")
	public List<Category> getAll(){
		return this.cr.findAll();
	}
}
