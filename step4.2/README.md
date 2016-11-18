# Step 4.2

## Description
Add Routing to Talk details if we click on talk title.

## How-to
- Add react.router: `npm i react-router --save`
- Add `TalkDetail`
```
- Introduce `App.jsx` to be used as entry point (instead of direct `TalkList`). We add
the list as /, the TalkDetail and the 404 components.
This sis only to setup routing. When doing SSR we skip this
``` javascript
// [TODO]
```
- Change index.js accordingly to use `App.jsx`
``` javascript
// (TODO)
```
- Change `Talk.jsx` with the link of the detail (note the `Link` expression):
``` javascript
// (TODO)
```

## Notes
