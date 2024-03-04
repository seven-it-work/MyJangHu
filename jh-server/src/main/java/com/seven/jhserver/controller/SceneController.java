package com.seven.jhserver.controller;

import cn.hutool.core.bean.BeanUtil;
import com.seven.jhserver.vo.PeopleVo;
import com.seven.jhserver.vo.SceneVo;
import org.springframework.web.bind.annotation.*;
import org.springframework.stereotype.Controller;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import com.seven.jhserver.service.SceneService;
import com.seven.jhserver.entity.Scene;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * <p>
 *  前端控制器
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
        Page<Scene> aPage = sceneService.page(new Page<>(current, pageSize));
        Page<SceneVo> voPage = new Page<>();
        BeanUtil.copyProperties(aPage, voPage);
        voPage.setRecords(aPage.getRecords().stream().map(item -> sceneService.toVo(item)).toList());
        return new ResponseEntity<>(voPage, HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<SceneVo> getById(@PathVariable("id") String id) {
        return new ResponseEntity<>(sceneService.toVo(sceneService.getById(id)), HttpStatus.OK);
    }

    @PostMapping(value = "/create")
    public ResponseEntity<Object> create(@RequestBody SceneVo params) {
        sceneService.save(sceneService.toEntity(params));
        return new ResponseEntity<>("created successfully", HttpStatus.OK);
    }

    @PostMapping(value = "/delete/{id}")
    public ResponseEntity<Object> delete(@PathVariable("id") String id) {
        sceneService.removeById(id);
        return new ResponseEntity<>("deleted successfully", HttpStatus.OK);
    }

    @PostMapping(value = "/update")
    public ResponseEntity<Object> update(@RequestBody SceneVo params) {
        sceneService.updateById(sceneService.toEntity(params));
        return new ResponseEntity<>("updated successfully", HttpStatus.OK);
    }
}
