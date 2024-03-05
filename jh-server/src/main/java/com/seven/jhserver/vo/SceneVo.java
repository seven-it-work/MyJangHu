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
public class SceneVo {

    private String cityId="";
    private String id= IdUtil.fastSimpleUUID();
    private String name="";
    private String description="";
    private String remark="";
    private List<String> fixedPeopleIdList = new ArrayList<>();
    private List<String> peopleIdList = new ArrayList<>();
    private Date createTime;
    private Date updateTime;

}
