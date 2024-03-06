create table t_scene
(
    city_id              varchar,
    id                   varchar not null
        constraint t_scene_pk
            primary key,
    name                 varchar,
    description          varchar,
    remark               varchar,
    fixed_people_id_list varchar,
    people_id_list       varchar,
    create_time          timestamp,
    update_time          timestamp
);

alter table t_scene
    owner to postgres;

