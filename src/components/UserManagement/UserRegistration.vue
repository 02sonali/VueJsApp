<template>
  <div id="user-registration-form">
    <v-app id="inspire">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="userDetails.name" :counter="20" :rules="nameRules" label="Name" required></v-text-field>
        <v-text-field v-model="userDetails.contact" :rules="contactRules" label="Contact" required></v-text-field>
        <v-text-field v-model="userDetails.email" :rules="emailRules" label="E-mail" required></v-text-field>
        <v-select v-model="userDetails.language" :items="languages" :rules="[v => !!v || 'Language is required']" label="Language" required
        ></v-select>
        <v-btn :disabled="!valid" color="success" @click="validate">Submit</v-btn>
        <v-btn color="error" @click="cancel">Cancel</v-btn>
      </v-form>
    </v-app>
  </div>
</template>

<script>
export default {
    name: "UserRegistration",
    props: ['userDetails'],
    data: function() {
        return {
            valid: true,
            nameRules: [
                v => !!v || "Name is required",
                v => (v && v.length <= 20) || "Name must be less than 20 characters"
            ],
            contactRules: [
                v => !!v || "Contact is required",
                v => (v && (v.toString()).length > 5) || "Contact must be valid"
            ],
            emailRules: [
                v => !!v || "E-mail is required",
                v => /.+@.+/.test(v) || "E-mail must be valid"
            ],
            languages: ["English", "Korean"],
            checkbox: false
        }
    },
    methods: {
        validate() {
            if (this.$refs.form.validate()) {
                this.$emit("save-user", this.userDetails);
                this.resetValidation();
            }
        },
        reset () {
            this.$refs.form.reset()
        },
        resetValidation () {
            this.$refs.form.resetValidation()
        },
        cancel() {
            this.$emit("cancel");
        }
    }
};
</script>

<style>
#user-registration-form {
  text-align: center;
}
</style>


