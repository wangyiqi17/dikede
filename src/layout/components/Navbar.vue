<template>
  <div class="navbar">
    <!-- <hamburger
      :is-active="sidebar.opened"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    /> -->

    <!-- <breadcrumb class="breadcrumb-container" /> -->
    <img src="@/assets/sidebarlogo.png" class="logo" />
    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <!-- <img :src="avatar + '?imageView2/1/w/80/h/80'" class="user-avatar" /> -->
          <img
            v-imagerror="defaultImg"
            :src="$store.state.user.userInfo.image || defaultImg"
            class="user-avatar"
          />
          <span>欢迎您，{{ $store.state.user.userInfo.userName }}</span>
          <span>退出</span>
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <el-dropdown-item divided @click.native="logout">
            <span style="display: block">Log Out</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import Breadcrumb from "@/components/Breadcrumb";
// import Hamburger from "@/components/Hamburger";
import defaultImg from "@/assets/logo.png";

export default {
  data() {
    return {
      defaultImg,
    };
  },
  // components: {
  //   Breadcrumb,
  //   Hamburger,
  // },
  computed: {
    ...mapGetters(["sidebar", "avatar"]),
  },
  created() {
    this.getavatar();
  },
  methods: {
    // toggleSideBar() {
    //   this.$store.dispatch("app/toggleSideBar");
    // },
    async getavatar() {
      const id = this.$store.state.user.token.userId;
      // console.log(this.$store.state.user.token);
      await this.$store.dispatch("user/getUserInfo", id);
    },
    async logout() {
      await this.$store.dispatch("user/logout");
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 60px;
  width: 100%;
  // overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  background: url("~@/assets/navbarbg.png");

  .logo {
    width: 100px;
    height: 40px;
    margin: 10px 50px;
  }

  // .hamburger-container {
  //   line-height: 46px;
  //   height: 100%;
  //   float: left;
  //   cursor: pointer;
  //   transition: background 0.3s;
  //   -webkit-tap-highlight-color: transparent;

  //   &:hover {
  //     background: rgba(0, 0, 0, 0.025);
  //   }
  // }

  // .breadcrumb-container {
  //   float: left;
  // }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 60px;

    img {
      margin-top: 5px;
      float: left;
    }
    &:focus {
      outline: none;
    }
    span {
      color: #fff;
      margin-left: 10px;
      float: left;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
