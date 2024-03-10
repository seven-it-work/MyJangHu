package com.seven.jhserver.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.io.Serializable;
import java.sql.Date;

/**
 * <p>
 *
 * </p>
 *
 * @author seven
 * @since 2024-03-04
 */
@TableName("public.t_people")
@Data
public class People implements Serializable {

    private static final long serialVersionUID = 1L;
    private String id;
    private String xing;
    private String ming;
    private String sex;
    private String description;
    private String remark;
    private String currentSceneId;
    private String currentWorldId;
    private String currentCityId;
    private String interactionIdList;
    private String peopleType;
    private Date createTime;
    private Date updateTime;
    private Boolean showAble = false;
}
