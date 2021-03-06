package com.tmtai.management.book.dto;
// Generated Nov 7, 2018 10:52:52 PM by Hibernate Tools 5.3.0.Beta2

/**
 * Category generated by hbm2java
 */
public class CategoryDto {

    private Long id;
    private String code;
    private String category;

    public CategoryDto() {
    }

    public CategoryDto(String code, String category) {
        this.code = code;
        this.category = category;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCode() {
        return this.code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getCategory() {
        return this.category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}
