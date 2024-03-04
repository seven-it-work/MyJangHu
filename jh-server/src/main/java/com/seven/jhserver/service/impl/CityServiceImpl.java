package com.seven.jhserver.service.impl;

import cn.hutool.core.bean.BeanUtil;
import cn.hutool.core.lang.TypeReference;
import cn.hutool.core.util.IdUtil;
import cn.hutool.json.JSONUtil;
import com.seven.jhserver.entity.City;
import com.seven.jhserver.mapper.CityMapper;
import com.seven.jhserver.service.CityService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.seven.jhserver.utils.BusinessUtils;
import com.seven.jhserver.vo.CityVo;
import org.springframework.stereotype.Service;

import java.util.Arrays;
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
public class CityServiceImpl extends ServiceImpl<CityMapper, City> implements CityService {

    @Override
    public CityVo toVo(City data) {
        CityVo cityVo = new CityVo();
        BeanUtil.copyProperties(data, cityVo, true);
        cityVo.setMatrixMap(BusinessUtils.toMap(data.getMatrixMap()));
        return cityVo;
    }

    @Override
    public City toEntity(CityVo data) {
        City city = new City();
        BeanUtil.copyProperties(data, city, true);
        city.setMatrixMap(JSONUtil.toJsonStr(Optional.ofNullable(data.getMatrixMap()).orElse(new String[][]{})));
        city.setId(Optional.ofNullable(data.getId()).orElse(IdUtil.fastSimpleUUID()));
        return city;
    }
}
