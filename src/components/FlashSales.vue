<template>
  <div id="flashSales">
    <div class="flash-sales-day">
      <h5>Today's</h5>
    </div>
    <div class="flash-sales-header">
      <div class="flash-sales-duration">
        <h1>Flash Sales</h1>
        <div class="flash-sales-timer">
          <table>
            <th>Days</th>
            <th></th>
            <th>Hours</th>
            <th></th>
            <th>Mins</th>
            <th></th>
            <th>Seconds</th>
            <tbody>
              <tr>
                <td>03</td>
                <span style="color: #f44336">:</span>
                <td>23</td>
                <span style="color: #f44336">:</span>

                <td>19</td>
                <span style="color: #f44336">:</span>

                <td>56</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="pagination-icons">
        <v-btn enabled icon class="mr-5">
          <font-awesome-icon
            :icon="['fas', 'arrow-left']"
            class="footer-input-icon-arrow-left"
            @click="antiScroll()"
          />
        </v-btn>
        <v-btn disabled icon v-show="btnDisabled" color="secondary">
          <font-awesome-icon
            :icon="['fas', 'arrow-right']"
            class="footer-input-icon-arrow-left"
            @click="positiveScroller()"
          />
        </v-btn>
        <v-btn enabled icon v-if="btnEnabled" color="primary">
          <font-awesome-icon
            :icon="['fas', 'arrow-right']"
            class="footer-input-icon-arrow-left"
            @click="positiveScroller()"
          />
        </v-btn>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FlashSales",
  data() {
    return {
      btnEnabled: "",
      btnDisabled: "",
    };
  },
  methods: {
    positiveScroller() {
      this.$store.dispatch("scrolling", 500);
    },
    antiScroll() {
      // this.$store.dispatch("antiScroll", 500);
      this.$store.commit("SET_ANTI_SCROLL_POSITION", 500);
    },
    scrollManaging() {
      this.btnDisabled = this.Disabled;
      this.btnEnabled = this.Enabled;
      console.log(this.Enabled, this.Disabled);
    },
  },
  mounted() {
    console.log(this.Enabled, this.Disabled);
    this.scrollManaging();
  },
  computed: {
    Enabled() {
      return this.$store.getters.ENABLE_BTN; // Assuming ENABLE_BTN getter returns boolean
    },
    Disabled() {
      return this.$store.getters.DISABLE_BTN; // Assuming DISABLE_BTN getter returns boolean
    },
  },
  watch: {
    Enabled() {
      this.scrollManaging();
    },
    Disabled() {
      this.scrollManaging();
    },
  },
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
.flash-sales-timer {
  width: 50%;
}
.flash-sales-duration table {
  width: 100%;
}
.flash-sales-duration table th,
tr,
td {
  text-align: center;
}
.flash-sales-timer table th {
  font-size: 12px;
}
.flash-sales-timer table td {
  font-weight: 600;
  font-size: 1.5rem;
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
