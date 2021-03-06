import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class LeagueIconUrls {
  @Field()
  small!: string;

  @Field()
  tiny!: string;

  @Field({ nullable: true })
  medium?: string;
}
