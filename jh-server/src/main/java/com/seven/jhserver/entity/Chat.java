/*
 * Copyright (c) Huawei Technologies Co., Lq. 2023-2023. All rights reserved
 */

package com.seven.jhserver.entity;

import cn.hutool.json.JSONObject;
import lombok.Data;

/**
 * TODO 描述
 *
 * @date 2024/3/25 9:25
 */
@Data
public class Chat {
    private JSONObject position;

    private JSONObject size;

    private String view;

    private String shape;

    private JSONObject ports;

    private String id;

    private boolean isNode;

    private String chatDataId;

    private JSONObject tools;

    private int zIndex;
}
