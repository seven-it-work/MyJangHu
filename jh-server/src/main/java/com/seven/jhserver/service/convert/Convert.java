package com.seven.jhserver.service.convert;

import com.seven.jhserver.entity.City;
import com.seven.jhserver.entity.World;
import com.seven.jhserver.vo.CityVo;
import com.seven.jhserver.vo.WorldVo;

import java.util.Map;

public interface Convert<E,V> {
    V toVo(E data, Map<String,Boolean> condition);
    E toEntity(V data, Map<String,Boolean> condition);


    default V toVo(E data) {
        return this.toVo(data,null);
    }

    default E toEntity(V data) {
        return this.toEntity(data,null);
    }
}
