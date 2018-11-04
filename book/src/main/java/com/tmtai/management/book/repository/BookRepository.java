package com.tmtai.management.book.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.tmtai.management.book.entity.Book;
import com.tmtai.management.book.entity.User;

public interface BookRepository extends JpaRepository<Book, Long>{

}
