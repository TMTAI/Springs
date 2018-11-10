package com.tmtai.management.book.repository;

import java.util.List;

import org.springframework.data.mirage.repository.MirageRepository;
import org.springframework.data.repository.query.Param;

import com.tmtai.management.book.dto.BookEditDto;
import com.tmtai.management.book.dto.BookSearchDto;
import com.tmtai.management.book.entity.Book;

public interface BookRepository extends MirageRepository<Book, Long> {

    public int countById(@Param("bookSearchDto") BookSearchDto bookSearchDto);

    public List<BookEditDto> search(@Param("offset") int offset, @Param("sizeOfPage") int sizeOfPage,
            @Param("bookSearchDto") BookSearchDto bookSerachDto);
}
