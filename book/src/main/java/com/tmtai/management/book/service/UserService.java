package com.tmtai.management.book.service;

import java.util.List;

import com.tmtai.management.book.dto.UserEditDto;
import com.tmtai.management.book.dto.UserLoginDto;

public interface UserService {

    public UserEditDto findByUsername(String username);

    public void saveOrUpdate(UserEditDto userDto);
    
    public List<UserLoginDto> getUserLogin(String username);
}
