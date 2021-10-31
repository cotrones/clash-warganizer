import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Achievement {
  @Field()
  name!: string;

  @Field()
  stars!: number;

  @Field()
  value!: number;

  @Field()
  target!: number;

  @Field()
  info!: string;

  @Field({ nullable: true })
  completionInfo?: string;

  @Field()
  village!: string;
}
