import { ApolloError } from "apollo-server-express";
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
    const data = await response.json();
    if (data.reason) {
      throw new ApolloError(data.reason, response.status.toString(), {
        message: data?.message,
      });
    }
    return data;
  }

  @Query(() => War)
  async currentWar(
    @Arg("clanTag", () => String) clanTag: string
  ): Promise<War> {
    const response = await fetchClashAPI(`clans/%23${clanTag}/currentwar`);
    const data = await response.json();
    if (data.reason) {
      throw new ApolloError(data.reason, response.status.toString(), {
        message: data?.message,
      });
    }
    return data;
  }

  @Query(() => WarLog)
  async warLog(@Arg("clanTag", () => String) clanTag: string): Promise<WarLog> {
    const response = await fetchClashAPI(`clans/%23${clanTag}/warlog`);
    const data = await response.json();
    if (data.reason) {
      throw new ApolloError(data.reason, response.status.toString(), {
        message: data?.message,
      });
    }
    return data;
  }

  @Query(() => LeagueGroup)
  async leagueGroup(
    @Arg("clanTag", () => String) clanTag: string
  ): Promise<LeagueGroup> {
    const response = await fetchClashAPI(
      `clans/%23${clanTag}/currentwar/leaguegroup`
    );
    const data = await response.json();
    if (data.reason) {
      throw new ApolloError(data.reason, response.status.toString(), {
        message: data?.message,
      });
    }
    return data;
  }

  @Query(() => War)
  async leagueWar(@Arg("warTag", () => String) warTag: string): Promise<War> {
    const response = await fetchClashAPI(`clanwarleagues/wars/%23${warTag}`);
    const data = await response.json();
    if (data.reason) {
      throw new ApolloError(data.reason, response.status.toString(), {
        message: data?.message,
      });
    }
    return data;
  }
}
