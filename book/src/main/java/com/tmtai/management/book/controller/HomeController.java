package com.tmtai.management.book.controller;

import java.io.IOException;
import java.util.Locale;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.tmtai.management.book.constant.WebConstant;

@Controller
public class HomeController {
    @RequestMapping(value = { "/", "/home" }, method = RequestMethod.GET)
    public ModelAndView index() {
        ModelAndView mav = new ModelAndView("home");
        return mav;
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