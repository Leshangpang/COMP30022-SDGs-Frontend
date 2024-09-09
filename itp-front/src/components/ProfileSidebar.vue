<template>
  <div class="sidebar-container">
    <div class="badge-section">
      <router-link 
        v-if="$route.name !== 'BadgePage'"
        to="/badges" 
        class="text"
      >
        My Badges
      </router-link>
      <span v-else class="text current">Badge</span>
      <p class="icon">🥇</p> <!-- Replace with a suitable icon -->
    </div>

    <div class="certification-section">
      <router-link 
        v-if="$route.name !== 'CertificatePage'"
        to="/certificate" 
        class="text certification"
      >
        My Certificate
      </router-link>
      <span v-else class="text certification current">Certification</span>
      <p class="icon certification-icon">📜</p> <!-- Replace with a suitable icon -->
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileSidebar",
};
</script>

<style scoped>
/* Style for the box */
.sidebar-container {
  border: 1px solid #e4a6a6; /* Light red border */
  padding: 20px;
  border-radius: 10px; /* Rounded corners */
  background-color: #fff6f6; /* Light pink background */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly; /* Ensures equal spacing between items */
  align-items: center; /* Center items horizontally */
  width: 150px; /* Adjust width as necessary */
  height: 200px; /* Increase height for better spacing */
}

/* Section for Badge */
.badge-section {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 8px; /* Space between the text and the icon */
}

/* Badge text styling */
.badge-section .text {
  font-size: 20px;
  color: #a89a9a; /* Grayish text for Badge */
  text-decoration: none;
  margin-left: -8px;
  margin-bottom: 20px
}

.badge-section .text.current {
  color: #333; /* Make the current page's text darker */
}

/* Section for Certification */
.certification-section {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 8px; /* Space between the text and the icon */
}

/* Certification text styling */
.certification-section .text.certification {
  font-size: 20px;
  color: #333; /* Darker text for Certification */
  text-decoration: none;
}

.certification-section .text.certification.current {
  color: #333; /* Make the current page's text darker */
}

/* Icon styles */
.icon {
  font-size: 30px;
  color: #333; /* Dark icon color */
}

.icon.certification-icon {
  font-size: 25px; /* Slightly bigger icon for Certification */
}
</style>
