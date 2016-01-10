package WebService.EndPoint;

/**
 * Created by admin_000 on 23/09/2015.
 */
import WebService.Repository.CountryRepository;
import cabidegrange.country_web_service.Country;
import cabidegrange.country_web_service.GetCountryRequest;
import cabidegrange.country_web_service.GetCountryResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ws.server.endpoint.annotation.Endpoint;
import org.springframework.ws.server.endpoint.annotation.PayloadRoot;
import org.springframework.ws.server.endpoint.annotation.RequestPayload;
import org.springframework.ws.server.endpoint.annotation.ResponsePayload;

@Endpoint
public class CountryEndPoint {
    public static final String NAMESPACE_URI = "http://cabidegrange/country-web-service";

    private CountryRepository countryRepository;

    @Autowired
    public CountryEndPoint(CountryRepository countryRepository) {
        this.countryRepository = countryRepository;
    }

    @PayloadRoot(namespace = NAMESPACE_URI, localPart = "getCountryRequest")
    @ResponsePayload
    public GetCountryResponse getCountry(@RequestPayload GetCountryRequest request) {
        System.out.println("USE HERE");
        GetCountryResponse response = new GetCountryResponse();
        response.setCountry(createCountryFromManagedJPA(countryRepository.findByName(request.getName())));
        return response;
    }

    public Country createCountryFromManagedJPA(WebService.Entity.Country base)
    {
        if(base == null){
            return null;
        }
        Country c = new Country();
        c.setCapital(base.getCapital());
        c.setName(base.getName());
        c.setPopulation(base.getPopulation());
        return c;
    }
}
