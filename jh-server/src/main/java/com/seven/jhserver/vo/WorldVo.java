package com.seven.jhserver.vo;

import cn.hutool.core.util.IdUtil;
import lombok.Data;

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
}
