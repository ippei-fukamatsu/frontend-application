<template>
  <div class="bookmark" />
</template>

<style lang="scss" scoped>
.bookmark {
  background: url('~assets/images/pc/article/icon_bookmark.png') no-repeat;
  background-color: white;
  background-size: 12px;
  background-position: 9px 6px;
  border-radius: 50%;
  border: 1px solid #fefefe;
  box-shadow: 0px 5px 15px -1px #b1b1b1;
  height: 30px;
  position: absolute;
  right: 24px;
  top: 20px;
  width: 30px;
}

@media screen and (max-width: 1296px) {
  .long-article-card {
    .bookmark {
      display: none;
    }
  }
}

@media screen and (max-width: 550px) {
  .long-article-card {
    .bookmark {
      display: initial;
      right: 15px;
      top: -15px;
    }
  }

  .bookmark {
    display: initial;
    right: 15px;
    top: -15px;
  }
}
</style>
