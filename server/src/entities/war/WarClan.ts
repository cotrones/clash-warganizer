import { Field, ObjectType } from "type-graphql";
import { BadgeUrls } from "../common/BadgeUrls";
import { WarMember } from "./WarMember";

@ObjectType()
export class WarClan {
  @Field()
  tag!: string;

  @Field()
  name!: string;

  @Field(() => BadgeUrls)
  badgeUrls!: BadgeUrls;

  @Field()
  clanLevel!: number;

  @Field()
  attacks!: number;

  @Field()
  destructionPercentage!: number;

  @Field(() => [WarMember])
  members!: WarMember[];

  @Field({ nullable: true })
  expEarned?: number;
}
