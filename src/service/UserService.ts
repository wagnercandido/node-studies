import { User } from '@entity/User';
import { UserRepository } from '@repository/UserRepository';
import { getCustomRepository, In } from 'typeorm';
import bcrypt from 'bcrypt';
import { StatusEnum } from '@enum/StatusEnum';

class UserService {

	async save(obj: User) {
		const repository = getCustomRepository(UserRepository);
		if (!obj.status) obj.status = StatusEnum.ACTIVE;
		obj.password = this.cryptPassword(obj.password);
		return await repository.save(obj);
	}

	async getAll() {
		const repository = getCustomRepository(UserRepository);
		return await repository.find();
	}

	async getById(id: number) {
		const repository = getCustomRepository(UserRepository);
		return await repository.findOne(id);
	}

	async update(id: number, obj: User) {
		if (!(await this.getById(id))) {
			return null;
		}

		const repository = getCustomRepository(UserRepository);
		const objUpdated = await repository.update(id, obj);

		if (objUpdated.affected === 1) {
			return this.getById(id);
		}
		return objUpdated;
	}

	async delete(id: number) {
		if (!id && !this.getById(id)) {
			return null;
		}

		const repository = getCustomRepository(UserRepository);
		return await repository.delete(id);
	}

	async deleteList(idList?: number[]) {
		const repository = getCustomRepository(UserRepository);
		const objList = await repository.find({ id: In(idList) });
		objList.forEach(obj => { repository.delete(obj.id) });
		return;
	}

	async updateStatus(id: number, status: string) {
		if (!(await this.getById(id))) {
			return null;
		}

		const repository = getCustomRepository(UserRepository);
		const obj = await repository.update(id, { status: status });

		if (obj.affected === 1) {
			return this.getById(id);
		}
		return obj;
	}

	private cryptPassword(password: string): string {
		return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
	}

}

export { UserService }