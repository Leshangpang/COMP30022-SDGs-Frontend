<template>
  <div class="sidebar-container">
    <!-- Badge Section -->
    <div class="badge-section">
      <router-link 
        to="/badges"
        class="text"
        active-class="active"
      >
        My Badges
      </router-link>
      <p class="icon">🥇</p> 
    </div>

    <!-- Certificate Section -->
    <div class="certification-section">
      <router-link 
        to="/certificate"
        class="text certification"
        active-class="active"
      >
        My Certificate
      </router-link>
      <p class="icon certification-icon">📜</p> 
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
  margin-left: 35px; /* Adjust margin as necessary */
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

.badge-section .text.active {
  color: #000000; /* Highlight the current active page */
}

.badge-section .text:hover {
  color: #000000; /* Darken the text when hovering */
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

.certification-section .text.certification.active {
  color: #000000; /* Highlight the current active page */
}

.certification-section .text.certification:hover {
  color: #333; /* Darken the text when hovering */
}

/* Icon styles */
.icon {
  font-size: 35px;
}

.icon.certification-icon {
  font-size: 25px; 
  margin-top: 10px;
}
</style>
