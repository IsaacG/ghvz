'use strict';

window.Model = (function() {

var Model = {};

const GUN_PROPERTIES = ["gameId", "playerId"];
const GUN_COLLECTIONS = [];
Model.Gun = function(id, args) {
  this.id = id;
  Utils.copyProperties(this, args, GUN_PROPERTIES);
  Utils.addEmptyLists(this, GUN_COLLECTIONS);
}

const USER_PROPERTIES = [];
const USER_COLLECTIONS = ["players"];
Model.User = function(id, args) {
  this.id = id;
  Utils.copyProperties(this, args, USER_PROPERTIES);
  Utils.addEmptyLists(this, USER_COLLECTIONS);
}

const USER_PLAYER_PROPERTIES = ["gameId", "userId"];
const USER_PLAYER_COLLECTIONS = [];
Model.UserPlayer = function(id, args) {
  this.id = id;
  Utils.copyProperties(this, args, USER_PLAYER_PROPERTIES);
  Utils.addEmptyLists(this, USER_PLAYER_COLLECTIONS);
}

const GAME_PROPERTIES = ["active", "name", "number", "rulesHtml", "faqHtml", "stunTimer", "contactAdminPlayerId"];
const GAME_COLLECTIONS = ["missions", "rewardCategories", "chatRooms", "players", "admins", "notificationCategories", "quizQuestions", "groups", "maps"];
Model.Game = function(id, args) {
  this.id = id;
  Utils.copyProperties(this, args, GAME_PROPERTIES);
  Utils.addEmptyLists(this, GAME_COLLECTIONS);
}

const QUIZ_QUESTION_PROPERTIES = ["text", "type"];
const QUIZ_QUESTION_COLLECTIONS = ["answers"];
Model.QuizQuestion = function(id, args) {
  this.id = id;
  Utils.copyProperties(this, args, QUIZ_QUESTION_PROPERTIES);
  Utils.addEmptyLists(this, QUIZ_QUESTION_COLLECTIONS);
}

const QUIZ_ANSWER_PROPERTIES = ["text", "isCorrect", "order"];
const QUIZ_ANSWER_COLLECTIONS = [];
Model.QuizAnswer = function(id, args) {
  this.id = id;
  Utils.copyProperties(this, args, QUIZ_ANSWER_PROPERTIES);
  Utils.addEmptyLists(this, QUIZ_ANSWER_COLLECTIONS);
}

const GROUP_PROPERTIES = ["name", "gameId", "allegianceFilter", "autoAdd", "membersCanAdd", "membersCanRemove", "autoRemove", "ownerPlayerId"];
const GROUP_COLLECTIONS = ["memberships"];
Model.Group = function(id, args) {
  this.id = id;
  Utils.copyProperties(this, args, GROUP_PROPERTIES);
  Utils.addEmptyLists(this, GROUP_COLLECTIONS);
}

const CHAT_ROOM_PROPERTIES = ["gameId", "name", "groupId", "withAdmins"];
const CHAT_ROOM_COLLECTIONS = ["messages", "requests"];
Model.ChatRoom = function(id, args) {
  this.id = id;
  Utils.copyProperties(this, args, CHAT_ROOM_PROPERTIES);
  Utils.addEmptyLists(this, CHAT_ROOM_COLLECTIONS);
}

const MAP_PROPERTIES = ["gameId", "name", "groupId"];
const MAP_COLLECTIONS = ["points"];
Model.Map = function(id, args) {
  this.id = id;
  Utils.copyProperties(this, args, MAP_PROPERTIES);
  Utils.addEmptyLists(this, MAP_COLLECTIONS);
}

const POINT_PROPERTIES = ["name", "color", "playerId", "latitude", "longitude"];
const POINT_COLLECTIONS = [];
Model.Point = function(id, args) {
  this.id = id;
  Utils.copyProperties(this, args, POINT_PROPERTIES);
  Utils.addEmptyLists(this, POINT_COLLECTIONS);
}

const GROUP_MEMBERSHIP_PROPERTIES = ["playerId"];
const GROUP_MEMBERSHIP_COLLECTIONS = [];
Model.GroupMembership = function(id, args) {
  this.id = id;
  Utils.copyProperties(this, args, GROUP_MEMBERSHIP_PROPERTIES);
  Utils.addEmptyLists(this, GROUP_MEMBERSHIP_COLLECTIONS);
}

const PLAYER_CHAT_ROOM_MEMBERSHIP_PROPERTIES = ["chatRoomId"];
const PLAYER_CHAT_ROOM_MEMBERSHIP_COLLECTIONS = [];
Model.PlayerChatRoomMembership = function(id, args) {
  this.id = id;
  Utils.copyProperties(this, args, PLAYER_CHAT_ROOM_MEMBERSHIP_PROPERTIES);
  Utils.addEmptyLists(this, PLAYER_CHAT_ROOM_MEMBERSHIP_COLLECTIONS);
}

const PLAYER_GROUP_MEMBERSHIP_PROPERTIES = ["groupId"];
const PLAYER_GROUP_MEMBERSHIP_COLLECTIONS = [];
Model.PlayerGroupMembership = function(id, args) {
  this.id = id;
  Utils.copyProperties(this, args, PLAYER_GROUP_MEMBERSHIP_PROPERTIES);
  Utils.addEmptyLists(this, PLAYER_GROUP_MEMBERSHIP_COLLECTIONS);
}

const MESSAGE_PROPERTIES = ["index", "message", "playerId", "time"];
const MESSAGE_COLLECTIONS = [];
Model.Message = function(id, args) {
  this.id = id;
  Utils.copyProperties(this, args, MESSAGE_PROPERTIES);
  Utils.addEmptyLists(this, MESSAGE_COLLECTIONS);
}

const REQUEST_PROPERTIES = ["playerId", "time", "text", "type"];
const REQUEST_COLLECTIONS = ["responses"];
Model.Request = function(id, args) {
  this.id = id;
  Utils.copyProperties(this, args, REQUEST_PROPERTIES);
  Utils.addEmptyLists(this, REQUEST_COLLECTIONS);
}

const RESPONSE_PROPERTIES = ["playerId", "time", "text"];
const RESPONSE_COLLECTIONS = [];
Model.Response = function(id, args) {
  this.id = id;
  Utils.copyProperties(this, args, RESPONSE_PROPERTIES);
  Utils.addEmptyLists(this, RESPONSE_COLLECTIONS);
}

const MISSION_PROPERTIES = ["gameId", "name", "begin", "end", "detailsHtml", "groupId"];
const MISSION_COLLECTIONS = [];
Model.Mission = function(id, args) {
  this.id = id;
  Utils.copyProperties(this, args, MISSION_PROPERTIES);
  Utils.addEmptyLists(this, MISSION_COLLECTIONS);
}

const ADMIN_PROPERTIES = ["userId"];
const ADMIN_COLLECTIONS = [];
Model.Admin = function(id, args) {
  this.id = id;
  Utils.copyProperties(this, args, ADMIN_PROPERTIES);
  Utils.addEmptyLists(this, ADMIN_COLLECTIONS);
}

const NOTIFICATION_CATEGORY_PROPERTIES = ["gameId", "name", "message", "previewMessage", "sendTime", "allegianceFilter", "email", "app", "sound", "vibrate", "destination", "icon"];
const NOTIFICATION_CATEGORY_COLLECTIONS = [];
Model.NotificationCategory = function(id, args) {
  this.id = id;
  Utils.copyProperties(this, args, NOTIFICATION_CATEGORY_PROPERTIES);
  Utils.addEmptyLists(this, NOTIFICATION_CATEGORY_COLLECTIONS);
}

const PLAYER_PROPERTIES = ["active", "userId", "number", "allegiance", "name", "points", "profileImageUrl", "gameId", "userId", "canInfect", "needGun", "startAsZombie", "wantsToBeSecretZombie", "gotEquipment", "notes"];
const PLAYER_COLLECTIONS = ["infections", "lives", "claims", "notifications", "chatRoomMemberships", "groupMemberships"];
const PLAYER_VOLUNTEER_PROPERTIES = ["advertising", "logistics", "communications", "moderator", "cleric", "sorcerer", "admin", "photographer", "chronicler", "mobile", "server", "client"];
const PLAYER_NOTIFICATION_SETTINGS_PROPERTIES = ["sound", "vibrate"];
Model.Player = function(id, args) {
  this.id = id;
  Utils.copyProperties(this, args, PLAYER_PROPERTIES);
  Utils.addEmptyLists(this, PLAYER_COLLECTIONS);
  this.volunteer = {};
  Utils.copyProperties(this.volunteer, args.volunteer, PLAYER_VOLUNTEER_PROPERTIES);
  this.notificationSettings = {};
  Utils.copyProperties(this.notificationSettings, args.notificationSettings, PLAYER_NOTIFICATION_SETTINGS_PROPERTIES);
}

const CLAIM_PROPERTIES = ["time", "rewardId", "rewardCategoryId"];
const CLAIM_COLLECTIONS = [];
Model.Claim = function(id, args) {
  this.id = id;
  Utils.copyProperties(this, args, CLAIM_PROPERTIES);
  Utils.addEmptyLists(this, CLAIM_COLLECTIONS);
}

const LIFE_PROPERTIES = ["time", "code"];
const LIFE_COLLECTIONS = [];
Model.Life = function(id, args) {
  this.id = id;
  Utils.copyProperties(this, args, LIFE_PROPERTIES);
  Utils.addEmptyLists(this, LIFE_COLLECTIONS);
}

const INFECTION_PROPERTIES = ["time", "infectorId"];
const INFECTION_COLLECTIONS = [];
Model.Infection = function(id, args) {
  this.id = id;
  Utils.copyProperties(this, args, INFECTION_PROPERTIES);
  Utils.addEmptyLists(this, INFECTION_COLLECTIONS);
}

const NOTIFICATION_PROPERTIES = ["message", "previewMessage", "notificationCategoryId", "seenTime", "sound", "vibrate", "app", "email", "destination"];
const NOTIFICATION_COLLECTIONS = [];
Model.Notification = function(id, args) {
  this.id = id;
  Utils.copyProperties(this, args, NOTIFICATION_PROPERTIES);
  Utils.addEmptyLists(this, NOTIFICATION_COLLECTIONS);
}

const REWARD_CATEGORY_PROPERTIES = ["name", "points", "seed", "claimed", "gameId", "limitPerPlayer"];
const REWARD_CATEGORY_COLLECTIONS = ["rewards"];
Model.RewardCategory = function(id, args) {
  this.id = id;
  Utils.copyProperties(this, args, REWARD_CATEGORY_PROPERTIES);
  Utils.addEmptyLists(this, REWARD_CATEGORY_COLLECTIONS);
}

const REWARD_PROPERTIES = ["playerId", "code"];
const REWARD_COLLECTIONS = [];
Model.Reward = function(id, args) {
  this.id = id;
  Utils.copyProperties(this, args, REWARD_PROPERTIES);
  Utils.addEmptyLists(this, REWARD_COLLECTIONS);
}

return Model;

})();
