package com.tmtai.management.book.controller;

import java.io.IOException;
import java.util.Locale;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.tmtai.management.book.constant.WebConstant;
import com.tmtai.management.book.dto.MenuDto;
import com.tmtai.management.book.service.MenuService;

@Controller
public class HomeController {
    @Autowired
    MenuService menuServices;

    @GetMapping(value = WebConstant.CHANGE_LANG)
    public void changeLang(HttpServletRequest request, HttpServletResponse response, Locale locale,
            RedirectAttributes redirectAttributes) {
        try {
            // go to current page
            String url = request.getParameter(WebConstant.URL);
            if (StringUtils.isNotEmpty(url)) {
                String param = request.getParameter(WebConstant.PARAM);
                if (StringUtils.isNotEmpty(param)) {
                    param = param.replaceAll(WebConstant.COMMA, WebConstant.AND);
                    url += WebConstant.QUESTION_MARK + param;
                }
                response.reset();
                // Check external URL
                if (url.contains(WebConstant.HTTP_PROTOCOL) || url.contains(WebConstant.WORLD_WIDE_WEB)) {
                    url = request.getContextPath() + WebConstant.ACCESS_DENIED_PAGE;
                }
                response.sendRedirect(url);
            }
        } catch (IOException e) {
        }
    }

    @GetMapping(value = WebConstant.ROOT)
    public ModelAndView index() {
        ModelAndView mav = new ModelAndView("home");
        MenuDto menuDto = menuServices.buildMenuStructure();
        mav.addObject("menuDto", menuDto);
        return mav;
    }

    @GetMapping(value = WebConstant.LOGIN)
    public ModelAndView login() {
        ModelAndView mav = new ModelAndView("login");
        return mav;
    }

    @GetMapping(value = "/403")
    public ModelAndView accessDeniedPage() {
        ModelAndView mav = new ModelAndView("403");
        return mav;
    }
}