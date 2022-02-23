import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'


@Entity()
export class User {

  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  accountNumber: number
  
  @Column()
  accountDigit: number

  @Column()
  email: string

  @Column()
  firstName: string
  
  @Column()
  lastName: string

  @Column()
  password: string
  
  @Column()
  wallet: number
  
}