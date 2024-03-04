package com.seven.jhserver.service.convert;

import com.seven.jhserver.entity.World;
import com.seven.jhserver.vo.WorldVo;

public interface Convert<E,V> {
    V toVo(E data);
    E toEntity(V data);
}
