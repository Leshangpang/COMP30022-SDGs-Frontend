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
  align-items: flex-start; /* Align items to the left */
  width: 180px; /* Adjust width as necessary */
  height: 200px; /* Increase height for better spacing */
  margin-left: 35px; /* Adjust margin as necessary */
}

/* Badge and Certification Section Styles */
.badge-section,
.certification-section {
  display: flex;
  align-items: center; 
  justify-content: space-between; /* Add space between text and icon */
  width: 100%;
  margin-bottom: 15px; 
}

/* Text styles for both sections */
.badge-section .text,
.certification-section .text {
  font-size: 20px;
  color: #a89a9a; /* Grayish text for non-active state */
  text-decoration: none;
  margin-right: 10px; /* Add space between text and icon */
}

.badge-section .text.active,
.certification-section .text.certification.active {
  color: #000000; /* Highlight the current active page */
}

.badge-section .text:hover,
.certification-section .text.certification:hover {
  color: #000000; /* Darken the text when hovering */
}

/* Icon styles */
.icon {
  font-size: 30px;
}

.certification-icon {
  font-size: 25px; 
}
</style>
