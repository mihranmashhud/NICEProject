<template>
  <v-app>
    <v-toolbar fixed class="primary" dark>
      <v-toolbar-title>NICE</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat href="/projects">Projects</v-btn>
        <v-menu>
          <v-btn flat slot="activator">Programs</v-btn>
          <v-list class="secondary">
            <v-list-tile v-for="program in programs" :key="program.title" :href="program.link" @click="">
              <v-list-tile-title>{{ program.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-btn flat href="/donate">Donate</v-btn>
        <v-btn flat href="/contact">Contact</v-btn>
        <v-btn flat @click.native.stop="dialog = true" v-if="signIn">Sign In</v-btn>
        <v-dialog v-model="dialog" max-width="500px">
          <v-card dark class="accent">
            <v-card-title primary-title>
              <v-layout wrap>
                <v-flex xs12>
                  <span class="headline">Sign In</span>
                </v-flex>
                <v-flex xs12>
                  <p>Don't have an account? Then sign up
                    <a href='sign-up' class='white--text'>here.</a>
                  </p>
                </v-flex>
                <v-flex xs12>
                  <v-text-field name="email" color="teal accent-1" label="Email" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field name="password" color="teal accent-1" label="Password" :append-icon="e1 ? 'visibility' : 'visibility_off'" :append-icon-cb="() => (e1 = !e1)" :type="e1 ? 'password' : 'text'" required></v-text-field>
                </v-flex>
              </v-layout>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="teal accent-1" flat @click.native="dialog = false">Cancel</v-btn>
              <v-btn color="teal accent-1" flat @click.native="dialog = false">Enter</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar-items>
    </v-toolbar>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    signIn: true,
    dialog: false,
    programs: [
      {
        title: "Funeral Service",
        link: "/funeral-service"
      },
      {
        title: "Community Events",
        link: "/community-events"
      }
    ],
    e1: true
  })
};
</script>
