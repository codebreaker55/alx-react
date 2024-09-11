import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
	const objectValue = fromJS(object);

	return objectValue.getIn(array, undefined);
}
