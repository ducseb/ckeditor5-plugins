/**
 * @module quick-style/command
 */
import Command from '@ckeditor/ckeditor5-core/src/command';

export default class QuickStyleCommand extends Command {
	// /**
	//  * @inheritDoc
	//  */
	// refresh() {
	// 	this.isEnabled = true;
	// }

	/**
	 * @inheritDoc
	 *
	 * @param {object} [options]
	 * @param {boolean} [options.removeFormat] Whether or not to format text
	 * @param {boolean} [options.indentFirst] Whether to indent the first line
	 * @param {boolean} [options.convertFullHalf] Whether to execute the half to full command
	 * @param {boolean} [options.clearEmpty] Whether to execute the clear space command
	 * @param {boolean} [options.clearSpace] Whether to execute the clear empty line command
	 * @param {boolean} [options.softBreakToEnter] Whether to execute the soft break to enter command
	 */
	execute(options = {}) {
		const editor = this.editor;

		const params = { convertFullHalf: { type: 'half' } };
		const sorted = ['removeFormat', 'convertFullHalf', 'softBreakToEnter', 'clearEmpty', 'clearSpace', 'indentFirst'];
		const needReset = ['removeFormat', 'convertFullHalf', 'clearSpace', 'indentFirst'];

		sorted
			.filter((op) => Object.keys(options).includes(op))
			.forEach((option) => {
				if (!options[option]) {
					return;
				}

				if (needReset.includes(option)) {
					editor.execute('selectAll');
				}
				editor.execute(option, params[option] || null);
			});
	}
}
