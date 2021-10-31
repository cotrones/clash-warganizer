import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Location {
  @Field()
  id!: number;

  @Field()
  name!: string;

  @Field()
  isCountry!: boolean;

  @Field({ nullable: true })
  countryCode?: string;
}
