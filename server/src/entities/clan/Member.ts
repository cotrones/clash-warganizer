import { Field, ObjectType } from "type-graphql";
import { League } from "../player/League";

@ObjectType()
export class Member {
  @Field()
  tag!: string;

  @Field()
  name!: string;

  @Field()
  role!: string;

  @Field()
  expLevel!: number;

  @Field(() => League)
  league!: League;
}
