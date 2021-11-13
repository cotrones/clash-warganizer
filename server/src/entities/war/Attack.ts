import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Attack {
  @Field()
  order!: number;

  @Field()
  attackerTag!: string;

  @Field()
  defenderTag!: string;

  @Field()
  stars!: number;

  @Field()
  destructionPercentage!: number;

  @Field()
  duration!: number;
}
