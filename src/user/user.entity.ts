import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum JalurMasukRole {
    SBMPTN = 'SBMPTN',
    SNMPTN = 'SNMPTN',
    PENMABA = 'PENMABA',
}

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 10 })
    nim: string;

    @Column({ length: 50 })
    nama: string;

    @Column()
    password: string;

    @Column('int')
    prodi: number;

    @Column({
        type: 'enum',
        enum: JalurMasukRole,
        default: JalurMasukRole.SNMPTN,
    })
    jalur: JalurMasukRole;

    @Column('date')
    tglMasuk: Date;

    @Column('int')
    angkatan: number;

    @Column()
    tempatLahir: string;

    @Column()
    agama: string;

    @Column()
    email: string;

    @Column('date')
    tglLahir: Date;

    @Column()
    telepon: string;

    @Column()
    isActive: boolean;
}
