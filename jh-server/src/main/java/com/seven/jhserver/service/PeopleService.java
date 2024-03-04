package com.seven.jhserver.service;

import com.seven.jhserver.entity.People;
import com.baomidou.mybatisplus.extension.service.IService;
import com.seven.jhserver.service.convert.Convert;
import com.seven.jhserver.vo.PeopleVo;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author seven
 * @since 2024-03-04
 */
public interface PeopleService extends IService<People>, Convert<People, PeopleVo> {

}
