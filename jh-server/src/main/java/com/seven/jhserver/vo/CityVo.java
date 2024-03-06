package com.seven.jhserver.vo;

import cn.hutool.core.util.IdUtil;
import jdk.jfr.Description;
import lombok.Data;

import java.util.Date;

/**
 * <p>
 *
 * </p>
 *
 * @author seven
 * @since 2024-03-04
 */
@Data
public class CityVo {
    private String id = IdUtil.fastSimpleUUID();
    private String worldId = "";
    private String name = "";
    private String description = "";
    private String[][] matrixMap = new String[][]{};
    private String enterSceneId = "";
    private Date createTime;
    private Date updateTime;
}
