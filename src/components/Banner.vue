<template>
  <div id="sectionBanner">
    <div class="banner">
      <div class="inner-content">
        <h5>Categories</h5>
        <h1>Enhance Your Energy and Vitality with Shilajit</h1>
        <div class="offer-duration">
          <div class="timer">
            <span>23</span>
            <span>Hours</span>
          </div>
          <div class="timer">
            <span>05</span>
            <span>Days</span>
          </div>
          <div class="timer">
            <span>59</span>
            <span>Minutes</span>
          </div>
          <div class="timer">
            <span>35</span>
            <span>Seconds</span>
          </div>
        </div>
        <button>Buy Now!</button>
      </div>
      <div class="background-image"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "bannerSection",
};
</script>
<style scoped>
#sectionBanner {
  /* border: 1px solid black; */
  padding: 2rem 5rem;
}
#sectionBanner .banner {
  background-color: #080808fa;
  background-size: contain;
  /* background-position: 90%; */
  /* background-position: 70%; */
  height: 600px;
  width: 100%;
  position: relative;
  /* background: linear-gradient(
    to right,
    black,
    black,
    black,
    black,
    black,
    #e0e0e0,
    black 100%
  ); */
}
#sectionBanner .banner .background-image {
  background-image: url("../assets/bannerbg.png");
  height: 400px;
  width: 400px;
  background-size: 400px;
  background-position: center;
  position: absolute;
  right: 15%;
  top: 15%;
  background-position: center;
  /* box-shadow: 1px 1px 1px 1px white inset; */
}
#sectionBanner .banner .inner-content {
  color: white;
  /* border: 1px solid orange; */
  width: 40%;
  height: 100%;
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  gap: 2rem;
  padding: 5rem 2rem;
}
#sectionBanner .banner .inner-content h5 {
  color: rgb(117, 251, 122);
}
#sectionBanner .banner .inner-content button {
  background-color: rgb(117, 251, 122);
  padding: 1rem 3rem;
  width: fit-content;
  border-radius: 5px;
}
#sectionBanner .banner .offer-duration {
  /* border: 1px solid white; */
  /* padding: 1rem; */
  display: flex;
  gap: 1rem;
  /* width: 100%; */
}
#sectionBanner .banner .offer-duration .timer {
  /* border: 1px solid white; */
  border-radius: 50%;
  background-color: white;
  color: black;
  font-weight: bold;
  /* padding: 1rem; */
  height: 80px;
  width: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
@media (max-width: 1024px) {
  #sectionBanner {
    padding: 2rem;
  }
  #sectionBanner .banner .background-image {
    top: calc(100% - 400px);
    z-index: 2;
    right: 0;
  }
  #sectionBanner .banner .inner-content {
    width: 50%;
    z-index: 4;
  }
}
@media (max-width: 768px) {
  #sectionBanner .banner .background-image {
    bottom: 0;
  }
  #sectionBanner .banner .inner-content {
    width: 100%;
  }
}
@media (max-width: 425px) {
  /* #sectionBanner .banner .background-image {
    bottom: 0;
  }
  #sectionBanner .banner .inner-content {
    width: 100%;
  } */
  #sectionBanner .banner .offer-duration {
    display: grid;
    grid-template-columns: repeat(3, 33%);
    grid-template-rows: repeat(2, 5rem);
  }
  #sectionBanner {
    padding: 2rem 1rem;
  }
}
@media (max-width: 425px) {
  /* #sectionBanner .banner .background-image {
    bottom: 0;
  /* } */
  #sectionBanner .banner {
    height: 650px;
  }
  #sectionBanner .banner .background-image {
    height: 200px;
    width: 200px;
    background-size: cover;
  }
  #sectionBanner .banner .offer-duration {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: repeat(2, 5rem);
  }
}
</style>
