package com.example.backForLab9.controller;

import com.example.backForLab9.entity.DrugEntity;
import com.example.backForLab9.exception.DrugAlreadyExistException;
import com.example.backForLab9.exception.DrugNotFoundException;
import com.example.backForLab9.service.DrugService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/catalog")
public class DrugController {

    @Autowired
    private DrugService drugService;

    @CrossOrigin
    @PostMapping("/add")
    public ResponseEntity registration(@RequestBody DrugEntity drug) {
        try {
            drugService.registration(drug);
            return ResponseEntity.ok("drug saved successfully");
        } catch (DrugAlreadyExistException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("something went wrong");
        }
    }

    @CrossOrigin
    @GetMapping
    private List<DrugEntity> getAll() {
        return drugService.getAll();
    }

    @CrossOrigin
    @GetMapping("/{id}")
    public ResponseEntity getOneDrug(@PathVariable Integer id) {
        try {
            return ResponseEntity.ok(drugService.getOne(id));
        } catch (DrugNotFoundException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }  catch (Exception e) {
            return ResponseEntity.badRequest().body("something went wrong");
        }
    }

    @CrossOrigin
    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteDrug(@PathVariable Integer id) {
        try {
            return ResponseEntity.ok(drugService.delete(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("something went wrong");
        }
    }

    @CrossOrigin
    @PutMapping("/update/{id}")
    private void update(@PathVariable("id") Integer id, @RequestBody DrugEntity drug) {
        drugService.update(id, drug);
    }
    @CrossOrigin
    @GetMapping("/sortByName")
    private List<DrugEntity> sortByName() {
        return drugService.sortByName();
    }

    @CrossOrigin
    @GetMapping("/sortByPrice")
    private List<DrugEntity> sortByPrice() {
        return drugService.sortByPrice();
    }
}
