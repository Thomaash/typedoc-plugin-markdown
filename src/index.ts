import { Application } from 'typedoc/dist/lib/application';
import { ParameterType } from 'typedoc/dist/lib/utils/options/declaration';

import { MarkdownPlugin } from './plugin';
import MarkdownTheme from './theme';

export = (PluginHost: Application) => {
  const app = PluginHost.owner;
  if (app.converter.hasComponent('markdown')) {
    return;
  }

  app.options.addDeclaration({
    component: 'markdown',
    help: 'Markdown Plugin: Deprecated in favour of theme.',
    name: 'platform',
    type: ParameterType.String,
  });

  app.options.addDeclaration({
    component: 'markdown',
    help: 'Markdown Plugin: Deprecated.',
    name: 'hideProjectTitle',
    type: ParameterType.Boolean,
  });

  app.options.addDeclaration({
    component: 'markdown',
    help: 'Markdown Plugin: Do not print source file link rendering.',
    name: 'hideSources',
    type: ParameterType.Boolean,
  });

  app.options.addDeclaration({
    component: 'markdown',
    help: 'Markdown Plugin: Do not print breadcrumbs.',
    name: 'hideBreadcrumbs',
    type: ParameterType.Boolean,
  });

  app.options.addDeclaration({
    component: 'markdown',
    help: 'Markdown Plugin: Do not print indexes.',
    name: 'hideIndexes',
    type: ParameterType.Boolean,
  });

  app.options.addDeclaration({
    component: 'markdown',
    help:
      'Markdown Plugin: Use HTML named anchors as fragment identifiers for engines that do not automatically assign header ids.',
    name: 'namedAnchors',
    type: ParameterType.Boolean,
  });

  app.options.addDeclaration({
    component: 'markdown',
    help:
      'Markdown Plugin: Use long navigation title instead of default short one (applicable to navigation / front-matter only).',
    name: 'longTitle',
    type: ParameterType.Boolean,
  });

  app.options.addDeclaration({
    component: 'markdown',
    help:
      'Markdown Plugin: ' +
      'A comma separated list of objects which should be placed in files of their own. ' +
      `Possible values are: ${MarkdownTheme.MAPPINGS.map(({ directory }): string => directory).join(',')}. ` +
      'Also special values NONE for a single file and ALL for separate file for each can be used.',
    name: 'separateFilesFor',
    type: ParameterType.Array,
  });

  app.converter.addComponent('markdown', new MarkdownPlugin(app.converter));
};
