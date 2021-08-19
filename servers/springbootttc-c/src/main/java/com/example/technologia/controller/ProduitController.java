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

import com.example.technologia.entites.Category;
import com.example.technologia.entites.Produit;
import com.example.technologia.models.ProduitModel;
import com.example.technologia.models.ResModel;
import com.example.technologia.repository.CategoryRepository;
import com.example.technologia.repository.ProduitRepository;

@RestController
@RequestMapping("/produit")
public class ProduitController {
	
	
	@Autowired
	private ProduitRepository pr;
	
	@Autowired
	private CategoryRepository cr;
	
	
	
	// add
	@PostMapping("/add")
	public ResModel addNewProduct( @RequestBody ProduitModel p  ) {
		try {
			Produit produit = new Produit();
			
			produit.setName(p.getName());
			produit.setPrice(p.getPrice()); 
			
			Category c = null;
			
			c = this.cr.findById(p.getCategory_id()).get();
			
			produit.setCategory(c);
			
			
			pr.save(produit);
			
			return new ResModel(true,"Product added successfully !");
			
			
		}catch(Exception e) {
			System.out.println(e.getMessage());
			return new ResModel(false,e.getMessage());
		}
		
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
	
	
	// listing
	@GetMapping("/list/price/{price}")
	public List<Produit> getProduits(@PathVariable int price){
		return this.pr.findByPrice(price);		 
	}
	
		
	
	

}
