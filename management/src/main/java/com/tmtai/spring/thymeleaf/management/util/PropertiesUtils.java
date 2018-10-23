package com.tmtai.spring.thymeleaf.management.util;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

import org.springframework.context.ApplicationContext;

public class PropertiesUtils{
    private static String PROPERTIES = "properties";
    
    // list properties loading from resources
    private static String[] props = {"message_en", "message_vn"};
    
    private static Properties prop;
    
    static{
        prop = new Properties();
        for (String pro : props){
            String name = pro + "." + PROPERTIES;
            try {
                InputStream input = ApplicationContext.class.getClassLoader().getResourceAsStream(name);
                if (input != null){
                    prop.load(input);
                }
            } catch (IOException e) {
                System.out.println("Error while loading properties");
            }
        }
    }
    
    /***
     * @param name
     * 
     ***/
    public static void setProperty(String name){
        InputStream input = ApplicationContext.class.getClassLoader().getResourceAsStream(name);
        try {
            prop.load(input);
        } catch (IOException e) {
            System.out.println("Error while loading properties " + name);
        }
    }
    
    /***
     * getProperty
     * @param key
     * @return properties
     */
    public static String getProperty(String key){
        return prop.getProperty(key);
    }
}
