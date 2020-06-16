<template>
  <div id="user-list">
    <v-app id="inspire">
      <div>
        <v-toolbar flat color="white">
          <v-toolbar-title>Users List</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark class="mb-2" v-on="on"
                >New User</v-btn
              >
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>
              <v-card-text>
                <UserRegistration
                  @save-user="save"
                  @cancel="close"
                  :userDetails="Users[editedIndex] || defaultItem"
                />
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-toolbar>
        <v-data-table :headers="headers" :items="Users" class="elevation-1">
          <template v-slot:items="props">
            <td class="text-xs-right">{{ props.item.name }}</td>
            <td class="text-xs-right">{{ props.item.contact }}</td>
            <td class="text-xs-right">{{ props.item.email }}</td>
            <td class="text-xs-right">{{ props.item.language }}</td>
            <td class="justify-center layout px-0">
              <v-icon small class="mr-2" @click="editItem(props.item)"
                >edit</v-icon
              >
              <v-icon small @click="deleteItem(props.item)">delete</v-icon>
            </td>
          </template>
          <template v-slot:no-data>
            <v-btn color="primary" @click="initialize">Reset</v-btn>
          </template>
        </v-data-table>
      </div>
    </v-app>
  </div>
</template>

<script>
import UserRegistration from "./UserRegistration.vue";
import Store from "../../store";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "UserList",
  components: {
    UserRegistration
  },
  data: () => ({
    dialog: false,
    headers: [
      { text: "Name", align: "right", sortable: true, value: "name" },
      { text: "Contact", value: "contact", align: "right", sortable: false },
      { text: "E-mail", value: "email", align: "right", sortable: false },
      { text: "Language", value: "language", align: "right", sortable: false },
      { text: "Actions", value: "name", sortable: false, align: "center" }
    ],

    editedIndex: -1,
    editedItem: {
      name: "",
      contact: "",
      email: "",
      language: ""
    },
    defaultItem: {
      name: "",
      contact: "",
      email: "",
      language: ""
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New User" : "Edit User";
    },
    Users: {
      get () {
        return this.$store.state.Users
      },
      set () {}
    } 
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    ...mapActions(["addUser", "editUser", "deleteUser"]),

    initialize() {
      this.Users = Store.Users;
    },

    editItem(item) {
      this.editedIndex = this.Users.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.Users.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        Store.dispatch("deleteUser", index);
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save(user) {
      if (this.editedIndex > -1) {
        Store.dispatch("editUser", this.editedIndex, user);
      } else {
        Store.dispatch("addUser", user);
      }
      this.close();
    }
  }
};
</script>
