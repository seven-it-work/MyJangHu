package com.seven.jhserver.vo;

import cn.hutool.core.util.IdUtil;
import com.seven.jhserver.entity.enums.PeopleTypeEnum;
import com.seven.jhserver.entity.enums.SexEnum;
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
public class PeopleVo {
    private String id = IdUtil.fastSimpleUUID();
    private String xing = "";
    private String ming = "";
    private SexEnum sex = SexEnum.MAN;
    private String description = "";
    private String remark = "";
    private String currentSceneId = "";
    private SceneVo currentScene;
    private String currentWorldId = "";
    private WorldVo currentWorld;
    private String currentCityId = "";
    private CityVo currentCity;
    private List<String> interactionIdList = new ArrayList<>();
    private PeopleTypeEnum peopleType = PeopleTypeEnum.AI_PEOPLE;
    private Date createTime;
    private Date updateTime;

    public String getName() {
        return xing + ming;
    }
}
