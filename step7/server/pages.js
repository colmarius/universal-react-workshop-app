exports.index = (renderedApp, preloadedState) => {
    return (
      `<!DOCTYPE html>
      <html>
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
          <title>Universal React Workshop</title>
          <script>
            window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
          </script>
          <!-- Latest compiled and minified CSS -->
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
        </head>
        <body>
          <div class="jumbotron">
            <h1 class="text-center">Conference Talks! From Server!</h1>
            <div class="container" id="container"><div>${renderedApp}</div></div>
          </div>
          <script src="/static/bundle.js"></script>
        </body>
      </html>`
    )
}
