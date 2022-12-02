package com.example.backForLab9.repository;

import com.example.backForLab9.entity.DrugEntity;
import org.springframework.data.repository.CrudRepository;

public interface DrugRepo  extends CrudRepository<DrugEntity, Integer> {
    DrugEntity findByName(String name);
}
