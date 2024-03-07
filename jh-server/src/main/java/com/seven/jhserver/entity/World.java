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
@TableName("public.t_world")
@Data
public class World implements Serializable {

    private static final long serialVersionUID = 1L;
    private String id;
    private String matrixMap;
    private String name;
    private String description;
    private String entryCityId;
    private Date createTime;
    private Date updateTime;
    private Integer leftValue;
    private Integer topValue;
}
