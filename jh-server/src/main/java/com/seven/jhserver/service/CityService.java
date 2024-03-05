package com.seven.jhserver.service;

import cn.hutool.core.util.StrUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.IService;
import com.seven.jhserver.entity.City;
import com.seven.jhserver.service.convert.Convert;
import com.seven.jhserver.vo.CityVo;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.Collections;
import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author seven
 * @since 2024-03-04
 */
public interface CityService extends IService<City>, Convert<City, CityVo> {
    public List<CityVo> listAllCityByWordId( String id);
}
