<template>
  <div class>
    <title>Corona Information</title>
    <nav class="navbar navbar-expand-lg navbar-light bg-info">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="navbar-brand" href="#">SKN</a>
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Corona
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Others</a>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>-->
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-primary btn-outline-info my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <!-- <hr/> -->
    <!-- <div class="container"> -->
      <img class="img-fluid" alt="Vue logo" src="./assets/corona.png" />
      <!-- <h2>Stay Safe, Stay Healthy</h2> -->
    <!-- </div> -->
    <hr>
    <CoronaInfo />
    <!-- <router-view><router-view> -->
  </div>
</template>

<script>
import CoronaInfo from "./components/CoronaInfo.vue";

export default {
  name: "App",
  components: {
    CoronaInfo
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
