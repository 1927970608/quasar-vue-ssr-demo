<template>
  <span class="im-contact" @click.stop="concatMe">
    <!--<span class="im-icon"><i :class="className" class="iconfont icon-chat-online"></i></span>-->
    <em class="icon-im">{{ text }}</em>
  </span>
</template>
<script>
import * as Config from 'src/config/env'
export default {
  name: 'IM',
  props: {
    enuu: {
      type: Number,
      require: true
    },
    className: {
      type: String,
      default: 'ml24'
    },
    uu: {
      type: Number
    },
    text: {
      type: String,
      default: '联系卖家'
    }
  },
  methods: {
    concatMe() {
      window.open(Config.imUrl + '?appCode=APP_MALL&appId=usoft-mall&to=' + this.enuu + (this.uu ? '&buyer=' + this.uu : ''))
    }
  }
}
</script>
<style lang="scss" scoped>
.im-contact {
  cursor: pointer;
  margin-left: 24px;
  width: 82px;
  height: 20px;
  position: relative;
  .icon-im {
    display: inline-block;
    width: 82px;
    height: 20px;
    background: url('../../assets/img/base/im1.png') no-repeat;
    background-size: 82px 20px;
    overflow: hidden;
    padding-left: 26px;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.65);
    line-height: 20px;
    vertical-align: middle;
  }
  &:hover {
    .icon-im {
      background-image: url('../../assets/img/base/im2.png');
      color: #072f48 !important;
    }
  }
  &.m-l {
    margin-left: 0;
  }
  &.txt-c {
    .icon-im {
      padding-left: 20px;
    }
  }
}
i {
  vertical-align: middle;
  margin-right: 4px;
}
.ml0 {
  margin-left: 0px;
}
.ml10 {
  margin-left: 10px;
}
.ml24 {
  margin-left: 24px;
}
</style>
