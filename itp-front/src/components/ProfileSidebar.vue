<template>
  <div class="sidebar-container">
    <!-- Badge Section -->
    <div class="badge-section">
      <router-link 
        to="/badges"
        :class="['text', { current: $route.name === 'BadgePage' }]"
      >
        My Badges
      </router-link>
      <p class="icon">🥇</p> <!-- Replace with a suitable icon -->
    </div>

    <!-- Certificate Section -->
    <div class="certification-section">
      <router-link 
        to="/certificate"
        :class="['text certification', { current: $route.name === 'CertificatePage' }]"
      >
        My Certificate
      </router-link>
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
/* Style for the sidebar container */
.sidebar-container {
  border: 1px solid #e4a6a6; /* Light red border */
  padding: 20px;
  border-radius: 10px; /* Rounded corners */
  background-color: #fff6f6; /* Light pink background */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly; /* Equal spacing between items */
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
  color: #a89a9a; /* Grayish text for non-active Badge */
  text-decoration: none;
  margin-left: -8px;
  margin-bottom: 20px;
}

.badge-section .text.current {
  color: #333; /* Darker text when Badge page is active */
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
  color: #a89a9a; /* Grayish text for non-active Certification */
  text-decoration: none;
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
