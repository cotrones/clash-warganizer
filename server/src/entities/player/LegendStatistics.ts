import { Field, ObjectType } from "type-graphql";
import { Season } from "./Season";

@ObjectType()
export class LegendStatistics {
  @Field()
  legendTrophies!: number;

  @Field(() => Season, { nullable: true })
  previousSeason?: Season;

  @Field(() => Season, { nullable: true })
  bestSeason?: Season;

  @Field(() => Season, { nullable: true })
  bestVersusSeason?: Season;

  @Field(() => Season, { nullable: true })
  currentSeason?: Season;
}
