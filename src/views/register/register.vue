<template>
  <div class="register">
    <el-row class="content" :gutter="0">
      <el-col :xs="0" :sm="4" :md="6" :lg="6" :xl="6">
        <div class="grid-content "></div>
      </el-col>
      <el-col :xs="24" :sm="16" :md="12" :lg="12" :xl="12">
        <el-card class="box-card">
          <el-row :gutter="0">
            <el-col :span="22" :offset="0">
              <h1>注册register</h1>
              <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="username" >
                  <el-input type="name" v-model="ruleForm.username" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                  <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                  <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item class="button">
                  <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
                  <el-button @click="resetForm('ruleForm')">重置</el-button>
                  <el-button @click="login">登录</el-button>
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
    name: 'Register',
    data() {
			var validateName = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入用户名'))
				}else {
					this.$axios.post('http://localhost:3000/api/start', {username: this.ruleForm.username})
              .then(res => {
                if(res.data.status == 0){
									callback(new Error(res.data.msg))
								}
								callback()
              })
				}
			}
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          username: '',
					hasName:[]
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
					username: [
						{ validator: validateName, trigger: 'blur'}
					]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$axios.post('http://localhost:3000/api/register', 
						{ username: this.ruleForm.username, password: this.ruleForm.pass, spwd: this.ruleForm.checkPass })
              .then(res => {
                alert(res.data.msg + ',点击跳转到登录页面');
								his.$router.push('/login')
              })
          } else {
            alert('请输入正确信息');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
			login() {
				this.$router.push('/login')
			},
    },
  }
</script>

<style>
  .register {
		z-index: 1555555;
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