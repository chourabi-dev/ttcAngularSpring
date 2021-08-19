package com.example.technologia.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.technologia.entites.Category;
import com.example.technologia.entites.Code;
import com.example.technologia.entites.Produit;
import com.example.technologia.models.ProduitModel;
import com.example.technologia.models.ProduitResModel;
import com.example.technologia.models.ResModel;
import com.example.technologia.repository.CategoryRepository;
import com.example.technologia.repository.CodeRepository;
import com.example.technologia.repository.ProduitRepository;

@RestController
@RequestMapping("/produit")
@CrossOrigin(origins = "*")

public class ProduitController {
	
	
	@Autowired
	private ProduitRepository pr;
	
	@Autowired
	private CategoryRepository cr;
	@Autowired
	private CodeRepository coder;
	
	
	
	
	// add
	@PostMapping("/add")
	public ResModel addNewProduct( @RequestBody ProduitModel p  ) {
		try {
			Produit produit = new Produit();
			Code code = new Code();
			
			code.setCode(p.getCode());
			
			this.coder.save(code);
			
			
			produit.setName(p.getName());
			produit.setPrice(p.getPrice()); 
			
			Category c = null;
			
			c = this.cr.findById(p.getCategory_id()).get();
			
			produit.setCategory(c);
			produit.setCode(code);
			
			
			pr.save(produit);
			
			return new ResModel(true,"Product added successfully !");
			
			
		}catch(Exception e) {
			System.out.println(e.getMessage());
			return new ResModel(false,e.getMessage());
		}
		
	}
	
	
	// update
	@PostMapping("/update/{id}")
	public Produit update(@RequestBody ProduitModel p,@PathVariable() long id ) {
		try {
			Produit oldP = this.pr.findById(id).get();
			oldP.setName(p.getName());
			oldP.setPrice(p.getPrice());
			
			Code oldCode = oldP.getCode();
			oldCode.setCode(p.getCode());
			this.coder.save(oldCode);
			
			oldP.setCode(oldCode);
			
			return this.pr.save(oldP);
			
			
			
		}catch(Exception e) {
			System.out.print(e.getMessage());
			return null;
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
	@GetMapping("/details/{id}")
	public ProduitResModel getProduits(@PathVariable() long id ){
		Produit p =  this.pr.findById(id).get();
		
		
		ProduitResModel res = new ProduitResModel();
		
		res.setCategory(p.getCategory());
		res.setCode(p.getCode());
		res.setId(p.getId());
		res.setName(p.getName());
		res.setPrice(p.getPrice());
		
		
		return res;
	 
	}
	
	
	// listing
	@GetMapping("/list/price/{price}")
	public List<Produit> getProduits(@PathVariable int price){
		return this.pr.findByPrice(price);		 
	}
	
		
	
	

}
