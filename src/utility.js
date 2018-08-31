/**
 * UTILITY CODE
 **/

function write(str) {
  let _log = document.getElementById("log-div");
  _log.innerHTML += "<div>" + str + "</div>";
  _log.scrollTop = _log.scrollHeight;
}

function useCpuFor(ms) {
  let now = Date.now()
  let end = now + ms
  while (now < end) {
    Math.sin(now)
    now = Date.now()
  }
  console.log(`compute for ${ms} ms`)
}

export default {
  write,
  useCpuFor
};
