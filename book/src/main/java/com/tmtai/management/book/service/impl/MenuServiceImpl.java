package com.tmtai.management.book.service.impl;

import java.util.ArrayList;
import java.util.Hashtable;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tmtai.management.book.dto.MenuDto;
import com.tmtai.management.book.repository.MenuRepository;
import com.tmtai.management.book.service.MenuService;

@Service
@Transactional(rollbackFor = Exception.class)
public class MenuServiceImpl implements MenuService {

    @Autowired
    MenuRepository menuRepository;

    @Override
    public MenuDto buildMenuStructure() {
        List<MenuDto> listMenuDto = new ArrayList<>();
        listMenuDto = menuRepository.findAllMenu();

        Hashtable<Integer, MenuDto> hashTableMenu = new Hashtable<>();

        for (int i = 0; i < listMenuDto.size(); i++) {
            MenuDto menuDto = listMenuDto.get(i);
            List<MenuDto> listSubMenuDto = new ArrayList<>();
            for (int j = 0; j < listMenuDto.size(); j++) {
                MenuDto subMenuDto = listMenuDto.get(j);
                if (menuDto.getId() == subMenuDto.getParentId()) {
                    MenuDto subNode = hashTableMenu.get(subMenuDto.getId());
                    if (subNode == null) {
                        subNode = new MenuDto();
                        subNode.setCode(subMenuDto.getCode());
                        subNode.setId(subMenuDto.getId());
                        subNode.setLink(subMenuDto.getLink());
                        subNode.setIcon(subMenuDto.getIcon());
                        hashTableMenu.put(subMenuDto.getId(), subNode);
                    }
                    listSubMenuDto.add(subNode);
                }
            }

            MenuDto node = hashTableMenu.get(menuDto.getId());
            if (node == null) {
                node = new MenuDto();
                node.setCode(menuDto.getCode());
                node.setId(menuDto.getId());
                node.setLink(menuDto.getLink());
                node.setIcon(menuDto.getIcon());
            }
            node.setListSubMenu(listSubMenuDto);
            hashTableMenu.remove(menuDto.getId());
            hashTableMenu.put(menuDto.getId(), node);
        }

        MenuDto root = null;
        List<MenuDto> list = new ArrayList<>();
        for (MenuDto orgTmp : listMenuDto) {
            if (orgTmp.getParentId() == -1) {
                root = hashTableMenu.get(orgTmp.getId());
            } else {
                MenuDto menu = hashTableMenu.get(orgTmp.getId());
                if (menu.getLink().equals("#")) {
                    list.add(menu);
                }
            }
        }
        root.setListSubMenu(list);
        return root;
    }

    @Override
    public List<MenuDto> getAllMenu() {
        return menuRepository.findAllMenu();
    }

    @Override
    public List<MenuDto> listMenuDto(int position) {
        List<MenuDto> menus = menuRepository.findByPosition(position);
        return menus;
    }
}
