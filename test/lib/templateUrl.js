// DO NOT MODIFY THIS CODE

// Stub version of dynamic loader for use in tests.
window.templateURL = (src) => {
  return (data, ...args) => {
    let html = `<h1>test template for: ${src}</h1>`;

    if (data) {
      html += '<ul>';
      for (const key in data) {
        html += `<li>${key}: <%= JSON.stringify(${key}) %></li>`;
      }
      html += '</ul>';
    }

    const template = _.template(html);
    return template.apply(this, [data, ...args]);
  };
};

window.backboneReady = (callback) => {
  $(document).ready(callback);
};

window.expect = chai.expect;
