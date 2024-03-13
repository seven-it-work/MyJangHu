package com.seven.jhserver.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.seven.jhserver.entity.People;
import com.seven.jhserver.entity.enums.PeopleTypeEnum;
import com.seven.jhserver.entity.enums.SexEnum;
import com.seven.jhserver.mapper.PeopleMapper;
import com.seven.jhserver.service.CityService;
import com.seven.jhserver.service.PeopleService;
import com.seven.jhserver.service.SceneService;
import com.seven.jhserver.service.WorldService;
import com.seven.jhserver.vo.PeopleVo;

import cn.hutool.core.bean.BeanUtil;
import cn.hutool.core.map.MapUtil;
import cn.hutool.core.util.StrUtil;
import cn.hutool.json.JSONUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.Optional;

/**
 * <p>
 * 服务实现类
 * </p>
 *
 * @author seven
 * @since 2024-03-04
 */
@Service
public class PeopleServiceImpl extends ServiceImpl<PeopleMapper, People> implements PeopleService {
    @Autowired
    private WorldService worldService;

    @Autowired
    private CityService cityService;

    @Autowired
    private SceneService sceneService;

    @Override
    public PeopleVo toVo(People data, Map<String, Boolean> condition) {
        if (data == null) {
            return null;
        }
        PeopleVo temp = new PeopleVo();
        BeanUtil.copyProperties(data, temp, true);
        if (MapUtil.isNotEmpty(condition)) {
            if (condition.get("currentPlaceObj")) {
                if (StrUtil.isNotBlank(data.getCurrentWorldId())) {
                    temp.setCurrentWorld(worldService.toVo(worldService.getById(data.getCurrentWorldId())));
                }
                if (StrUtil.isNotBlank(data.getCurrentCityId())) {
                    temp.setCurrentCity(cityService.toVo(cityService.getById(data.getCurrentCityId())));
                }
                if (StrUtil.isNotBlank(data.getCurrentSceneId())) {
                    temp.setCurrentScene(sceneService.toVo(sceneService.getById(data.getCurrentSceneId())));
                }
            }
        }
        temp.setInteractionIdList(JSONUtil.toList(data.getInteractionIdList(), String.class));
        return temp;
    }

    @Override
    public People toEntity(PeopleVo data, Map<String, Boolean> condition) {
        if (data == null) {
            return null;
        }
        People temp = new People();
        BeanUtil.copyProperties(data, temp, true);
        temp.setInteractionIdList(JSONUtil.toJsonStr(data.getInteractionIdList()));
        return temp;
    }
}
