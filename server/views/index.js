module.exports = function renderFullPage(initialState) {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <title>New Name</title>
      <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1">

      <link rel="stylesheet" href="./styles/styles.css" charset="utf-8">
      <link rel="stylesheet" href="./styles/simple-grid.css" charset="utf-8">

      <link href='https://fonts.googleapis.com/css?family=Inconsolata:400,700' rel='stylesheet' type='text/css'>
    </head>
    <body>
      <div id="app"></div>
      <script>
        window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
      </script>
      <script src="./dist/bundle.js" async></script>
    </body>
  </html>
  `
};
