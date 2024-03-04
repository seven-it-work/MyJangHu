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
@TableName("public.t_city")
public class City implements Serializable {

    private static final long serialVersionUID = 1L;
    private String id;
    private String wordId;
    private String name;
    private String description;
    private String matrixMap;
    private String enterSceneId;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getWordId() {
        return wordId;
    }

    public void setWordId(String wordId) {
        this.wordId = wordId;
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

    public String getMatrixMap() {
        return matrixMap;
    }

    public void setMatrixMap(String matrixMap) {
        this.matrixMap = matrixMap;
    }

    public String getEnterSceneId() {
        return enterSceneId;
    }

    public void setEnterSceneId(String enterSceneId) {
        this.enterSceneId = enterSceneId;
    }

    @Override
    public String toString() {
        return "City{" +
        ", id = " + id +
        ", wordId = " + wordId +
        ", name = " + name +
        ", description = " + description +
        ", matrixMap = " + matrixMap +
        ", enterSceneId = " + enterSceneId +
        "}";
    }
}
