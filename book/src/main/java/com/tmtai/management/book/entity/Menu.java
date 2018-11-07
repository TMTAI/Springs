package com.tmtai.management.book.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "menu")
public class Menu implements Serializable {

    private static final long serialVersionUID = 1L;

    public static long getSerialversionuid() {
        return serialVersionUID;
    }

    @Column(name = "code")
    private String code;

    @Column(name = "icon")
    private String icon;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @Column(name = "link")
    private String link;

    @Column(name = "parent")
    private int parent;

    @Column(name = "parent_id")
    private Long parentId;

    @Column(name = "position")
    private int position;

    public Menu() {
    }

    public String getCode() {
        return code;
    }

    public String getIcon() {
        return icon;
    }

    public Long getId() {
        return id;
    }

    public String getLink() {
        return link;
    }

    public int getParent() {
        return parent;
    }

    public Long getParentId() {
        return parentId;
    }

    public int getPosition() {
        return position;
    }

    public int isParent() {
        return parent;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public void setParent(int parent) {
        this.parent = parent;
    }

    public void setParentId(Long parentId) {
        this.parentId = parentId;
    }

    public void setPosition(int position) {
        this.position = position;
    }
}
