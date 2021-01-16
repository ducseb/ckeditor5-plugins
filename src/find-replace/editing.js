/**
 * @module find-replace/editing
 */
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import { ATTRIBUTE } from './index';
import FindReplaceCommand from './command';

export default class FindReplaceEditing extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'FindReplaceEditing';
	}

	/**
	 * @inheritDoc
	 */
	init() {
		const editor = this.editor;
		editor.commands.add(ATTRIBUTE, new FindReplaceCommand(editor));
	}
}
