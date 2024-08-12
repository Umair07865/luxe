<template>
  <div id="ourTeam">
    <div class="inner-wrapper" ref="radiocontainer">
      <div class="d-flex cards-wrapper">
        <v-card
          :disabled="false"
          :loading="emp.loading"
          class="mx-auto my-12"
          width="374"
          color="red"
          v-for="(emp, index) in employees"
          :key="index"
          style="background-color: white !important"
        >
          <template v-slot:loader="{ isActive }">
            <v-progress-linear
              :active="isActive"
              height="4"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img height="350" :src="emp.image" cover></v-img>

          <v-card-title>{{ emp.name }}</v-card-title>
          <v-card-subtitle>
            <span class="me-1">{{ emp.occupation }}</span>
            <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
          </v-card-subtitle>

          <div class="px-4 mb-2">
            <v-chip-group
              v-model="selection"
              selected-class="bg-deep-purple-lighten-2"
            >
              <v-icon>mdi-twitter</v-icon>
              <v-icon>mdi-instagram</v-icon>
              <v-icon>mdi-linkedin</v-icon>
            </v-chip-group>
          </div>

          <v-card-actions>
            <btn class="btn-reserve" border block @click="showDetails(index)">
              Reserve
            </btn>
          </v-card-actions>
        </v-card>
      </div>
    </div>
    <v-radio-group row>
      <v-radio
        color="#f44336"
        value="red0"
        @click="radioBtnController(0)"
      ></v-radio>
      <v-radio
        color="#f44336"
        value="red1"
        @click="radioBtnController(3)"
      ></v-radio>
      <v-radio
        color="#f44336"
        value="red2"
        @click="radioBtnController(2)"
      ></v-radio>
      <v-radio
        color="#f44336"
        value="red3"
        @click="radioBtnController(1.5)"
      ></v-radio>
      <v-radio
        color="#f44336"
        value="red4"
        @click="radioBtnController(1)"
      ></v-radio>
    </v-radio-group>
  </div>
</template>
<script>
export default {
  name: "myTeam",
  data: () => ({
    loading: false,
    selection: 1,
    employees: [
      {
        name: "Anaa Luis",
        occupation: "Founder & Chairman",
        loading: "false",
        image:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      },
      {
        name: "Julia fonsi",
        occupation: "Founder & Chairman",
        loading: "false",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      },
      {
        name: "Mr Bilal",
        occupation: "Founder & Chairman",
        loading: "false",
        image:
          "https://media.istockphoto.com/id/1501770003/photo/happy-handsome-young-indian-man-head-shot-front-portrait.webp?b=1&s=170667a&w=0&k=20&c=fRuUWp4CiG8r88tQp5_bmRJV2ultJVj08QlcGBXOyHg=",
      },
      {
        name: "Tom Anderson",
        occupation: "Founder & Chairman",
        loading: "false",
        image:
          "https://media.istockphoto.com/id/1406197730/photo/portrait-of-a-young-handsome-indian-man.webp?b=1&s=170667a&w=0&k=20&c=KtmKHyOE6MJV0w2DiGX8P4399KHNbZ3p8lCjTEabGcY=",
      },
      {
        name: "Liah Alba",
        occupation: "Founder & Chairman",
        loading: "false",
        image:
          "https://media.istockphoto.com/id/1488358643/photo/happy-business-portrait-of-black-woman-planning-company-project-goals-and-startup-management.webp?b=1&s=170667a&w=0&k=20&c=0geUzXKLXRAdrtFJzmKJCnKlm0-dSE3BYL0H6ws9rLg=",
      },
      {
        name: "Sara Ahmad",
        occupation: "Founder & Chairman",
        loading: "false",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        name: "Olidimeji Odunsi",
        occupation: "Founder & Chairman",
        loading: "false",
        image:
          "https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        name: "Crimson Doan",
        occupation: "Founder & Chairman",
        loading: "false",
        image:
          "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        name: "Fotu Sushi",
        occupation: "Founder & Chairman",
        loading: "false",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      },
      {
        name: "Tom Jhonson",
        occupation: "Black hat ethical hacker",
        loading: "false",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      },
    ],
  }),

  methods: {
    showDetails(index) {
      // Set loading to true for the specific employee
      this.employees[index].loading = true;

      // Simulate an async operation
      setTimeout(() => {
        // Set loading to false after operation is done
        this.employees[index].loading = false;
      }, 2000);
    },
    radioBtnController(newPosition) {
      const container = this.$refs.radiocontainer;
      if (!container) {
        console.error("Scroll container reference is undefined");
        return;
      }
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft === maxScroll) {
        console.log("Reached end of scroll");
      } else if (container.scrollLeft < 0) {
        console.log("Reached in start");
      }
      container.scrollLeft = maxScroll / newPosition;
    },
  },
};
</script>
<style>
#ourTeam {
  padding: 2rem 5rem;
  height: fit-content;
}
#ourTeam .inner-wrapper {
  display: flex;
  overflow: scroll;
  height: 100%;
  scroll-behavior: smooth;
}
#ourTeam .inner-wrapper .cards-wrapper {
  gap: 1rem;
}
.v-input--radio-group__input {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row !important;
}
.radio-btns-employes {
  width: fit-content;
}
.btn-reserve {
  background-color: #f44336;
  color: white;
  width: 100%;
  padding: 0.5rem;
  border-radius: 5px;
  text-align: center;
  transition: ease 1s;
  cursor: pointer;
}
.btn-reserve:hover {
  background-color: white;
  color: #f44336;
}
@media (max-width: 1024px) {
  #ourTeam {
    padding: 2rem;
  }
}
@media (max-width: 425px) {
  #ourTeam {
    padding: 1rem;
  }
}
</style>
