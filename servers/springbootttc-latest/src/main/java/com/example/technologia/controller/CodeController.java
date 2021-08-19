package com.example.technologia.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.technologia.entites.Code;
import com.example.technologia.repository.CodeRepository;


@RestController
@RequestMapping("codes")
@CrossOrigin(origins = "*")


public class CodeController {

	@Autowired
	CodeRepository cr;
	
	
	@GetMapping("/list")
	public List<Code> getAll(){
		return this.cr.findAll();
	}
	
	@PostMapping("/add")
	public Code addNew(@RequestBody Code c) {
		return this.cr.save(c);
	}
	
	
}
