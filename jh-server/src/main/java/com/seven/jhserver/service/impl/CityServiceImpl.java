package com.seven.jhserver.service.impl;

import cn.hutool.core.bean.BeanUtil;
import cn.hutool.core.lang.TypeReference;
import cn.hutool.core.util.IdUtil;
import cn.hutool.core.util.StrUtil;
import cn.hutool.json.JSONUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.seven.jhserver.entity.City;
import com.seven.jhserver.mapper.CityMapper;
import com.seven.jhserver.service.CityService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.seven.jhserver.utils.BusinessUtils;
import com.seven.jhserver.vo.CityVo;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.*;

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
    public List<CityVo> listAllCityByWordId(@PathVariable("id") String id) {
        if (StrUtil.isBlank(id)) {
            return new ArrayList<>();
        }
        LambdaQueryWrapper<City> qw = new LambdaQueryWrapper<>();
        qw.eq(City::getWordId, id);
        return this.list(qw).stream().map(this::toVo).toList();
    }

    @Override
    public CityVo toVo(City data, Map<String, Boolean> condition) {
        CityVo cityVo = new CityVo();
        BeanUtil.copyProperties(data, cityVo, true);
        cityVo.setMatrixMap(BusinessUtils.toMap(data.getMatrixMap()));
        return cityVo;
    }

    @Override
    public City toEntity(CityVo data, Map<String, Boolean> condition) {
        City city = new City();
        BeanUtil.copyProperties(data, city, true);
        city.setMatrixMap(JSONUtil.toJsonStr(Optional.ofNullable(data.getMatrixMap()).orElse(new String[][]{})));
        city.setId(Optional.ofNullable(data.getId()).orElse(IdUtil.fastSimpleUUID()));
        return city;
    }

}
