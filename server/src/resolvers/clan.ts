import { Arg, Query, Resolver } from "type-graphql";
import { Clan } from "../entities/Clan";
import { War } from "../entities/War";
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
}
