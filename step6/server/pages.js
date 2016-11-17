exports.index = renderedApp => {
    return (
      `<!DOCTYPE html>
      <html>
        <head>
          <title>Universal React Workshop</title>
        </head>
        <body>
          <div class="jumbotron">
            <h1 class="text-center">Conference Talks</h1>
            <div class="container" id="container">${renderedApp}</div>
          </div>
          <script src="/static/bundle.js"></script>
        </body>
      </html>`
    )
}
