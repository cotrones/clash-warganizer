import { Field, ObjectType } from "type-graphql";
import { BadgeUrls } from "../common/BadgeUrls";

@ObjectType()
export class PlayerClan {
  @Field()
  tag!: string;

  @Field()
  name!: string;

  @Field()
  clanLevel!: number;

  @Field(() => BadgeUrls, { nullable: true })
  badgeUrls?: BadgeUrls;
}
