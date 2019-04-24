<template>
  <header class="main-header">
    <div class="container header-wrap">
      <a class="fl" href="https://www.usoftchina.com">
        <img class="align-middle" src="../../assets/img/uas.png" alt="" />
        进入优软云
      </a>
      <!-- <div class="fr">
        <template v-if="!user.logged">
          <span class="item" @click="login">登录</span>
          <span class="item" @click="register">注册</span>
        </template>
        <div class="inlineb drop-down" v-else>
          <span class="item item-user">欢迎您，{{ user.userInfo.name }}&nbsp;|&nbsp;{{ user.currentEnterpriseInfo.name }}&nbsp;&nbsp;</span>
          <span class="item" @click="logout">[退出]</span>
          <ul>
            <li class="menu-item-first">您可切换至以下账户：</li>
            <li v-for="(en, index) in user.enterpriseInfo" @click="switchEn(en)" :title="en.name" :key="index">
              <a v-text="en.name"></a>
            </li>
          </ul>
        </div>
        <router-link to="/" class="item">商城首页</router-link>
        <template v-if="user.logged">
          <router-link to="/user/home" class="item">买家中心</router-link>
          <router-link to="/openVendorProxy" class="item" v-if="!isPersonUser">卖家中心</router-link>
          <a :href="ssoCenterUrl" target="_blank" class="item">账户中心</a>
        </template>
      </div> -->
    </div>
  </header>
</template>
<script>
// import { mapGetters } from 'vuex'
// import { comHeader } from '@/utils/mixins'
export default {
  data: () => ({
    cartCount: 0
  }),
  beforeCreate () {
    // document.cookie = '125'
  },
  created () {
    // widnow.alert(1)
  },
  mounted () {
    // window.alert(1)
  },
  methods: {
    login () {
      window.location.href = this.loginUrl + `?returnUrl=${encodeURIComponent(window.location.href)}`
    },
    logout () {
      this.$http.sso.logout({}).then(() => {
        window.location.href = '/'
      })
    },
    register () {
      window.location.href = this.registerUrl + `?returnUrl=${encodeURIComponent(window.location.href)}`
    },
    switchEn (en) {
      this.$http.sso.switchEnterprise({ enuu: en.enuu }).then(() => {
        window.location.href = '/'
        this.$store.dispatch('auth/getAuth')
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.inlineb {
  display: inline-block;
}
.main-header {
  height: 32px;
  line-height: 32px;
  width: 100%;
  background: #3f4a55;
  .header-wrap {
    width: 1190px;
    margin: 0 auto;
    font-size: 14px;
    color: #fff;
    .header-logo {
      color: #fff;
      img {
        margin-right: 3px;
        vertical-align: middle;
        margin-top: -5px;
        width: 21px;
      }
    }
    .fr {
      .item {
        color: #fff;
        cursor: pointer;
        margin-right: 12px;
        margin-left: 12px;
        &.item-user {
          cursor: default;
          margin-right: 5px;
        }
      }
      .drop-down {
        position: relative;
        ul {
          position: absolute;
          display: none;
          top: 30px;
          width: 100%;
          padding: 0 6px 13px;
          line-height: normal;
          border: 1px solid #999;
          border-top: none;
          max-height: 300px;
          overflow-y: auto;
          background: #f6f6f6;
          z-index: 2;
          li {
            padding: 0 12px;
            height: 30px;
            line-height: 30px;
            max-width: 300px;
            color: #333;
            overflow: hidden;
            cursor: pointer;
            -o-text-overflow: ellipsis;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 12px;
            a {
              color: #333;
              &:hover {
                color: #5078cb;
              }
            }
          }
        }
        .menu-item-first {
          background: #eee;
          padding: 0 12px;
          line-height: 30px;
          font-size: 12px;
          font-weight: bold;
          width: 100%;
          max-width: unset;
        }
        &:hover {
          background: #fff;
          .item {
            color: #333;
          }
          ul {
            display: block;
          }
        }
      }
    }
    .fl {
      font-size: 12px;
      img {
        width: 21px;
        height: 19px;
        vertical-align: text-bottom;
        margin-right: 3px;
      }
    }
  }
}
</style>
