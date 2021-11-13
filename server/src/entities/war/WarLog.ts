import { Field, ObjectType } from "type-graphql";
import { War } from "../War";

@ObjectType()
export class WarLog {
  @Field(() => [War], { nullable: true })
  items?: War[];
}
