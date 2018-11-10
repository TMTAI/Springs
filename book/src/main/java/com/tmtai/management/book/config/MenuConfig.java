/*******************************************************************************
 * Class        MenuConfig
 * Created date 2017/06/06
 * Lasted date  2017/06/06
 * Author       phunghn
 * Change log   2017/06/0601-00 phunghn create a new
 ******************************************************************************/
package com.tmtai.management.book.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.context.annotation.RequestScope;

import com.tmtai.management.book.dto.MenuDto;
import com.tmtai.management.book.service.MenuService;
import com.tmtai.management.book.util.BookLogger;

@Component(value = "menuConfig")
@RequestScope
public class MenuConfig {

    /** menuService */
    @Autowired
    private MenuService menuService;

    public MenuDto buildMenuStructure(String lange) {

        MenuDto result = new MenuDto();

        try {
            if (lange == null) {
                lange = "en";
            }
            result = menuService.buildMenuStructure();
        } catch (Exception e) {
            BookLogger.logger.error("#buildMenuStructure#", e);
        }

        return result;

    }
}
