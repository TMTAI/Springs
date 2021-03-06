package com.tmtai.management.book.mirageDB;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.tmtai.management.book.dto.UserEditDto;
import com.tmtai.management.book.service.UserService;
import com.tmtai.management.book.util.BookLogger;

@Component
public class DataSeedingListener implements ApplicationListener<ContextRefreshedEvent> {
    
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserService userService;

    @Override
    public void onApplicationEvent(ContextRefreshedEvent arg0) {
        // Admin account
        try {
            if (userService.findByUsername("admin") == null) {
                UserEditDto admin = new UserEditDto();
                admin.setUsername("admin");
                admin.setPassword(passwordEncoder.encode("123"));
                Date date = new Date(04, 9, 1995);
                admin.setBirthday(date);
                admin.setAddress("TP. HCM");
                admin.setPhone("0898133817");
                admin.setFirstName("Administrator");
                admin.setLastName("Yuri");
                admin.setGender("male");
                admin.setIdentityCard("363768742");
                List<String> roles = new ArrayList<String>();
                roles.add("ROLE_ADMIN");
                admin.setRoleForUsers(roles);
                userService.saveOrUpdate(admin);
            }

            // Member account
            if (userService.findByUsername("booker") == null) {
                UserEditDto member = new UserEditDto();
                member.setUsername("booker");
                member.setPassword(passwordEncoder.encode("123"));
                Date date = new Date(04, 9, 1995);
                member.setBirthday(date);
                member.setAddress("TP. HCM");
                member.setPhone("0898133817");
                member.setFirstName("Booker");
                member.setGender("male");
                member.setLastName("Tai");
                member.setIdentityCard("363768742");
                List<String> roles = new ArrayList<String>();
                roles.add("ROLE_BOOKER");
                member.setRoleForUsers(roles);
                userService.saveOrUpdate(member);
            }
            BookLogger.logger.info("tạo user thành công");
        } catch (Exception e) {
            BookLogger.logger.error("không thể tạo user mặc định");
            BookLogger.logger.error(e.getMessage());
        }
    }

}