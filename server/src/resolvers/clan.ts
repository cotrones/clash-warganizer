import { Arg, Query, Resolver } from "type-graphql";
import { Clan } from "../entities/Clan";
import { LeagueGroup } from "../entities/LeagueGroup";
import { War } from "../entities/War";
import { WarLog } from "../entities/war/WarLog";
import { fetchClashAPI } from "../utils/fetchClashAPI";

@Resolver(Clan)
export class ClanResolver {
  @Query(() => Clan)
  async clan(@Arg("clanTag", () => String) clanTag: string): Promise<Clan> {
    const response = await fetchClashAPI(`clans/%23${clanTag}`);
    return response.json();
  }

  @Query(() => War)
  async currentWar(
    @Arg("clanTag", () => String) clanTag: string
  ): Promise<War> {
    const response = await fetchClashAPI(`clans/%23${clanTag}/currentwar`);
    return response.json();
  }

  @Query(() => WarLog)
  async warLog(@Arg("clanTag", () => String) clanTag: string): Promise<WarLog> {
    const response = await fetchClashAPI(`clans/%23${clanTag}/warlog`);
    return response.json();
  }

  @Query(() => LeagueGroup)
  async leagueGroup(
    @Arg("clanTag", () => String) clanTag: string
  ): Promise<LeagueGroup> {
    const response = await fetchClashAPI(
      `clans/%23${clanTag}/currentwar/leaguegroup`
    );
    return response.json();
  }

  @Query(() => War)
  async leagueWar(@Arg("warTag", () => String) warTag: string): Promise<War> {
    const response = await fetchClashAPI(`clanwarleagues/wars/%23${warTag}`);
    return response.json();
  }
}
