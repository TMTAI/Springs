SELECT 
    u.username                                        AS  username
    , u.password                                      AS  password
    , concat('ROLE_', upper(r.name)) role_type
FROM USER u
LEFT JOIN role_for_user ru on (u.id = ru.user_id)
LEFT JOIN role r on (ru.role_id = r.id)
WHERE username=/*username*/;