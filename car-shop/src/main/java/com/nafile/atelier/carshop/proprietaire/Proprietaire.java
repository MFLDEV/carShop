package com.nafile.atelier.carshop.proprietaire;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.nafile.atelier.carshop.voiture.Voiture;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.lang.NonNull;

import java.util.List;

@Entity
@Data
@RequiredArgsConstructor
@NoArgsConstructor
public class Proprietaire {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private long id;
    @NonNull
    private String nom;
    @NonNull
    private String prenom;
    @OneToMany(cascade = CascadeType.ALL, mappedBy="proprietaire")
    @JsonIgnore
    private List<Voiture> voitures;

}
