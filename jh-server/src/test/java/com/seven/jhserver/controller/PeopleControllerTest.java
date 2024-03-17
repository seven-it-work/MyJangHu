package com.seven.jhserver.controller;

import cn.hutool.json.JSONUtil;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.seven.jhserver.vo.CityVo;
import com.seven.jhserver.vo.PeopleVo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;

@SpringBootTest
class PeopleControllerTest {
    @Autowired
    private PeopleController controller;

    @Test
    void list() {
        ResponseEntity<Page<PeopleVo>> list = controller.list(1, 999,null,null,null,false);
        System.out.println(JSONUtil.toJsonStr(list.getBody().getRecords()));
    }
}