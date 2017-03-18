<template>
  <div class="members">
    <h1>Team members</h1>
    <ul>
      <li class="member" v-for="member in memberList" >
        <img class="member__img" :src="member.avatar_url" />
        <strong class="member__name">
          {{ member.login }}
          ({{ member.type }})
        </strong>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'member-list',
  data: function memberData() {
    return {
      members: [
        {
          name: 'Tan',
          githubID: 'pandapoe',
        },
        {
          name: 'Poe',
          githubID: 'Poepanda',
        },
      ],
    };
  },
  created: function listCreated() {
    this.getMembers();
  },
  methods: {
    ...mapActions('members', {
      getMembers: 'getMembers',
    }),
  },
  computed: {
    ...mapState('members', {
      memberList: state => state.list,
    }),
  },
};
</script>

<style>
  .members {
    text-align: center;
  }
  .member {
    display: inline-block;
    box-shadow: 0 0 3px #333333;
    margin: 4px;
    min-width: 256px;
  }
  .member__img {
    max-width: 256px;
  }
  .member__name {
    display: block;
  }
</style>
