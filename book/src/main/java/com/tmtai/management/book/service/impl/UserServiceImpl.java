package com.tmtai.management.book.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tmtai.management.book.dto.UserEditDto;
import com.tmtai.management.book.dto.UserLoginDto;
import com.tmtai.management.book.entity.User;
import com.tmtai.management.book.repository.UserRepository;
import com.tmtai.management.book.service.UserService;

@Service
@Transactional(rollbackFor = Exception.class)
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;

    @Override
    public UserEditDto findByUsername(String username) {
        UserEditDto userDto = userRepository.findByUsername(username);
        return userDto;
    }

    @Override
    public void saveOrUpdate(UserEditDto userDto) {
        UserEditDto userFind = userRepository.findByUsername(userDto.getUsername());
        if (userFind != null) {
            User user = new User();
            // update
            user.setAddress(userDto.getAddress());
            user.setBirthday(userDto.getBirthday());
            user.setFirstName(userDto.getFirstName());
            user.setGender(userDto.getGender());
            user.setIdentityCard(userDto.getIdentityCard());
            user.setLastName(userDto.getLastName());
            user.setPhone(userDto.getPhone());
            user.setUsername(userDto.getUsername());
            user.setPassword(userDto.getPassword());
            userRepository.save(user);
        } else {
            // create
            User user = new User();
            user.setAddress(userDto.getAddress());
            user.setBirthday(userDto.getBirthday());
            user.setFirstName(userDto.getFirstName());
            user.setGender(userDto.getGender());
            user.setIdentityCard(userDto.getIdentityCard());
            user.setLastName(userDto.getLastName());
            user.setPhone(userDto.getPhone());
            user.setUsername(userDto.getUsername());
            user.setPassword(userDto.getPassword());
            userRepository.save(user);
        }
    }

    @Override
    public List<UserLoginDto> getUserLogin(String username) {
        return userRepository.findUserLogin(username);
    }

}
