// source: src/app/model/events.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

goog.exportSymbol('proto.Event', null, global);
goog.exportSymbol('proto.Event.EventCase', null, global);
goog.exportSymbol('proto.ServiceEvent', null, global);
goog.exportSymbol('proto.UserEvent', null, global);
goog.exportSymbol('proto.UserEvent.Type', null, global);
goog.exportSymbol('proto.WindowEvent', null, global);
goog.exportSymbol('proto.WindowEvent.Type', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Event = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.Event.oneofGroups_);
};
goog.inherits(proto.Event, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Event.displayName = 'proto.Event';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.UserEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.UserEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.UserEvent.displayName = 'proto.UserEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.WindowEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.WindowEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.WindowEvent.displayName = 'proto.WindowEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ServiceEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ServiceEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ServiceEvent.displayName = 'proto.ServiceEvent';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.Event.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.Event.EventCase = {
  EVENT_NOT_SET: 0,
  USER_EVENT: 1,
  WINDOW_EVENT: 2,
  SERVICE_EVENT: 3
};

/**
 * @return {proto.Event.EventCase}
 */
proto.Event.prototype.getEventCase = function() {
  return /** @type {proto.Event.EventCase} */(jspb.Message.computeOneofCase(this, proto.Event.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Event.prototype.toObject = function(opt_includeInstance) {
  return proto.Event.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Event} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Event.toObject = function(includeInstance, msg) {
  var f, obj = {
    userEvent: (f = msg.getUserEvent()) && proto.UserEvent.toObject(includeInstance, f),
    windowEvent: (f = msg.getWindowEvent()) && proto.WindowEvent.toObject(includeInstance, f),
    serviceEvent: (f = msg.getServiceEvent()) && proto.ServiceEvent.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Event}
 */
proto.Event.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Event;
  return proto.Event.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Event} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Event}
 */
proto.Event.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.UserEvent;
      reader.readMessage(value,proto.UserEvent.deserializeBinaryFromReader);
      msg.setUserEvent(value);
      break;
    case 2:
      var value = new proto.WindowEvent;
      reader.readMessage(value,proto.WindowEvent.deserializeBinaryFromReader);
      msg.setWindowEvent(value);
      break;
    case 3:
      var value = new proto.ServiceEvent;
      reader.readMessage(value,proto.ServiceEvent.deserializeBinaryFromReader);
      msg.setServiceEvent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Event.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Event.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Event} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Event.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserEvent();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.UserEvent.serializeBinaryToWriter
    );
  }
  f = message.getWindowEvent();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.WindowEvent.serializeBinaryToWriter
    );
  }
  f = message.getServiceEvent();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ServiceEvent.serializeBinaryToWriter
    );
  }
};


/**
 * optional UserEvent user_event = 1;
 * @return {?proto.UserEvent}
 */
proto.Event.prototype.getUserEvent = function() {
  return /** @type{?proto.UserEvent} */ (
    jspb.Message.getWrapperField(this, proto.UserEvent, 1));
};


/**
 * @param {?proto.UserEvent|undefined} value
 * @return {!proto.Event} returns this
*/
proto.Event.prototype.setUserEvent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Event} returns this
 */
proto.Event.prototype.clearUserEvent = function() {
  return this.setUserEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Event.prototype.hasUserEvent = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional WindowEvent window_event = 2;
 * @return {?proto.WindowEvent}
 */
proto.Event.prototype.getWindowEvent = function() {
  return /** @type{?proto.WindowEvent} */ (
    jspb.Message.getWrapperField(this, proto.WindowEvent, 2));
};


/**
 * @param {?proto.WindowEvent|undefined} value
 * @return {!proto.Event} returns this
*/
proto.Event.prototype.setWindowEvent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Event} returns this
 */
proto.Event.prototype.clearWindowEvent = function() {
  return this.setWindowEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Event.prototype.hasWindowEvent = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ServiceEvent service_event = 3;
 * @return {?proto.ServiceEvent}
 */
proto.Event.prototype.getServiceEvent = function() {
  return /** @type{?proto.ServiceEvent} */ (
    jspb.Message.getWrapperField(this, proto.ServiceEvent, 3));
};


/**
 * @param {?proto.ServiceEvent|undefined} value
 * @return {!proto.Event} returns this
*/
proto.Event.prototype.setServiceEvent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Event} returns this
 */
proto.Event.prototype.clearServiceEvent = function() {
  return this.setServiceEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Event.prototype.hasServiceEvent = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.UserEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.UserEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.UserEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UserEvent.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.UserEvent}
 */
proto.UserEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.UserEvent;
  return proto.UserEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.UserEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.UserEvent}
 */
proto.UserEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.UserEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.UserEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.UserEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UserEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.UserEvent.Type = {
  UNKNOWN: 0,
  MIC_TAP: 1,
  LANGUAGE_SELECTION: 2,
  SETTINGS_TAP: 3
};




if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.WindowEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.WindowEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.WindowEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.WindowEvent.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.WindowEvent}
 */
proto.WindowEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.WindowEvent;
  return proto.WindowEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.WindowEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.WindowEvent}
 */
proto.WindowEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.WindowEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.WindowEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.WindowEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.WindowEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.WindowEvent.Type = {
  UKNOWN: 0,
  LOST_FOCUS: 1
};




if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ServiceEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.ServiceEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ServiceEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ServiceEvent.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ServiceEvent}
 */
proto.ServiceEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ServiceEvent;
  return proto.ServiceEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ServiceEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ServiceEvent}
 */
proto.ServiceEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ServiceEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ServiceEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ServiceEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ServiceEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


goog.object.extend(exports, proto);
