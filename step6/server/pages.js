exports.index = (renderedApp, preloadedState) => {
    return (
      `<!DOCTYPE html>
      <html>
        <head>
          <title>Universal React Workshop</title>
          <script>
            window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
          </script>
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
