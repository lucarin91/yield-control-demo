/**
 * LIBRARY CODE
 **/

function yieldControl(fun, after) {
  after = after || function(){};
  let gen = fun();
  (function execute_rec() {
    if (!gen.next().done) {
      setTimeout(() => {
        execute_rec();
      }, 0);
    } else {
      after();
    }
  })();
}

export default yieldControl;
