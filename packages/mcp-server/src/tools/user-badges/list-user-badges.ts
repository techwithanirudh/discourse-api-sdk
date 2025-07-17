// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discourse-api-sdk-mcp/filtering';
import { Metadata, asTextContentResult } from 'discourse-api-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscourseSDK from 'discourse-api-sdk';

export const metadata: Metadata = {
  resource: 'user_badges',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/user-badges/{username}.json',
  operationId: 'listUserBadges',
};

export const tool: Tool = {
  name: 'list_user_badges',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList badges for a user\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    user_badges: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'integer'\n          },\n          badge_id: {\n            type: 'integer'\n          },\n          can_favorite: {\n            type: 'boolean'\n          },\n          granted_at: {\n            type: 'string'\n          },\n          granted_by_id: {\n            type: 'integer'\n          },\n          grouping_position: {\n            type: 'integer'\n          },\n          is_favorite: {\n            type: 'string'\n          }\n        },\n        required: [          'id',\n          'badge_id',\n          'can_favorite',\n          'granted_at',\n          'granted_by_id',\n          'grouping_position',\n          'is_favorite'\n        ]\n      }\n    },\n    badge_types: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'integer'\n          },\n          name: {\n            type: 'string'\n          },\n          sort_order: {\n            type: 'integer'\n          }\n        },\n        required: [          'id',\n          'name',\n          'sort_order'\n        ]\n      }\n    },\n    badges: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'integer'\n          },\n          allow_title: {\n            type: 'boolean'\n          },\n          badge_grouping_id: {\n            type: 'integer'\n          },\n          badge_type_id: {\n            type: 'integer'\n          },\n          description: {\n            type: 'string'\n          },\n          enabled: {\n            type: 'boolean'\n          },\n          grant_count: {\n            type: 'integer'\n          },\n          icon: {\n            type: 'string'\n          },\n          image_url: {\n            type: 'string'\n          },\n          listable: {\n            type: 'boolean'\n          },\n          manually_grantable: {\n            type: 'boolean'\n          },\n          multiple_grant: {\n            type: 'boolean'\n          },\n          name: {\n            type: 'string'\n          },\n          slug: {\n            type: 'string'\n          },\n          system: {\n            type: 'boolean'\n          }\n        },\n        required: [          'id',\n          'allow_title',\n          'badge_grouping_id',\n          'badge_type_id',\n          'description',\n          'enabled',\n          'grant_count',\n          'icon',\n          'image_url',\n          'listable',\n          'manually_grantable',\n          'multiple_grant',\n          'name',\n          'slug',\n          'system'\n        ]\n      }\n    },\n    granted_bies: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'integer'\n          },\n          admin: {\n            type: 'boolean'\n          },\n          avatar_template: {\n            type: 'string'\n          },\n          flair_name: {\n            type: 'string'\n          },\n          moderator: {\n            type: 'boolean'\n          },\n          name: {\n            type: 'string'\n          },\n          trust_level: {\n            type: 'integer'\n          },\n          username: {\n            type: 'string'\n          }\n        },\n        required: [          'id',\n          'admin',\n          'avatar_template',\n          'flair_name',\n          'moderator',\n          'name',\n          'trust_level',\n          'username'\n        ]\n      }\n    }\n  },\n  required: [    'user_badges'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      username: {
        type: 'string',
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
  const { username, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.userBadges.list(username)));
};

export default { metadata, tool, handler };
