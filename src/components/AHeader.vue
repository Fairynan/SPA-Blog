
<template>
  <div>
    <ul>
      <li>
        <router-link to="/home">主页</router-link>
      </li>
      <li>
        <router-link to="/about">关于</router-link>
      </li>
      <li>
        <router-link to="/login">登录</router-link>
      </li>
    </ul>
  </div>
</template>

<script type="text/babel">
export default {
  data () {
    return {

    }
  },
  methods: {
  }
}
</script>

<style scoped>
  .nav {
    position: fixed;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
    background-color: rgba(0, 0, 0, 0);
    color: #fff;
    transition: all .4s;
  }

  .nav-fixed {
    color: rgba(0, 0, 0, .8);
    background-color: rgba(255, 255, 255, 0.95);
    border-bottom: 1px solid #bababa;
  }

  .nav-invisible {
    transform: translate(0, -4.8rem)
  }

  .nav a {
    font-size: 1.4rem;
    display: block;
    margin: 0;
    padding: 1.2rem 1.8rem;
    opacity: 1;
    transition: opacity 0.4s;
  }

  .nav a:hover {
    opacity: 0.7;
  }

  .header {
    height: 30rem;
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, .2);
  }

  .header-background {
    z-index: -1;
    position: absolute;
    height: 30rem;
    width: 100%;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, .4) url('../assets/banner.jpg') no-repeat;
    background-size: cover;
  }

  .header-title {
    color: #fff;
    display: flex;
    align-self: center;
    margin: auto;
    justify-content: center;
    align-items: center;
    max-width: 94%;
  }

  .header-title h1 {
    font-size: 4rem;
    font-weight: 400;
  }

  @media screen and (max-width: 768px) {
    .header-title h1 {
      font-size: 2.6rem;
    }

    .nav-invisible {
      transform: translate(0, -4.4rem)
    }

    .nav a {
      font-size: 1.4rem;
      padding: 1rem 1.4rem;
    }

    .header, .header-background {
      height: 24rem;
    }
  }
</style>
