package com.example.backForLab9.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Comparator;

@Entity
public class DrugEntity implements Comparator<DrugEntity> {

    @Id
    @GeneratedValue
    private Integer id;
    private String name;
    private Integer price;
    private String image;
    @Column(length = 500)
    private String description;

    public DrugEntity() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public int compare(DrugEntity d1, DrugEntity d2) {
        return d1.getName().compareTo(d2.getName());
    }
}
