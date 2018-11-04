package com.tmtai.management.book.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tmtai.management.book.dto.UserDto;
import com.tmtai.management.book.entity.User;
import com.tmtai.management.book.repository.UserRepository;
import com.tmtai.management.book.service.UserService;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    UserRepository userRepository;
    
    public UserDto findByUsername(String username) {
        User user = new User();
        if (user != null) {
            UserDto userDto = new UserDto();
            userDto.setAddress(user.getAddress());
            userDto.setBirthday(user.getBirthday());
            userDto.setFirstName(user.getFirstName());
            userDto.setGender(user.getGender());
            userDto.setIdentityCard(user.getIdentityCard());
            userDto.setLastName(user.getLastName());
            userDto.setPhone(user.getPhone());
            userDto.setRole(user.getRole());
            userDto.setUsername(username);
            return userDto;
        }
        return null;
        
    }

    public void saveOrUpdate(UserDto userDto) {
        
    }

}
