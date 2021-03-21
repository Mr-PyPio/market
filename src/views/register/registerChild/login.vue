<template>
  <div class="login">
    <el-row class="content" :gutter="10">
      <el-col :xs="0" :sm="4" :md="6" :lg="6" :xl="6">
        <div class="grid-content "></div>
      </el-col>
      <el-col :xs="24" :sm="16" :md="12" :lg="12" :xl="12">
        <el-card class="box-card">
          <el-row :gutter="20">
            <el-col :span="22" :offset="0">
              <h1>登录</h1>
              <el-form status-icon label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名">
                  <el-input v-model="username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                  <el-input type="password" autocomplete="off" v-model="password" show-password></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submit">登录</el-button>
                  <el-button @click="register">注册</el-button>
                </el-form-item>
              </el-form>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :xs="0" :sm="4" :md="6" :lg="6" :xl="6">
        <div class="grid-content "></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      register() {
        this.$router.push('/register')
      },
      submit() {
        this.$axios.post('http://localhost:3000/api/login', { username: this.username, password: this.password })
          .then(res => {
						console.log(res.data)
            if (res.data.status == 1) {
							alert(res.data.msg);
              this.$router.push('/profile');
              this.username = '';
              this.password = '';
            } else if (res.data.status == 2) {
              alert(res.data.msg);
            }
          })
      }
    }
  }
</script>

<style>
  .login {
    height: 100%;
  }

  .content {
    margin-top: 20%
  }

  .el-row {
    margin-bottom: 20px;
  }

  .el-col {
    border-radius: 4px;
  }

  h1 {
    font-size: 30px;
    text-align: center;
  }

  .grid-content {
    min-height: 36px;
    height: 200px;
  }
</style>