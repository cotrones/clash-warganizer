import { Field, ObjectType } from "type-graphql";
import { BadgeUrls } from "./common/BadgeUrls";
import { Label } from "./common/Label";
import { ChatLanguage } from "./clan/ChatLanguage";
import { Location } from "./clan/Location";
import { Member } from "./clan/Member";
import { ClanWarLeague } from "./clan/ClanWarLeague";

@ObjectType()
export class Clan {
  @Field()
  tag!: string;

  @Field()
  name!: string;

  @Field()
  type!: string;

  @Field()
  description!: string;

  @Field(() => Location)
  location!: Location;

  @Field(() => BadgeUrls)
  badgeUrls!: BadgeUrls;

  @Field()
  clanLevel!: number;

  @Field()
  clanPoints!: number;

  @Field()
  clanVersusPoints!: number;

  @Field()
  requiredTrophies!: number;

  @Field()
  warFrequency!: string;

  @Field()
  warWinStreak!: number;

  @Field()
  warWins!: number;

  @Field({ nullable: true })
  warTies?: number;

  @Field({ nullable: true })
  warLosses?: number;

  @Field()
  isWarLogPublic!: boolean;

  @Field(() => ClanWarLeague)
  warLeague!: ClanWarLeague;

  @Field()
  members!: number;

  @Field(() => [Member])
  memberList!: Member[];

  @Field(() => [Label], { nullable: true })
  labels?: Label[];

  @Field(() => ChatLanguage, { nullable: true })
  chatLanguage?: ChatLanguage;

  @Field()
  requiredVersusTrophies!: number;

  @Field()
  requiredTownhallLevel!: number;
}
