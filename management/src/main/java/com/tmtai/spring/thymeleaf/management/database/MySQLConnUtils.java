package com.tmtai.spring.thymeleaf.management.database;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.logging.Logger;

import org.springframework.context.ApplicationContext;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import com.mysql.jdbc.Statement;
import static com.tmtai.spring.thymeleaf.management.constant.DBConstant.*;

public class MySQLConnUtils {
    private static final Logger logger = Logger.getLogger(MySQLConnUtils.class.getSimpleName());

    private static Connection conn = null;
    public static void connectionDB() throws SQLException, ClassNotFoundException {
        getMySQLConnection(HOST_NAME, DB_NAME, USERNAME, PASSWORD);
    }

    public static Connection getMySQLConnection(String hostName, String dbName, String userName, String password)
            throws SQLException, ClassNotFoundException {
        // Khai báo class Driver cho DB MySQL
        Class.forName(DRIVER);
        // Cấu trúc URL Connection dành cho Oracle
        String connectionURL = JDBC_MYSQL + hostName + ":" + PORT + "/";
        try {
            conn = DriverManager.getConnection(connectionURL + DB_NAME, userName, password);
        } catch (Exception e) {
            logger.warning(e.getMessage());
            logger.info("******************************************");
            logger.info("CREATING DB ... : " + DB_NAME);
            conn = DriverManager.getConnection(connectionURL, userName, password);
            Statement st = (Statement) conn.createStatement();
            st.executeUpdate("create database " + DB_NAME + ";");
            closeConnection();
            logger.info(DB_NAME + " IS CREATED");
            logger.info("******************************************");
            logger.info("CREATING TABLE ...");
            resetDatabase();
            logger.info("TABLE CREATED");
        }

        return conn;
    }

    public static void resetDatabase() throws SQLException {
        String s = new String();
        StringBuffer sb = new StringBuffer();

        try {
            FileReader fr = new FileReader(new File(ApplicationContext.class.getClassLoader().getResource("ddl/management.sql").getPath()));
            // be sure to not have line starting with "--" or "/*" or any other non
            // aplhabetical character
            BufferedReader br = new BufferedReader(fr);
            while ((s = br.readLine()) != null) {
                sb.append(s);
            }
            br.close();
            // here is our splitter ! We use ";" as a delimiter for each request
            // then we are sure to have well formed statements
            String[] inst = sb.toString().split(";");
            Connection c = getMySQLConnection(HOST_NAME, DB_NAME, USERNAME, PASSWORD);
            Statement st = (Statement) c.createStatement();
            for (int i = 0; i < inst.length; i++) {
                // we ensure that there is no spaces before or after the request string
                // in order to not execute empty statements
                if (!inst[i].trim().equals("")) {
                    st.executeUpdate(inst[i]);
                }
            }
            closeConnection();
        } catch (Exception e) {
            logger.warning(e.getMessage());
        }
    }

    private static void closeConnection() throws SQLException {
        if (conn != null && !conn.isClosed()) {
            logger.info("Close Connection!");
            conn.close();
        }
    }
}
