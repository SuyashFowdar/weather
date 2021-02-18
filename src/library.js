function appendElement(type, parent, content, attr, cb) {
  const node = document.createElement(type);
  if (attr) {
    for (let i = 0; i < attr.length; i += 1) {
      node.setAttribute(attr[i][0], attr[i][1]);
    }
  }
  if (content) node.appendChild(document.createTextNode(content));
  document.getElementById(parent).appendChild(node);
  if (cb) {
    cb(node);
  }
}

export default appendElement;
