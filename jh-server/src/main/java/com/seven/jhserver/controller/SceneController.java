package com.seven.jhserver.controller;

import cn.hutool.core.bean.BeanUtil;
import cn.hutool.core.util.IdUtil;
import cn.hutool.core.util.StrUtil;
import com.baomidou.mybatisplus.core.metadata.OrderItem;
import com.seven.jhserver.entity.People;
import com.seven.jhserver.vo.CityVo;
import com.seven.jhserver.vo.PeopleVo;
import com.seven.jhserver.vo.SceneVo;
import com.seven.jhserver.vo.WorldVo;
import org.springframework.web.bind.annotation.*;
import org.springframework.stereotype.Controller;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import com.seven.jhserver.service.SceneService;
import com.seven.jhserver.entity.Scene;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Collection;
import java.util.Collections;
import java.util.Date;
import java.util.List;

/**
 * <p>
 * 前端控制器
 * </p>
 *
 * @author seven
 * @since 2024-03-04
 */
@RestController
@RequestMapping("/scene")
public class SceneController {


    @Autowired
    private SceneService sceneService;

    @GetMapping(value = "/")
    public ResponseEntity<Page<SceneVo>> list(@RequestParam(required = false) Integer current, @RequestParam(required = false) Integer pageSize) {
        if (current == null) {
            current = 1;
        }
        if (pageSize == null) {
            pageSize = 10;
        }
        Page<Scene> page = new Page<>(current, pageSize);
        page.addOrder(new OrderItem().setColumn("create_time").setAsc(true));

        Page<Scene> aPage = sceneService.page(page);
        Page<SceneVo> voPage = new Page<>();
        BeanUtil.copyProperties(aPage, voPage);
        voPage.setRecords(aPage.getRecords().stream().map(item -> sceneService.toVo(item)).toList());
        return new ResponseEntity<>(voPage, HttpStatus.OK);
    }


    @PostMapping(value = "/listByIds")
    public ResponseEntity<List<SceneVo>> listByIds(@RequestBody List<String> idList) {
        List<SceneVo> list = sceneService.listByIds(idList).stream().map(entity -> sceneService.toVo(entity)).toList();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @GetMapping(value = "/listAllByCityId/{id}")
    public ResponseEntity<List<SceneVo>> listAllByCityId(@PathVariable("id") String id) {
        if (StrUtil.isBlank(id)) {
            return new ResponseEntity<>(Collections.emptyList(), HttpStatus.OK);
        }
        return new ResponseEntity<>(sceneService.listAllByCityId(id), HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<SceneVo> getById(@PathVariable("id") String id) {
        return new ResponseEntity<>(sceneService.toVo(sceneService.getById(id)), HttpStatus.OK);
    }

    @PostMapping(value = "/create")
    public ResponseEntity<String> create(@RequestBody SceneVo params) {
        params.setId(IdUtil.fastSimpleUUID());
        params.setCreateTime(new Date());
        params.setUpdateTime(new Date());
        sceneService.save(sceneService.toEntity(params));
        return new ResponseEntity<>(params.getId(), HttpStatus.OK);
    }

    @PostMapping(value = "/delete/{id}")
    public ResponseEntity<Object> delete(@PathVariable("id") String id) {
        sceneService.removeById(id);
        return new ResponseEntity<>("deleted successfully", HttpStatus.OK);
    }

    @PostMapping(value = "/update")
    public ResponseEntity<Object> update(@RequestBody SceneVo params) {
        params.setUpdateTime(new Date());
        sceneService.updateById(sceneService.toEntity(params));
        return new ResponseEntity<>("updated successfully", HttpStatus.OK);
    }
}
