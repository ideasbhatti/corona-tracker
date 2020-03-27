<template>
  <div>
    <div class="container">
      <!-- <img alt="Vue logo" src="assets/logo.png"> -->
      <h2>Here you will find information and current situation around the world about coronavirus infection</h2>
      <div class="row" v-for="(latest, index) in latestData" :key="index">
        <div class="col-sm-4">
          <div class="card">
            <div class="card-header bg-info">Latest Infected Information</div>
            <div class="card-body">
              <h5 class="card-title">Confirm : {{latest.confirmed}}</h5>
              <p class="card-text"></p>
              <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-header bg-success">Recovered</div>
            <div class="card-body">
              <h5 class="card-title">Recovered : {{latest.recovered}}</h5>
              <p class="card-text"></p>
              <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-header bg-danger">Death</div>
            <div class="card-body">
              <h5 class="card-title">Dead : {{latest.deaths}}</h5>
              <p class="card-text"></p>
              <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <br>
    <div class="table-responsive-sm position-sticky">
      <table class="table table-bordered table-striped">
        <thead>
          <tr>
            <th align="left" scope="col">#</th>
            <th scope="col">Country</th>
            <th scope="col">Tottal Cases</th>
            <th scope="col">Today Cases</th>
            <th scope="col">Death</th>
            <th scope="col">Today Death</th>
            <th scope="col">Recovered</th>
            <th scope="col">Active</th>
            <th scope="col">Critical</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(corona, index) in countries" :key="index">
            <th scope="row">{{index +1}}</th>
            <td align="left">{{corona.country}}</td>
            <td class="bg-info">{{corona.cases}}</td>
            <td class="bg-info">{{corona.todayCases}}</td>
            <td class="bg-danger">{{corona.deaths}}</td>
            <td class="bg-danger">{{corona.todayDeaths}}</td>
            <td class="bg-success">{{corona.recovered}}</td>
            <td class="bg-primary">{{corona.active}}</td>
            <td class="bg-warning">{{corona.critical}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoronaInfo",
  // props: {
  //   msg: String
  // }
  data() {
    return {
      latestData: [],
      countries: []
    };
  },
  mounted() {
    this.axios
      .get("https://corona.lmao.ninja/countries")
      .then(response => {
        this.countries = response.data;
        // console.log(response.data);
        // console.log(sumsArray[response.data.cases]);
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
    this.axios
      .get("https://coronavirus-tracker-api.herokuapp.com/v2/latest")
      .then(response => {
        this.latestData = response.data;
        console.log(response.data);
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
