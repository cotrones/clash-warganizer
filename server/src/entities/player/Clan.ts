import { Field, ObjectType } from "type-graphql";
import { BadgeUrls } from "./BadgeUrls";

@ObjectType()
export class Clan {
  @Field()
  tag!: string;

  @Field()
  name!: string;

  @Field()
  clanLevel!: number;

  @Field(() => BadgeUrls, { nullable: true })
  badgeUrls?: BadgeUrls;
}
