package com.seven.jhserver.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.OrderItem;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.seven.jhserver.entity.People;
import com.seven.jhserver.service.PeopleService;
import com.seven.jhserver.vo.PeopleVo;

import cn.hutool.core.bean.BeanUtil;
import cn.hutool.core.util.IdUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;
import java.util.Map;

/**
 * <p>
 * 前端控制器
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
    public ResponseEntity<Page<PeopleVo>> list(@RequestParam(required = false) Integer current,
        @RequestParam(required = false) Integer pageSize, @RequestParam(required = false) String currentSceneId,
        @RequestParam(required = false) String currentCityId, @RequestParam(required = false) String currentWorldId,
        @RequestParam(value = "currentPlaceObj", required = false) boolean currentPlaceObj) {
        if (current == null) {
            current = 1;
        }
        if (pageSize == null) {
            pageSize = 10;
        }
        Page<People> page = new Page<>(current, pageSize);
        OrderItem orderItem = new OrderItem();
        orderItem.setColumn("create_time");
        orderItem.setAsc(true);
        page.addOrder(orderItem);

        QueryWrapper<People> peopleQueryWrapper = new QueryWrapper<>();
        if (currentSceneId != null) {
            peopleQueryWrapper.lambda().eq(People::getCurrentSceneId, currentSceneId);
        }
        if (currentCityId != null) {
            peopleQueryWrapper.lambda().eq(People::getCurrentCityId, currentCityId);
        }
        if (currentWorldId != null) {
            peopleQueryWrapper.lambda().eq(People::getCurrentWorldId, currentWorldId);
        }
        Page<People> aPage = peopleService.page(page, peopleQueryWrapper);
        Page<PeopleVo> voPage = new Page<>();
        BeanUtil.copyProperties(aPage, voPage);
        voPage.setRecords(aPage.getRecords().stream().map(item -> peopleService.toVo(item, Map.of("currentPlaceObj", currentPlaceObj))).toList());
        return new ResponseEntity<>(voPage, HttpStatus.OK);
    }

    @PostMapping(value = "/listByIds")
    public ResponseEntity<List<PeopleVo>> listByIds(@RequestBody List<String> idList) {
        List<PeopleVo> list = peopleService.listByIds(idList)
            .stream()
            .map(entity -> peopleService.toVo(entity))
            .toList();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<PeopleVo> getById(@PathVariable("id") String id,
        @RequestParam(value = "currentPlaceObj", required = false) boolean currentPlaceObj) {
        return new ResponseEntity<>(
            peopleService.toVo(peopleService.getById(id), Map.of("currentPlaceObj", currentPlaceObj)), HttpStatus.OK);
    }

    @PostMapping(value = "/create")
    public ResponseEntity<Object> create(@RequestBody PeopleVo params) {
        params.setId(IdUtil.fastSimpleUUID());
        params.setCreateTime(new Date());
        params.setUpdateTime(new Date());
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
        params.setUpdateTime(new Date());
        People entity = peopleService.toEntity(params);
        peopleService.updateById(entity);
        return new ResponseEntity<>("updated successfully", HttpStatus.OK);
    }
}
