package com.seven.jhserver.controller;

import cn.hutool.core.bean.BeanUtil;
import cn.hutool.core.util.IdUtil;
import com.baomidou.mybatisplus.core.metadata.OrderItem;
import com.seven.jhserver.entity.Scene;
import com.seven.jhserver.vo.SceneVo;
import com.seven.jhserver.vo.WorldVo;
import org.springframework.web.bind.annotation.*;
import org.springframework.stereotype.Controller;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import com.seven.jhserver.service.WorldService;
import com.seven.jhserver.entity.World;
import org.springframework.beans.factory.annotation.Autowired;

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
@RequestMapping("/world")
public class WorldController {


    @Autowired
    private WorldService worldService;

    @GetMapping(value = "/")
    public ResponseEntity<Page<WorldVo>> list(@RequestParam(required = false) Integer current,
                                              @RequestParam(required = false) Integer pageSize,
                                              @RequestParam(required = false) boolean selectCity) {
        if (current == null) {
            current = 1;
        }
        if (pageSize == null) {
            pageSize = 10;
        }
        Page<World> page = new Page<>(current, pageSize);
        OrderItem orderItem = new OrderItem();
        orderItem.setColumn("create_time");
        orderItem .setAsc(true);
        page.addOrder(orderItem);

        Page<World> aPage = worldService.page(page);
        Page<WorldVo> voPage = new Page<>();
        BeanUtil.copyProperties(aPage, voPage);
        voPage.setRecords(aPage.getRecords().stream().map(item -> worldService.toVo(item, Map.of("selectCity", selectCity))).toList());
        return new ResponseEntity<>(voPage, HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<WorldVo> getById(@PathVariable("id") String id, @RequestParam("selectCity") boolean selectCity) {
        return new ResponseEntity<>(worldService.toVo(worldService.getById(id), Map.of("selectCity", selectCity)), HttpStatus.OK);
    }

    @PostMapping(value = "/listByIds")
    public ResponseEntity<List<WorldVo>> listByIds(@RequestBody List<String> idList) {
        List<WorldVo> list = worldService.listByIds(idList).stream().map(entity -> worldService.toVo(entity)).toList();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @PostMapping(value = "/create")
    public ResponseEntity<Object> create(@RequestBody WorldVo params) {
        params.setId(IdUtil.fastSimpleUUID());
        params.setCreateTime(new Date());
        params.setUpdateTime(new Date());
        worldService.save(worldService.toEntity(params));
        return new ResponseEntity<>("created successfully", HttpStatus.OK);
    }

    @PostMapping(value = "/delete/{id}")
    public ResponseEntity<Object> delete(@PathVariable("id") String id) {
        worldService.removeById(id);
        return new ResponseEntity<>("deleted successfully", HttpStatus.OK);
    }

    @PostMapping(value = "/update")
    public ResponseEntity<Object> update(@RequestBody WorldVo params) {
        params.setUpdateTime(new Date());
        worldService.updateById(worldService.toEntity(params));
        return new ResponseEntity<>("updated successfully", HttpStatus.OK);
    }
}
