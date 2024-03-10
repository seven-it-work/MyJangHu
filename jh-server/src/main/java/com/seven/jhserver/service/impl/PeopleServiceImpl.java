package com.seven.jhserver.service.impl;

import cn.hutool.core.bean.BeanUtil;
import cn.hutool.core.map.MapUtil;
import cn.hutool.json.JSONUtil;
import com.seven.jhserver.entity.People;
import com.seven.jhserver.entity.enums.PeopleTypeEnum;
import com.seven.jhserver.entity.enums.SexEnum;
import com.seven.jhserver.mapper.PeopleMapper;
import com.seven.jhserver.service.CityService;
import com.seven.jhserver.service.PeopleService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.seven.jhserver.service.SceneService;
import com.seven.jhserver.service.WorldService;
import com.seven.jhserver.vo.PeopleVo;
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
        PeopleVo temp = new PeopleVo();
        BeanUtil.copyProperties(data, temp, true);
        if (MapUtil.isNotEmpty(condition)) {
            if (condition.get("currentPlaceObj")) {
                temp.setCurrentWorld(worldService.toVo(worldService.getById(data.getCurrentWorldId())));
                temp.setCurrentCity(cityService.toVo(cityService.getById(data.getCurrentCityId())));
                temp.setCurrentScene(sceneService.toVo(sceneService.getById(data.getCurrentSceneId())));
            }
        }
        temp.setSex(SexEnum.valueOf(data.getSex()));
        temp.setPeopleType(PeopleTypeEnum.valueOf(data.getPeopleType()));
        temp.setInteractionIdList(JSONUtil.toList(data.getInteractionIdList(), String.class));
        return temp;
    }

    @Override
    public People toEntity(PeopleVo data, Map<String, Boolean> condition) {
        People temp = new People();
        BeanUtil.copyProperties(data, temp, true);
        temp.setSex(Optional.ofNullable(data.getSex()).map(SexEnum::name).orElse(null));
        temp.setPeopleType(Optional.ofNullable(data.getPeopleType()).map(PeopleTypeEnum::name).orElse(null));
        temp.setInteractionIdList(JSONUtil.toJsonStr(data.getInteractionIdList()));
        return temp;
    }
}
