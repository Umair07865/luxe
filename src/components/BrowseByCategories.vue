<template>
  <div id="flashSales">
    <div class="flash-sales-day">
      <h5>Categories</h5>
    </div>
    <div class="flash-sales-header">
      <div class="flash-sales-duration">
        <h1>Browse By Category</h1>
      </div>
      <div class="pagination-icons">
        <button class="mr-5 btn-category">View All</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "BrowseByCategories",
};
</script>
<style scoped>
#flashSales {
  /* border: 1px solid black; */
  padding: 2rem 5rem;
}
.flash-sales-day {
  position: relative;
}
.btn-category {
  color: white;
  border: none;
  padding: 0.5rem 2rem;
  background-color: #f44336;
  border-radius: 3px;
  margin: auto;
}
h5 {
  color: f44336;
  margin-left: 2rem;
  color: #f44336;
}
h5::after {
  content: "";
  height: 2rem;
  z-index: 3;
  position: absolute;
  left: 0;
  width: 1rem;
  background-color: #f44336;
  border-radius: 5px;
  top: calc(50% - 16px);
}
.flash-sales-header {
  /* border: 1px solid black; */
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.flash-sales-duration {
  /* border: 1px solid black; */
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.pagination-icons {
  margin-right: 2rem;
}

@media (max-width: 1024px) {
  #flashSales {
    padding: 2rem 3rem;
  }
}
@media (max-width: 768px) {
  .flash-sales-header {
    flex-direction: column;
    gap: 2rem;
  }
  .flash-sales-duration {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
  .pagination-icons {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }
  #flashSales {
    padding: 2rem;
  }
}
@media (max-width: 425px) {
  #flashSales {
    padding: 2rem 1rem;
  }
}
</style>
