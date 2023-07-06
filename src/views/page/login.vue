<template>
  <div class="login-wrap">
    <div class="form_wrap">
      <el-form
        ref="ruleFormRef"
        :model="data"
        label-width="100px"
        class="demo-dynamic"
      >
        <h2>后台管理系统</h2>
        <el-form-item
          prop="username"
          label="用户名"
          :rules="[
            {
              required: true,
              message: '此项为必填项',
              trigger: 'blur',
            },
            {
              min: 3,
              max: 10,
              message: '账号的长度在3到10之间',
              trigger: 'blur',
            },
          ]"
        >
          <el-input v-model="data.username" />
        </el-form-item>
        <el-form-item
          prop="password"
          label="密码"
          :rules="[
            {
              required: true,
              message: '此项为必填项',
              trigger: 'blur',
            },
            {
              min: 3,
              max: 10,
              message: '密码的长度在3到10之间',
              trigger: 'blur',
            },
          ]"
        >
          <el-input type="password" v-model="data.password" />
        </el-form-item>
      </el-form>
      <div class="button">
        <el-button type="primary" @click="submitForm(ruleFormRef)"
          >登录</el-button
        >
        <el-button @click="resetForm(ruleFormRef)">重置</el-button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { reactive } from "vue";
import type { FormInstance } from "element-plus";
import { login } from "@/request/api";
const data = reactive({
  username: "",
  password: "",
});
const ruleFormRef = ref<FormInstance>();
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  //对表单的内容进行验证
  await formEl.validate((valid) => {
    if (valid) {
      /* console.log("submit!"); */
      login(data).then((res) => {
        console.log(res);
      });
    } else {
      console.log("error submit!");
      return false;
    }
  });
};
/* export default {
  setup() {
    const data = reactive({
      logindata: {
        username: "",
        password: "",
      },
    });
    return {
      ...toRefs(data),
    };
  },
}; */
</script>
<style lang="less" scoped>
.login-wrap {
  text-align: center;
  width: 100%;
  height: 100vh;
  background: rgb(54, 98, 180);
  position: relative;
  h2 {
    margin-bottom: 10px auto;
  }
}
.form_wrap {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 30px 50px;
  border-radius: 5px;
}
.button {
  display: flex;
  justify-content: center;
  el-button {
    display: flex;
  }
}
</style>
