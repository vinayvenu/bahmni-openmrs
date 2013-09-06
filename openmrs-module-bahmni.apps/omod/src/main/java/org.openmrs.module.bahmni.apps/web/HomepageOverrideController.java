package org.openmrs.module.bahmni.apps.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomepageOverrideController {

    @RequestMapping("/index.htm")
    public String showOurHomepage() {
        return "redirect:moduleResources/bahmni.apps/index.html";
    }

    @RequestMapping("/login.htm")
    public String showLoginHomepage() {
        return "redirect:moduleResources/bahmni.apps/index.html#/login";
    }
}
