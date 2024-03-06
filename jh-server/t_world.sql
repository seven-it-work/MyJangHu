create table t_world
(
    id            varchar not null
        constraint t_world_pk
            primary key,
    matrix_map    varchar not null,
    name          varchar,
    description   varchar,
    entry_city_id varchar,
    create_time   timestamp,
    update_time   timestamp
);

alter table t_world
    owner to postgres;

INSERT INTO public.t_world (id, matrix_map, name, description, entry_city_id, create_time, update_time) VALUES ('95a4a01951d647e09ec28d67f8af4409', '[["","","","","","","","","","",""],["","","","","","","","","","",""],["","","","","","","","","","",""],["","","","","","","","","","",""],["","","","","","","","","","",""],["","","","","","","","","","",""],["","","","","","","","","","",""],["","","","","","","","","","",""],["","","","","","","","","","",""],["","","","","","","","","","",""],["","","","","","","","","","",""]]', '测', '存储', '', '2024-03-05 00:00:00.000000', '2024-03-05 00:00:00.000000');
INSERT INTO public.t_world (id, matrix_map, name, description, entry_city_id, create_time, update_time) VALUES ('0d4c9bc8e8734b35bd3bcf8bbf9e1802', '[["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""]]', '22', '22', '', '2024-03-05 00:00:00.000000', '2024-03-05 00:00:00.000000');
INSERT INTO public.t_world (id, matrix_map, name, description, entry_city_id, create_time, update_time) VALUES ('d855ec1f5d3143f2b4cac3a945bb806a', '[["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""]]', '33', '33', '', '2024-03-05 00:00:00.000000', '2024-03-05 00:00:00.000000');
