<template>
  <header class="main-header">
    <div class="container header-wrap">
    </div>
  </header>
</template>
<script>
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
