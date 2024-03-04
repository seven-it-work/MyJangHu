package com.seven.jhserver.controller;

import cn.hutool.core.bean.BeanUtil;
import com.seven.jhserver.vo.CityVo;
import com.seven.jhserver.vo.PeopleVo;
import org.springframework.web.bind.annotation.*;
import org.springframework.stereotype.Controller;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import com.seven.jhserver.service.PeopleService;
import com.seven.jhserver.entity.People;
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
@RequestMapping("/people")
public class PeopleController {


    @Autowired
    private PeopleService peopleService;

    @GetMapping(value = "/")
    public ResponseEntity<Page<PeopleVo>> list(@RequestParam(required = false) Integer current, @RequestParam(required = false) Integer pageSize) {
        if (current == null) {
            current = 1;
        }
        if (pageSize == null) {
            pageSize = 10;
        }
        Page<People> aPage = peopleService.page(new Page<>(current, pageSize));
        Page<PeopleVo> voPage = new Page<>();
        BeanUtil.copyProperties(aPage, voPage);
        voPage.setRecords(aPage.getRecords().stream().map(item -> peopleService.toVo(item)).toList());
        return new ResponseEntity<>(voPage, HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<PeopleVo> getById(@PathVariable("id") String id) {
        return new ResponseEntity<>(peopleService.toVo(peopleService.getById(id)), HttpStatus.OK);
    }

    @PostMapping(value = "/create")
    public ResponseEntity<Object> create(@RequestBody PeopleVo params) {
        peopleService.save(peopleService.toEntity(params));
        return new ResponseEntity<>("created successfully", HttpStatus.OK);
    }

    @PostMapping(value = "/delete/{id}")
    public ResponseEntity<Object> delete(@PathVariable("id") String id) {
        peopleService.removeById(id);
        return new ResponseEntity<>("deleted successfully", HttpStatus.OK);
    }

    @PostMapping(value = "/update")
    public ResponseEntity<Object> update(@RequestBody PeopleVo params) {
        peopleService.updateById(peopleService.toEntity(params));
        return new ResponseEntity<>("updated successfully", HttpStatus.OK);
    }
}
