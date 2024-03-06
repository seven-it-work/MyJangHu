create table t_people
(
    id                  varchar,
    xing                varchar,
    ming                varchar,
    sex                 varchar,
    description         varchar,
    remark              varchar,
    current_scene_id    varchar,
    interaction_id_list varchar,
    people_type         varchar,
    create_time         timestamp,
    update_time         timestamp
);

alter table t_people
    owner to postgres;

