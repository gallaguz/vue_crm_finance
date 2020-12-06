<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
          id="email"
          type="text"
          v-model.trim="email"
          :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
        >
        <label for="email">Email</label>
        <small
          class="helper-text invalid"
          v-if="($v.email.$dirty && !$v.email.required)"
        >
          Поле email не должно быть пустым
        </small>
        <small
          class="helper-text invalid"
          v-else-if="($v.email.$dirty && !$v.email.email)"
        >
          Введите корректные email
        </small>
      </div>
      <div class="input-field">
        <input
          id="password"
          type="password"
          :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
          v-model.trim="password"
        >
        <label for="password">Пароль</label>
        <small
          v-if="($v.password.$dirty && !$v.password.required)"
          class="helper-text invalid"
        >
          Введите пароль
        </small>
        <small
          v-else-if="($v.password.$dirty && !$v.password.minLength)"
          class="helper-text invalid"
        >
          Пароль должен быть не короче: {{ $v.password.$params.minLength.min }} символов
          Сейчас: {{ password.length }}
        </small>
        <small
          v-else-if="($v.password.$dirty && !$v.password.maxLength)"
          class="helper-text invalid"
        >
          Пароль должен быть не длиннее: {{ $v.password.$params.maxLength.max }} символов
          Сейчас: {{ password.length }}
        </small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
        >
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Нет аккаунта?
        <router-link to="/register">Зарегистрироваться</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import {email, required, minLength, maxLength} from 'vuelidate/lib/validators'
import messages from "@/utils/messages";

export default {
  name: "Login",
  data: () => ({
    email: '',
    password: ''
  }),
  validations: {

    email: {
      email,
      required
    },
    password: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(20)
    }
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      const formData ={
        email: this.email,
        password: this.password
      }
      try {
        await this.$store.dispatch('login', formData)
        this.$router.push('/')
      } catch (e) {}
    }
  },
  mounted() {
    if (messages[this.$route.query.message]) {
      this.$message(messages[this.$route.query.message])
    }
  }
}
</script>

<style scoped>

</style>
