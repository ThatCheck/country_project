package WebService.Entity;

/**
 * Created by admin_000 on 23/09/2015.
 */
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="pays")
public class Country {
    @Id
    @Column(name = "NOM_PAYS", nullable = false)
    private String name;

    @Column(name = "NOM_CAPITALE", nullable = false)
    private String capital;

    @Column(name = "NB_HABITANTS", nullable = false)
    private long population;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCapital() {
        return capital;
    }

    public void setCapital(String capital) {
        this.capital = capital;
    }

    public long getPopulation() {
        return population;
    }

    public void setPopulation(long population) {
        this.population = population;
    }
}
