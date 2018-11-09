package com.tmtai.management.book.util;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class BookLogger {

    private static Class name;
    
    public static final Logger logger = LoggerFactory.getLogger(BookLogger.class);

    static {
        name = BookLogger.class;
    }

    public static Class getName() {
        return name;
    }

    public static void setName(Class name) {
        BookLogger.name = name;
    }

}
