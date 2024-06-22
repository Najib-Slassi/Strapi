'use strict';

/**
 * A set of functions called "actions" for `contact-us`
 */

module.exports = {
  contactUsSendEmail: async function sendEmail(ctx) {
    const { to, from, cc, bcc, replyTo, subject, text, html } = ctx.request.body;
  
    try {
      await strapi.plugins['email'].services.email.send({
        to: 'portageks@gmail.com',
        from: 'mednajib.slassi@gmail.com',
        cc,
        bcc,
        replyTo,
        subject,
        text,
        html,
      });
      ctx.send({
        message: 'Email sent successfully',
      });
    } catch (err) {
      ctx.throw(400, 'Failed to send email');
    }
  },
  // exampleAction: async (ctx, next) => {
  //   try {
  //     ctx.body = 'ok';
  //   } catch (err) {
  //     ctx.body = err;
  //   }
  // }
};
