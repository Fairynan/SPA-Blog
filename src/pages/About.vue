<template>
  <div class="about-wrapper fade-transition mian-wrapper">
    <h2 class="list-title">张楠</h2>
    <p>西理工 前端工程师 程序媛 小仙女</p>
    <a href="https://github.com/jiangjiu">Github</a>
    <a href="http://weibo.com/u/2900330731">微博</a>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>
  .about-wrapper {
    width: 80%;
    padding: 1rem;;
  }

  .about-wrapper a {
    color: #4078c0;
    display: block;
    transition: all .4s;
  }

  .about-wrapper a:hover {
    color: #80b2ff;
  }

  .about-wrapper p, .about-wrapper h2, .about-wrapper a {
    margin: 1rem auto;
  }

  .about-wrapper p {
    font-size: 1.8rem;
  }

  .about-wrapper a {
    font-size: 1.6rem;
  }

  @media screen and (max-width: 768px) {
    .about-wrapper p {
      font-size: 1.6rem;
    }

  }
</style>
