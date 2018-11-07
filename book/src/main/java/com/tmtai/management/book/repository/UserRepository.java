package com.tmtai.management.book.repository;

import org.springframework.data.mirage.repository.MirageRepository;
import org.springframework.data.repository.query.Param;

import com.tmtai.management.book.dto.UserDto;
import com.tmtai.management.book.entity.User;

public interface UserRepository extends MirageRepository<User, Long> {

    public UserDto findByUsername(@Param(value = "username") String username);
}
