package com.tmt.web.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

@Configuration
@ComponentScan("com.tmt.web")
@EnableTransactionManagement
public class ApplicationConfig {

	@Bean
	public InternalResourceViewResolver getInternalResourceViewResolver(){
		InternalResourceViewResolver view = new InternalResourceViewResolver();
		view.setPrefix("/WEB-INF/views/jsp/");
		view.setSuffix(".jsp");
		return view;
	}
}
