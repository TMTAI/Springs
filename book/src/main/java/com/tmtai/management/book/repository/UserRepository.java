package com.tmtai.management.book.repository;

import org.springframework.data.repository.CrudRepository;
import com.tmtai.management.book.entity.User;

public interface UserRepository extends CrudRepository<User, Integer>{

//    public User findByUsername(@Param(value = "username") String username);
}
