package com.tmtai.management.book.service;

import com.tmtai.management.book.dto.UserDto;

public interface UserService {

    public UserDto findByUsername(String username);

    public void saveOrUpdate(UserDto userDto);
}
