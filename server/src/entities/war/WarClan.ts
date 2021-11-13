import { Field, ObjectType } from "type-graphql";
import { BadgeUrls } from "../common/BadgeUrls";
import { WarMember } from "./WarMember";

@ObjectType()
export class WarClan {
  @Field({ nullable: true })
  tag?: string;

  @Field({ nullable: true })
  name?: string;

  @Field(() => BadgeUrls)
  badgeUrls!: BadgeUrls;

  @Field()
  clanLevel!: number;

  @Field({ nullable: true })
  attacks?: number;

  @Field()
  destructionPercentage!: number;

  @Field(() => [WarMember], { nullable: true })
  members?: WarMember[];

  @Field({ nullable: true })
  expEarned?: number;
}
