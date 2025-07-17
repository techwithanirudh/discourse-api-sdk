// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discourse-api-sdk-mcp/filtering';
import { Metadata, asTextContentResult } from 'discourse-api-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscourseSDK from 'discourse-api-sdk';

export const metadata: Metadata = {
  resource: 'admin.users',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/admin/users/{id}/suspend.json',
  operationId: 'suspendUser',
};

export const tool: Tool = {
  name: 'suspend_admin_users',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSuspend a user\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    suspension: {\n      type: 'object',\n      properties: {\n        full_suspend_reason: {\n          type: 'string'\n        },\n        suspend_reason: {\n          type: 'string'\n        },\n        suspended_at: {\n          type: 'string'\n        },\n        suspended_by: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'integer'\n            },\n            avatar_template: {\n              type: 'string'\n            },\n            name: {\n              type: 'string'\n            },\n            username: {\n              type: 'string'\n            }\n          },\n          required: [            'id',\n            'avatar_template',\n            'name',\n            'username'\n          ]\n        },\n        suspended_till: {\n          type: 'string'\n        }\n      },\n      required: [        'full_suspend_reason',\n        'suspend_reason',\n        'suspended_at',\n        'suspended_by',\n        'suspended_till'\n      ]\n    }\n  },\n  required: [    'suspension'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
      },
      reason: {
        type: 'string',
      },
      suspend_until: {
        type: 'string',
      },
      message: {
        type: 'string',
        description: 'Will send an email with this message when present',
      },
      post_action: {
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
  const { id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.admin.users.suspend(id, body)));
};

export default { metadata, tool, handler };
