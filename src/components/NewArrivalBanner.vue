<template>
  <div id="NewArrivalSection">
    <div class="inner-wrapper">
      <table cellspacing="50">
        <tr>
          <td rowspan="2" class="poster1">
            <div class="poster1-inner-content">
              <div class="content-details">
                <h1>Northern Shilajit Source: Pure and Potent</h1>
                <p>
                  Discover the purity and potency of our Shilajit, sourced from
                  the pristine northern areas of Pakistan.
                </p>
                <router-link to="#">Shop Now</router-link>
              </div>
            </div>
          </td>
          <td colspan="2">
            <div class="poster2-inner-content"></div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="poster3-inner-content"></div>
          </td>
          <td>
            <div class="poster4-inner-content"></div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "NewArrivalSection",
};
</script>
<style scoped>
#NewArrivalSection {
  /* border: 1px solid black; */
  padding: 0 2rem;
}

#NewArrivalSection table {
  /* border: 1px solid black; */
  height: 600px;
  width: 100%;
}

#NewArrivalSection table tr td {
  /* border: 1px solid crimson; */
  gap: 1rem;
}
#NewArrivalSection table tr .poster1 {
  width: 50%;
}
#NewArrivalSection table tr .poster1-inner-content {
  background-image: url("https://i.ytimg.com/vi/zgNgUzwR_wY/maxresdefault.jpg");
  height: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
}
#NewArrivalSection table tr .poster2-inner-content {
  background-image: url("https://m.media-amazon.com/images/S/aplus-media-library-service-media/4cf2b1ff-dc89-426b-965c-b3d6991e312c.__CR0,0,970,300_PT0_SX970_V1___.jpg");
  height: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
}
#NewArrivalSection table tr .poster3-inner-content {
  background-image: url("https://www.purehimalayanshilajit.com/wp-content/uploads/2017/09/mix-2.jpg");
  height: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
}
#NewArrivalSection table tr .poster4-inner-content {
  background-image: url("https://img.freepik.com/premium-photo/flatlay-bamboo-activated-charcoal-charcoal-powder_773922-56435.jpg?uid=R106632644&ga=GA1.1.1818742476.1663832639&semt=ais_hybrid");
  height: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
}
#NewArrivalSection table tr .content-details {
  position: absolute;
  bottom: 0;
  border: 1px solid black;
  /* width: 70%; */
  /* height: 50%; */
  padding: 2rem;
  color: white;
  background-color: black;
  opacity: 60%;
}
</style>
