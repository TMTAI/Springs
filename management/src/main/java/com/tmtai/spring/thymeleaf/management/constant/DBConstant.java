package com.tmtai.spring.thymeleaf.management.constant;

import com.tmtai.spring.thymeleaf.management.util.PropertiesUtils;

public class DBConstant {
 // Kết nối vào MySQL.
    public static final String DRIVER = "com.mysql.jdbc.Driver";
    public static final String JDBC_MYSQL = "jdbc:mysql://";
    public static final String HOST_NAME = PropertiesUtils.getProperty("spring.datasource.hostname");
    public static final String PORT = PropertiesUtils.getProperty("spring.datasource.port");
    public static final String DB_NAME = PropertiesUtils.getProperty("spring.datasource.database");
    public static final String USERNAME = PropertiesUtils.getProperty("spring.datasource.username");
    public static final String PASSWORD = PropertiesUtils.getProperty("spring.datasource.password");
}
