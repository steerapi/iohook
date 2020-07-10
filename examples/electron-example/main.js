'use strict';

const {app} = require('electron');
const ioHook = require('iohook');

function eventHandler(event) {
  console.log(event);
}

app.on('ready', () => {
  ioHook.start(true);
  ioHook.on('mouseclick', eventHandler);
  ioHook.on('keyup', eventHandler);
  ioHook.on('mousewheel', eventHandler);
  ioHook.on('mousemove', eventHandler);
  console.log('Try move your mouse or press any key');

  const id = ioHook.registerShortcut([29, 56], (keys) => {
    console.log('Shortcut called with keys:', keys)
  });
  
});

app.on('before-quit', () => {
  ioHook.unload();
  ioHook.stop();
});
