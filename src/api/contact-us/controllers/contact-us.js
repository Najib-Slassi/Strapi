'use strict';

/**
 * A set of functions called "actions" for `contact-us`
 */

module.exports = {
  contactUsSendEmail: async function sendEmail(ctx) {
    const { to, from, cc, bcc, replyTo, subject, text, html } = ctx.request.body;
  
    try {
      console.log('ctx.request.body', ctx.request.body);
      await strapi.plugins['email'].services.email.send({
        to: `mednajib.slassi@gmail.com,${cc}`,
        from: 'mednajib.slassi@gmail.com',
        cc,
        bcc,
        replyTo,
        subject,
        text,
        html,
      });
      console.log('after plugin call');
      ctx.send({
        message: 'Email sent successfully',
      });
    } catch (err) {
      console.log('err', err.response.body.errors);
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
