import { Field, ObjectType } from "type-graphql";
import { BadgeUrls } from "../common/BadgeUrls";
import { LeagueMemeber } from "./LeagueMember";

@ObjectType()
export class LeagueClan {
  @Field()
  tag!: string;

  @Field()
  name!: string;

  @Field()
  clanLevel!: number;

  @Field(() => BadgeUrls)
  badgeUrls!: BadgeUrls;

  @Field(() => [LeagueMemeber])
  members!: LeagueMemeber[];
}
