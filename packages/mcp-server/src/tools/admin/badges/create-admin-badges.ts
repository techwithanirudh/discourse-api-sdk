// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discourse-api-sdk-mcp/filtering';
import { Metadata, asTextContentResult } from 'discourse-api-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscourseSDK from 'discourse-api-sdk';

export const metadata: Metadata = {
  resource: 'admin.badges',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/admin/badges.json',
  operationId: 'createBadge',
};

export const tool: Tool = {
  name: 'create_admin_badges',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate badge\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    badge: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'integer'\n        },\n        allow_title: {\n          type: 'boolean'\n        },\n        auto_revoke: {\n          type: 'boolean'\n        },\n        badge_grouping_id: {\n          type: 'integer'\n        },\n        badge_type_id: {\n          type: 'integer'\n        },\n        description: {\n          type: 'string'\n        },\n        enabled: {\n          type: 'boolean'\n        },\n        grant_count: {\n          type: 'integer'\n        },\n        icon: {\n          type: 'string'\n        },\n        image_upload_id: {\n          type: 'integer'\n        },\n        image_url: {\n          type: 'string'\n        },\n        listable: {\n          type: 'boolean'\n        },\n        long_description: {\n          type: 'string'\n        },\n        manually_grantable: {\n          type: 'boolean'\n        },\n        multiple_grant: {\n          type: 'boolean'\n        },\n        name: {\n          type: 'string'\n        },\n        query: {\n          type: 'string'\n        },\n        show_in_post_header: {\n          type: 'boolean'\n        },\n        show_posts: {\n          type: 'boolean'\n        },\n        slug: {\n          type: 'string'\n        },\n        system: {\n          type: 'boolean'\n        },\n        target_posts: {\n          type: 'boolean'\n        },\n        trigger: {\n          type: 'string'\n        }\n      },\n      required: [        'id',\n        'allow_title',\n        'auto_revoke',\n        'badge_grouping_id',\n        'badge_type_id',\n        'description',\n        'enabled',\n        'grant_count',\n        'icon',\n        'image_upload_id',\n        'image_url',\n        'listable',\n        'long_description',\n        'manually_grantable',\n        'multiple_grant',\n        'name',\n        'query',\n        'show_in_post_header',\n        'show_posts',\n        'slug',\n        'system',\n        'target_posts',\n        'trigger'\n      ]\n    },\n    badge_types: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'integer'\n          },\n          name: {\n            type: 'string'\n          },\n          sort_order: {\n            type: 'integer'\n          }\n        },\n        required: [          'id',\n          'name',\n          'sort_order'\n        ]\n      }\n    }\n  },\n  required: [    'badge',\n    'badge_types'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      badge_type_id: {
        type: 'integer',
        description: 'The ID for the badge type. 1 for Gold, 2 for Silver,\n3 for Bronze.',
      },
      name: {
        type: 'string',
        description: 'The name for the new badge.',
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
  return asTextContentResult(await maybeFilter(args, await client.admin.badges.create(body)));
};

export default { metadata, tool, handler };
