<template>
    <div class="wrap">
        <el-container>
            <el-aside width="200px">
                <el-row class="tac">
                  <el-col :span="12">
                        <el-menu
                          default-active="2"
                          class="el-menu-vertical-demo"
                          @open="handleOpen"
                          @close="handleClose"
                          background-color="#545c64"
                          text-color="#fff"
                          active-text-color="#ffd04b">
                          <el-submenu index="1">
                            <template slot="title">
                              <i class="el-icon-location"></i>
                              <span class='tit-nav' @click='titNav'>导航一</span>
                            </template>
                                <el-menu-item-group>
                                  <el-menu-item index="1-1">选项1</el-menu-item>
                                  <el-menu-item index="1-2">选项2</el-menu-item>
                                </el-menu-item-group>
                                <el-submenu index="1-4">
                                  <template slot="title">选项4</template>
                                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                                </el-submenu>
                          </el-submenu>
                          <el-menu-item index="2">
                            <i class="el-icon-menu"></i>
                            <span slot="title" class='tit-nav' @click='titNav'>导航二</span>
                          </el-menu-item>
                          <el-menu-item index="3">
                            <i class="el-icon-setting"></i>
                            <span slot="title" class='tit-nav' @click='titNav'>导航三</span>
                          </el-menu-item>
                        </el-menu>
                  </el-col>
                </el-row>
            </el-aside>
            <el-container>
                <el-header>
                        <!-- <el-breadcrumb separator="/">
                            <el-breadcrumb-item :to="{ path: '/' }" class='cont-nav'>导航一</el-breadcrumb-item>
                            <el-breadcrumb-item class='cont-nav'>导航二</el-breadcrumb-item>
                            <el-breadcrumb-item class='cont-nav'>导航三</el-breadcrumb-item>
                        </el-breadcrumb> -->
                </el-header>

            <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<style>
*{
    margin:0;
    padding:0;
    list-style: none;
    text-decoration: none;
}

  .el-header{
    background-color: indianred;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    /*text-align: center;*/
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    /*text-align: center;*/
    line-height: 160px;
  }
  .el-menu-vertical-demo{
    width:200px;
    box-sizing: border-box;
    border:none;
  }
  .cont-nav{
    line-height: 60px;
  }

  
</style>

<script>
    export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      // 面包屑
      titNav:function(){
        // alert(1)
       for(var i=0;i<span.length;i++){
            alert(1)
       }
      }

    }


    

    






  }
</script>
  