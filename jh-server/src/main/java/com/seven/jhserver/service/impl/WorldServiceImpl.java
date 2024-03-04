package com.seven.jhserver.service.impl;

import cn.hutool.core.bean.BeanUtil;
import cn.hutool.json.JSONUtil;
import com.seven.jhserver.entity.Scene;
import com.seven.jhserver.entity.World;
import com.seven.jhserver.mapper.WorldMapper;
import com.seven.jhserver.service.WorldService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.seven.jhserver.utils.BusinessUtils;
import com.seven.jhserver.vo.WorldVo;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author seven
 * @since 2024-03-04
 */
@Service
public class WorldServiceImpl extends ServiceImpl<WorldMapper, World> implements WorldService {

    @Override
    public WorldVo toVo(World data) {
        WorldVo temp = new WorldVo();
        BeanUtil.copyProperties(data, temp, true);
        temp.setMatrixMap(BusinessUtils.toMap(data.getMatrixMap()));
        return temp;
    }

    @Override
    public World toEntity(WorldVo data) {
        World temp = new World();
        BeanUtil.copyProperties(data, temp, true);
        temp.setMatrixMap(JSONUtil.toJsonStr(data.getMatrixMap()));
        return temp;
    }
}
