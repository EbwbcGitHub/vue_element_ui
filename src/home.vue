<template>
  <div class="box">
    <ul class="nav">
      <li class="item" @click="handleClick">
        跳转路径至'/'
      </li>
      <i class="fas fa-volume-up" style="color: red; font-size: 89px"></i>
      <i class="fab fa-btc"></i>
    </ul>
    <div class="aside">
      <el-menu :default-active="$route.path"
                class="el-menu-vertical-demo"
                router
                @open="handleOpen"
                @close="handleClose"
                background-color="#e8e8f0">
        <el-submenu v-for="(item, index) in $router.options.routes"
                    :key="index"
                    :index="item.path">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span v-text="item.name"></span>
          </template>
          <el-menu-item v-for="(itemli, indexli) in item.children"
                        :key="indexli"
                        :index="itemli.path"
                        v-text="itemli.name"></el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClick() {
      this.$router.push({
        path: '/'
      })
    }
  },
  mounted() {
    console.log(this.$router.options.routes, '22222222222')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .box {
    width: 100%;
    position: relative;
  }
  .aside {
    width: 200px;
    height: 600px;
    position: absolute;
    top: 80px;
    left: 0;
  }
  .el-menu-vertical-demo {
    width: 200px;
  }
  .btn {
    position: absolute;
    top: 30px;
    right: 500px;
  }
  .nav {
    width: 100%;
    height: 50px;
    background: #4db3ff;
    position: absolute;
    top: 0;
    left: 0;
    padding: 0;
    margin: 0;
  }
  .item {
    width: 100px;
    padding: 0 20px;
    height: 50px;
    line-height: 50px;
    border: 1px solid  #fff;
    color: #fff;
    list-style: none;
    cursor: pointer;
  }
  .main {
    width: 100%;
    position: absolute;
    top: 80px;
  }
</style>
