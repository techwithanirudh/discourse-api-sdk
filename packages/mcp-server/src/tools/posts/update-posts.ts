// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discourse-api-sdk-mcp/filtering';
import { Metadata, asTextContentResult } from 'discourse-api-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscourseSDK from 'discourse-api-sdk';

export const metadata: Metadata = {
  resource: 'posts',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/posts/{id}.json',
  operationId: 'updatePost',
};

export const tool: Tool = {
  name: 'update_posts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate a single post\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    post: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'integer'\n        },\n        actions_summary: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'integer'\n              },\n              can_act: {\n                type: 'boolean'\n              }\n            },\n            required: [              'id',\n              'can_act'\n            ]\n          }\n        },\n        admin: {\n          type: 'boolean'\n        },\n        avatar_template: {\n          type: 'string'\n        },\n        bookmarked: {\n          type: 'boolean'\n        },\n        can_delete: {\n          type: 'boolean'\n        },\n        can_edit: {\n          type: 'boolean'\n        },\n        can_recover: {\n          type: 'boolean'\n        },\n        can_view_edit_history: {\n          type: 'boolean'\n        },\n        can_wiki: {\n          type: 'boolean'\n        },\n        cooked: {\n          type: 'string'\n        },\n        created_at: {\n          type: 'string'\n        },\n        deleted_at: {\n          type: 'string'\n        },\n        draft_sequence: {\n          type: 'integer'\n        },\n        edit_reason: {\n          type: 'string'\n        },\n        flair_bg_color: {\n          type: 'string'\n        },\n        flair_color: {\n          type: 'string'\n        },\n        flair_name: {\n          type: 'string'\n        },\n        flair_url: {\n          type: 'string'\n        },\n        hidden: {\n          type: 'boolean'\n        },\n        incoming_link_count: {\n          type: 'integer'\n        },\n        moderator: {\n          type: 'boolean'\n        },\n        post_number: {\n          type: 'integer'\n        },\n        post_type: {\n          type: 'integer'\n        },\n        post_url: {\n          type: 'string'\n        },\n        posts_count: {\n          type: 'integer'\n        },\n        primary_group_name: {\n          type: 'string'\n        },\n        quote_count: {\n          type: 'integer'\n        },\n        raw: {\n          type: 'string'\n        },\n        readers_count: {\n          type: 'integer'\n        },\n        reads: {\n          type: 'integer'\n        },\n        reply_count: {\n          type: 'integer'\n        },\n        reply_to_post_number: {\n          type: 'string'\n        },\n        reviewable_id: {\n          type: 'integer'\n        },\n        reviewable_score_count: {\n          type: 'integer'\n        },\n        reviewable_score_pending_count: {\n          type: 'integer'\n        },\n        score: {\n          type: 'number'\n        },\n        staff: {\n          type: 'boolean'\n        },\n        topic_id: {\n          type: 'integer'\n        },\n        topic_slug: {\n          type: 'string'\n        },\n        trust_level: {\n          type: 'integer'\n        },\n        updated_at: {\n          type: 'string'\n        },\n        user_deleted: {\n          type: 'boolean'\n        },\n        user_id: {\n          type: 'integer'\n        },\n        user_title: {\n          type: 'string'\n        },\n        username: {\n          type: 'string'\n        },\n        version: {\n          type: 'integer'\n        },\n        wiki: {\n          type: 'boolean'\n        },\n        yours: {\n          type: 'boolean'\n        },\n        badges_granted: {\n          type: 'array',\n          items: {\n            type: 'object'\n          }\n        },\n        can_see_hidden_post: {\n          type: 'boolean'\n        },\n        display_username: {\n          type: 'string'\n        },\n        flair_group_id: {\n          type: 'integer'\n        },\n        mentioned_users: {\n          type: 'array',\n          items: {\n            type: 'object'\n          }\n        },\n        name: {\n          type: 'string'\n        }\n      },\n      required: [        'id',\n        'actions_summary',\n        'admin',\n        'avatar_template',\n        'bookmarked',\n        'can_delete',\n        'can_edit',\n        'can_recover',\n        'can_view_edit_history',\n        'can_wiki',\n        'cooked',\n        'created_at',\n        'deleted_at',\n        'draft_sequence',\n        'edit_reason',\n        'flair_bg_color',\n        'flair_color',\n        'flair_name',\n        'flair_url',\n        'hidden',\n        'incoming_link_count',\n        'moderator',\n        'post_number',\n        'post_type',\n        'post_url',\n        'posts_count',\n        'primary_group_name',\n        'quote_count',\n        'raw',\n        'readers_count',\n        'reads',\n        'reply_count',\n        'reply_to_post_number',\n        'reviewable_id',\n        'reviewable_score_count',\n        'reviewable_score_pending_count',\n        'score',\n        'staff',\n        'topic_id',\n        'topic_slug',\n        'trust_level',\n        'updated_at',\n        'user_deleted',\n        'user_id',\n        'user_title',\n        'username',\n        'version',\n        'wiki',\n        'yours'\n      ]\n    }\n  },\n  required: [    'post'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      post: {
        type: 'object',
        properties: {
          raw: {
            type: 'string',
          },
          edit_reason: {
            type: 'string',
          },
        },
        required: ['raw'],
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
  return asTextContentResult(await maybeFilter(args, await client.posts.update(id, body)));
};

export default { metadata, tool, handler };
