package com.seven.jhserver.service.impl;

import cn.hutool.core.bean.BeanUtil;
import cn.hutool.json.JSONUtil;
import com.seven.jhserver.entity.People;
import com.seven.jhserver.entity.Scene;
import com.seven.jhserver.entity.enums.PeopleTypeEnum;
import com.seven.jhserver.entity.enums.SexEnum;
import com.seven.jhserver.mapper.SceneMapper;
import com.seven.jhserver.service.SceneService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.seven.jhserver.vo.SceneVo;
import org.springframework.stereotype.Service;

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
public class SceneServiceImpl extends ServiceImpl<SceneMapper, Scene> implements SceneService {

    @Override
    public SceneVo toVo(Scene data) {
        SceneVo temp = new SceneVo();
        BeanUtil.copyProperties(data, temp, true);
        temp.setFixedPeopleIdList(JSONUtil.toList(data.getFixedPeopleIdList(), String.class));
        temp.setPeopleIdList(JSONUtil.toList(data.getPeopleIdList(), String.class));
        return temp;
    }

    @Override
    public Scene toEntity(SceneVo data) {
        Scene temp = new Scene();
        BeanUtil.copyProperties(data, temp, true);
        temp.setFixedPeopleIdList(JSONUtil.toJsonStr(data.getFixedPeopleIdList()));
        temp.setPeopleIdList(JSONUtil.toJsonStr(data.getPeopleIdList()));
        return temp;
    }
}
