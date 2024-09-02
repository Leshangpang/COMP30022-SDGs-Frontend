<template>
    <div class="page-title-area item-bg1">
      <div class="container">
        <div class="page-title-content">
          <h2>{{ pageTitle }}</h2>
          <ul class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/">Home</router-link>
            </li>
            <li class="breadcrumb-item"></li>
            <li class="primery-link">{{ mainTitle }}</li>
          </ul>
        </div>
      </div>
    </div>
  </template>

<script>
/** @vue/component */
export default {
  name: 'Banner',
  props: {
    /** @type {string} */
    pageTitle: String,
    /** @type {string} */
    mainTitle: String
  }
}
</script>


<style scouped>
.page-title-area {
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 130px;
  padding-bottom: 130px;
}

.page-title-area.item-bg1 {
  background-image: url(../assets/image/bred.png);
}

.page-title-content {
  max-width: 670px;
  margin: auto;
  text-align: center;
}

.page-title-content h2 {
  margin-bottom: 5px;
  font-size: 40px;
  color: var(--blackColor);
  font-weight: 800;
}

.page-title-content .breadcrumb {
  justify-content: center;
  font-size: 18px;
  margin-bottom: 0;
  background-color: inherit;
}

.page-title-content .breadcrumb-item+.breadcrumb-item::before{
  color: #6c757d;
  content: var(--bs-breadcrumb-divider, "-");
}

.page-title-content .breadcrumb .primery-link{
  color: var(--mainColor);
}
</style>