package com.seven.jhserver.controller;

import cn.hutool.core.bean.BeanUtil;
import cn.hutool.core.util.IdUtil;
import cn.hutool.core.util.StrUtil;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.OrderItem;
import com.seven.jhserver.vo.CityVo;
import org.springframework.web.bind.annotation.*;
import org.springframework.stereotype.Controller;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import com.seven.jhserver.service.CityService;
import com.seven.jhserver.entity.City;
import org.springframework.beans.factory.annotation.Autowired;

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
@RequestMapping("/city")
public class CityController {


    @Autowired
    private CityService cityService;

    @GetMapping(value = "/")
    public ResponseEntity<Page<CityVo>> list(@RequestParam(required = false) Integer current, @RequestParam(required = false) Integer pageSize) {
        if (current == null) {
            current = 1;
        }
        if (pageSize == null) {
            pageSize = 10;
        }
        Page<City> page = new Page<>(current, pageSize);
        page.addOrder(new OrderItem().setColumn("create_time").setAsc(true));

        Page<City> aPage = cityService.page(page);
        Page<CityVo> cityVoPage = new Page<>();
        BeanUtil.copyProperties(aPage, cityVoPage);
        cityVoPage.setRecords(aPage.getRecords().stream().map(item -> cityService.toVo(item)).toList());
        return new ResponseEntity<>(cityVoPage, HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<CityVo> getById(@PathVariable("id") String id) {
        return new ResponseEntity<>(cityService.toVo(cityService.getById(id)), HttpStatus.OK);
    }


    @GetMapping(value = "/listAllCityByWordId/{id}")
    public ResponseEntity<List<CityVo>> listAllCityByWordId(@PathVariable("id") String id) {
        return new ResponseEntity<>(cityService.listAllCityByWordId(id), HttpStatus.OK);
    }

    @PostMapping(value = "/create")
    public ResponseEntity<Object> create(@RequestBody CityVo params) {
        params.setId(IdUtil.fastSimpleUUID());
        params.setCreateTime(new Date());
        params.setUpdateTime(new Date());
        cityService.save(cityService.toEntity(params));
        return new ResponseEntity<>(params.getId(), HttpStatus.OK);
    }

    @PostMapping(value = "/delete/{id}")
    public ResponseEntity<Object> delete(@PathVariable("id") String id) {
        cityService.removeById(id);
        return new ResponseEntity<>("deleted successfully", HttpStatus.OK);
    }

    @PostMapping(value = "/update")
    public ResponseEntity<Object> update(@RequestBody CityVo params) {
        params.setUpdateTime(new Date());
        cityService.updateById(cityService.toEntity(params));
        return new ResponseEntity<>("updated successfully", HttpStatus.OK);
    }
}
