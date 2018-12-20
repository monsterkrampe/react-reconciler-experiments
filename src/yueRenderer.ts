import ReactReconciler from 'react-reconciler';
import gui from 'gui';

const rootHostContext = {};
const childHostContext = {};

const hostConfig = {
  now: Date.now,
  getRootHostContext: () => {
    return rootHostContext;
  },
  prepareForCommit: () => { },
  resetAfterCommit: () => { },
  getChildHostContext: () => {
    return childHostContext;
  },
  shouldSetTextContent: (type, props) => {
    return false;
  },
  createInstance: (type, newProps, rootContainerInstance, _currentHostContext, workInProgress) => {
    const yueElement = gui.Container.create();
    Object.keys(newProps).forEach(propName => {
      const propValue = newProps[propName];
      if (propName === 'children') {
        if (type !== 'text') {
          if (typeof propValue === 'string' || typeof propValue === 'number') {
            throw new Error('Text strings must be rendered within a <Text> component.');
          }

          if (propValue instanceof Array) {
            propValue.forEach(item => {
              if (typeof item === 'string') {
                throw new Error('Text strings must be rendered within a <Text> component.');
              }
            });
          }
        }
      } else if (propName === 'onClick') {
        yueElement.onMouseDown.connect(propValue);
      } else if (propName === 'style') {
        yueElement.setStyle(propValue);
      }
    });
    return yueElement;
  },
  createTextInstance: (text, rootContainerInstance, hostContext, internalInstanceHandle) => {
    return gui.Label.create(text);
  },
  appendInitialChild: (parent, child) => {
    parent.addChildView(child);
  },
  appendChild(parent, child) {
    parent.addChildView(child);
  },
  finalizeInitialChildren: (yueElement, type, props) => { },
  supportsMutation: true,
  appendChildToContainer: (parent, child) => {
    parent.setContentView(child);
  },
  prepareUpdate(yueElement, oldProps, newProps) {
    return true;
  },
  commitUpdate(yueElement, updatePayload, type, oldProps, newProps) {
    Object.keys(newProps).forEach(propName => {
      const propValue = newProps[propName];
      if (propName === 'children') {
        if (type !== 'text') {
          if (typeof propValue === 'string' || typeof propValue === 'number') {
            throw new Error('Text strings must be rendered within a <Text> component.');
          }

          if (propValue instanceof Array) {
            propValue.forEach(item => {
              if (typeof item === 'string') {
                throw new Error('Text strings must be rendered within a <Text> component.');
              }
            });
          }
        }
      } else if (propName === 'onClick') {
        yueElement.onMouseDown.disconnectAll();
        yueElement.onMouseDown.connect(propValue);
      } else if (propName === 'style') {
        yueElement.setStyle(propValue);
      } else {
        const propValue = newProps[propName];
        yueElement.setAttribute(propName, propValue);
      }
    });
  },
  commitTextUpdate(textInstance, oldText, newText) {
    textInstance.setText(newText);
  },
  removeChild(parentInstance, child) {
    parentInstance.removeChildView(child);
  }
};
const ReactReconcilerInst = ReactReconciler(hostConfig);
export default {
  render: (reactElement, guiWindow, callback = () => {}) => {
    // Create a root Container if it doesnt exist
    if (!guiWindow._rootContainer) {
      guiWindow._rootContainer = ReactReconcilerInst.createContainer(guiWindow, false);
    }

    // update the root Container
    return ReactReconcilerInst.updateContainer(reactElement, guiWindow._rootContainer, null, callback);
  }
};
