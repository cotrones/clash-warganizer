import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class LeagueMemeber {
  @Field()
  tag!: string;

  @Field()
  name!: string;

  @Field()
  townHallLevel!: number;
}
