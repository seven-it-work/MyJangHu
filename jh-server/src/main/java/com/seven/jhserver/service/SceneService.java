package com.seven.jhserver.service;

import com.seven.jhserver.entity.Scene;
import com.baomidou.mybatisplus.extension.service.IService;
import com.seven.jhserver.service.convert.Convert;
import com.seven.jhserver.vo.SceneVo;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author seven
 * @since 2024-03-04
 */
public interface SceneService extends IService<Scene>, Convert<Scene, SceneVo> {

}
