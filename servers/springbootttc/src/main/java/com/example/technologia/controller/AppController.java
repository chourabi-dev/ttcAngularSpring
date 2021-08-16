package com.example.technologia.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.technologia.models.AddProductModel;
import com.example.technologia.models.Client;

@RestController
@RequestMapping("/app")
public class AppController {
	
	// the client is requesting data !!!
	
	/*@GetMapping("/clients")
	public String helloWorld( @RequestParam( required = false ) String dep,@RequestParam(required = false) String year ) {
		
		if( (dep != null ) ) {
			//System.out.println(dep);
			//System.out.println(year);
			return "getting clients form the dep : ".concat(dep).concat(" from the year :").concat(""+year );
		}else {
			return "gettin all clients...";
		}
	}
	
	
	@GetMapping("/calcul")
	public String somme(@RequestParam() String x,@RequestParam() String y ) {
		Integer xi = Integer.parseInt(x);
		Integer yi = Integer.parseInt(y);
		
		return "La somme de "+x+" et "+y+" = :"+(xi+yi);
		
	}
	
	
	@GetMapping("/list/client")
	public List<Client>  clientsList( ) {
		 List<Client> clients = new ArrayList<Client>(); // RESPONSE DATABASE
		 
		 Client c1 = new Client();
		 c1.setFullanme("chourabi taher");
		 c1.setEmail("tchourabi@gmail.com");
		 
		 clients.add(c1);
		 clients.add(c1);
		 clients.add(c1);
		 clients.add(c1);
		 clients.add(c1);
		  
		 
		 return clients;
		 
	}*/
	
	
	// the client is sending data to the server
	
	@PostMapping("/add-product")
	public void addNewProduct( @RequestBody() AddProductModel request ) {
		// use the data came from the postman 
		
		System.out.println("the title sent from the post man => ".concat(request.getTitle()));
		
		// we will use the getter model !! > to create a new entity
		
	}
	
	
	
	
	

}
