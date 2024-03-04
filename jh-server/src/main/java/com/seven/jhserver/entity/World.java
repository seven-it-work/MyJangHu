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
@TableName("public.t_world")
public class World implements Serializable {

    private static final long serialVersionUID = 1L;
    private String id;
    private String matrixMap;
    private String name;
    private String description;
    private String entryCityId;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getMatrixMap() {
        return matrixMap;
    }

    public void setMatrixMap(String matrixMap) {
        this.matrixMap = matrixMap;
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

    public String getEntryCityId() {
        return entryCityId;
    }

    public void setEntryCityId(String entryCityId) {
        this.entryCityId = entryCityId;
    }

    @Override
    public String toString() {
        return "World{" +
        ", id = " + id +
        ", matrixMap = " + matrixMap +
        ", name = " + name +
        ", description = " + description +
        ", entryCityId = " + entryCityId +
        "}";
    }
}
