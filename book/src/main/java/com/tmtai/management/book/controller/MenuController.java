package com.tmtai.management.book.controller;

import java.util.Locale;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.tmtai.management.book.service.MenuService;

@Controller
@RequestMapping(value = "/menu")
public class MenuController {

    @Autowired
    MenuService menuServices;

    @RequestMapping(value = "/leftsidebar")
    public ModelAndView menuLeft(HttpServletRequest request, Locale locale) {
        ModelAndView mav = new ModelAndView("leftsidebar");
        mav.addObject("menuDto", menuServices.buildMenuStructure());
        return mav;
    }
}
