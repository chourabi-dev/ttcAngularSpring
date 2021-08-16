package com.example.technologia.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.technologia.entites.Produit;

public interface ProduitRepository extends JpaRepository<Produit,Long> {
	
	public List<Produit> findByPrice(int price);
	
	
	@Query( value="SELECT * FROM produits", nativeQuery = true )
	public List<Produit> getCutomProduitList();
	
	
	@Query( value="SELECT p FROM Produit p WHERE p.price = :price" )
	public List<Produit> getCutomProduitListWithPrice(
			@Param("price") int price
	);
	
	
	

}
