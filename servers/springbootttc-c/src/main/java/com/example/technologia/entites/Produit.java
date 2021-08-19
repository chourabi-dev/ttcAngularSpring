package com.example.technologia.entites;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table( name = "produits")
@JsonIgnoreProperties({"hibernateLazyInitializer","handler","category"})
public class Produit {

	@Id
	@GeneratedValue( strategy = GenerationType.AUTO )
	private long id;
	
	
	@Column( name ="produit_name", nullable = false )
	private String name;
	
	@Column( name ="produit_prix", nullable = false )
	private int price;
	
	@ManyToOne
	@JoinColumn( nullable = true, name ="categories_id" )
	private Category category;
	
	
	@OneToOne
	@JoinColumn( nullable = true, name ="codes_id" )
	private Code code;
	
	
	
	
	
	
	

	public Code getCode() {
		return code;
	}

	public void setCode(Code code) {
		this.code = code;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
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

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public Produit(long id, String name, int price) {
		super();
		this.id = id;
		this.name = name;
		this.price = price;
	}

	public Produit() {
		super();
	}
	
	
	
	
	
	
}
