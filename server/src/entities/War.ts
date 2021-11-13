import { Field, ObjectType } from "type-graphql";
import { WarClan } from "./war/WarClan";

@ObjectType()
export class War {
  @Field({ nullable: true })
  state?: string;

  @Field({ nullable: true })
  result?: string;

  @Field()
  teamSize!: number;

  @Field({ nullable: true })
  attacksPerMember?: number;

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
