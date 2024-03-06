create table t_city
(
    id             varchar not null
        constraint t_city_pk
            primary key,
    word_id        varchar,
    name           varchar,
    description    varchar,
    matrix_map     varchar,
    enter_scene_id varchar,
    create_time    timestamp,
    update_time    timestamp
);

alter table t_city
    owner to postgres;

