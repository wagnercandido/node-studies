import { StatusEnum } from '@enum/StatusEnum';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {

	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	username: string;

	@Column()
	password: string;

	@Column()
	profile: string;

	@Column({ type: 'char', default: StatusEnum.INACTIVE })
	status: string;

	@Column({ default: false })
	acceptTerms: boolean;

	@CreateDateColumn({ name: 'created_at' })
	createdAt: Date;

	@UpdateDateColumn({ name: 'updated_at' })
	updatedAt: Date;

}