# Step 1

## Description
Project Setup. Run server and basic structure.
It's a very simple step, mostly used to check that all is OK.

## How-to

- Simply clone, check `package,json` and install
- To build all from scratch:
  - `npm i http-server --save-dev`
  - Add `"start": "http-server . -p 4000"` to npm scripts
  - Add any index.html, e.g.:

``` html
  <html>
    <head>
      <title>Universal React Workshop</title>
    </head>
    <body>
        <h1>Hello Workshop!</h1>
        <div id="content"></div>
    </body>
</html>
```

## Usage

- Setup: `npm i`
- Start: `npm start`

Open the browser on http://127.0.0.1:4000/
