// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discourse-api-sdk-mcp/filtering';
import { Metadata, asTextContentResult } from 'discourse-api-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscourseSDK from 'discourse-api-sdk';

export const metadata: Metadata = {
  resource: 'groups',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/groups.json',
  operationId: 'listGroups',
};

export const tool: Tool = {
  name: 'list_groups',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList groups\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    extras: {\n      type: 'object',\n      properties: {\n        type_filters: {\n          type: 'array',\n          items: {\n            type: 'object'\n          }\n        }\n      },\n      required: [        'type_filters'\n      ]\n    },\n    groups: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'integer'\n          },\n          allow_membership_requests: {\n            type: 'boolean'\n          },\n          automatic: {\n            type: 'boolean'\n          },\n          bio_cooked: {\n            type: 'string'\n          },\n          bio_excerpt: {\n            type: 'string'\n          },\n          bio_raw: {\n            type: 'string'\n          },\n          can_admin_group: {\n            type: 'boolean'\n          },\n          can_see_members: {\n            type: 'boolean'\n          },\n          default_notification_level: {\n            type: 'integer'\n          },\n          display_name: {\n            type: 'string'\n          },\n          flair_bg_color: {\n            type: 'string'\n          },\n          flair_color: {\n            type: 'string'\n          },\n          flair_url: {\n            type: 'string'\n          },\n          full_name: {\n            type: 'string'\n          },\n          grant_trust_level: {\n            type: 'string'\n          },\n          has_messages: {\n            type: 'boolean'\n          },\n          incoming_email: {\n            type: 'string'\n          },\n          members_visibility_level: {\n            type: 'integer'\n          },\n          membership_request_template: {\n            type: 'string'\n          },\n          mentionable_level: {\n            type: 'integer'\n          },\n          messageable_level: {\n            type: 'integer'\n          },\n          name: {\n            type: 'string'\n          },\n          primary_group: {\n            type: 'boolean'\n          },\n          public_admission: {\n            type: 'boolean'\n          },\n          public_exit: {\n            type: 'boolean'\n          },\n          publish_read_state: {\n            type: 'boolean'\n          },\n          title: {\n            type: 'string'\n          },\n          user_count: {\n            type: 'integer'\n          },\n          visibility_level: {\n            type: 'integer'\n          },\n          can_edit_group: {\n            type: 'boolean'\n          },\n          is_group_owner: {\n            type: 'boolean'\n          },\n          is_group_user: {\n            type: 'boolean'\n          }\n        },\n        required: [          'id',\n          'allow_membership_requests',\n          'automatic',\n          'bio_cooked',\n          'bio_excerpt',\n          'bio_raw',\n          'can_admin_group',\n          'can_see_members',\n          'default_notification_level',\n          'display_name',\n          'flair_bg_color',\n          'flair_color',\n          'flair_url',\n          'full_name',\n          'grant_trust_level',\n          'has_messages',\n          'incoming_email',\n          'members_visibility_level',\n          'membership_request_template',\n          'mentionable_level',\n          'messageable_level',\n          'name',\n          'primary_group',\n          'public_admission',\n          'public_exit',\n          'publish_read_state',\n          'title',\n          'user_count',\n          'visibility_level'\n        ]\n      }\n    },\n    load_more_groups: {\n      type: 'string'\n    },\n    total_rows_groups: {\n      type: 'integer'\n    }\n  },\n  required: [    'extras',\n    'groups',\n    'load_more_groups',\n    'total_rows_groups'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
  return asTextContentResult(await maybeFilter(args, await client.groups.list()));
};

export default { metadata, tool, handler };
