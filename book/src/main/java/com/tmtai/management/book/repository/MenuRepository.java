package com.tmtai.management.book.repository;

import java.util.List;

import org.springframework.data.mirage.repository.MirageRepository;
import org.springframework.data.repository.query.Param;

import com.tmtai.management.book.dto.MenuDto;
import com.tmtai.management.book.entity.Menu;

public interface MenuRepository extends MirageRepository<Menu, Long> {

    public List<MenuDto> findAllMenu();

    public Menu findByCode(@Param(value = "code") String code);

    public List<MenuDto> findByPosition(@Param(value = "position") int position);

}
