package com.tmt.web.dao;

import java.util.List;

import com.tmt.web.model.User;

public interface UserDao {
	List<User> findAll();
	User findByName(String name);
	void saveUser(User user);
	void deleteUser(User user);
	void updateUser(User user);
}
