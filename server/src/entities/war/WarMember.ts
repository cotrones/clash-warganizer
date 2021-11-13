import { Field, ObjectType } from "type-graphql";
import { Attack } from "./Attack";

@ObjectType()
export class WarMember {
  @Field()
  tag!: string;

  @Field()
  name!: string;

  @Field()
  mapPosition!: number;

  @Field()
  townhallLevel!: number;

  @Field()
  opponentAttacks!: number;

  @Field(() => Attack, { nullable: true })
  bestOpponentAttack?: Attack;

  @Field(() => [Attack], { nullable: true })
  attacks?: Attack[];
}
