package com.example.technologia.entites;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table( name = "clients")

public class Client {

	@Id
	@GeneratedValue( strategy = GenerationType.AUTO )
	private long id;
	

	@Column( name ="code", nullable = false )
	private String code;
	
	@Column( name ="email", nullable = false )
	private String email;
	
	@Column( name ="fullname", nullable = false )
	private String fullname;
	
	
	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getFullname() {
		return fullname;
	}


	public void setFullname(String fullname) {
		this.fullname = fullname;
	}


	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getCode() {
		return code;
	}


	public void setCode(String code) {
		this.code = code;
	}


	public Client(long id, String code) {
		super();
		this.id = id;
		this.code = code;
	}


	public Client() {
		super();
 
	}
	
	
}
