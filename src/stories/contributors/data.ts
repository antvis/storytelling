import { Octokit } from '@octokit/core';

/**
 * https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#list-repository-contributors
 * @param accessKey 
 * @param owner 
 * @param repo 
 */
export const getContributors = async (accessKey: string | undefined, owner: string, repo: string) => {
  const octokit = new Octokit({
    auth: accessKey
  });

  let page = 1;
  const result = [];

  // eslint-disable-next-line
  while(true) {
    const r = await octokit.request('GET /repos/{owner}/{repo}/contributors', {
      owner,
      repo,
      per_page: 100,
      page,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    });

    if (r.data.length === 0) {
      return result;
    } else {
      result.push(...r.data);
      page++;
    }
  }
}

export const getReposContributors = async (accessKey: string | undefined, repos: string[]) => {
  const ps = repos.map(repo => {
    const [owner, repoName] = repo.split('/');
    return getContributors(accessKey, owner, repoName);
  });

  return await Promise.all(ps);
}

/**
 * 将数据转化成关系图数据
 */
export const getContributorRelation = (repos: string[], contributors: any[][]) => {
  // repo, contributor
  const nodes: any = [];
  const edges: any = [];

  // repo
  repos.forEach((repo, idx) => {
    // repo
    nodes.push({
      id: repo,

      data: {
        nodeType: 'repo',
        size: 32,
        cluster: repo,
        // cluster: 'repo',
        label: repo,
        text: repo,
        stroke: '#fff',
      },
    });

    // repo <-> contributor
    edges.push(...contributors[idx].map(({ login }) => ({
      id: `${repo}-$${login}`,
      source: repo,
      target: login,
      data: {
        keyShape: {
          strokeOpacity: 0.5,
        }
      },
    })));
  });

  // contributor 合并 contributions
  const contributionsMap = new Map();
  contributors.forEach((contributor) => {
    contributor.forEach(({ login, contributions }) => {
      if (contributionsMap.has(login)) {
        contributionsMap.set(login, { contributions: contributionsMap.get(login).contributions + contributions, single: false });
      } else {
        contributionsMap.set(login, { contributions, single: true });
      }
    });
  });

  for(const [login, { contributions, single }] of contributionsMap.entries()) {
    nodes.push({
      id: login,
      
      data: {
        size: (Math.log2(contributions) + 4) * 2,
        cluster: single ? 'single-user' : 'multi-user',
        contributions,
        label: login,
        keyShape: {
          fillOpacity: 0.5,
        }
      },
    });
  }

  return { nodes, edges };
}
