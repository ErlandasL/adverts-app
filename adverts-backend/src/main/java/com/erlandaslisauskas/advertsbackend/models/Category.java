package com.erlandaslisauskas.advertsbackend.models;

import com.erlandaslisauskas.advertsbackend.models.enums.ECategory;

import javax.persistence.*;

@Entity
@Table(name = "categories")
public class Category {

    @Id
    @GeneratedValue
    private Long id;

    @Column
    private ECategory category;

    public Category(ECategory category) {
        this.category = category;
    }

    public Category() {
    }

    @Override
    public String toString() {
        if(ECategory.CATEGORY_CARS == category) {
            return "Cars";
        }
        else if(ECategory.CATEGORY_LAPTOPS == category) {
            return "Laptops";
        }
        else return "Mobile Phones";
    }
}
