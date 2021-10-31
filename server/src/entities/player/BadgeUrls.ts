import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class BadgeUrls {
  @Field()
  small!: string;

  @Field()
  large!: string;

  @Field()
  medium!: string;
}
