package com.seven.jhserver.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;

/**
 * <p>
 * 
 * </p>
 *
 * @author seven
 * @since 2024-03-04
 */
@TableName("public.t_scene")
public class Scene implements Serializable {

    private static final long serialVersionUID = 1L;
    private String cityId;
    private String id;
    private String name;
    private String description;
    private String remark;
    private String fixedPeopleIdList;
    private String peopleIdList;

    public String getCityId() {
        return cityId;
    }

    public void setCityId(String cityId) {
        this.cityId = cityId;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public String getFixedPeopleIdList() {
        return fixedPeopleIdList;
    }

    public void setFixedPeopleIdList(String fixedPeopleIdList) {
        this.fixedPeopleIdList = fixedPeopleIdList;
    }

    public String getPeopleIdList() {
        return peopleIdList;
    }

    public void setPeopleIdList(String peopleIdList) {
        this.peopleIdList = peopleIdList;
    }

    @Override
    public String toString() {
        return "Scene{" +
        ", cityId = " + cityId +
        ", id = " + id +
        ", name = " + name +
        ", description = " + description +
        ", remark = " + remark +
        ", fixedPeopleIdList = " + fixedPeopleIdList +
        ", peopleIdList = " + peopleIdList +
        "}";
    }
}
