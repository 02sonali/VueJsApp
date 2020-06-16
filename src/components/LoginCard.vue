<template>
  <v-card class="pa-5" color="grey lighten-5">
    <v-card-title primary-tile>
      <h2>Samsung SDS</h2>
    </v-card-title>
    <v-card-text>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="username"
          label="User name"
          required
          :clearable="isClearable"
        ></v-text-field>
        <v-text-field
          v-model="userpass"
          :append-icon="showPassword ? 'visibility' : 'visibility_off'"
          :type="showPassword ? 'text' : 'password'"
          name="input-10-1"
          label="Password"
          hint="At least 8 characters"
          required
          @click:append="showPassword = !showPassword"
        ></v-text-field>
        <router-link to="/charts">
          <v-btn block dark>
            LOGIN
            <v-icon right>arrow_forward</v-icon>
          </v-btn>
        </router-link>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    isClearable: true,
    valid: true,
    username: "",
    userpass: "",
    checkbox: false,
    showPassword: false
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
}
</style>
