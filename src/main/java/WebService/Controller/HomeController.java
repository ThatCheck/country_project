package WebService.Controller;

import WebService.Repository.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by admin_000 on 20/11/2015.
 */
@Controller
public class HomeController {
    @Autowired
    CountryRepository countryRepository;

    @RequestMapping("/")
    public ModelAndView home(){
        return new ModelAndView("main", "countries", countryRepository.findAll());
    }
}
