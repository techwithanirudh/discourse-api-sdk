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
  httpPath: '/uploads/complete-external-upload.json',
  operationId: 'completeExternalUpload',
};

export const tool: Tool = {
  name: 'complete_external_upload_uploads',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCompletes an external upload initialized with /get-presigned-put. The\nfile will be moved from its temporary location in external storage to\na final destination in the S3 bucket. An Upload record will also be\ncreated in the database in most cases.\n\nIf a sha1-checksum was provided in the initial request it will also\nbe compared with the uploaded file in storage to make sure the same\nfile was uploaded. The file size will be compared for the same reason.\n\nYou must have the correct permissions and CORS settings configured in your\nexternal provider. We support AWS S3 as the default. See:\n\nhttps://meta.discourse.org/t/-/210469#s3-multipart-direct-uploads-4.\n\nAn external file store must be set up and `enable_direct_s3_uploads` must\nbe set to true for this endpoint to function.\n\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    id: {\n      type: 'integer'\n    },\n    extension: {\n      type: 'string'\n    },\n    filesize: {\n      type: 'integer'\n    },\n    height: {\n      type: 'integer'\n    },\n    human_filesize: {\n      type: 'string'\n    },\n    original_filename: {\n      type: 'string'\n    },\n    retain_hours: {\n      type: 'string'\n    },\n    short_path: {\n      type: 'string'\n    },\n    short_url: {\n      type: 'string'\n    },\n    thumbnail_height: {\n      type: 'integer'\n    },\n    thumbnail_width: {\n      type: 'integer'\n    },\n    url: {\n      type: 'string'\n    },\n    width: {\n      type: 'integer'\n    },\n    dominant_color: {\n      type: 'string'\n    },\n    thumbnail: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'integer'\n        },\n        extension: {\n          type: 'string'\n        },\n        filesize: {\n          type: 'integer'\n        },\n        height: {\n          type: 'integer'\n        },\n        upload_id: {\n          type: 'integer'\n        },\n        url: {\n          type: 'string'\n        },\n        width: {\n          type: 'integer'\n        }\n      },\n      required: []\n    }\n  },\n  required: [    'id',\n    'extension',\n    'filesize',\n    'height',\n    'human_filesize',\n    'original_filename',\n    'retain_hours',\n    'short_path',\n    'short_url',\n    'thumbnail_height',\n    'thumbnail_width',\n    'url',\n    'width'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      unique_identifier: {
        type: 'string',
        description: 'The unique identifier returned in the original /generate-presigned-put\nrequest.',
      },
      for_private_message: {
        type: 'string',
        description: 'Optionally set this to true if the upload is for a\nprivate message.',
      },
      for_site_setting: {
        type: 'string',
        description: 'Optionally set this to true if the upload is for a\nsite setting.',
      },
      pasted: {
        type: 'string',
        description:
          'Optionally set this to true if the upload was pasted\ninto the upload area. This will convert PNG files to JPEG.',
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
  return asTextContentResult(await maybeFilter(args, await client.uploads.completeExternalUpload(body)));
};

export default { metadata, tool, handler };
