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
@TableName("public.t_scene")
@Data
public class Scene implements Serializable {

    private static final long serialVersionUID = 1L;
    private String cityId;
    private String id;
    private String name;
    private String description;
    private String remark;
    private String fixedPeopleIdList;
    private String peopleIdList;
    private Date createTime;
    private Date updateTime;
}
