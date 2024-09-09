<template>
    <div class="profile-banner">
      <img src="../assets/image/ProfileBanner.png" alt="ProfileBanner" />
    </div>
  </template>
  
  <script>
  export default {
    name: "ProfileBanner",
  };
  </script>
  
  <style scoped>
  /* Styling for Profile Banner */
  .profile-banner {
    text-align: center;
    margin: 20px 0; /* Adjust margin to suit your layout */
  }
  
  .profile-banner img {
    max-width: 100%;
    height: auto;
    object-fit: contain; /* Ensures the image fits nicely */
  }
  </style>