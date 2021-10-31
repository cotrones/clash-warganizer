import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class ClanWarLeague {
  @Field()
  id!: number;

  @Field()
  name!: string;
}
