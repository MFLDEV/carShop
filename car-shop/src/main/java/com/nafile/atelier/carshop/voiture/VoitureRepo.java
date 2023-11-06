package com.nafile.atelier.carshop.voiture;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;


@RepositoryRestResource
@CrossOrigin(origins="http://localhost:3000")
public interface VoitureRepo extends CrudRepository<Voiture,Long> {
    //Lister Voitures par marque
    List<Voiture> findByModele(@Param("modele") String modele);
    //Lister Voitures par couleur
    List<Voiture> findByCouleur(@Param("couleur") String couleur);

}
