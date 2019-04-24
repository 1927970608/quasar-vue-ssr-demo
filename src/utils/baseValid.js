// 输入校验
export const inputValidation = {
  data() {
    return {
      correctNum: 0
    }
  },
  methods: {
    /*
     * params:
     *   rule => 验证对象
     *   value => 用户输入信息
     *   callback => 错误回调函数
     *   isNormal => 是否需要非空校验
     * */
    // 品牌输入校验
    checkBrand(rule, value, callback) {
      if (value === '') {
        callback(new Error())
        this.$message.error('品牌不能为空')
        return
      }
      if (value.length < 2) {
        callback(new Error('err'))
        this.$message.error('请填写正确的品牌')
        return
      }
      callback()
    },
    // 型号输入校验
    checkModel(rule, value, callback) {
      if (value === '') {
        callback(new Error())
        this.$message.error('型号不能为空')
        return
      }
      if (value.length < 2) {
        callback(new Error())
        this.$message.error('请填写正确的型号')
        return
      }
      callback()
    },
    // 需求数量
    checkAmount(rule, value, callback) {
      if (rule.isNormal) {
        if (value === '') {
          callback(new Error())
          this.$message.error('需求数量不能为空')
          return
        }
      }
      if (value) {
        if (!/^\d{0,9}$/.test(value)) {
          callback(new Error())
          this.$message.error('需求数量只能填小于10亿的正整数')
          return
        } else {
          callback()
        }
      }
      callback()
    },
    // 样品单价
    checkSamplePrice(rule, value, callback) {
      if (rule.isNormal && value === '') {
        callback(new Error())
        this.$message.error('单价不能为空')
        return
      }
      if (value) {
        if (!/^\d{1,4}(\.\d{1,6})?$/.test(value)) {
          callback(new Error())
          this.$message.error('单价只能填小于1万的正数')
        } else {
          callback()
        }
      }
    },
    // 我要报价单价
    checkSayPrice(rule, value, callback) {
      if (rule.isNormal && value === '') {
        callback(new Error())
        this.$message.error('单价不能为空')
        return
      }
      if (/^0+$/.test(value)) {
        callback(new Error())
        this.$message.error('单价不能为0')
      } else if (value) {
        if (!/^\d{1,4}(\.\d{1,6})?$/.test(value)) {
          callback(new Error())
          this.$message.error('单价只能填小于1万的正数')
        } else {
          callback()
        }
      }
    },
    // ------------必填-------------------- //
    // 最小交期
    checkLeastDelivery(rule, value, callback) {
      if (value === '') {
        callback(new Error())
        this.$message.error('最小交期不能为空')
        return
      } else {
        this.leastDelivery = value = Number(value)
        if (!/^[1-9][0-9]{0,2}$/.test(value)) {
          callback(new Error())
          this.$message.error('最小交期只能填小于1000的正整数')
          return
        } else {
          if (this.lastDelivery) {
            if (value > this.lastDelivery) {
              callback(new Error())
              this.$message.error('最小交期需小于最大交期')
              return
            }
          }
        }
      }
      callback()
    },
    // 最大交期
    checkLastDelivery(rule, value, callback) {
      if (value === '') {
        callback(new Error())
        this.$message.error('最大交期不能为空')
        return
      } else {
        this.lastDelivery = value = Number(value)
        if (!/^[1-9][0-9]{0,2}$/.test(value)) {
          callback(new Error())
          this.$message.error('最大交期只能填小于1000的正整数')
          return
        } else {
          if (this.leastDelivery) {
            if (value < this.leastDelivery) {
              callback(new Error())
              this.$message.error('最小交期需小于最大交期')
              return
            }
          }
        }
      }
      callback()
    },
    // **************必填*********** //

    // **************非必填(预计交期)*********** //
    // 最小交期
    checkNonLeastDelivery(rule, value, callback) {
      this.leastDelivery = value = Number(value)
      if (this.lastDelivery) {
        if (value > this.lastDelivery) {
          callback(new Error())
          this.$message.error('最小交期需小于最大交期')
          return
        } else {
          callback()
        }
      }
      if (value && !/^[1-9][0-9]{0,2}$/.test(value)) {
        callback(new Error())
        this.$message.error('最小交期只能填小于1000的正整数')
        return
      }
      callback()
    },
    // 最大交期
    checkNonLastDelivery(rule, value, callback) {
      this.lastDelivery = value = Number(value)
      if (this.leastDelivery) {
        if (value) {
          if (value < this.leastDelivery) {
            callback(new Error())
            this.$message.error('最小交期需小于最大交期')
            return
          }
        }
      }
      if (value && !/^[1-9][0-9]{0,2}$/.test(value)) {
        callback(new Error())
        this.$message.error('最大交期只能填小于1000的正整数')
        return
      }
      callback()
    },
    // **************非必填*********** //

    // 企业名
    checkEnterpriseName(rule, value, callback) {
      if (rule.isNormal) {
        if (value === '') {
          callback(new Error())
          this.$message.error('名称不能为空')
          return
        }
      }
      if (value.length < 4 && value.length >= 1) {
        callback(new Error())
        this.$message.error('请填写正确的名称')
        return
      }
      callback()
    },
    // 纳税人识别号
    checkIdentityNum(rule, value, callback) {
      if (value === '') {
        callback(new Error())
        this.$message.error('纳税人识别号不能为空')
        return
      }
      callback()
    },
    // 开户银行
    checkBanker(rule, value, callback) {
      if (rule.isNormal) {
        if (value === '') {
          callback(new Error())
          this.$message.error('开户银行不能为空')
          return
        }
        callback()
      }
    },
    // 开户银行账号
    checkAccount(rule, value, callback) {
      if (rule.isNormal) {
        if (value === '') {
          callback(new Error())
          this.$message.error('开户银行账号不能为空')
          return
        }
        callback()
      }
    },
    // 电话
    checkPhoneOrTel(rule, value, callback) {
      if (rule.isNormal) {
        if (value === '') {
          callback(new Error())
          this.$message.error('电话不能为空')
          return false
        }
      }
      if (value.length < 8 && value.length >= 1) {
        callback(new Error())
        this.$message.error('请填写正确的电话')
        return false
      }
      callback()
      return true
    },
    // 地址
    checkAddr(rule, value, callback) {
      if (rule.isNormal) {
        if (value === '') {
          callback(new Error())
          this.$message.error('地址不能为空')
          return
        }
      }
      if (value.length < 2 && value.length >= 1) {
        callback(new Error())
        this.$message.error('请填写正确的地址')
        return
      }
      callback()
    },
    // 普票-个人   姓名
    checkName(rule, value, callback) {
      if (rule.isNormal) {
        if (value === '') {
          callback(new Error())
          this.$message.error('姓名不能为空')
          return false
        }
      }
      if (value.length < 2 && value.length >= 1) {
        callback(new Error())
        this.$message.error('请填写正确的姓名')
        return false
      }
      callback()
      return true
    },
    // 物流公司
    checkExpressInc(rule, value, callback) {
      if (value.length < 2 && value.length >= 1) {
        callback(new Error())
        this.$message.error('请填写正确的物流公司')
        return
      }
      callback()
    },
    // 产品应用
    checkApplyUse(rule, value, callback) {
      if (rule.isNormal) {
        if (value === '') {
          callback(new Error())
          this.$message.error('产品应用不能为空')
          return false
        }
      }
      if (value.length < 2 && value.length >= 1) {
        callback(new Error())
        this.$message.error('请填写正确的产品应用')
        return false
      }
      callback()
      return true
    },
    /*
     * 购买数量
     * params:
     *  newNum => 用户输入的数值
     *  obj => 产品对象
     * */
    changeNumber: function(newNum, obj) {
      let pack = obj.mpq
      let buy = obj.moq
      let reserve = obj.reserve
      let breakUp = obj.detachable
      if (!this.correctNum) {
        this.correctNum = buy
      }
      if (!newNum) {
        this.correctNum = buy
      } else {
        newNum = parseInt(newNum)
        if (breakUp) {
          if (newNum < buy) {
            this.$message.error('最少购买' + buy + '件')
            // this.correctNum = buy
          } else if (newNum > reserve) {
            this.$message.error('库存不足')
            // this.correctNum = reserve
          } else {
            this.correctNum = newNum
          }
        } else {
          if (newNum < buy) {
            this.$message.error('最少购买' + buy + '件')
            // this.correctNum = buy
            if (newNum > reserve) {
              this.$message.error('库存不足')
              // this.correctNum = reserve - (reserve % pack)
            }
          } else if (newNum > reserve) {
            this.$message.error('库存不足')
            // this.correctNum = reserve - (reserve % pack)
          } else {
            let remainder = newNum % pack
            if (remainder !== 0) {
              this.$message.error('数量需是最小包装数倍数')
              // let res = (Math.floor(newNum / pack) + 1) * pack
              // this.correctNum = res > reserve ? Math.floor(newNum / pack) * pack : res
            } else {
              this.correctNum = newNum
            }
          }
        }
      }
      return this.correctNum
    },
    /**
     * 发货数量验证
     * */
    noticeNumber: function(max, amount) {
      let flag = amount
      if (amount > max) {
        this.$message.error('发货数量不能超出未发数量！')
        flag = max
      } else if (amount < 1) {
        this.$message.error('最小发货数量不能为0！')
        flag = 1
      }
      return flag
    }
  }
}
