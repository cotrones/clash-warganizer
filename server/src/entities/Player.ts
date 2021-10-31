import { Field, ObjectType } from "type-graphql";
import { Label } from "./common/Label";
import { Achievement } from "./player/Achievement";
import { PlayerClan } from "./player/PlayerClan";
import { Troop } from "./player/Troop";
import { League } from "./player/League";
import { LegendStatistics } from "./player/LegendStatistics";

@ObjectType()
export class Player {
  @Field()
  tag!: string;

  @Field()
  name!: string;

  @Field()
  townHallLevel!: number;

  @Field({ nullable: true })
  townHallWeaponLevel?: number;

  @Field()
  expLevel!: number;

  @Field()
  trophies!: number;

  @Field()
  bestTrophies!: number;

  @Field()
  warStars!: number;

  @Field()
  attackWins!: number;

  @Field()
  defenseWins!: number;

  @Field({ nullable: true })
  builderHallLevel?: number;

  @Field()
  versusTrophies!: number;

  @Field()
  bestVersusTrophies!: number;

  @Field()
  versusBattleWins!: number;

  @Field({ nullable: true })
  role?: string;

  @Field({ nullable: true })
  warPreference?: string;

  @Field()
  donations!: number;

  @Field()
  donationsReceived!: number;

  @Field(() => PlayerClan, { nullable: true })
  clan?: PlayerClan;

  @Field(() => League, { nullable: true })
  league?: League;

  @Field(() => LegendStatistics, { nullable: true })
  legendStatistics?: LegendStatistics;

  @Field(() => [Achievement])
  achievements!: Achievement[];

  @Field()
  versusBattleWinCount!: number;

  @Field(() => [Label], { nullable: true })
  labels?: Label[];

  @Field(() => [Troop])
  troops!: Troop[];

  @Field(() => [Troop], { nullable: true })
  heroes?: Troop[];

  @Field(() => [Troop], { nullable: true })
  spells?: Troop[];
}
