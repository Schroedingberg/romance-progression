# Romance progression - your romantic workout tracker

This is a simple, hypertrophy oriented, workout tracker.

I have developed this because
  * I wanted to learn [clojure](https://clojure.org) and wanted to solve a problem that concerns me in my day to day life and that I understand well so I can focus on the clojure-part
  * I wanted to get rid of commercial, proprietary solutions I was using
  
## Features

  * Swappable progression algorithms - Don't like how I calculate your next workout? Roll your own! 
  * Minimal set up - easy to get started, flexible for more specialized requirements


## Roadmap

  * UI for adding/editing plan templates: Currently, a sample plan is in /resources, as an edn file. That is used directly to create a plan. You can easily edit that if you're running romance progression locally, but for less technical users we may want to add a UI for this
  * OAuth/OIDC integration with Oak 
  * More elaborate progression scheme 

## Design
The core logic is in the directory `/src/domain`.

The most interesting parts are:
* Interpretation of your logged data: When you log a set, a plain map is appended to a flat event log. Thats all there is to that right now.
  To put that in the context of a plan, that log is transformed via a few core library operations to match the structure of a plan.
  Then your current plan and your actual performance data are deep merged. This has the advantage you can easily deviate from the plan if you want to (for example, do more sets),
  you keep your performance data, so you can switch progression algorithms easily and also its just really simple
  (although coming up with how to do the transformation was not particularly easy for me - see [simple is not easy](insert link here)).
* Progression: This is where actual analysis of your training data happens. Currently, I have just a wild collection of progression algorithms lying around.
  Maybe thats already enough, since there is not only one true answer which one to choose. At some point I might add a UI to configure that, but for now I will just
  keep all of that in code.


In general I am trying to shoot for simple, easy to extend and maintain with regards to development, while providing a reasonably good UX.
This is why I am using biff, which conveniently did most of the heavy lifting  for me, so the core logic is only about ... lines of code.


# Development

Run `clj -M:dev dev` to get started. See `clj -M:dev --help` for other commands.
That will run a dev server on localhost:8080.

