package com.example.technologia.entites;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table( name = "categories")
public class Category {

	@Id
	@GeneratedValue( strategy = GenerationType.AUTO )
	private long id;
	
	
	@Column( name ="produit_name", nullable = false )
	private String name;
	
	
	@OneToMany( mappedBy="category", fetch = FetchType.LAZY , cascade = CascadeType.ALL )
	private List<Produit> produits;
	
	


	public List<Produit> getProduits() {
		return produits;
	}


	public void setProduits(List<Produit> produits) {
		this.produits = produits;
	}


	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public Category(long id, String name) {
		super();
		this.id = id;
		this.name = name;
	}
	
	public Category() {
		super();
	}
	
	
}
