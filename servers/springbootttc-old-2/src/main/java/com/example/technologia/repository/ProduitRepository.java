package com.example.technologia.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.technologia.entites.Produit;

public interface ProduitRepository extends JpaRepository<Produit,Long> {

}
