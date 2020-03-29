window.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const titleNodes = [];

  function recursion(elem) {
    elem.childNodes.forEach(node => {

      if (node.nodeName.match(/^H\d/)) {
        const nodeObj = {
          name: node.nodeName,
          content: node.textContent.trim()
        };
        titleNodes.push(nodeObj);
      } else {
        recursion(node);
      }

    })
  }

  recursion(body);

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(titleNodes)
  })
    .then(response => response.json())
    .then(json => console.log(json));

});