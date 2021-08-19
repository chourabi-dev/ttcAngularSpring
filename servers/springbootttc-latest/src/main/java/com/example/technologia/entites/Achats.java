package com.example.technologia.entites;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table( name = "achats")
public class Achats {

	@Id
	@GeneratedValue( strategy = GenerationType.AUTO )
	private long id;
	
	
	@Column( name ="code_achat", nullable = false )
	private int code;
	
	@Column( name ="quantity", nullable = false )
	private int quantity;
	
	@Column( name ="date", nullable = false )
	private LocalDateTime date = LocalDateTime.now();
	
	@ManyToOne
	@JoinColumn( nullable = true, name ="produits_id" )
	private Produit produit;
	
	@ManyToOne
	@JoinColumn( nullable = true, name ="clients_id" )
	private Client client;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public int getCode() {
		return code;
	}

	public void setCode(int code) {
		this.code = code;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public Produit getProduit() {
		return produit;
	}

	public void setProduit(Produit produit) {
		this.produit = produit;
	}

	public Client getClient() {
		return client;
	}

	public void setClient(Client client) {
		this.client = client;
	}

	public LocalDateTime getDate() {
		return date;
	}

	public Achats(long id, int code, int quantity, LocalDateTime date, Produit produit, Client client) {
		super();
		this.id = id;
		this.code = code;
		this.quantity = quantity;
		this.date = date;
		this.produit = produit;
		this.client = client;
	}

	public Achats() {
		super();
	}
	
	
	
	
	
	
	
	
	
}
