<template>
    <div class="profile-banner">
        <div class="banner-heading">
            <h1>My Badges</h1>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "profile-banner",
};
</script>
  
<style scoped>
/* Styling for Profile Banner */
.profile-banner {
  width: 100%;
  height: 400px; /* Adjust height to suit your needs */
  background-image: url('../assets/image/ProfileBannerBackground.png'); /* Make sure the path is correct */
  background-position: center;
  background-size: cover; /* Ensures the image covers the entire area */
  background-repeat: no-repeat;
  margin: 100px 0; /* Adjust margin to suit your layout */
}

.banner-heading {
  position: absolute;
  top: 42%; /* Centers the text vertically */
  left: 51.5%; /* Centers the text horizontally */
  transform: translate(-50%, -50%); /* Adjust to truly center */
  text-align: center;
  color: #333; /* Adjust text color for visibility */
  z-index: 1; /* Ensure the text is on top of the background */
}

.banner-text h1 {
  font-size: 32px; /* Adjust heading size */
  font-weight: bold;
  color: #333; /* Adjust the color */
}


</style>
  