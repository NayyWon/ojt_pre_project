<template>
  <header class="flex">
    <div class="branding flex">
      <img src="@/assets/file-invoice-dollar-solid.png" alt="" />
    </div>
  </header>
</template>

<script>
export default {
  name: "navigation",
};
</script>

<style lang="scss" scoped>
header {
  z-index: 99;
  flex-direction: row;
  background-color: #1e2139;
  width: auto;
  @media (min-width: 900px) {
    min-height: 100vh;
    width: 90px;
    flex-direction: column !important;
    border-radius: 0 20px 20px 0;
    position: fixed;
    // top: 0;
    // left: 0;
  }

  .branding {
    border-radius: 0 20px 20px 0;
    background-color: #7c5dfa;
    justify-content: center;
    padding: 24px;
    @media (min-weight:900px) {
      width: 100%;
    }
  }

  img {
    width: auto;
    height: 30px;
  }
}
</style>
