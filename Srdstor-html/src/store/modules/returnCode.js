const returnCode = {
  state: {
    rcList: {
      0: '请求成功',
      1: '请求报文主体错误',
      2: '解析URL失败',
      3: '请求未定义',
      4: '请求报文头部无Token',
      5: 'Token已过期',
      6: 'Token认证失败',
      7: '未知错误',
      100001: '存储池请求未定义',
      100002: '存储池不存在',
      100003: '存储池已存在',
      100004: '系统当前无存储池',
      100010: '创建存储池失败',
      100020: '删除存储池失败',
      100021: '存储池正在作业中',
      100030: '获取存储池信息失败',
      100040: '获取存储池列表失败',
      100050: '扩容存储池失败',
      100051: '添加设备到热备盘、读写缓存盘失败',
      100060: '获取存储池映射表失败',
      100070: '获取存储池名称失败',
      100080: '存储池名重复',
      100090: '移除存储池中的设备失败',
      200001: '设备请求未定义',
      200010: '创建逻辑卷失败',
      200011: '数据不存在',
      200020: '删除逻辑卷失败',
      200030: '获取逻辑卷信息失败',
      200040: '获取逻辑卷列表失败',
      200050: '重命名逻辑卷失败',
      300001: '快照请求未定义',
      300010: '创建快照失败',
      300020: '获取快照信息失败',
      300021: '获取快照创建时间失败',
      300030: '获取快照列表失败',
      300040: '删除快照失败',
      400001: '快照视图请求未定义',
      400010: '快照不能打开当快照视图被创建时',
      400011: '逻辑卷不能打开当快照视图被创建时',
      400012: '创建快照视图失败',
      400013: '设置的值超过范围',
      400020: '删除快照视图失败',
      400030: '获取快照视图信息失败',
      400031: '当前设备不是快照视图',
      400040: '获取快照视图列表失败',
      400050: '设置快照视图属性时设置的值超过范围',
      400051: '设置快照视图属性失败',
      500001: 'NAS服务器不存在，请通知相关管理员',
      500002: 'NAS设备已存在',
      500003: 'NAS设备不存在',
      500004: 'NAS请求未定义',
      500010: '创建NAS设备失败',
      500020: '删除NAS设备失败',
      500030: '获取NAS列表失败',
      500040: '获取NAS信息失败',
      600010: '登录失败',
      600011: '会话过多超过限制',
      601010: '磁盘扫描工具不存在',
      700001: '快照策略请求未定义',
      700002: '创建快照策略失败',
      700003: '时间格式化失败',
      700004: '快照策略不存在',
      700005: '获取快照策略信息失败',
      700006: '删除快照策略失败',
      800010: '快照不存在',
      800011: '查询CDP失败',
      800012: '移除CDP失败',
      800013: '开启CDP失败',
      800014: '添加CDP策略失败',
      800015: '关闭CDP失败',
      800016: '提取CDP失败, 时间戳格式化不正确',
      800017: '触发提取CDP失败',
      800018: '更新快照策略失败',
      800019: '获取CDP信息失败',
      800020: '暂停CDP失败',
      800021: 'CDP已启动',
      800022: '获取快照名称失败',
      800023: '标记CDP失败',
      800024: '获取CDP标记列表失败',
      800025: '删除CDP标记',
      800026: 'CDP可能为开启',
      900001: '获取日志页数失败',
      900002: '获取日志信息失败'
    }
  }
}
export default returnCode
