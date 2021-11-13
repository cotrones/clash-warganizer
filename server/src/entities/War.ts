import { Field, ObjectType } from "type-graphql";
import { WarClan } from "./war/WarClan";

@ObjectType()
export class War {
  @Field()
  state!: string;

  @Field()
  teamSize!: number;

  @Field()
  preparationStartTime!: string;

  @Field()
  startTime!: string;

  @Field()
  endTime!: string;

  @Field(() => WarClan)
  clan!: WarClan;

  @Field(() => WarClan)
  opponent!: WarClan;
}
