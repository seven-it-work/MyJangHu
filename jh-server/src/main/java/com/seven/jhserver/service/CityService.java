package com.seven.jhserver.service;

import com.seven.jhserver.entity.City;
import com.baomidou.mybatisplus.extension.service.IService;
import com.seven.jhserver.service.convert.Convert;
import com.seven.jhserver.vo.CityVo;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author seven
 * @since 2024-03-04
 */
public interface CityService extends IService<City>, Convert<City, CityVo> {

}
