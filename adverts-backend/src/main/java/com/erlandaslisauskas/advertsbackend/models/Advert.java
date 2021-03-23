package com.erlandaslisauskas.advertsbackend.models;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "adverts")
public class Advert {

    @Id
    @GeneratedValue
    private Long id;

    @OneToOne
    private Category category;

    @NotBlank
    private String manufacturer;

    @NotBlank
    private String model;

    @NotBlank
    private String description;
}
