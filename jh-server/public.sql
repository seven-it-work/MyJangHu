/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : PostgreSQL
 Source Server Version : 160002 (160002)
 Source Host           : localhost:5432
 Source Catalog        : my_jianghu
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 160002 (160002)
 File Encoding         : 65001

 Date: 10/03/2024 20:07:36
*/


-- ----------------------------
-- Table structure for t_city
-- ----------------------------
DROP TABLE IF EXISTS "public"."t_city";
CREATE TABLE "public"."t_city" (
  "id" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "world_id" varchar COLLATE "pg_catalog"."default",
  "name" varchar COLLATE "pg_catalog"."default",
  "description" varchar COLLATE "pg_catalog"."default",
  "matrix_map" varchar COLLATE "pg_catalog"."default",
  "enter_scene_id" varchar COLLATE "pg_catalog"."default",
  "create_time" timestamp(6),
  "update_time" timestamp(6)
)
;

-- ----------------------------
-- Records of t_city
-- ----------------------------
INSERT INTO "public"."t_city" VALUES ('d974949c5d8647d29b67e29833c3bc9e', 'c66c5a3267e7485592506cebb52cfca1', '广泊', '', '[["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""]]', '', '2024-03-06 00:00:00', '2024-03-07 00:00:00');
INSERT INTO "public"."t_city" VALUES ('0098fc4997654877910cc07b5b443c1b', 'c66c5a3267e7485592506cebb52cfca1', '潮北渚', '', '[["","",""],["","",""],["","",""]]', '', '2024-03-06 00:00:00', '2024-03-07 00:00:00');
INSERT INTO "public"."t_city" VALUES ('fc83d3d04ac14411acbd1893430d9199', 'c66c5a3267e7485592506cebb52cfca1', '岷西津', '', '[["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""]]', '', '2024-03-06 00:00:00', '2024-03-07 00:00:00');
INSERT INTO "public"."t_city" VALUES ('d2f102b2f2c747aebe67a767d5709cdb', 'c66c5a3267e7485592506cebb52cfca1', '广岗', '', '[["25daad4bebee4d2eafe579f072836d44","","1892594b50ed4773aa0521b981d3bffe","","","","","",""],["","e4852e78871a4a93aeebcda333513040","","","","","","",""]]', 'e4852e78871a4a93aeebcda333513040', '2024-03-06 00:00:00', '2024-03-07 00:00:00');
INSERT INTO "public"."t_city" VALUES ('724fb5777926463ea1da76f6eb363782', 'c66c5a3267e7485592506cebb52cfca1', '交观', '', '[["","07868f5338224b0bb0bce953b0d32509",""],["","fd0ecaf1a70f41109b9a13b6c45c31e4","84ea8d2f8710424f98879fe14a15e2dd"],["","21281e04fa1e4b1baa658398d879c291",""],["","",""],["","",""],["","",""],["","",""],["","",""]]', '07868f5338224b0bb0bce953b0d32509', '2024-03-06 00:00:00', '2024-03-07 00:00:00');
INSERT INTO "public"."t_city" VALUES ('2b49df45da8245758ab798e2c8f50ecb', 'c66c5a3267e7485592506cebb52cfca1', '太阳岭', '', '[["4b7553ce68d34978bf3c55d1f17ab7c3","","","",""],["","7f8378fbc9d64a35914ccbec1fb81724","3685e62d482e46feb7b911f5f659dc24","",""],["","","","",""],["","","","",""],["","","","",""]]', '3685e62d482e46feb7b911f5f659dc24', '2024-03-06 00:00:00', '2024-03-07 00:00:00');
INSERT INTO "public"."t_city" VALUES ('37817475185b4defb405e629c35a4898', 'c66c5a3267e7485592506cebb52cfca1', '燕西县', '', '[["774e54a1c93049648038517c8094cb71","","01b61ecf494f4a3da9ca620558231626",""],["","92ee3b56fe5e46e1ad1360921438527e","",""],["3546dcb2c1a6476f9ee1dbc098d1b315","","dd3779d20a974f9f919727db842a587a",""],["","","",""],["","","",""],["","","",""],["","","",""],["","","",""]]', '92ee3b56fe5e46e1ad1360921438527e', '2024-03-06 00:00:00', '2024-03-07 00:00:00');

-- ----------------------------
-- Table structure for t_people
-- ----------------------------
DROP TABLE IF EXISTS "public"."t_people";
CREATE TABLE "public"."t_people" (
  "id" varchar COLLATE "pg_catalog"."default",
  "xing" varchar COLLATE "pg_catalog"."default",
  "ming" varchar COLLATE "pg_catalog"."default",
  "sex" varchar COLLATE "pg_catalog"."default",
  "description" varchar COLLATE "pg_catalog"."default",
  "remark" varchar COLLATE "pg_catalog"."default",
  "current_scene_id" varchar COLLATE "pg_catalog"."default",
  "interaction_id_list" varchar COLLATE "pg_catalog"."default",
  "people_type" varchar COLLATE "pg_catalog"."default",
  "create_time" timestamp(6),
  "update_time" timestamp(6),
  "show_able" varchar(255) COLLATE "pg_catalog"."default",
  "current_world_id" varchar(255) COLLATE "pg_catalog"."default",
  "current_city_id" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of t_people
-- ----------------------------
INSERT INTO "public"."t_people" VALUES ('123', '李', '大力', 'MAN', '', '', '', '[]', 'AI_PEOPLE', '2024-03-10 00:00:00', '2024-03-10 00:00:00', 'false', 'c66c5a3267e7485592506cebb52cfca1', '37817475185b4defb405e629c35a4898');

-- ----------------------------
-- Table structure for t_scene
-- ----------------------------
DROP TABLE IF EXISTS "public"."t_scene";
CREATE TABLE "public"."t_scene" (
  "city_id" varchar COLLATE "pg_catalog"."default",
  "id" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "name" varchar COLLATE "pg_catalog"."default",
  "description" varchar COLLATE "pg_catalog"."default",
  "remark" varchar COLLATE "pg_catalog"."default",
  "fixed_people_id_list" varchar COLLATE "pg_catalog"."default",
  "people_id_list" varchar COLLATE "pg_catalog"."default",
  "create_time" timestamp(6),
  "update_time" timestamp(6)
)
;

-- ----------------------------
-- Records of t_scene
-- ----------------------------
INSERT INTO "public"."t_scene" VALUES ('724fb5777926463ea1da76f6eb363782', 'fd0ecaf1a70f41109b9a13b6c45c31e4', '连山观', '', '', '[]', '[]', '2024-03-07 00:00:00', '2024-03-07 00:00:00');
INSERT INTO "public"."t_scene" VALUES ('724fb5777926463ea1da76f6eb363782', '84ea8d2f8710424f98879fe14a15e2dd', '中孚谷', '', '', '[]', '[]', '2024-03-07 00:00:00', '2024-03-07 00:00:00');
INSERT INTO "public"."t_scene" VALUES ('724fb5777926463ea1da76f6eb363782', '07868f5338224b0bb0bce953b0d32509', '天雷寺', '', '', '[]', '[]', '2024-03-07 00:00:00', '2024-03-07 00:00:00');
INSERT INTO "public"."t_scene" VALUES ('724fb5777926463ea1da76f6eb363782', '21281e04fa1e4b1baa658398d879c291', '离别寺', '', '', '[]', '[]', '2024-03-07 00:00:00', '2024-03-07 00:00:00');
INSERT INTO "public"."t_scene" VALUES ('37817475185b4defb405e629c35a4898', '774e54a1c93049648038517c8094cb71', '斩妖堡', '', '', '[]', '[]', '2024-03-07 00:00:00', '2024-03-07 00:00:00');
INSERT INTO "public"."t_scene" VALUES ('37817475185b4defb405e629c35a4898', '92ee3b56fe5e46e1ad1360921438527e', '凌云房', '', '', '[]', '[]', '2024-03-07 00:00:00', '2024-03-07 00:00:00');
INSERT INTO "public"."t_scene" VALUES ('37817475185b4defb405e629c35a4898', '01b61ecf494f4a3da9ca620558231626', '震山寺', '', '', '[]', '[]', '2024-03-07 00:00:00', '2024-03-07 00:00:00');
INSERT INTO "public"."t_scene" VALUES ('37817475185b4defb405e629c35a4898', 'dd3779d20a974f9f919727db842a587a', '朱砂世家', '', '', '[]', '[]', '2024-03-07 00:00:00', '2024-03-07 00:00:00');
INSERT INTO "public"."t_scene" VALUES ('37817475185b4defb405e629c35a4898', '3546dcb2c1a6476f9ee1dbc098d1b315', '荡魔堂', '', '', '[]', '[]', '2024-03-07 00:00:00', '2024-03-07 00:00:00');
INSERT INTO "public"."t_scene" VALUES ('d2f102b2f2c747aebe67a767d5709cdb', '25daad4bebee4d2eafe579f072836d44', '东海书院', '', '', '[]', '[]', '2024-03-07 00:00:00', '2024-03-07 00:00:00');
INSERT INTO "public"."t_scene" VALUES ('d2f102b2f2c747aebe67a767d5709cdb', 'e4852e78871a4a93aeebcda333513040', '大赤坞', '', '', '[]', '[]', '2024-03-07 00:00:00', '2024-03-07 00:00:00');
INSERT INTO "public"."t_scene" VALUES ('d2f102b2f2c747aebe67a767d5709cdb', '1892594b50ed4773aa0521b981d3bffe', '琼花庵', '', '', '[]', '[]', '2024-03-07 00:00:00', '2024-03-07 00:00:00');
INSERT INTO "public"."t_scene" VALUES ('2b49df45da8245758ab798e2c8f50ecb', '4b7553ce68d34978bf3c55d1f17ab7c3', '游身堂', '', '', '[]', '[]', '2024-03-06 00:00:00', '2024-03-07 00:00:00');
INSERT INTO "public"."t_scene" VALUES ('2b49df45da8245758ab798e2c8f50ecb', '7f8378fbc9d64a35914ccbec1fb81724', '金童书院', '', '', '[]', '[]', '2024-03-07 00:00:00', '2024-03-07 00:00:00');
INSERT INTO "public"."t_scene" VALUES ('2b49df45da8245758ab798e2c8f50ecb', '3685e62d482e46feb7b911f5f659dc24', '分神神教', '', '', '[]', '[]', '2024-03-07 00:00:00', '2024-03-07 00:00:00');

-- ----------------------------
-- Table structure for t_user
-- ----------------------------
DROP TABLE IF EXISTS "public"."t_user";
CREATE TABLE "public"."t_user" (
  "id" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "email" varchar(255) COLLATE "pg_catalog"."default",
  "password" varchar(255) COLLATE "pg_catalog"."default",
  "name" varchar(255) COLLATE "pg_catalog"."default",
  "people_id" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of t_user
-- ----------------------------
INSERT INTO "public"."t_user" VALUES ('123', '123@123.com', '123', '123', '123');

-- ----------------------------
-- Table structure for t_world
-- ----------------------------
DROP TABLE IF EXISTS "public"."t_world";
CREATE TABLE "public"."t_world" (
  "id" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "matrix_map" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "name" varchar COLLATE "pg_catalog"."default",
  "description" varchar COLLATE "pg_catalog"."default",
  "entry_city_id" varchar COLLATE "pg_catalog"."default",
  "create_time" timestamp(6),
  "update_time" timestamp(6),
  "left_value" int4,
  "top_value" int4
)
;

-- ----------------------------
-- Records of t_world
-- ----------------------------
INSERT INTO "public"."t_world" VALUES ('c66c5a3267e7485592506cebb52cfca1', '[["724fb5777926463ea1da76f6eb363782","37817475185b4defb405e629c35a4898","","","","","","","",""],["","","d2f102b2f2c747aebe67a767d5709cdb","","","","","","",""],["","0098fc4997654877910cc07b5b443c1b","","d974949c5d8647d29b67e29833c3bc9e","","","","","",""],["","2b49df45da8245758ab798e2c8f50ecb","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""]]', '孟门族', '', '2b49df45da8245758ab798e2c8f50ecb', '2024-03-06 00:00:00', '2024-03-10 00:00:00', 14, 60);

-- ----------------------------
-- Indexes structure for table t_city
-- ----------------------------
CREATE INDEX "t_city_enter_scene_id_index" ON "public"."t_city" USING btree (
  "enter_scene_id" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);
CREATE INDEX "t_city_world_id_index" ON "public"."t_city" USING btree (
  "world_id" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table t_city
-- ----------------------------
ALTER TABLE "public"."t_city" ADD CONSTRAINT "t_city_pk" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table t_scene
-- ----------------------------
CREATE INDEX "t_scene_city_id_index" ON "public"."t_scene" USING btree (
  "city_id" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table t_scene
-- ----------------------------
ALTER TABLE "public"."t_scene" ADD CONSTRAINT "t_scene_pk" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table t_user
-- ----------------------------
ALTER TABLE "public"."t_user" ADD CONSTRAINT "t_user_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table t_world
-- ----------------------------
CREATE INDEX "t_world_id_entry_city_id_index" ON "public"."t_world" USING btree (
  "id" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST,
  "entry_city_id" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table t_world
-- ----------------------------
ALTER TABLE "public"."t_world" ADD CONSTRAINT "t_world_pk" PRIMARY KEY ("id");
