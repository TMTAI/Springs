package com.tmtai.management.book.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tmtai.management.book.common.PageWrapper;
import com.tmtai.management.book.dto.BookEditDto;
import com.tmtai.management.book.dto.BookSearchDto;
import com.tmtai.management.book.repository.BookRepository;
import com.tmtai.management.book.service.BookService;

@Service
@Transactional
public class BookServiceImpl implements BookService {

    @Autowired
    private BookRepository bookRepository;

    @Override
    public PageWrapper<BookEditDto> searchPagging(int page, BookSearchDto bookSearchDto) {
        
        int offsetSQL = 0;
        int sizeOfPage = 10;
        
        PageWrapper<BookEditDto> pageWrapper = new PageWrapper<BookEditDto>(page, sizeOfPage);
        if (null == bookSearchDto) {
            bookSearchDto = new BookSearchDto();
        }
        
        int count = bookRepository.countById(bookSearchDto);
        
        List<BookEditDto> result = new ArrayList<BookEditDto>();

        result = bookRepository.search(offsetSQL, sizeOfPage, bookSearchDto);

        pageWrapper.setDataAndCount(result, count);
        return pageWrapper;
    }

}
