Select *
FROM book   b
WHERE b.number > 0
/*IF bookSearchDto.code != null && bookSearchDto.code != ''*/
AND UPPER(b.code) = UPPER(bookSearchDto.code)
/*END*/
/*IF bookSearchDto.name != null && bookSearchDto.name != ''*/
AND UPPER(b.name) = UPPER(bookSearchDto.name)
/*END*/
/*IF bookSearchDto.author != null && bookSearchDto.author != ''*/
AND UPPER(b.author) = UPPER(bookSearchDto.author)
/*END*/
LIMIT /*sizeOfPage*/0 OFFSET /*offset*/10