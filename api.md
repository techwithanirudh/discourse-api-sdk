# Admin

Types:

- <code><a href="./src/resources/admin/admin.ts">AdminCreateGroupResponse</a></code>

Methods:

- <code title="post /admin/groups.json">client.admin.<a href="./src/resources/admin/admin.ts">createGroup</a>({ ...params }) -> AdminCreateGroupResponse</code>

## BackupsJson

Types:

- <code><a href="./src/resources/admin/backups-json.ts">BackupsJsonCreateResponse</a></code>
- <code><a href="./src/resources/admin/backups-json.ts">BackupsJsonListResponse</a></code>

Methods:

- <code title="post /admin/backups.json">client.admin.backupsJson.<a href="./src/resources/admin/backups-json.ts">create</a>({ ...params }) -> BackupsJsonCreateResponse</code>
- <code title="get /admin/backups.json">client.admin.backupsJson.<a href="./src/resources/admin/backups-json.ts">list</a>() -> BackupsJsonListResponse</code>

## Backups

Methods:

- <code title="get /admin/backups/{filename}">client.admin.backups.<a href="./src/resources/admin/backups.ts">download</a>(filename, { ...params }) -> void</code>
- <code title="put /admin/backups/{filename}">client.admin.backups.<a href="./src/resources/admin/backups.ts">sendDownloadEmail</a>(filename) -> void</code>

## Groups

Types:

- <code><a href="./src/resources/admin/groups.ts">GroupDeleteResponse</a></code>

Methods:

- <code title="delete /admin/groups/{id}.json">client.admin.groups.<a href="./src/resources/admin/groups.ts">delete</a>(id) -> GroupDeleteResponse</code>

## Users

Types:

- <code><a href="./src/resources/admin/users/users.ts">UserActivateResponse</a></code>
- <code><a href="./src/resources/admin/users/users.ts">UserAnonymizeResponse</a></code>
- <code><a href="./src/resources/admin/users/users.ts">UserDeactivateResponse</a></code>
- <code><a href="./src/resources/admin/users/users.ts">UserLogOutResponse</a></code>
- <code><a href="./src/resources/admin/users/users.ts">UserSilenceResponse</a></code>
- <code><a href="./src/resources/admin/users/users.ts">UserSuspendResponse</a></code>

Methods:

- <code title="put /admin/users/{id}/activate.json">client.admin.users.<a href="./src/resources/admin/users/users.ts">activate</a>(id) -> UserActivateResponse</code>
- <code title="put /admin/users/{id}/anonymize.json">client.admin.users.<a href="./src/resources/admin/users/users.ts">anonymize</a>(id) -> UserAnonymizeResponse</code>
- <code title="put /admin/users/{id}/deactivate.json">client.admin.users.<a href="./src/resources/admin/users/users.ts">deactivate</a>(id) -> UserDeactivateResponse</code>
- <code title="post /admin/users/{id}/log_out.json">client.admin.users.<a href="./src/resources/admin/users/users.ts">logOut</a>(id) -> UserLogOutResponse</code>
- <code title="put /admin/users/{id}/silence.json">client.admin.users.<a href="./src/resources/admin/users/users.ts">silence</a>(id, { ...params }) -> UserSilenceResponse</code>
- <code title="put /admin/users/{id}/suspend.json">client.admin.users.<a href="./src/resources/admin/users/users.ts">suspend</a>(id, { ...params }) -> UserSuspendResponse</code>

### Json

Types:

- <code><a href="./src/resources/admin/users/json.ts">JsonRetrieveResponse</a></code>
- <code><a href="./src/resources/admin/users/json.ts">JsonDeleteResponse</a></code>

Methods:

- <code title="get /admin/users/{id}.json">client.admin.users.json.<a href="./src/resources/admin/users/json.ts">retrieve</a>(id) -> JsonRetrieveResponse</code>
- <code title="delete /admin/users/{id}.json">client.admin.users.json.<a href="./src/resources/admin/users/json.ts">delete</a>(id, { ...params }) -> JsonDeleteResponse</code>

### List

Types:

- <code><a href="./src/resources/admin/users/list.ts">ListGetResponse</a></code>

Methods:

- <code title="get /admin/users/list/{flag}.json">client.admin.users.list.<a href="./src/resources/admin/users/list.ts">get</a>(flag, { ...params }) -> ListGetResponse</code>

## Badges

Types:

- <code><a href="./src/resources/admin/badges.ts">BadgeCreateResponse</a></code>
- <code><a href="./src/resources/admin/badges.ts">BadgeUpdateResponse</a></code>
- <code><a href="./src/resources/admin/badges.ts">BadgeListResponse</a></code>

Methods:

- <code title="post /admin/badges.json">client.admin.badges.<a href="./src/resources/admin/badges.ts">create</a>({ ...params }) -> BadgeCreateResponse</code>
- <code title="put /admin/badges/{id}.json">client.admin.badges.<a href="./src/resources/admin/badges.ts">update</a>(id, { ...params }) -> BadgeUpdateResponse</code>
- <code title="get /admin/badges.json">client.admin.badges.<a href="./src/resources/admin/badges.ts">list</a>() -> BadgeListResponse</code>
- <code title="delete /admin/badges/{id}.json">client.admin.badges.<a href="./src/resources/admin/badges.ts">delete</a>(id) -> void</code>

# CategoriesJson

Types:

- <code><a href="./src/resources/categories-json.ts">CategoriesJsonCreateResponse</a></code>
- <code><a href="./src/resources/categories-json.ts">CategoriesJsonListResponse</a></code>

Methods:

- <code title="post /categories.json">client.categoriesJson.<a href="./src/resources/categories-json.ts">create</a>({ ...params }) -> CategoriesJsonCreateResponse</code>
- <code title="get /categories.json">client.categoriesJson.<a href="./src/resources/categories-json.ts">list</a>({ ...params }) -> CategoriesJsonListResponse</code>

# Categories

Types:

- <code><a href="./src/resources/categories.ts">CategoryUpdateResponse</a></code>

Methods:

- <code title="put /categories/{id}.json">client.categories.<a href="./src/resources/categories.ts">update</a>(id, { ...params }) -> CategoryUpdateResponse</code>

# C

Types:

- <code><a href="./src/resources/c.ts">CListTopicsResponse</a></code>
- <code><a href="./src/resources/c.ts">CShowCategoryResponse</a></code>

Methods:

- <code title="get /c/{slug}/{id}.json">client.c.<a href="./src/resources/c.ts">listTopics</a>(id, { ...params }) -> CListTopicsResponse</code>
- <code title="get /c/{id}/show.json">client.c.<a href="./src/resources/c.ts">showCategory</a>(id) -> CShowCategoryResponse</code>

# Groups

Types:

- <code><a href="./src/resources/groups/groups.ts">GroupRetrieveResponse</a></code>
- <code><a href="./src/resources/groups/groups.ts">GroupUpdateResponse</a></code>
- <code><a href="./src/resources/groups/groups.ts">GroupListResponse</a></code>

Methods:

- <code title="get /groups/{id}.json">client.groups.<a href="./src/resources/groups/groups.ts">retrieve</a>(id) -> GroupRetrieveResponse</code>
- <code title="put /groups/{id}.json">client.groups.<a href="./src/resources/groups/groups.ts">update</a>(id, { ...params }) -> GroupUpdateResponse</code>
- <code title="get /groups.json">client.groups.<a href="./src/resources/groups/groups.ts">list</a>() -> GroupListResponse</code>

## MembersJson

Types:

- <code><a href="./src/resources/groups/members-json.ts">MembersJsonListResponse</a></code>
- <code><a href="./src/resources/groups/members-json.ts">MembersJsonAddResponse</a></code>
- <code><a href="./src/resources/groups/members-json.ts">MembersJsonRemoveResponse</a></code>

Methods:

- <code title="get /groups/{id}/members.json">client.groups.membersJson.<a href="./src/resources/groups/members-json.ts">list</a>(id) -> MembersJsonListResponse</code>
- <code title="put /groups/{id}/members.json">client.groups.membersJson.<a href="./src/resources/groups/members-json.ts">add</a>(id, { ...params }) -> MembersJsonAddResponse</code>
- <code title="delete /groups/{id}/members.json">client.groups.membersJson.<a href="./src/resources/groups/members-json.ts">remove</a>(id, { ...params }) -> MembersJsonRemoveResponse</code>

# InvitesJson

Types:

- <code><a href="./src/resources/invites-json.ts">InvitesJsonCreateResponse</a></code>

Methods:

- <code title="post /invites.json">client.invitesJson.<a href="./src/resources/invites-json.ts">create</a>({ ...params }) -> InvitesJsonCreateResponse</code>

# Invites

Types:

- <code><a href="./src/resources/invites.ts">InviteCreateMultipleResponse</a></code>

Methods:

- <code title="post /invites/create-multiple.json">client.invites.<a href="./src/resources/invites.ts">createMultiple</a>({ ...params }) -> InviteCreateMultipleResponse</code>

# NotificationsJson

Types:

- <code><a href="./src/resources/notifications-json.ts">NotificationsJsonListResponse</a></code>

Methods:

- <code title="get /notifications.json">client.notificationsJson.<a href="./src/resources/notifications-json.ts">list</a>() -> NotificationsJsonListResponse</code>

# Notifications

Types:

- <code><a href="./src/resources/notifications.ts">NotificationMarkReadResponse</a></code>

Methods:

- <code title="put /notifications/mark-read.json">client.notifications.<a href="./src/resources/notifications.ts">markRead</a>({ ...params }) -> NotificationMarkReadResponse</code>

# Posts

Types:

- <code><a href="./src/resources/posts.ts">PostCreateResponse</a></code>
- <code><a href="./src/resources/posts.ts">PostRetrieveResponse</a></code>
- <code><a href="./src/resources/posts.ts">PostUpdateResponse</a></code>
- <code><a href="./src/resources/posts.ts">PostListResponse</a></code>

Methods:

- <code title="post /posts.json">client.posts.<a href="./src/resources/posts.ts">create</a>({ ...params }) -> PostCreateResponse</code>
- <code title="get /posts/{id}.json">client.posts.<a href="./src/resources/posts.ts">retrieve</a>(id) -> PostRetrieveResponse</code>
- <code title="put /posts/{id}.json">client.posts.<a href="./src/resources/posts.ts">update</a>(id, { ...params }) -> PostUpdateResponse</code>
- <code title="get /posts.json">client.posts.<a href="./src/resources/posts.ts">list</a>({ ...params }) -> PostListResponse</code>
- <code title="delete /posts/{id}.json">client.posts.<a href="./src/resources/posts.ts">delete</a>(id, { ...params }) -> void</code>

# PostActionsJson

Types:

- <code><a href="./src/resources/post-actions-json.ts">PostActionsJsonCreateResponse</a></code>

Methods:

- <code title="post /post_actions.json">client.postActionsJson.<a href="./src/resources/post-actions-json.ts">create</a>({ ...params }) -> PostActionsJsonCreateResponse</code>

# Topics

## PrivateMessages

Types:

- <code><a href="./src/resources/topics/private-messages.ts">PrivateMessageListResponse</a></code>

Methods:

- <code title="get /topics/private-messages/{username}.json">client.topics.privateMessages.<a href="./src/resources/topics/private-messages.ts">list</a>(username) -> PrivateMessageListResponse</code>

## PrivateMessagesSent

Types:

- <code><a href="./src/resources/topics/private-messages-sent.ts">PrivateMessagesSentListResponse</a></code>

Methods:

- <code title="get /topics/private-messages-sent/{username}.json">client.topics.privateMessagesSent.<a href="./src/resources/topics/private-messages-sent.ts">list</a>(username) -> PrivateMessagesSentListResponse</code>

# SearchJson

Types:

- <code><a href="./src/resources/search-json.ts">SearchJsonPerformSearchResponse</a></code>

Methods:

- <code title="get /search.json">client.searchJson.<a href="./src/resources/search-json.ts">performSearch</a>({ ...params }) -> SearchJsonPerformSearchResponse</code>

# SiteJson

Types:

- <code><a href="./src/resources/site-json.ts">SiteJsonRetrieveResponse</a></code>

Methods:

- <code title="get /site.json">client.siteJson.<a href="./src/resources/site-json.ts">retrieve</a>() -> SiteJsonRetrieveResponse</code>

# Site

Types:

- <code><a href="./src/resources/site.ts">SiteRetrieveBasicInfoResponse</a></code>

Methods:

- <code title="get /site/basic-info.json">client.site.<a href="./src/resources/site.ts">retrieveBasicInfo</a>() -> SiteRetrieveBasicInfoResponse</code>

# TagsJson

Types:

- <code><a href="./src/resources/tags-json.ts">TagsJsonListResponse</a></code>

Methods:

- <code title="get /tags.json">client.tagsJson.<a href="./src/resources/tags-json.ts">list</a>() -> TagsJsonListResponse</code>

# Tag

Types:

- <code><a href="./src/resources/tag.ts">TagRetrieveResponse</a></code>

Methods:

- <code title="get /tag/{name}.json">client.tag.<a href="./src/resources/tag.ts">retrieve</a>(name) -> TagRetrieveResponse</code>

# T

Types:

- <code><a href="./src/resources/t/t.ts">TCreateTimerResponse</a></code>
- <code><a href="./src/resources/t/t.ts">TInviteResponse</a></code>
- <code><a href="./src/resources/t/t.ts">TInviteGroupResponse</a></code>
- <code><a href="./src/resources/t/t.ts">TRetrievePostsResponse</a></code>
- <code><a href="./src/resources/t/t.ts">TSetNotificationsResponse</a></code>
- <code><a href="./src/resources/t/t.ts">TUpdateStatusResponse</a></code>
- <code><a href="./src/resources/t/t.ts">TUpdateTimestampResponse</a></code>

Methods:

- <code title="put /t/{id}/bookmark.json">client.t.<a href="./src/resources/t/t.ts">bookmark</a>(id, { ...params }) -> void</code>
- <code title="post /t/{id}/timer.json">client.t.<a href="./src/resources/t/t.ts">createTimer</a>(id, { ...params }) -> TCreateTimerResponse</code>
- <code title="post /t/{id}/invite.json">client.t.<a href="./src/resources/t/t.ts">invite</a>(id, { ...params }) -> TInviteResponse</code>
- <code title="post /t/{id}/invite-group.json">client.t.<a href="./src/resources/t/t.ts">inviteGroup</a>(id, { ...params }) -> TInviteGroupResponse</code>
- <code title="get /t/{id}/posts.json">client.t.<a href="./src/resources/t/t.ts">retrievePosts</a>(id, { ...params }) -> TRetrievePostsResponse</code>
- <code title="post /t/{id}/notifications.json">client.t.<a href="./src/resources/t/t.ts">setNotifications</a>(id, { ...params }) -> TSetNotificationsResponse</code>
- <code title="put /t/{id}/status.json">client.t.<a href="./src/resources/t/t.ts">updateStatus</a>(id, { ...params }) -> TUpdateStatusResponse</code>
- <code title="put /t/{id}/change-timestamp.json">client.t.<a href="./src/resources/t/t.ts">updateTimestamp</a>(id, { ...params }) -> TUpdateTimestampResponse</code>

## Json

Types:

- <code><a href="./src/resources/t/json.ts">JsonRetrieveResponse</a></code>
- <code><a href="./src/resources/t/json.ts">JsonUpdateResponse</a></code>

Methods:

- <code title="get /t/{id}.json">client.t.json.<a href="./src/resources/t/json.ts">retrieve</a>(id, { ...params }) -> JsonRetrieveResponse</code>
- <code title="put /t/-/{id}.json">client.t.json.<a href="./src/resources/t/json.ts">update</a>(id, { ...params }) -> JsonUpdateResponse</code>
- <code title="delete /t/{id}.json">client.t.json.<a href="./src/resources/t/json.ts">delete</a>(id, { ...params }) -> void</code>

## ExternalID

Methods:

- <code title="get /t/external_id/{external_id}.json">client.t.externalID.<a href="./src/resources/t/external-id.ts">retrieve</a>(externalID) -> void</code>

# LatestJson

Types:

- <code><a href="./src/resources/latest-json.ts">LatestJsonGetLatestResponse</a></code>

Methods:

- <code title="get /latest.json">client.latestJson.<a href="./src/resources/latest-json.ts">getLatest</a>({ ...params }) -> LatestJsonGetLatestResponse</code>

# TopJson

Types:

- <code><a href="./src/resources/top-json.ts">TopJsonRetrieveResponse</a></code>

Methods:

- <code title="get /top.json">client.topJson.<a href="./src/resources/top-json.ts">retrieve</a>({ ...params }) -> TopJsonRetrieveResponse</code>

# UploadsJson

Types:

- <code><a href="./src/resources/uploads-json.ts">UploadsJsonCreateResponse</a></code>

Methods:

- <code title="post /uploads.json">client.uploadsJson.<a href="./src/resources/uploads-json.ts">create</a>({ ...params }) -> UploadsJsonCreateResponse</code>

# Uploads

Types:

- <code><a href="./src/resources/uploads.ts">UploadAbortMultipartResponse</a></code>
- <code><a href="./src/resources/uploads.ts">UploadBatchPresignMultipartPartsResponse</a></code>
- <code><a href="./src/resources/uploads.ts">UploadCompleteExternalUploadResponse</a></code>
- <code><a href="./src/resources/uploads.ts">UploadCompleteMultipartResponse</a></code>
- <code><a href="./src/resources/uploads.ts">UploadCreateMultipartResponse</a></code>
- <code><a href="./src/resources/uploads.ts">UploadGeneratePresignedPutResponse</a></code>

Methods:

- <code title="post /uploads/abort-multipart.json">client.uploads.<a href="./src/resources/uploads.ts">abortMultipart</a>({ ...params }) -> UploadAbortMultipartResponse</code>
- <code title="post /uploads/batch-presign-multipart-parts.json">client.uploads.<a href="./src/resources/uploads.ts">batchPresignMultipartParts</a>({ ...params }) -> UploadBatchPresignMultipartPartsResponse</code>
- <code title="post /uploads/complete-external-upload.json">client.uploads.<a href="./src/resources/uploads.ts">completeExternalUpload</a>({ ...params }) -> UploadCompleteExternalUploadResponse</code>
- <code title="post /uploads/complete-multipart.json">client.uploads.<a href="./src/resources/uploads.ts">completeMultipart</a>({ ...params }) -> UploadCompleteMultipartResponse</code>
- <code title="post /uploads/create-multipart.json">client.uploads.<a href="./src/resources/uploads.ts">createMultipart</a>({ ...params }) -> UploadCreateMultipartResponse</code>
- <code title="post /uploads/generate-presigned-put.json">client.uploads.<a href="./src/resources/uploads.ts">generatePresignedPut</a>({ ...params }) -> UploadGeneratePresignedPutResponse</code>

# UserBadges

Types:

- <code><a href="./src/resources/user-badges.ts">UserBadgeListResponse</a></code>

Methods:

- <code title="get /user-badges/{username}.json">client.userBadges.<a href="./src/resources/user-badges.ts">list</a>(username) -> UserBadgeListResponse</code>

# UsersJson

Types:

- <code><a href="./src/resources/users-json.ts">UsersJsonCreateResponse</a></code>

Methods:

- <code title="post /users.json">client.usersJson.<a href="./src/resources/users-json.ts">create</a>({ ...params }) -> UsersJsonCreateResponse</code>

# U

Types:

- <code><a href="./src/resources/u/u.ts">UFetchCardResponse</a></code>
- <code><a href="./src/resources/u/u.ts">UListEmailsResponse</a></code>

Methods:

- <code title="get /u/{username}/card.json">client.u.<a href="./src/resources/u/u.ts">fetchCard</a>(username) -> unknown</code>
- <code title="get /u/{username}/emails.json">client.u.<a href="./src/resources/u/u.ts">listEmails</a>(username) -> UListEmailsResponse</code>

## Json

Types:

- <code><a href="./src/resources/u/json.ts">JsonRetrieveResponse</a></code>
- <code><a href="./src/resources/u/json.ts">JsonUpdateResponse</a></code>

Methods:

- <code title="get /u/{username}.json">client.u.json.<a href="./src/resources/u/json.ts">retrieve</a>(username, { ...params }) -> JsonRetrieveResponse</code>
- <code title="put /u/{username}.json">client.u.json.<a href="./src/resources/u/json.ts">update</a>(username, { ...params }) -> JsonUpdateResponse</code>

## ByExternal

### Json

Types:

- <code><a href="./src/resources/u/by-external/json.ts">JsonRetrieveResponse</a></code>
- <code><a href="./src/resources/u/by-external/json.ts">JsonRetrieveByProviderResponse</a></code>

Methods:

- <code title="get /u/by-external/{external_id}.json">client.u.byExternal.json.<a href="./src/resources/u/by-external/json.ts">retrieve</a>(externalID, { ...params }) -> JsonRetrieveResponse</code>
- <code title="get /u/by-external/{provider}/{external_id}.json">client.u.byExternal.json.<a href="./src/resources/u/by-external/json.ts">retrieveByProvider</a>(externalID, { ...params }) -> JsonRetrieveByProviderResponse</code>

## Preferences

Methods:

- <code title="put /u/{username}/preferences/email.json">client.u.preferences.<a href="./src/resources/u/preferences/preferences.ts">updateEmail</a>(username, { ...params }) -> void</code>
- <code title="put /u/{username}/preferences/username.json">client.u.preferences.<a href="./src/resources/u/preferences/preferences.ts">updateUsername</a>(username, { ...params }) -> void</code>

### Avatar

Types:

- <code><a href="./src/resources/u/preferences/avatar.ts">AvatarUpdateResponse</a></code>

Methods:

- <code title="put /u/{username}/preferences/avatar/pick.json">client.u.preferences.avatar.<a href="./src/resources/u/preferences/avatar.ts">update</a>(username, { ...params }) -> AvatarUpdateResponse</code>

# DirectoryItemsJson

Types:

- <code><a href="./src/resources/directory-items-json.ts">DirectoryItemsJsonListResponse</a></code>

Methods:

- <code title="get /directory_items.json">client.directoryItemsJson.<a href="./src/resources/directory-items-json.ts">list</a>({ ...params }) -> DirectoryItemsJsonListResponse</code>

# UserAvatar

Types:

- <code><a href="./src/resources/user-avatar.ts">UserAvatarRefreshGravatarResponse</a></code>

Methods:

- <code title="post /user_avatar/{username}/refresh_gravatar.json">client.userAvatar.<a href="./src/resources/user-avatar.ts">refreshGravatar</a>(username) -> UserAvatarRefreshGravatarResponse</code>

# UserActionsJson

Types:

- <code><a href="./src/resources/user-actions-json.ts">UserActionsJsonListResponse</a></code>

Methods:

- <code title="get /user_actions.json">client.userActionsJson.<a href="./src/resources/user-actions-json.ts">list</a>({ ...params }) -> UserActionsJsonListResponse</code>

# Session

Types:

- <code><a href="./src/resources/session.ts">SessionRetrieveCurrentResponse</a></code>
- <code><a href="./src/resources/session.ts">SessionSendForgotPasswordEmailResponse</a></code>

Methods:

- <code title="get /session/current.json">client.session.<a href="./src/resources/session.ts">retrieveCurrent</a>() -> SessionRetrieveCurrentResponse</code>
- <code title="post /session/forgot_password.json">client.session.<a href="./src/resources/session.ts">sendForgotPasswordEmail</a>({ ...params }) -> SessionSendForgotPasswordEmailResponse</code>

# Users

## PasswordReset

Methods:

- <code title="put /users/password-reset/{token}.json">client.users.passwordReset.<a href="./src/resources/users/password-reset.ts">changePassword</a>(token, { ...params }) -> void</code>

# Chat

Types:

- <code><a href="./src/resources/chat/chat.ts">ChatReactToMessageResponse</a></code>
- <code><a href="./src/resources/chat/chat.ts">ChatSendMessageResponse</a></code>

Methods:

- <code title="put /chat/{channel_id}/react/{message_id}">client.chat.<a href="./src/resources/chat/chat.ts">reactToMessage</a>(messageID, { ...params }) -> ChatReactToMessageResponse</code>
- <code title="post /chat/{channel_id}">client.chat.<a href="./src/resources/chat/chat.ts">sendMessage</a>(channelID, { ...params }) -> ChatSendMessageResponse</code>

## API

### Channels

#### Threads

Types:

- <code><a href="./src/resources/chat/api/channels/threads.ts">ThreadListThreadMessagesResponse</a></code>
- <code><a href="./src/resources/chat/api/channels/threads.ts">ThreadRetrieveThreadResponse</a></code>

Methods:

- <code title="get /chat/api/channels/{channel_id}/threads/{thread_id}/messages">client.chat.api.channels.threads.<a href="./src/resources/chat/api/channels/threads.ts">listThreadMessages</a>(threadID, { ...params }) -> ThreadListThreadMessagesResponse</code>
- <code title="get /chat/api/channels/{channel_id}/threads/{thread_id}">client.chat.api.channels.threads.<a href="./src/resources/chat/api/channels/threads.ts">retrieveThread</a>(threadID, { ...params }) -> ThreadRetrieveThreadResponse</code>

#### Messages

Types:

- <code><a href="./src/resources/chat/api/channels/messages.ts">MessageListMessagesResponse</a></code>
- <code><a href="./src/resources/chat/api/channels/messages.ts">MessageUpdateMessageResponse</a></code>

Methods:

- <code title="get /chat/api/channels/{channel_id}/messages">client.chat.api.channels.messages.<a href="./src/resources/chat/api/channels/messages.ts">listMessages</a>(channelID, { ...params }) -> MessageListMessagesResponse</code>
- <code title="put /chat/api/channels/{channel_id}/messages/{message_id}">client.chat.api.channels.messages.<a href="./src/resources/chat/api/channels/messages.ts">updateMessage</a>(messageID, { ...params }) -> MessageUpdateMessageResponse</code>

# TagGroups

Types:

- <code><a href="./src/resources/tag-groups.ts">TagGroupCreateResponse</a></code>
- <code><a href="./src/resources/tag-groups.ts">TagGroupRetrieveResponse</a></code>
- <code><a href="./src/resources/tag-groups.ts">TagGroupUpdateResponse</a></code>
- <code><a href="./src/resources/tag-groups.ts">TagGroupListResponse</a></code>

Methods:

- <code title="post /tag_groups.json">client.tagGroups.<a href="./src/resources/tag-groups.ts">create</a>({ ...params }) -> TagGroupCreateResponse</code>
- <code title="get /tag_groups/{id}.json">client.tagGroups.<a href="./src/resources/tag-groups.ts">retrieve</a>(id) -> TagGroupRetrieveResponse</code>
- <code title="put /tag_groups/{id}.json">client.tagGroups.<a href="./src/resources/tag-groups.ts">update</a>(id, { ...params }) -> TagGroupUpdateResponse</code>
- <code title="get /tag_groups.json">client.tagGroups.<a href="./src/resources/tag-groups.ts">list</a>() -> TagGroupListResponse</code>
