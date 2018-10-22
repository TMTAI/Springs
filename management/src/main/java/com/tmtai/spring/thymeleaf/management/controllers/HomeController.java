package com.tmtai.spring.thymeleaf.management.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HomeController {
    @RequestMapping(value = {"/", "/home"}, method = RequestMethod.GET)
    public ModelAndView index() {
        ModelAndView mav = new ModelAndView("home");
        return mav;
    }
    
    @RequestMapping(value = "/home2", method = RequestMethod.GET)
    public ModelAndView detail() {
        ModelAndView mav = new ModelAndView("home2");
        return mav;
    }
}
