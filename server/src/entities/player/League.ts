import { Field, ObjectType } from "type-graphql";
import { LeagueIconUrls } from "./LeagueIconUrls";

@ObjectType()
export class League {
  @Field()
  id!: number;

  @Field()
  name!: string;

  @Field(() => LeagueIconUrls)
  iconUrls!: LeagueIconUrls;
}
