import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class LabelIconUrls {
  @Field()
  small!: string;

  @Field()
  medium!: string;
}
