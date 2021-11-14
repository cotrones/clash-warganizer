import { Field, ObjectType } from "type-graphql";
import { LeagueClan } from "./league/LeagueClan";
import { LeagueRound } from "./league/LeagueRound";

@ObjectType()
export class LeagueGroup {
  @Field()
  state!: string;

  @Field()
  season!: string;

  @Field(() => [LeagueClan])
  clans!: LeagueClan[];

  @Field(() => [LeagueRound])
  rounds!: LeagueRound[];
}
