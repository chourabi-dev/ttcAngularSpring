package com.example.technologia.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.technologia.entites.Produit;
import com.example.technologia.models.ProduitModel;
import com.example.technologia.repository.ProduitRepository;

@RestController
@RequestMapping("/produit")
public class ProduitController {
	
	
	@Autowired
	private ProduitRepository pr;
	
	// add
	@PostMapping("/add")
	public void addNewProduct( @RequestBody ProduitModel p  ) {
		Produit produit = new Produit();
		
		produit.setName(p.getName());
		produit.setPrice(p.getPrice()); 
		
		
		pr.save(produit);
		
		
	}
	
	
	// update
	@PostMapping("/update/{id}")
	public void update(@RequestBody ProduitModel p,@PathVariable() long id ) {
		try {
			Produit oldP = this.pr.findById(id).get();
			oldP.setName(p.getName());
			oldP.setPrice(p.getPrice());
			
			this.pr.save(oldP);
			
		}catch(Exception e) {
			System.out.print(e.getMessage());
		}
	}
	
	
	
	
	// delete

	@DeleteMapping("/delete/{id}")
	public void delete( @PathVariable() long id ) {
		try {
			Produit oldP = this.pr.findById(id).get(); 
			
			this.pr.delete(oldP);
			
		}catch(Exception e) {
			System.out.print(e.getMessage());
		}
	}
	
	
	
	// listing
	@GetMapping("/list")
	public List<Produit> getProduits(){
		return this.pr.findAll();
	 
	}
	
	

}
