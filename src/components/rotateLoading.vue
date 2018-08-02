<template>
    <div class="rotateLoading-inner">
        <div class='load-container load6'><div class='loader'>Loading...</div></div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>



/* inner */
.rotateLoading-inner {
  width: 100%;
  height: 100%;
  position: fixed;
  top:0;
  left: 0;
  z-index: 2100;
}
.load-container {
  width: 60px;
  height: 60px;
  float: left;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.load-container a:link,
.load-container a:visited {
  position: absolute;
  bottom: 3px;
  font-size: 1.15em;
  text-align: center;
  left: 0;
  right: 0;
  text-decoration: none;
  color: #FFE631;
}
.load-container a:link:hover,
.load-container a:visited:hover {
  text-decoration: underline;
}
.loader {
  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -o-transform: translateZ(0);
  transform: translateZ(0);
}

.load6 .loader {
  font-size: 20px;
  text-indent: -9999em;
  overflow: hidden;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  margin: 0.8em auto;
  position: relative;
  -webkit-animation: load6 1.7s infinite ease;
  animation: load6 1.7s infinite ease;
}
@-webkit-keyframes load6 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    box-shadow: -0.11em -0.83em 0 -0.4em #FFE631, -0.11em -0.83em 0 -0.42em #FFE631, -0.11em -0.83em 0 -0.44em #FFE631, -0.11em -0.83em 0 -0.46em #FFE631, -0.11em -0.83em 0 -0.477em #FFE631;
  }
  5%,
  95% {
    box-shadow: -0.11em -0.83em 0 -0.4em #FFE631, -0.11em -0.83em 0 -0.42em #FFE631, -0.11em -0.83em 0 -0.44em #FFE631, -0.11em -0.83em 0 -0.46em #FFE631, -0.11em -0.83em 0 -0.477em #FFE631;
  }
  30% {
    box-shadow: -0.11em -0.83em 0 -0.4em #FFE631, -0.51em -0.66em 0 -0.42em #FFE631, -0.75em -0.36em 0 -0.44em #FFE631, -0.83em -0.03em 0 -0.46em #FFE631, -0.81em 0.21em 0 -0.477em #FFE631;
  }
  55% {
    box-shadow: -0.11em -0.83em 0 -0.4em #FFE631, -0.29em -0.78em 0 -0.42em #FFE631, -0.43em -0.72em 0 -0.44em #FFE631, -0.52em -0.65em 0 -0.46em #FFE631, -0.57em -0.61em 0 -0.477em #FFE631;
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
    box-shadow: -0.11em -0.83em 0 -0.4em #FFE631, -0.11em -0.83em 0 -0.42em #FFE631, -0.11em -0.83em 0 -0.44em #FFE631, -0.11em -0.83em 0 -0.46em #FFE631, -0.11em -0.83em 0 -0.477em #FFE631;
  }
}
@keyframes load6 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    box-shadow: -0.11em -0.83em 0 -0.4em #FFE631, -0.11em -0.83em 0 -0.42em #FFE631, -0.11em -0.83em 0 -0.44em #FFE631, -0.11em -0.83em 0 -0.46em #FFE631, -0.11em -0.83em 0 -0.477em #FFE631;
  }
  5%,
  95% {
    box-shadow: -0.11em -0.83em 0 -0.4em #FFE631, -0.11em -0.83em 0 -0.42em #FFE631, -0.11em -0.83em 0 -0.44em #FFE631, -0.11em -0.83em 0 -0.46em #FFE631, -0.11em -0.83em 0 -0.477em #FFE631;
  }
  30% {
    box-shadow: -0.11em -0.83em 0 -0.4em #FFE631, -0.51em -0.66em 0 -0.42em #FFE631, -0.75em -0.36em 0 -0.44em #FFE631, -0.83em -0.03em 0 -0.46em #FFE631, -0.81em 0.21em 0 -0.477em #FFE631;
  }
  55% {
    box-shadow: -0.11em -0.83em 0 -0.4em #FFE631, -0.29em -0.78em 0 -0.42em #FFE631, -0.43em -0.72em 0 -0.44em #FFE631, -0.52em -0.65em 0 -0.46em #FFE631, -0.57em -0.61em 0 -0.477em #FFE631;
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
    box-shadow: -0.11em -0.83em 0 -0.4em #FFE631, -0.11em -0.83em 0 -0.42em #FFE631, -0.11em -0.83em 0 -0.44em #FFE631, -0.11em -0.83em 0 -0.46em #FFE631, -0.11em -0.83em 0 -0.477em #FFE631;
  }
}

</style>
