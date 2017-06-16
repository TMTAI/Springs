package com.tmt.web.config;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRegistration;

import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.servlet.DispatcherServlet;

public class WebConfig implements WebApplicationInitializer{

	@Override
	public void onStartup(ServletContext servletContext) throws ServletException {
		AnnotationConfigWebApplicationContext context = new AnnotationConfigWebApplicationContext();
		context.register(ApplicationConfig.class);
		
		ServletRegistration.Dynamic dispatcher = servletContext.addServlet("dispacher", new DispatcherServlet(context));
		dispatcher.addMapping("/");
		dispatcher.setLoadOnStartup(1);
		
	}

}
