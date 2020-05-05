import { Entity, PrimaryGeneratedColumn, Column ,BaseEntity } from 'typeorm';

@Entity()
export class Project extends BaseEntity{

    @PrimaryGeneratedColumn()
    Id: number;

    @Column({
        type: 'varchar',
        length: 15,
        unique: true,
    })
    title:string;

    @Column({
        type: 'text',
        enum: ['image', 'video'],
        default: 'image'
    })
    inputType: string;

    @Column({type: 'varchar'})
    ipDirectory: string;

    @Column({type: 'varchar'})
    opDirectory: string;

    @Column({type: 'varchar'})
    Settings: string;

    @Column({type: 'datetime'})
    creationDate: string;
}
