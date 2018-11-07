package com.tmtai.management.book.mirageDB;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import com.tmtai.management.book.dto.UserDto;
import com.tmtai.management.book.service.UserService;

@Component
public class DataSeedingListener implements ApplicationListener<ContextRefreshedEvent> {
    
    private static final Logger logger = LoggerFactory.getLogger(DataSeedingListener.class);

    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private UserService userService;

    @Override
    public void onApplicationEvent(ContextRefreshedEvent arg0) {
        passwordEncoder = new BCryptPasswordEncoder();

        // Admin account
        try {
            if (userService.findByUsername("admin") == null) {
                UserDto admin = new UserDto();
                admin.setUsername("admin");
                admin.setPassword(passwordEncoder.encode("123456"));
                Date date = new Date(04, 9, 1995);
                admin.setBirthday(date);
                admin.setAddress("TP. HCM");
                admin.setPhone("0898133817");
                admin.setFirstName("Administrator");
                admin.setLastName("Yuri");
                admin.setGender("male");
                admin.setIdentityCard("363768742");
                Set roles = new HashSet(0);
                roles.add("ROLE_ADMIN");
                admin.setRoleForUsers(roles);
                userService.saveOrUpdate(admin);
                logger.info("tạo user thành công");
            }

            // Member account
            if (userService.findByUsername("member") == null) {
                UserDto member = new UserDto();
                member.setUsername("member");
                member.setPassword(passwordEncoder.encode("123456"));
                Date date = new Date(04, 9, 1995);
                member.setBirthday(date);
                member.setAddress("TP. HCM");
                member.setPhone("0898133817");
                member.setFirstName("Member");
                member.setGender("male");
                member.setLastName("Tai");
                member.setIdentityCard("363768742");
                Set roles = new HashSet(0);
                roles.add("ROLE_BOOKER");
                member.setRoleForUsers(roles);
                userService.saveOrUpdate(member);
            }
        } catch (Exception e) {
            System.out.println("không thể tạo user mặc định");
            System.out.println(e.toString());
        }
    }

}