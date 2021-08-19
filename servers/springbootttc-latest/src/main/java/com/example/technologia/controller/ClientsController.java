package com.example.technologia.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.technologia.entites.Client;
import com.example.technologia.repository.ClientsRepository;

@RestController
@RequestMapping("clients")
@CrossOrigin(origins = "*")

public class ClientsController {

	@Autowired
	ClientsRepository cr;
	
	
	
	
	@GetMapping("/list")
	public List<Client> getAll(){
		return this.cr.findAll();
	}
	
	@PostMapping("/add")
	public Client addNew(@RequestBody Client c) {
		return this.cr.save(c);
	}
	
	
}
