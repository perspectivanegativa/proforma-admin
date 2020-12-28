const pages = [
  {url: "./sidebar.html", selector: '#sideBar'},
  {url: "./toolBar.html", selector: "#toolBar"}
];
const loader = (page, cb) => {
  fetch(page.url)
    .then(response => {
      return response.text()
    })
    .then(data => {
      document.querySelector(page.selector).innerHTML = data;
      cb();
    });
}

let requests = pages.reduce((promiseChain, item) => {
  return promiseChain.then(() => new Promise((resolve) => {
    loader(item, resolve);
  }));
}, Promise.resolve());

requests.then(() => console.log('Imports loaded'));
