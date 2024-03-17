package com.seven.jhserver.controller;

import cn.hutool.json.JSONUtil;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.seven.jhserver.vo.CityVo;
import com.seven.jhserver.vo.SceneVo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class CityControllerTest {
    @Autowired
    private CityController cityController;

    @Test
    void list() {
        ResponseEntity<Page<CityVo>> list = cityController.list(1, 999);
        System.out.println(JSONUtil.toJsonStr(list.getBody().getRecords()));
    }
}