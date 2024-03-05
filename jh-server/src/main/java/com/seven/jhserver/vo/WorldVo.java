package com.seven.jhserver.vo;

import cn.hutool.core.util.IdUtil;
import lombok.Data;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

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
    private List<CityVo> cityVoList = new ArrayList<>();
}
