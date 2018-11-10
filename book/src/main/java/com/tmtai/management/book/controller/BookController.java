package com.tmtai.management.book.controller;

import java.util.Locale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.tmtai.management.book.common.PageWrapper;
import com.tmtai.management.book.constant.CaterogyConstant;
import com.tmtai.management.book.constant.ConstantCore;
import com.tmtai.management.book.constant.WebConstant;
import com.tmtai.management.book.dto.BookEditDto;
import com.tmtai.management.book.dto.BookSearchDto;
import com.tmtai.management.book.service.BookService;

@Controller
@RequestMapping(value = CaterogyConstant.CATEGORY + "/{link}")
public class BookController {
    @Autowired
    private BookService bookService;

    @GetMapping(value = WebConstant.LIST)
    public ModelAndView lovePage(@PathVariable("link") String link,
            @ModelAttribute("bookSearchDto") BookSearchDto bookSearchDto, Locale locale,
            @RequestParam(value = ConstantCore.PAGE, required = false, defaultValue = "1") int page) {
        ModelAndView mav = new ModelAndView("book.list");

        PageWrapper<BookEditDto> pageWrapper = bookService.searchPagging(page, bookSearchDto);

        mav.addObject(ConstantCore.PAGE_WRAPPER, pageWrapper);

//        mav.addObject("bookSearchDto", bookSearchDto);

        return mav;
    }
}
