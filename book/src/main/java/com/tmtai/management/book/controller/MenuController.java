package com.tmtai.management.book.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.tmtai.management.book.service.MenuService;

@Controller
public class MenuController {

    @Autowired
    MenuService menuServices;

    @RequestMapping(value = "/leftsidebar")
    public ModelAndView menuLeft() {
        ModelAndView mav = new ModelAndView("leftsidebar");
        return mav;
    }
}
