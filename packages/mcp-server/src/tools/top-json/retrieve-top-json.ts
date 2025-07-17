// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discourse-api-sdk-mcp/filtering';
import { Metadata, asTextContentResult } from 'discourse-api-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscourseSDK from 'discourse-api-sdk';

export const metadata: Metadata = {
  resource: 'top_json',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/top.json',
  operationId: 'listTopTopics',
};

export const tool: Tool = {
  name: 'retrieve_top_json',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet the top topics filtered by period\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    primary_groups: {\n      type: 'array',\n      items: {\n        type: 'object'\n      }\n    },\n    topic_list: {\n      type: 'object',\n      properties: {\n        can_create_topic: {\n          type: 'boolean'\n        },\n        draft: {\n          type: 'string'\n        },\n        draft_key: {\n          type: 'string'\n        },\n        draft_sequence: {\n          type: 'integer'\n        },\n        for_period: {\n          type: 'string'\n        },\n        per_page: {\n          type: 'integer'\n        },\n        topics: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'integer'\n              },\n              archetype: {\n                type: 'string'\n              },\n              archived: {\n                type: 'boolean'\n              },\n              bookmarked: {\n                type: 'boolean'\n              },\n              bumped: {\n                type: 'boolean'\n              },\n              bumped_at: {\n                type: 'string'\n              },\n              category_id: {\n                type: 'integer'\n              },\n              closed: {\n                type: 'boolean'\n              },\n              created_at: {\n                type: 'string'\n              },\n              fancy_title: {\n                type: 'string'\n              },\n              featured_link: {\n                type: 'string'\n              },\n              has_summary: {\n                type: 'boolean'\n              },\n              highest_post_number: {\n                type: 'integer'\n              },\n              image_url: {\n                type: 'string'\n              },\n              last_posted_at: {\n                type: 'string'\n              },\n              last_poster_username: {\n                type: 'string'\n              },\n              last_read_post_number: {\n                type: 'integer'\n              },\n              like_count: {\n                type: 'integer'\n              },\n              liked: {\n                type: 'boolean'\n              },\n              notification_level: {\n                type: 'integer'\n              },\n              op_like_count: {\n                type: 'integer'\n              },\n              pinned: {\n                type: 'boolean'\n              },\n              pinned_globally: {\n                type: 'boolean'\n              },\n              posters: {\n                type: 'array',\n                items: {\n                  type: 'object',\n                  properties: {\n                    description: {\n                      type: 'string'\n                    },\n                    extras: {\n                      type: 'string'\n                    },\n                    primary_group_id: {\n                      type: 'integer'\n                    },\n                    user_id: {\n                      type: 'integer'\n                    }\n                  },\n                  required: []\n                }\n              },\n              posts_count: {\n                type: 'integer'\n              },\n              reply_count: {\n                type: 'integer'\n              },\n              slug: {\n                type: 'string'\n              },\n              title: {\n                type: 'string'\n              },\n              unpinned: {\n                type: 'boolean'\n              },\n              unread_posts: {\n                type: 'integer'\n              },\n              unseen: {\n                type: 'boolean'\n              },\n              views: {\n                type: 'integer'\n              },\n              visible: {\n                type: 'boolean'\n              }\n            },\n            required: []\n          }\n        }\n      },\n      required: []\n    },\n    users: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'integer'\n          },\n          avatar_template: {\n            type: 'string'\n          },\n          name: {\n            type: 'string'\n          },\n          username: {\n            type: 'string'\n          }\n        },\n        required: []\n      }\n    }\n  },\n  required: []\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      'Api-Username': {
        type: 'string',
      },
      per_page: {
        type: 'integer',
        description: 'Maximum number of topics returned, between 1-100',
      },
      period: {
        type: 'string',
        description: 'Enum: `all`, `yearly`, `quarterly`, `monthly`, `weekly`, `daily`',
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
  return asTextContentResult(await maybeFilter(args, await client.topJson.retrieve(body)));
};

export default { metadata, tool, handler };
