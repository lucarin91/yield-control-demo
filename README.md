Do not lock the Event loop!
===========================

This is a demo to show the importance of not locking the Javascript Event Loop. This usually happens when the developer run CPU intensive work without call browser API. The demo proposes a simple solution to this problem based on the use of generators and the proposed `yieldControl` function.

Go [here]() to see the actual demo!

More details about the Javascript Event Loop can be founded here:
- [Philip Roberts: What the heck is the event loop anyway? | JSConf EU](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
- [Concurrency model and Event Loop | Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)


License
-------
MIT license
