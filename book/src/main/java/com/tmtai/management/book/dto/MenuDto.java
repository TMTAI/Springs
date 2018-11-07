package com.tmtai.management.book.dto;

import java.util.List;

public class MenuDto {
    private String code;
    private String icon;
    private int id;
    private String link;
    private List<MenuDto> listSubMenu;
    private int parent;
    private int parentId;
    private int position;

    public String getCode() {
        return code;
    }

    public String getIcon() {
        return icon;
    }

    public int getId() {
        return id;
    }

    public String getLink() {
        return link;
    }

    public List<MenuDto> getListSubMenu() {
        return listSubMenu;
    }

    public int getMenuCode() {
        return parentId;
    }

    public int getParent() {
        return parent;
    }

    public int getParentId() {
        return parentId;
    }

    public int getPosition() {
        return position;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public void setListSubMenu(List<MenuDto> listSubMenu) {
        this.listSubMenu = listSubMenu;
    }

    public void setMenuCode(int parentId) {
        this.parentId = parentId;
    }

    public void setParent(int parent) {
        this.parent = parent;
    }

    public void setParentId(int parentId) {
        this.parentId = parentId;
    }

    public void setPosition(int position) {
        this.position = position;
    }

}
