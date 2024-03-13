package com.seven.jhserver.service.convert;

import java.util.Map;

public interface Convert<E, V> {
    V toVo(E data, Map<String, Boolean> condition);

    E toEntity(V data, Map<String, Boolean> condition);

    default V toVo(E data) {
        if (data == null) {
            return null;
        }
        return this.toVo(data, null);
    }

    default E toEntity(V data) {
        if (data == null) {
            return null;
        }
        return this.toEntity(data, null);
    }
}
