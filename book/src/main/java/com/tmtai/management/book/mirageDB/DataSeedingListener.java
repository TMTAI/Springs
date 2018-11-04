package com.tmtai.management.book.mirageDB;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.tmtai.management.book.dto.UserDto;
import com.tmtai.management.book.service.UserService;

@Component
public class DataSeedingListener implements ApplicationListener<ContextRefreshedEvent> {

    @Autowired
    private UserService userService;

    private BCryptPasswordEncoder passwordEncoder;

    public void onApplicationEvent(ContextRefreshedEvent arg0) {
        passwordEncoder = new BCryptPasswordEncoder();

        // Admin account
        try {
            if (userService.findByUsername("admin") == null) {
                UserDto admin = new UserDto();
                admin.setUsername("admin");
                admin.setPassword(passwordEncoder.encode("123456"));
                admin.setBirthday(new Date(1995, 9, 04));
                admin.setAddress("TP. HCM");
                admin.setPhone("0898133817");
                admin.setFirstName("Administrator");
                admin.setLastName("Yuri");
                admin.setGender(1);
                admin.setIdentityCard("363768742");
                admin.setRole("ROLE_ADMIN");
                userService.saveOrUpdate(admin);
            }

            // Member account

            if (userService.findByUsername("member") == null) {
                UserDto member = new UserDto();
                member.setUsername("member");
                member.setPassword(passwordEncoder.encode("123456"));
                member.setBirthday(new Date(1995, 9, 04));
                member.setAddress("TP. HCM");
                member.setPhone("0898133817");
                member.setFirstName("Member");
                member.setGender(1);
                member.setLastName("Tai");
                member.setRole("ROLE_MEMBER");
                userService.saveOrUpdate(member);
            }
        } catch (Exception e) {
        }
    }

}