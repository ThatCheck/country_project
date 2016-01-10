package WebService.Repository;

/**
 * Created by admin_000 on 23/09/2015.
 */

import WebService.Entity.Country;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CountryRepository extends CrudRepository<Country,String>{
    Country findByName(String Pays);
}