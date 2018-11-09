package com.tmtai.management.book.service;

import java.util.List;

import com.tmtai.management.book.dto.UserDto;
import com.tmtai.management.book.dto.UserLoginDto;

public interface UserService {

    public UserDto findByUsername(String username);

    public void saveOrUpdate(UserDto userDto);
    
    public List<UserLoginDto> getUserLogin(String username);
}
