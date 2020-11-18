/**
 * @module clear-space/editing
 */
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ClearSpaceCommand from './command';
import { ATTRIBUTE } from './index';

export default class ClearSpaceEditing extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'ClearSpaceEditing';
	}

	/**
	 * @inheritDoc
	 */
	init() {
		const editor = this.editor;
		editor.commands.add(ATTRIBUTE, new ClearSpaceCommand(editor));
	}
}
