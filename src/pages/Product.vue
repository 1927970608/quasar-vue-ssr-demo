<template>
  <div class="product-detail-warp">
    <div class="container">
      <div class="product-detail">
        <div class="header clearfix base-tab-container">
          <em class="base-tab"></em>
          <span class="collect" v-if="productDetail.status === 131020" :class="{ active: productDetail.collectStatus === 134010 }" @click="isCollect(productDetail)"><i class="iconfont icon-shoucang"></i>{{ productDetail.collectStatus === 134010 ? '已收藏产品' : '收藏产品' }}</span>
          <im class="collect" :enuu="sellerDetail.enuu"></im>
          <div>
            <router-link tag="span" :to="`/seller/${sellerDetail.enuu}`" class="seller-name"><i class="iconfont icon-dianpu base-color"></i> {{ sellerDetail.enName || '-' }}</router-link>
            <div class="com-hover">
              <!--<em class="cart"></em>-->
              <img class="cart" src="~assets/img/base/ic_jiao.png" />
              <p class="common-name">{{ sellerDetail.enName || '-' }}</p>
              <div class="clearfix">
                <span class="sub-text">手机：</span><span>{{ sellerDetail.contactPhone || '-' }}</span>
              </div>
              <div class="clearfix">
                <span class="sub-text">邮箱：</span><span>{{ sellerDetail.contactEMail || '-' }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="product-content clearfix">
          <div class="product-content-show">
            <div class="collect-content clearfix">
              <div class="code" :title="productDetail.model">
                型号：<span>{{ productDetail.model }}</span>
              </div>
            </div>
            <div class="product-info clearfix">
              <div :title="productDetail.brand">
                <span>品牌 </span><span>{{ productDetail.brand || '-' }}</span>
              </div>
              <div :title="productDetail.spec">
                <span>规格 </span><span>{{ productDetail.spec || '-' }}</span>
              </div>
              <div :title="productDetail.packing">
                <span>包装方式 </span><span>{{ productDetail.packing || '-' }}</span>
              </div>
              <div :title="productDetail.mpq">
                <span>最小包装数 </span><span>{{ productDetail.mpq || '-' }}</span>
              </div>
              <div :title="productDetail.moq">
                <span>起订 </span><span>{{ productDetail.moq || '-' }}</span>
              </div>
              <div :title="productDetail.detachable ? '是' : '否'">
                <span>是否可拆卖</span><span>{{ productDetail.detachable ? '是' : '否' }}</span>
              </div>
            </div>
            <div class="price-grad clearfix">
              <div class="com-price-level product-level">
                <div class="line">
                  <span>阶梯数(PCS)</span>
                  <span>价格</span>
                </div>
                <div class="line" v-for="(item, index) in productDetail.ladderOffer" :key="index">
                  <span>{{ item.price === 0 ? '1' : item.start }}+</span>
                  <span
                    :class="{
                      active: purCount >= item.start && purCount <= item.end,
                      normal: item.price === 0
                    }"
                    ><em v-if="item.price !== 0">{{ productDetail.currency | currencyFilter }}</em> {{ item.price === 0 ? '-' : item.price }}</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="product-content-show product-purchase-info">
            <template v-if="productDetail.status === 131010">
              <div class="product-status"><img src="~assets/img/base/empty06.png" /><br />该产品已下架</div>
            </template>
            <template v-if="productDetail.status === 131020">
              <div v-if="productDetail.buyAble === 132010">
                <div class="purchase-info">
                  <div class="clearfix purchase-list">
                    <span>采购数量</span>
                    <div class="clearfix">
                      <template>
                        <u-stepAdder v-model="purCount" :step="productDetail.perAmount" reg="^([1-9]\d{0,8})?$" @input="setAmount()"> </u-stepAdder>
                      </template>
                      <div class="stock">
                        剩余库存 <span>{{ productDetail.availableQty }}</span>
                      </div>
                    </div>
                    <!--<div class="reverse-info clearfix" v-show="showOverflowCartCount">采购数量（含已加入购物车的数量）已超过库存</div>-->
                  </div>
                  <div class="clearfix purchase-list">
                    <span>交期</span>
                    <div class="purchase-detail">
                      {{ [productDetail.minDelivery, productDetail.maxDelivery] | deliveryDateFilter }}
                    </div>
                  </div>
                  <div class="clearfix purchase-list">
                    <span>小计</span>
                    <div class="purchase-detail total">
                      <span class="font14">{{ productDetail.currency | currencyFilter }}</span>
                      <span class="font20" v-html="baseUtils.priceSplitShow(money ? money : productDetail.sum, 'font16')"></span>
                    </div>
                  </div>
                </div>
                <div class="pur-btn">
                  <a class="list-btn u-btn u-btn-submit" @click="buyNow(productDetail, purCount)">立即购买</a>
                  <a class="list-btn u-btn u-btn-sub" @click="addCart(productDetail, purCount)">加入购物车</a>
                  <!--能购买、且商家对此产品已设置样品-->
                  <a class="list-btn u-btn u-btn-sub" @click="goSample(productDetail.sample.code, 1)" target="_blank" v-if="productDetail.sampleStatus === 134040">领取样品</a>
                </div>
              </div>
              <div class="product-status" v-if="productDetail.buyAble === 132011"><img src="~assets/img/base/empty05.png" /><br />库存不足</div>
              <div class="product-status" v-if="productDetail.buyAble === 132012"><img src="~assets/img/base/empty04.png" /><br />该产品销售信息不足，请向<span class="base-color" @click="concatMe(productDetail)">卖家咨询</span></div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { comTrade } from 'src/utils/mixins'
import { inputValidation } from 'src/utils/baseValid'
import Im from 'components/common/Im'
import * as Config from 'src/config/env'
export default {
  mixins: [comTrade, inputValidation],
  name: 'productDetail',
  data: () => ({
    sellerDetail: [],
    money: 0,
    correctNum: 0,
    purCount: 0
    // 采购数量（含购物车）超过库存
    // showOverflowCartCount: false
  }),
  meta () {
    console.log('product', this.product);
    return {
      // this accesses the "title" property in your Vue "data";
      // whenever "title" prop changes, your meta will automatically update
      title: this.title,
      meta: {
        a : { name: 'description', content: this.productDetail.currency }
      }
    }
  },
  name: 'Product',
  // our hook here
  preFetch ({ store, currentRoute, previousRoute, redirect, ssrContext }) {
    // fetch data, validate route and optionally redirect to some other route...

    // ssrContext is available only server-side in SSR mode

    // No access to "this" here as preFetch() is called before
    // the component gets instantiated.

    // Return a Promise if you are running an async job
    // Example:
    return store.dispatch('product/getProductDetail', currentRoute.params.id)
  },
    computed: {
    // display the item from store state.
    productDetail () {
      return this.$store.state.product.productDetail || {}
    }
  },
  methods: {
    loadData() {
      this.$http.product.getProduct({ code: this.$route.params.code }).then(res => {
        this.requestDeal(res, data => {
          this.productDetail = data.product
          this.correctNum = this.purCount = this.productDetail.moq
          this.$http.seller.getSeller({ enuu: this.productDetail.enterprise.enuu }).then(res => {
            this.requestDeal(res, data => {
              this.sellerDetail = data.seller
            })
          })
        })
      })
    },
    isCollect(item) {
      if (item.collectStatus === 134020) {
        this.$http.product.collect({ code: item.code }).then(res => {
          this.requestDeal(res, () => {
            this.$message.success('收藏成功')
            this.loadData()
          })
        })
      } else if (item.collectStatus === 134010) {
        this.$http.product.revokeCollectByProduct({ productCode: item.code }).then(res => {
          this.requestDeal(res, () => {
            this.$message.success('取消收藏')
            this.loadData()
          })
        })
      }
    },
    setAmount() {
      // 修改为正确购买数量
      // this.$nextTick(() => {
      //   this.purCount = this.changeNumber(this.purCount, this.productDetail)
      //   this.productDetail.amount = this.purCount
      // })
      this.productDetail.amount = this.purCount
      this.$http.trade.checkPrice({ validateProduct: [this.productDetail] }).then(res => {
        this.requestDeal(
          res,
          data => {
            this.correctNum = this.purCount
            if (data.validateProduct && data.validateProduct[0]) {
              this.money = data.validateProduct[0].money
            }
          },
          () => {
            this.purCount = this.correctNum
          }
        )
      })
    },
    concatMe(productDetail) {
      window.open(Config.imUrl + '?appCode=APP_MALL&appId=usoft-mall&to=' + productDetail.enterprise.enuu, '_blank')
    }
  }
}
</script>

<style lang="scss">
@import '~assets/css/variable.scss';
.product-detail-warp {
  padding: 16px 0 60px;
  background-color: #eceff1;
  .product-detail {
    padding-bottom: 16px;
    width: 100%;
    background: #fff;
    .header {
      padding-right: 16px;
      width: 1190px;
      height: 40px;
      line-height: 40px;
      font-size: 14px;
      color: #f5f5f5;
      background: #f7faff;
      > div {
        float: right;
        position: relative;
        .seller-name {
          font-size: 14px;
          color: rgba(0, 0, 0, 0.65);
          cursor: pointer;
          &:hover {
            color: #3597d5;
            & + .com-hover {
              display: block;
              z-index: 10;
            }
          }
        }
        .com-hover {
          display: none;
          position: absolute;
          right: -22px;
          top: 45px;
          padding: 16px 16px 24px;
          background: #ffffff;
          border: 1px solid #d9d9d9;
          box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
          border-radius: 4px;
          .cart {
            position: absolute;
            top: -12px;
            right: 114px;
            width: 22px;
            /*display: inline-block;*/
            /*width: 0;*/
            /*height: 0;*/
            /*border-left: 10px dotted transparent;*/
            /*border-right: 10px dotted transparent;*/
            /*border-bottom:10px solid #D9D9D9;*/
          }
          p {
            width: 215px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-bottom: 8px;
            text-align: left;
            font-size: 14px;
            font-weight: 600;
            color: #333333;
            line-height: 22px;
          }
          > div {
            font-size: 14px;
            color: #333333;
            line-height: 22px;
            span {
              display: inline-block;
              &:first-child {
                float: left;
                width: 42px;
              }
              &:last-child {
                float: left;
                max-width: 170px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
            }
          }
        }
      }
      .collect {
        margin-left: 24px;
        float: right;
        font-size: 14px;
        color: #333333;
        line-height: 40px;
        cursor: pointer;
        i {
          padding-right: 4px;
          font-size: 16px;
          color: #999;
        }
        &.active {
          i {
            color: #f5ba09;
          }
        }
        &:hover {
          color: $base-color;
        }
      }
      .base-tab {
        height: 39px;
        top: 0;
        left: 0;
      }
    }
    .product-content {
      overflow: hidden;
      width: 100%;
      background: #fff;
      .product-content-show {
        float: left;
        margin-left: 24px;
        width: 640px;
        .collect-content {
          width: 640px;
          margin: 24px auto 10px;
          .code {
            float: left;
            font-size: 20px;
            color: rgba(0, 0, 0, 0.65);
            > span {
              color: #072f48;
            }
          }
        }
        .product-info {
          padding: 16px 0 0 72px;
          width: 640px;
          height: 114px;
          background: #f5f5f5;
          > div {
            margin-bottom: 8px;
            line-height: 22px;
            text-align: left;
            span {
              display: inline-block;
              font-size: 14px;
              color: #666666;
              line-height: 22px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              &:first-child {
                margin-right: 16px;
                width: 70px;
                color: #666;
                text-align: right;
              }
              &:last-child {
                width: 145px;
                color: #333;
              }
            }
            &:nth-child(odd) {
              float: left;
              width: 242px;
              span {
                &:first-child {
                  width: 56px;
                }
              }
            }
            &:nth-child(even) {
              padding-left: 16px;
              width: 247px;
              float: left;
            }
          }
        }
        .price-grad {
          margin: 16px 0;
          width: 640px;
          border: 1px solid rgba(0, 0, 0, 0.15);
          .product-level {
            padding: 0;
            .line {
              padding: 0 24px;
              margin-bottom: 0;
              height: 32px;
              line-height: 32px;
              border-bottom: 1px solid rgba(0, 0, 0, 0.09);
              span {
                font-size: 14px;
                color: #333333;
                &:first-child {
                  padding-left: 118px;
                }
                &:last-child {
                  padding-left: 96px;
                }
                &.active {
                  color: #db3725;
                  &.normal {
                    color: #333333;
                  }
                }
              }
              &:last-child {
                border-bottom: none;
              }
            }
          }
        }
        .purchase-info {
          .purchase-list {
            position: relative;
            height: 32px;
            margin-bottom: 16px;
            > span {
              margin-right: 16px;
              display: inline-block;
              float: left;
              width: 56px;
              line-height: 32px;
              text-align: right;
            }
            > div.clearfix {
              float: left;
              .u-step-adder {
                float: left;
                width: 193px !important;
              }
              > .stock {
                margin-left: 8px;
                display: inline-block;
                float: left;
                line-height: 32px;
                font-size: 14px;
                color: rgba(0, 0, 0, 0.45);
                span {
                  color: rgba(0, 0, 0, 0.65);
                }
              }
            }
            .purchase-detail {
              float: left;
              font-size: 14px;
              line-height: 32px;
              color: #333333;
              &.total {
                font-size: 20px;
                color: #db3725;
              }
            }
            .reverse-info {
              position: absolute;
              top: 36px;
              left: 72px;
              padding: 0 8px;
              font-size: 12px;
              color: rgba(0, 0, 0, 0.65);
              background: #fae1e3;
              border: 1px solid #f58c91;
              border-radius: 2px;
            }
          }
        }
        .pur-btn {
          margin-left: 74px;
          a {
            width: 116px;
            height: 40px;
            line-height: 40px;
            font-size: 16px;
            margin-right: 8px;
            vertical-align: middle;
            &:last-child {
              margin-left: 0;
            }
          }
        }
        .product-status {
          margin: 56px auto 0;
          font-size: 14px;
          color: rgba(0, 0, 0, 0.45);
          text-align: center;
          line-height: 22px;
          img {
            width: 128px;
          }
          span {
            cursor: pointer;
          }
        }
      }
      .product-purchase-info {
        margin-left: 0;
        float: right;
        width: 485px;
        .purchase-info {
          padding-top: 56px;
        }
      }
    }
  }
}
</style>
