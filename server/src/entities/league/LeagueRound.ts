import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class LeagueRound {
  @Field(() => [String])
  warTags!: string[];
}
