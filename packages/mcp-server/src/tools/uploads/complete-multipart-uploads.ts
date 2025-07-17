// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discourse-api-sdk-mcp/filtering';
import { Metadata, asTextContentResult } from 'discourse-api-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscourseSDK from 'discourse-api-sdk';

export const metadata: Metadata = {
  resource: 'uploads',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/uploads/complete-multipart.json',
  operationId: 'completeMultipart',
};

export const tool: Tool = {
  name: 'complete_multipart_uploads',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCompletes the multipart upload in the external store, and copies the\nfile from its temporary location to its final location in the store.\nAll of the parts must have been uploaded to the external storage provider.\nAn Upload record will be completed in most cases once the file is copied\nto its final location.\n\nYou must have the correct permissions and CORS settings configured in your\nexternal provider. We support AWS S3 as the default. See:\n\nhttps://meta.discourse.org/t/-/210469#s3-multipart-direct-uploads-4.\n\nAn external file store must be set up and `enable_direct_s3_uploads` must\nbe set to true for this endpoint to function.\n\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    id: {\n      type: 'integer'\n    },\n    extension: {\n      type: 'string'\n    },\n    filesize: {\n      type: 'integer'\n    },\n    height: {\n      type: 'integer'\n    },\n    human_filesize: {\n      type: 'string'\n    },\n    original_filename: {\n      type: 'string'\n    },\n    retain_hours: {\n      type: 'string'\n    },\n    short_path: {\n      type: 'string'\n    },\n    short_url: {\n      type: 'string'\n    },\n    thumbnail_height: {\n      type: 'integer'\n    },\n    thumbnail_width: {\n      type: 'integer'\n    },\n    url: {\n      type: 'string'\n    },\n    width: {\n      type: 'integer'\n    },\n    dominant_color: {\n      type: 'string'\n    },\n    thumbnail: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'integer'\n        },\n        extension: {\n          type: 'string'\n        },\n        filesize: {\n          type: 'integer'\n        },\n        height: {\n          type: 'integer'\n        },\n        upload_id: {\n          type: 'integer'\n        },\n        url: {\n          type: 'string'\n        },\n        width: {\n          type: 'integer'\n        }\n      },\n      required: []\n    }\n  },\n  required: [    'id',\n    'extension',\n    'filesize',\n    'height',\n    'human_filesize',\n    'original_filename',\n    'retain_hours',\n    'short_path',\n    'short_url',\n    'thumbnail_height',\n    'thumbnail_width',\n    'url',\n    'width'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      parts: {
        type: 'array',
        description:
          'All of the part numbers and their corresponding ETags\nthat have been uploaded must be provided.',
        items: {
          type: 'object',
        },
      },
      unique_identifier: {
        type: 'string',
        description: 'The unique identifier returned in the original /create-multipart\nrequest.',
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
  return asTextContentResult(await maybeFilter(args, await client.uploads.completeMultipart(body)));
};

export default { metadata, tool, handler };
