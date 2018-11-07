package com.tmtai.management.book.service;

import java.util.List;

import com.tmtai.management.book.dto.MenuDto;

public interface MenuService {
    public MenuDto buildMenuStructure();

    public List<MenuDto> getAllMenu();

    public List<MenuDto> listMenuDto(int position);
}
