/*
 * Copyright (c) Huawei Technologies Co., Lq. 2023-2023. All rights reserved
 */

package com.seven.jhserver.entity;

import com.seven.jhserver.vo.PeopleVo;

import cn.hutool.core.util.IdUtil;
import lombok.Data;

import java.util.List;

/**
 * TODO 描述
 *
 * @date 2024/3/25 9:27
 */
@Data
public class ChatData {
    private String id = IdUtil.simpleUUID();

    private String componentKey;

    private String peopleId;

    private String type;

    private String title;

    private String context;
}
