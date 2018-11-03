package com.tmtai.spring.thymeleaf.management.util;

import java.sql.SQLException;
import com.tmtai.spring.thymeleaf.management.database.MySQLConnUtils;

public class Main {

    public static void main(String[] args) throws ClassNotFoundException, SQLException {
        MySQLConnUtils.connectionDB();
    }
}
