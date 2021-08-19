package com.example.technologia.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.technologia.repository.AchatRepositroy;
import com.example.technologia.repository.ClientsRepository;
import com.example.technologia.repository.ProduitRepository;

@Service
public class AchatService {

	@Autowired
	ClientsRepository clientsRepository;
	
	@Autowired
	AchatRepositroy achatRepository;
	
	@Autowired
	ProduitRepository produitRepository;

	public ClientsRepository getClientsRepository() {
		return clientsRepository;
	}

	public AchatRepositroy getAchatRepository() {
		return achatRepository;
	}

	public ProduitRepository getProduitRepository() {
		return produitRepository;
	}
	
	
	
	
	
	
}
