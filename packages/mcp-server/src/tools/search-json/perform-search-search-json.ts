// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discourse-api-sdk-mcp/filtering';
import { Metadata, asTextContentResult } from 'discourse-api-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscourseSDK from 'discourse-api-sdk';

export const metadata: Metadata = {
  resource: 'search_json',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/search.json',
  operationId: 'search',
};

export const tool: Tool = {
  name: 'perform_search_search_json',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSearch for a term\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    categories: {\n      type: 'array',\n      items: {\n        type: 'object'\n      }\n    },\n    grouped_search_result: {\n      type: 'object',\n      properties: {\n        can_create_topic: {\n          type: 'boolean'\n        },\n        category_ids: {\n          type: 'array',\n          items: {\n            type: 'object'\n          }\n        },\n        error: {\n          type: 'string'\n        },\n        group_ids: {\n          type: 'array',\n          items: {\n            type: 'object'\n          }\n        },\n        more_categories: {\n          type: 'string'\n        },\n        more_full_page_results: {\n          type: 'string'\n        },\n        more_posts: {\n          type: 'string'\n        },\n        more_users: {\n          type: 'string'\n        },\n        post_ids: {\n          type: 'array',\n          items: {\n            type: 'object'\n          }\n        },\n        search_log_id: {\n          type: 'integer'\n        },\n        tag_ids: {\n          type: 'array',\n          items: {\n            type: 'object'\n          }\n        },\n        term: {\n          type: 'string'\n        },\n        user_ids: {\n          type: 'array',\n          items: {\n            type: 'object'\n          }\n        },\n        extra: {\n          type: 'object',\n          properties: {\n            categories: {\n              type: 'array',\n              items: {\n                type: 'object'\n              }\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'can_create_topic',\n        'category_ids',\n        'error',\n        'group_ids',\n        'more_categories',\n        'more_full_page_results',\n        'more_posts',\n        'more_users',\n        'post_ids',\n        'search_log_id',\n        'tag_ids',\n        'term',\n        'user_ids'\n      ]\n    },\n    groups: {\n      type: 'array',\n      items: {\n        type: 'object'\n      }\n    },\n    posts: {\n      type: 'array',\n      items: {\n        type: 'object'\n      }\n    },\n    tags: {\n      type: 'array',\n      items: {\n        type: 'object'\n      }\n    },\n    users: {\n      type: 'array',\n      items: {\n        type: 'object'\n      }\n    }\n  },\n  required: [    'categories',\n    'grouped_search_result',\n    'groups',\n    'posts',\n    'tags',\n    'users'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      page: {
        type: 'integer',
      },
      q: {
        type: 'string',
        description:
          'The query string needs to be url encoded and is made up of the following options:\n- Search term. This is just a string. Usually it would be the first item in the query.\n- `@<username>`: Use the `@` followed by the username to specify posts by this user.\n- `#<category>`: Use the `#` followed by the category slug to search within this category.\n- `tags:`: `api,solved` or for posts that have all the specified tags `api+solved`.\n- `before:`: `yyyy-mm-dd`\n- `after:`: `yyyy-mm-dd`\n- `order:`: `latest`, `likes`, `views`, `latest_topic`\n- `assigned:`: username (without `@`)\n- `in:`: `title`, `likes`, `personal`, `messages`, `seen`, `unseen`, `posted`, `created`, `watching`, `tracking`, `bookmarks`, `assigned`, `unassigned`, `first`, `pinned`, `wiki`\n- `with:`: `images`\n- `status:`: `open`, `closed`, `public`, `archived`, `noreplies`, `single_user`, `solved`, `unsolved`\n- `group:`: group_name or group_id\n- `group_messages:`: group_name or group_id\n- `min_posts:`: 1\n- `max_posts:`: 10\n- `min_views:`: 1\n- `max_views:`: 10\n\nIf you are using cURL you can use the `-G` and the `--data-urlencode` flags to encode the query:\n\n```\ncurl -i -sS -X GET -G "http://localhost:4200/search.json" \\\n--data-urlencode \'q=wordpress @scossar #fun after:2020-01-01\'\n```\n',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: DiscourseSDK, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.searchJson.performSearch(body)));
};

export default { metadata, tool, handler };
