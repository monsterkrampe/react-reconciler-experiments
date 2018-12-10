import React from 'react';
import yueRenderer from './yueRenderer';
import App from './App';
import gui from 'gui';

const win = gui.Window.create({});
win.setContentSize({ width: 400, height: 400 });
win.center();
win.activate();
yueRenderer.render(<App />, win);
if (!(process.versions as { [key: string]: any}).yode) {
  gui.MessageLoop.run();
  process.exit(0);
}
