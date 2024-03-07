package com.seven.jhserver.vo;

import cn.hutool.core.util.IdUtil;
import lombok.Data;

import java.util.*;

/**
 * <p>
 *
 * </p>
 *
 * @author seven
 * @since 2024-03-04
 */
@Data
public class WorldVo {

    private String id = IdUtil.fastSimpleUUID();
    private String[][] matrixMap = new String[][]{};
    private String name = "";
    private String description = "";
    private String entryCityId = "";
    private Date createTime;
    private Date updateTime;
    // 当前地图拥有的city （可能不在地图中）
    private List<CityVo> cityVoList = new ArrayList<>();
    private Integer leftValue;
    private Integer topValue;
}
