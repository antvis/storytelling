import { Octokit } from '@octokit/core';

/**
 * https://docs.github.com/en/rest/activity/starring?apiVersion=2022-11-28#list-repositories-starred-by-a-user
 * @param accessKey 
 * @param owner 
 * @param repo 
 */
const getUserStarred = async (accessKey: string | undefined, user: string) => {
  const octokit = new Octokit({
    auth: accessKey
  });

  let page = 1;
  const result = [];

  // eslint-disable-next-line
  while(true) {
    const r = await octokit.request('GET /users/{username}/starred', {
      username: user,
      per_page: 100,
      page,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    })

    if (r.data.length === 0) {
      return result;
    } else {
      result.push(...r.data);
      page++;
    }
  }
}

const getUsersStarred = async (accessKey: string | undefined, users: string[]) => {
  const ps = users.map(user => {
    return getUserStarred(accessKey, user);
  });

  return await Promise.all(ps);
}

/**
 * 将数据转化成关系图数据
 */
export const getUserStarredRelation = async (accessKey: string | undefined, users: string[]) => {
  const starred = await getUsersStarred(accessKey, users);

  // user, starred repo
  const nodes: any = [];
  const edges: any = [];

  const starredRepoMap = new Map();

  // user
  users.forEach((user, idx) => {
    // user node
    nodes.push({
      id: user,
      data: {
        nodeType: 'main-node',
        size: 32,
        cluster: user,
        label: user,
        stroke: '#fff',
      },
    });

    // starred repo node
    starred[idx].forEach(({ full_name, name, stargazers_count }) => {
      // 去重
      if (starredRepoMap.has(full_name)) {
        nodes[starredRepoMap.get(full_name)].data.cluster = 'multi-user';
        return;
      }
      nodes.push({
        id: full_name,
        data: {
          nodeType: 'sub-node',
          size: (Math.log(stargazers_count) + 1) * 1.5,
          cluster: 'single-user',
          stargazers_count,
          label: name,
          keyShape: {
            fillOpacity: 0.5,
          }
        },
      });

      starredRepoMap.set(full_name, nodes.length - 1);
    });

    // user <-> starred repo edge
    edges.push(...starred[idx].map(({ full_name }) => ({
      id: `${user}-$${full_name}`,
      source: user,
      target: full_name,
      data: {
      },
    })));
  });

  return { nodes, edges };
}
