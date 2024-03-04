package com.seven.jhserver.utils;

import cn.hutool.core.lang.TypeReference;
import cn.hutool.core.util.StrUtil;
import cn.hutool.json.JSONUtil;

public class BusinessUtils {
    public static String[][] toMap(String mapStr) {
        if (StrUtil.isBlank(mapStr)) {
            return new String[][]{};
        }
        return JSONUtil.toBean(mapStr, new MapTypeReference(), true);
    }

    public static class MapTypeReference extends TypeReference<String[][]> {

    }




}
