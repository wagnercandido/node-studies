import { User } from '@models/User';

test('firs test', () => {
	const user = new User();
	user.unername = 'name test';

	expect(user.unername).toEqual('name test');
});