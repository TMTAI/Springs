package com.tmt.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class HelloController {
	
	@RequestMapping(value ="/", method = RequestMethod.GET)
	public String hello(){
		return "index";
	}
	
	@RequestMapping(value= "/registerForm", method = RequestMethod.GET)
	public String registerForm(){
		return "register";
	}
	
	@RequestMapping(value= "/loginForm", method = RequestMethod.GET)
	public String loginForm(){
		return "login";
	}
	
	@RequestMapping(value ="/login", method = RequestMethod.POST)
	public String login(){
		return "redirect:/";
	}
}
