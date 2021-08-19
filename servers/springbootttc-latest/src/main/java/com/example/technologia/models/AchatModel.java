package com.example.technologia.models;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.example.technologia.entites.Client;
import com.example.technologia.entites.Produit;

public class AchatModel {

	private int code; 
	private int quantity; 
	private long produit_id; 
	private long client_id;
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
	public long getProduit_id() {
		return produit_id;
	}
	public void setProduit_id(long produit_id) {
		this.produit_id = produit_id;
	}
	public long getClient_id() {
		return client_id;
	}
	public void setClient_id(long client_id) {
		this.client_id = client_id;
	}
	public AchatModel() {
		super();
	}
	
	
	

}
