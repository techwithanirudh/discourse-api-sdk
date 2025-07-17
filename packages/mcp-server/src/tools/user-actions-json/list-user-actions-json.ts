// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discourse-api-sdk-mcp/filtering';
import { Metadata, asTextContentResult } from 'discourse-api-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscourseSDK from 'discourse-api-sdk';

export const metadata: Metadata = {
  resource: 'user_actions_json',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/user_actions.json',
  operationId: 'listUserActions',
};

export const tool: Tool = {
  name: 'list_user_actions_json',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a list of user actions\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    user_actions: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          acting_avatar_template: {\n            type: 'string'\n          },\n          acting_name: {\n            type: 'string'\n          },\n          acting_user_id: {\n            type: 'integer'\n          },\n          acting_username: {\n            type: 'string'\n          },\n          action_code: {\n            type: 'string'\n          },\n          action_type: {\n            type: 'integer'\n          },\n          archived: {\n            type: 'boolean'\n          },\n          avatar_template: {\n            type: 'string'\n          },\n          category_id: {\n            type: 'integer'\n          },\n          closed: {\n            type: 'boolean'\n          },\n          created_at: {\n            type: 'string'\n          },\n          deleted: {\n            type: 'boolean'\n          },\n          excerpt: {\n            type: 'string'\n          },\n          hidden: {\n            type: 'string'\n          },\n          name: {\n            type: 'string'\n          },\n          post_id: {\n            type: 'string'\n          },\n          post_number: {\n            type: 'integer'\n          },\n          post_type: {\n            type: 'string'\n          },\n          slug: {\n            type: 'string'\n          },\n          target_name: {\n            type: 'string'\n          },\n          target_user_id: {\n            type: 'integer'\n          },\n          target_username: {\n            type: 'string'\n          },\n          title: {\n            type: 'string'\n          },\n          topic_id: {\n            type: 'integer'\n          },\n          user_id: {\n            type: 'integer'\n          },\n          username: {\n            type: 'string'\n          }\n        },\n        required: [          'acting_avatar_template',\n          'acting_name',\n          'acting_user_id',\n          'acting_username',\n          'action_code',\n          'action_type',\n          'archived',\n          'avatar_template',\n          'category_id',\n          'closed',\n          'created_at',\n          'deleted',\n          'excerpt',\n          'hidden',\n          'name',\n          'post_id',\n          'post_number',\n          'post_type',\n          'slug',\n          'target_name',\n          'target_user_id',\n          'target_username',\n          'title',\n          'topic_id',\n          'user_id',\n          'username'\n        ]\n      }\n    }\n  },\n  required: [    'user_actions'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'string',
      },
      offset: {
        type: 'integer',
      },
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
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.userActionsJson.list(body)));
};

export default { metadata, tool, handler };
