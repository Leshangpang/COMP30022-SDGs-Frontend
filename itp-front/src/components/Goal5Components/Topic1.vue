<template>
    <div class="image-text-container">
        <img class="background-image" src="../assets/image/Goal5LearningContent/genderEquality_banner.png" />
        <div class="text-overlay">
            <p class="quote-text">"How important it is for us to recognize and celebrate our heroes and she-roes!"
            </p>
            <p class="author-text">- Maya Angelou</p>
        </div>
    </div>
    <div class="topic1-text-container">
        <h2>Overview</h2>
        <p>Gender bias is undermining our social fabric and devalues all of us. It is not just a human rights issue;
            it is a tremendous waste of the world's human potential. By denying women equal rights, we deny half the
            population a chance to live life at its fullest. Political, economic and social equality for women will
            benefit all the world's citizens. Together we can eradicate prejudice and work for equal rights and
            respect for all.
        </p>
    </div>

    <div class="video-container">
        <h2>Understand the SDG Goal</h2>
        <iframe width="560" height="315" :src="videoUrl" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
    </div>

    <div class="topic1-text-container">
        <h2>Current Progress</h2>
        <p>International commitments to advance gender equality have brought about improvements in some areas: child
            marriage and female genital mutilation (FGM) have declined in recent years, and women's representation
            in
            the political arena is higher than ever before. But the promise of a world in which every woman and girl
            enjoys full gender equality, and where all legal, social and economic barriers to their empowerment have
            been
            removed, remains unfulfilled. In fact, that goal is probably even more distant than before, since women
            and
            girls are being hit hard by the COVID-19 pandemic.
        </p>

        <div class="stats-container">
            <div class="stat-item">
                <img src="../assets/image/Goal5LearningContent/statImage1.png" alt="Legal Reforms">
                <div class="stat-text">
                    <h3>286</h3>
                    <p>At the current rate of progress, it will take another 286 years to reform legal frameworks to
                        promote, enforce and monitor gender equality in public life</p>
                </div>
            </div>
            <div class="stat-item">
                <img src="../assets/image/Goal5LearningContent/statImage2.png" alt="Violence Against Women">
                <div class="stat-text">
                    <h3>1 in 10</h3>
                    <p>Of women and girls aged 15-49, more than 1 in 10 (12.5%) were subjected to sexual and/or
                        physical violence by an intimate partner in the last year</p>
                </div>
            </div>
            <div class="stat-item">
                <img src="../assets/image/Goal5LearningContent/statImage3.png" alt="Child Marriage">
                <div class="stat-text">
                    <h3>17x</h3>
                    <p>To end child marriage by 2030, progress must be 17 times faster than it was over the last
                        decade</p>
                </div>
            </div>
        </div>

        <div class="main-preview-container">
            <div class="image-preview-container">
                <a href="https://www.un.org/sustainabledevelopment/wp-content/uploads/2023/09/Goal-5_Fast-Facts.pdf"
                    target="_blank" class="download-link">
                    <img src="../assets/image/Goal5LearningContent/preview1.png" class="preview-image" />
                    <h2 class="image-title">Fast Facts: Gender Equality</h2>
                </a>
            </div>
            <div class="image-preview-container">
                <a href="https://www.un.org/sustainabledevelopment/wp-content/uploads/2023/08/2309739_E_SDG_2023_infographics-5-5.pdf"
                    target="_blank" class="download-link">
                    <img src="../assets/image/Goal5LearningContent/preview2.png" class="preview-image" />
                    <h2 class="image-title">Infographic: Gender Equality</h2>
                </a>
            </div>
        </div>


    </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.image-text-container {
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
.background-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  padding-bottom: 40px;
  padding-right: 40px;
}
.text-overlay {
  position: absolute;
  top: 20%;
  left: 10%;
  color: #333;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 20px;
  max-width: 40%;
  font-family: 'Arial', sans-serif;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
}
.quote-text {
  font-size: 24px;
  font-style: italic;
  line-height: 1.4;
}
.author-text {
  font-size: 18px;
  margin-top: 20px;
  text-align: right;
}
.topic1-text-container{
    padding-bottom: 40px;
    padding-right: 40px;
}
.stats-container {
  display: flex;
  justify-content: space-around;
  padding: 20px;
  background: #f8f9fa;
  padding-bottom: 40px;
}
.stat-item {
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 200px; /* Set a fixed width for consistency */
}

.stat-item img {
  margin-bottom: 20px; /* Add some space below the image */
}

.stat-text h3 {
  margin-bottom: 10px;
  font-size: 24px;
  color: #333;
}

.stat-text p {
  font-size: 16px;
  color: #666;
  padding: 0 10px;
}

.main-preview-container{
    padding-top: 40px;
    display: flex;
}
.image-preview-container {
  position: relative;
  cursor: pointer;
  text-align: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease;
  padding-right: 20px;
}

.image-preview-container:hover {
  transform: scale(1.05); /* Slight zoom effect on hover */
}
.preview-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.image-title {
  margin-top: 20px;
  font-size: 24px;
  color: #333;
  font-family: 'Arial', sans-serif;
}

</style>