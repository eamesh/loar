import { Injectable } from '@nestjs/common';

@Injectable()
export class PositionService {
  async buy() {
    // 判断交易时间
    // 判断账户状态
    // 判断股票是否存在
    // 判断购买数量
    // 获取当前股票价格
    // 判断股票价格
    // 判断融资金额
    // 组装数据
    // 创建持仓
    // 修改用户余额
  }

  async sell() {
    // 判断交易时间
    // 判断账户状态
    // 判断订单状态
    // 获取当前股票价格
    // 计算盈亏
    // 组装数据
    // 平仓
    // 修改用户余额
    // 保存平仓记录明细
  }
}
