package com.tmtai.management.book.service;

import com.tmtai.management.book.common.PageWrapper;
import com.tmtai.management.book.dto.BookEditDto;
import com.tmtai.management.book.dto.BookSearchDto;


public interface BookService {
    
    public PageWrapper<BookEditDto> searchPagging(int page, BookSearchDto bookSearchDto);
}
