package com.seven.jhserver.service.impl;

import cn.hutool.core.bean.BeanUtil;
import cn.hutool.json.JSONUtil;
import com.seven.jhserver.entity.People;
import com.seven.jhserver.entity.enums.PeopleTypeEnum;
import com.seven.jhserver.entity.enums.SexEnum;
import com.seven.jhserver.mapper.PeopleMapper;
import com.seven.jhserver.service.PeopleService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.seven.jhserver.vo.PeopleVo;
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

    @Override
    public PeopleVo toVo(People data, Map<String,Boolean> condition) {
        PeopleVo temp = new PeopleVo();
        BeanUtil.copyProperties(data, temp, true);
        temp.setSex(SexEnum.valueOf(data.getSex()));
        temp.setPeopleType(PeopleTypeEnum.valueOf(data.getPeopleType()));
        temp.setInteractionIdList(JSONUtil.toList(data.getInteractionIdList(), String.class));
        return temp;
    }

    @Override
    public People toEntity(PeopleVo data, Map<String,Boolean> condition) {
        People temp = new People();
        BeanUtil.copyProperties(data, temp, true);
        temp.setSex(Optional.ofNullable(data.getSex()).map(SexEnum::name).orElse(null));
        temp.setPeopleType(Optional.ofNullable(data.getPeopleType()).map(PeopleTypeEnum::name).orElse(null));
        temp.setInteractionIdList(JSONUtil.toJsonStr(data.getInteractionIdList()));
        return temp;
    }
}
