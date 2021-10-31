import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Season {
  @Field({ nullable: true })
  id?: string;

  @Field({ nullable: true })
  rank?: number;

  @Field({ nullable: true })
  trophies?: number;
}
