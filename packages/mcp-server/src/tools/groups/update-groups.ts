// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discourse-api-sdk-mcp/filtering';
import { Metadata, asTextContentResult } from 'discourse-api-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscourseSDK from 'discourse-api-sdk';

export const metadata: Metadata = {
  resource: 'groups',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/groups/{id}.json',
  operationId: 'updateGroup',
};

export const tool: Tool = {
  name: 'update_groups',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate a group\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    success: {\n      type: 'string'\n    }\n  },\n  required: []\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
      },
      group: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
          },
          automatic_membership_email_domains: {
            type: 'string',
            description: 'pipe|separated',
          },
          bio_raw: {
            type: 'string',
            description: 'About Group',
          },
          default_notification_level: {
            type: 'integer',
          },
          flair_bg_color: {
            type: 'string',
          },
          flair_icon: {
            type: 'string',
          },
          flair_upload_id: {
            type: 'integer',
          },
          full_name: {
            type: 'string',
          },
          muted_category_ids: {
            type: 'array',
            items: {
              type: 'integer',
            },
          },
          owner_usernames: {
            type: 'string',
            description: 'comma,separated',
          },
          primary_group: {
            type: 'boolean',
          },
          public_admission: {
            type: 'boolean',
          },
          public_exit: {
            type: 'boolean',
          },
          regular_category_ids: {
            type: 'array',
            items: {
              type: 'integer',
            },
          },
          tracking_category_ids: {
            type: 'array',
            items: {
              type: 'integer',
            },
          },
          usernames: {
            type: 'string',
            description: 'comma,separated',
          },
          visibility_level: {
            type: 'integer',
          },
          watching_category_ids: {
            type: 'array',
            items: {
              type: 'integer',
            },
          },
          watching_first_post_category_ids: {
            type: 'array',
            items: {
              type: 'integer',
            },
          },
        },
        required: ['name'],
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
  const { id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.groups.update(id, body)));
};

export default { metadata, tool, handler };
