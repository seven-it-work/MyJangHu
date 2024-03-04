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
@TableName("public.t_people")
public class People implements Serializable {

    private static final long serialVersionUID = 1L;
    private String id;
    private String xing;
    private String ming;
    private String sex;
    private String description;
    private String remark;
    private String currentSceneId;
    private String interactionIdList;
    private String peopleType;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getXing() {
        return xing;
    }

    public void setXing(String xing) {
        this.xing = xing;
    }

    public String getMing() {
        return ming;
    }

    public void setMing(String ming) {
        this.ming = ming;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
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

    public String getCurrentSceneId() {
        return currentSceneId;
    }

    public void setCurrentSceneId(String currentSceneId) {
        this.currentSceneId = currentSceneId;
    }

    public String getInteractionIdList() {
        return interactionIdList;
    }

    public void setInteractionIdList(String interactionIdList) {
        this.interactionIdList = interactionIdList;
    }

    public String getPeopleType() {
        return peopleType;
    }

    public void setPeopleType(String peopleType) {
        this.peopleType = peopleType;
    }

    @Override
    public String toString() {
        return "People{" +
        ", id = " + id +
        ", xing = " + xing +
        ", ming = " + ming +
        ", sex = " + sex +
        ", description = " + description +
        ", remark = " + remark +
        ", currentSceneId = " + currentSceneId +
        ", interactionIdList = " + interactionIdList +
        ", peopleType = " + peopleType +
        "}";
    }
}
