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

create index t_scene_city_id_index
    on t_scene (city_id);

INSERT INTO public.t_scene (city_id, id, name, description, remark, fixed_people_id_list, people_id_list, create_time, update_time) VALUES ('2b49df45da8245758ab798e2c8f50ecb', '4b7553ce68d34978bf3c55d1f17ab7c3', '游身堂', '', '', '[]', '[]', '2024-03-06 00:00:00.000000', '2024-03-06 00:00:00.000000');
