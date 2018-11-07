package com.tmtai.management.book.dto;
// Generated Nov 7, 2018 10:52:52 PM by Hibernate Tools 5.3.0.Beta2

import java.util.HashSet;
import java.util.Set;

/**
 * Book generated by hbm2java
 */
public class BookDto implements java.io.Serializable {

    private Long id;
    private CategoryDto category;
    private String code;
    private String title;
    private String author;
    private long edition;
    private String publisher;
    private Set borrowBooks = new HashSet(0);

    public BookDto() {
    }

    public BookDto(CategoryDto category, String code, String title, String author, long edition, String publisher) {
        this.category = category;
        this.code = code;
        this.title = title;
        this.author = author;
        this.edition = edition;
        this.publisher = publisher;
    }

    public BookDto(CategoryDto category, String code, String title, String author, long edition, String publisher,
            Set borrowBooks) {
        this.category = category;
        this.code = code;
        this.title = title;
        this.author = author;
        this.edition = edition;
        this.publisher = publisher;
        this.borrowBooks = borrowBooks;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public CategoryDto getCategory() {
        return this.category;
    }

    public void setCategory(CategoryDto category) {
        this.category = category;
    }

    public String getCode() {
        return this.code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return this.author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public long getEdition() {
        return this.edition;
    }

    public void setEdition(long edition) {
        this.edition = edition;
    }

    public String getPublisher() {
        return this.publisher;
    }

    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }

    public Set getBorrowBooks() {
        return this.borrowBooks;
    }

    public void setBorrowBooks(Set borrowBooks) {
        this.borrowBooks = borrowBooks;
    }

}