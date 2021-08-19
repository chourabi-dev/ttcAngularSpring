package com.example.technologia.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.technologia.entites.Category;

public interface CategoryRepository extends JpaRepository<Category,Long> {

}
