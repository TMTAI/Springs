Select
    mn.code         AS code,
    mn.link         AS link,
    mn.icon         AS icon,
    mn.position     AS position,
    mn.parent       AS parent,
    mn.parent_id    As parent_id
FROM menu   mn
where position = /*position*/