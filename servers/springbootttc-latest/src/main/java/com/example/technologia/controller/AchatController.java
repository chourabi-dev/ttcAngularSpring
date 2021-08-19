package com.example.technologia.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.technologia.entites.Achats;
import com.example.technologia.models.AchatModel;
import com.example.technologia.services.AchatService;

@RestController
@RequestMapping("/achats")
@CrossOrigin(origins = "*")
public class AchatController {
	
	
	@Autowired
	AchatService achatService;
	
	@PostMapping("/add")
	public Achats addNewTransaction( @RequestBody AchatModel am ) {
		
		Achats a = new Achats();
		
		a.setCode(am.getCode());
		a.setClient(  this.achatService.getClientsRepository().findById(am.getClient_id()).get()   );
		a.setProduit(  this.achatService.getProduitRepository().findById(am.getProduit_id()).get()   );
		a.setQuantity(am.getQuantity());
		
		
		this.achatService.getAchatRepository().save(a);
		
		
		
		
		
		return a;
	}
	

}
