<template>
    <div class="banner" :style="{ backgroundImage: `url(${backgroundImage})` }">
      <div class="banner-content">
        <!-- You can place any content inside the banner here -->
        <h1>{{  }}</h1>
        <p>{{  }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Banner",
    props: {
      backgroundImage: {
        type: String,
        required: true
      },
      title: {
        type: String,
        default: "Default Title"
      },
      subtitle: {
        type: String,
        default: "Default Subtitle"
      }
    }
  };
  </script>
  
  <style scoped>
  .banner {
    width: 100%;
    height: 400px; /* Adjust the height as needed */
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(7, 7, 7); /* Text color */
    text-align: center;
    position: relative;
    /* Optional: Add an overlay for better text visibility */
    background-blend-mode: overlay;
    /* Adjust the color and opacity as needed */
  }
  
  .banner-content {
    z-index: 1; /* Ensure content is above the background */
  }
  
  h1, p {
    margin: 0;
  }
  p{
    color:rgb(24, 56, 136)
  }
  </style>
  