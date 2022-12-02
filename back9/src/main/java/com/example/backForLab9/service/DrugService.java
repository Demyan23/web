package com.example.backForLab9.service;

import com.example.backForLab9.entity.DrugEntity;
import com.example.backForLab9.exception.DrugAlreadyExistException;
import com.example.backForLab9.exception.DrugNotFoundException;
import com.example.backForLab9.repository.DrugRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

@Service
public class DrugService {

    @Autowired
    private DrugRepo drugRepo;

    public DrugEntity registration(DrugEntity drug) throws DrugAlreadyExistException {
        if(drugRepo.findByName(drug.getName()) != null) {
            throw  new DrugAlreadyExistException("drug with that name already exists");
        }
        return drugRepo.save(drug);
    }

    public DrugEntity getOne(Integer id) throws DrugNotFoundException {
        DrugEntity drug = drugRepo.findById(id).get();
        if(drug == null) {
            throw new DrugNotFoundException("drug not found");
        }
        return drug;
    }

    public List<DrugEntity> getAll() {
        return (List<DrugEntity>) drugRepo.findAll();
    }
    public Integer delete(Integer id) {
        drugRepo.deleteById(id);
        return id;
    }

    @Transactional
    public void update(Integer id, DrugEntity drug) {
        DrugEntity newDrug = drugRepo.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        newDrug.setName(drug.getName());
        newDrug.setPrice(drug.getPrice());
        newDrug.setImage(drug.getImage());
        newDrug.setDescription(drug.getDescription());
    }

    public List<DrugEntity> sortByName() {
        List<DrugEntity> items = (ArrayList<DrugEntity>) drugRepo.findAll();
        items.sort(Comparator.comparing(DrugEntity::getName));
        return items;
    }

    public List<DrugEntity> sortByPrice() {
        List<DrugEntity> items = (ArrayList<DrugEntity>) drugRepo.findAll();
        items.sort(Comparator.comparing(DrugEntity::getPrice));
        return items;
    }
}
