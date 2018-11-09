package com.tmtai.management.book.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tmtai.management.book.dto.UserLoginDto;
import com.tmtai.management.book.repository.UserRepository;
import com.tmtai.management.book.util.BookLogger;

@Service
@Transactional(rollbackFor = Exception.class)
public class UserDetailServiceImpl implements UserDetailsService {

    @Autowired
    UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        List<UserLoginDto> users = userRepository.findUserLogin(username);

        if (users == null) {
            BookLogger.logger.error("Người dùng không tồn tại hoặc đã bị xóa");
            throw new UsernameNotFoundException("No user found with username: " + username);
        }
        UserLoginDto user = users.get(0);
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), getAuthorities(users));
        
    }

    private static List<GrantedAuthority> getAuthorities(List<UserLoginDto> users) {
        List<GrantedAuthority> authorities = new ArrayList<>();
        for (UserLoginDto user : users) {
            authorities.add(new SimpleGrantedAuthority(user.getRoleType()));
        }
        return authorities;
    }
}
