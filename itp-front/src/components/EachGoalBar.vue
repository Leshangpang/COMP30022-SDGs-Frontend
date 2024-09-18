<template>
    <div class="content">
      <div class="title">
        <div class="name">
          <h2>5</h2>
          <!-- <div>
            <div>GENDER</div>
            <div>EQUALITY</div>
          </div> -->
        </div>
      </div>
      <div class="desc">
        <h2>Goal 5: Gender Equality</h2>
        <h4>Achieve gender equality and empower all women and girls</h4>
      </div>
    </div>
</template>

<style>
.content {
  display: flex;
  column-gap: 10px;
  padding: 0  40px;
  margin-top: 20px;
  color: #fff;
}
.content .name {
  display: flex;
  display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox; /* TWEENER - IE 10 */
  display: -webkit-flex; /* NEW - Chrome */
  column-gap: 10px;
  line-height: 1;
  padding: 10px;
}
.name h2 {
  margin: 0;
  line-height: 1;
  font-size: 32px;
}
.content .title {
  width: 150px;
  height: 150px;
  background-color: #d15a43;
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Sustainable_Development_Goal_05GenderEquality.svg/1200px-Sustainable_Development_Goal_05GenderEquality.svg.png");
  background-size: cover; /* 使图片覆盖整个元素 */
  background-position: center; /* 使图片在元素中心对齐 */
  background-repeat: no-repeat; /* 避免图片重复 */
}
.content .desc {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: hwb(10 15% 9%);
  padding-left: 40px;
  flex: 1;
}
</style>