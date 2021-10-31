import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Troop {
  @Field()
  name!: string;

  @Field()
  level!: number;

  @Field()
  maxLevel!: number;

  @Field()
  village!: string;

  @Field({ nullable: true })
  superTroopIsActive?: boolean;
}
