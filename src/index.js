import Utility from "./utility.js"
import yieldControl from './yieldcontrol.js'

function sequentialMain() {
  Utility.write("Without YieldControl, start!")
  let start = Date.now()
  /**
   * A simulation of a CPU intensive work done in pure js.
   * The over all computation take 1 second.
   **/
  Utility.useCpuFor(100) // a computation of 100ms
  Utility.useCpuFor(50) // a computation of 50ms
  Utility.useCpuFor(50) // a computation of 50ms
  Utility.useCpuFor(100) // a computation of 100ms
  Utility.useCpuFor(40) // a computation of 40ms
  // A CPU intensive computation on an array
  let list = [20, 40, 20, 30, 50, 100, 30, 100, 100, 30, 40, 100]
  for (let i = 0; i < list.length; i++) {
    Utility.useCpuFor(list[i])
  }

  let end = Date.now()
  Utility.write(`Execution time: ${(end - start) / 1000} seconds.`)
}

function yieldMain() {
  Utility.write("With YieldControl, start!")
  let start = Date.now()

  let cpuIntensiveWork = function* () {
    /**
     * A simulation of a CPU intensive work done in pure js.
     * The over all computation take 1 second.
     **/
    Utility.useCpuFor(100) // a computation of 100ms
    yield;
    Utility.useCpuFor(50) // a computation of 50ms
    yield;
    Utility.useCpuFor(50) // a computation of 50ms
    yield;
    Utility.useCpuFor(100) // a computation of 100ms
    yield;
    Utility.useCpuFor(40) // a computation of 40ms
    yield;
    // A CPU intensive computation on an array
    let list = [20, 40, 20, 30, 50, 100, 30, 100, 100, 30, 40, 100]
    for (let i = 0; i < list.length; i++) {
      Utility.useCpuFor(list[i])
      yield;
    }
  };

  yieldControl(cpuIntensiveWork, () => {
    // function executed when the computation ends
    let end = Date.now()
    Utility.write(`Execution time: ${(end - start) / 1000} seconds.`)
  });
}

window.sequentialMain = sequentialMain;
window.yieldMain = yieldMain;
