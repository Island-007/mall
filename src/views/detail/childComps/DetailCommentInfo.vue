<template>
  <div class="detail-comment-info">
    <div class="comment-top">
      <h3 class="comment-title">宝贝评价（{{ commentInfo.cRate }}）</h3>
      <span class="comment-more">查看全部</span>
    </div>
    <div class="comment-middle" v-if="commentInfo.list">
      <div class="comment-middle-header">
        <div class="comment-middle-left">
          <img :src="commentInfo.list[0].user.avatar" alt="" class="userlogo" />
        </div>
        <div class="comment-middle-right">
          <span class="username">{{
            commentInfo.list[0].user.uname | showUserName
          }}</span>
          <div class="comment-other">
            <span class="time"
              >{{ this.commentInfo.list[0].created | showCommentDate }} |</span
            >
            <span class="style"> {{ commentInfo.list[0].style }}</span>
          </div>
        </div>
      </div>
      <div class="comment-middle-context">
        <p>{{ commentInfo.list[0].content }}</p>
        <div>
          <img
            v-for="(item, index) in commentInfo.list[0].images"
            :key="index"
            :src="item"
            alt=""
            class="comment-img"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { formatDate } from "common/util.js";
export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    showUserName(value) {
      return value[0] + "**" + value[value.length - 1];
    },
    showCommentDate(time) {
      let date = new Date(time * 1000);
      return formatDate(date, "yyyy-MM-dd");
    },
  },
};
</script>
<style scoped>
.detail-comment-info {
  margin: 8px auto;
  width: 95vw;
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
}
.comment-top {
  margin: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.comment-title {
  font-size: 14px;
}
.comment-more {
  font-size: 12px;
  color: var(--color-high-text);
}
.comment-middle {
  margin-top: 0.5rem;
}
.comment-middle-header {
  display: flex;
  align-items: center;
}
.userlogo {
  margin: 0.5rem;
  width: 36px;
  border-radius: 18px;
  border: 1px solid #ccc;
}
.username {
  font-size: 14px;
}
.time,
.style {
  font-size: 12px;
  color: #a3a3a3;
}
.comment-middle-context p {
  padding: 0.5rem;
  padding-bottom: 1rem;
  font-size: 14px;
}
.comment-img {
  margin: 0 0.5rem 1rem 0.5rem;
  height: 15vh;
}
</style>