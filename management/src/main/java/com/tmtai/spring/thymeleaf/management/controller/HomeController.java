package com.tmtai.spring.thymeleaf.management.controller;

import java.io.IOException;
import java.util.Locale;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.tmtai.spring.thymeleaf.management.constant.WebConstant;

@Controller
public class HomeController {
    @Autowired
    private MessageSource messageSource;

    @RequestMapping(value = WebConstant.SLASH , method = RequestMethod.GET)
    public String index(){
        return WebConstant.REDIRECT.concat(WebConstant.HOME);
    }
    
    @RequestMapping(value = WebConstant.HOME , method = RequestMethod.GET)
    public ModelAndView home(HttpServletRequest request) {
        ModelAndView mav = new ModelAndView("home");
        return mav;
    }
    
    @RequestMapping(value = WebConstant.LOGIN, method = RequestMethod.GET)
    public String login(HttpServletRequest request, Model model) {
        return "login";
    }

    @RequestMapping(value = WebConstant.CHANGE_LANG, method = RequestMethod.GET)
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
}
