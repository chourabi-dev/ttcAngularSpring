package com.example.technologia.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.technologia.entites.Client;

public interface ClientsRepository extends JpaRepository<Client,Long> {

}
