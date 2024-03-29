package com.seven.jhserver.service.impl;

import cn.hutool.core.bean.BeanUtil;
import cn.hutool.core.map.MapUtil;
import cn.hutool.core.util.StrUtil;
import cn.hutool.json.JSONUtil;
import com.seven.jhserver.entity.Scene;
import com.seven.jhserver.entity.World;
import com.seven.jhserver.mapper.WorldMapper;
import com.seven.jhserver.service.CityService;
import com.seven.jhserver.service.WorldService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.seven.jhserver.utils.BusinessUtils;
import com.seven.jhserver.vo.WorldVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Map;

/**
 * <p>
 * 服务实现类
 * </p>
 *
 * @author seven
 * @since 2024-03-04
 */
@Service
public class WorldServiceImpl extends ServiceImpl<WorldMapper, World> implements WorldService {
    @Autowired
    private CityService cityService;

    @Override
    public WorldVo toVo(World data, Map<String, Boolean> condition) {
        if (data == null) {
            return null;
        }
        WorldVo temp = new WorldVo();
        BeanUtil.copyProperties(data, temp, true);
        temp.setMatrixMap(BusinessUtils.toMap(data.getMatrixMap()));
        if (MapUtil.isNotEmpty(condition)) {
            if (condition.get("selectCity")) {
                temp.setCityVoList(cityService.listAllCityByWorldId(temp.getId()));
            }
        }
        return temp;
    }

    @Override
    public World toEntity(WorldVo data, Map<String, Boolean> condition) {
        if (data == null) {
            return null;
        }
        World temp = new World();
        BeanUtil.copyProperties(data, temp, true);
        temp.setMatrixMap(JSONUtil.toJsonStr(data.getMatrixMap()));
        return temp;
    }
}
