import options from '../../src/core/options';
import {
	cloneVNode,
	createVNode
} from '../../src/core/VNodes';
import linkEvent from '../../src/DOM/events/linkEvent';
import {
	createRenderer,
	findDOMNode,
	render
} from '../../src/DOM/rendering';
import {
	EMPTY_OBJ,
	NO_OP
} from '../../src/shared';

export {
	createVNode,
	cloneVNode,
	render,
	createRenderer,
	EMPTY_OBJ,
	NO_OP,
	linkEvent,
	options,
	findDOMNode
};

export default {
	createVNode,
	cloneVNode,
	render,
	createRenderer,
	EMPTY_OBJ,
	NO_OP,
	linkEvent,
	options,
	findDOMNode
};
