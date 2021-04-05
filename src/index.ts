import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the @onepunchdan/jupyterlab-rosita-dark extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: '@onepunchdan/jupyterlab-rosita-dark',
  requires: [IThemeManager],
  autoStart: true,
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension @onepunchdan/jupyterlab-rosita-dark is activated!');
    const style = '@onepunchdan/jupyterlab-rosita-dark/index.css';

    manager.register({
      name: '@onepunchdan/jupyterlab-rosita-dark',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default extension;
