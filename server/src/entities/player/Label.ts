import { Field, ObjectType } from "type-graphql";
import { LabelIconUrls } from "./LabelIconUrls";

@ObjectType()
export class Label {
  @Field()
  id!: number;

  @Field()
  name!: string;

  @Field(() => LabelIconUrls)
  iconUrls!: LabelIconUrls;
}
