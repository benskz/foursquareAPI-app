# foursquareAPI-app
Testing Foursquare API

---

To get it up and running clone repo and run:
```
npm install
npm run client
```
---

For this test I started by setting up all the dependencies and configurating the tools like webpack, autoprefixer and eslint.

### Webpack
I setup webpack in order to work with **Babel** to be able to use **ES6**, bundle all the js, compile **scss** and along with **vue-loader** provide a neat format to work with **Vue.js**.

### Vue
I went with vue as my framework of choice to make use of it's components and data-binding aspects while referring to it's great documentation. Vue is also awesomely performant and small.

### Scss
For this project I used scss mainly for it's import and nested syntax.

### Interacting with Foursquare's API
After all that was setup I created 2 components for the Search and listing of the venues making use of Vue's data-binding.
In order to interact with Foursquare's API I created a small class to contain the Foursquare app details, generate the urls, and serve as an interface to the endpoints.
For the requests themselves I used [request](https://github.com/request/request) for simple HTTP calls.
