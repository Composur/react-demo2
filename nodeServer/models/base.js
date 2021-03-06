/**
 * 1.处理日期格式
 * 
 */ 
const moment = require('moment');
require('moment/locale/zh-cn.js');

module.exports = function(schema) {
  schema.methods.create_at_ago = function() {
    return moment(this.create_at).toNow();
  };

  schema.methods.last_reply_at_ago = function() {
    return moment(this.last_reply_at).toNow();
  };

  /* eslint-disable no-multi-assign */
  schema.options.toObject = schema.options.toJSON = {
    transform(doc, ret) {
        // 生成一个id并且删除了_id和__v
      ret.id = ret._id;
      ret.create_at = moment(ret.create_at).format('YYYY-MM-DD HH:mm');
      ret.update_at = moment(ret.update_at).format('YYYY-MM-DD HH:mm');
      ret.id = ret._id;
      delete ret.__v;
      delete ret._id;
    }
  };
};
