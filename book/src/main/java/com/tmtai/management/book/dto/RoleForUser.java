package com.tmtai.management.book.dto;
// Generated Nov 7, 2018 10:52:52 PM by Hibernate Tools 5.3.0.Beta2

/**
 * RoleForUser generated by hbm2java
 */
public class RoleForUser implements java.io.Serializable {

    private Long id;
    private RoleDto role;
    private UserDto user;

    public RoleForUser() {
    }

    public RoleForUser(RoleDto role, UserDto user) {
        this.role = role;
        this.user = user;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public RoleDto getRole() {
        return this.role;
    }

    public void setRole(RoleDto role) {
        this.role = role;
    }

    public UserDto getUser() {
        return this.user;
    }

    public void setUser(UserDto user) {
        this.user = user;
    }

}